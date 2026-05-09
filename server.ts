import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);
const app = express();
const PORT = 3000;

app.use(express.json());

// API Route for Shell Commands
app.post("/api/shell", async (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.status(400).json({ error: "No command provided" });
  }

  // Security: Only allow specific commands or paths if needed
  // For this dev environment, we'll allow grep and basic ls
  const allowedCommands = ["grep", "ls", "pwd", "cat", "echo", "date", "whoami"];
  const cmdBase = command.trim().split(/\s+/)[0];

  if (!allowedCommands.includes(cmdBase)) {
    return res.json({ output: `Access Denied: Command '${cmdBase}' is not allowed for security reasons.` });
  }

  try {
    // Execute command relative to project root
    const { stdout, stderr } = await execPromise(command, { timeout: 5000 });
    res.json({ output: stdout || stderr || "Command executed with no output." });
  } catch (error: any) {
    res.json({ output: `Error: ${error.message}` });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
