const fs = require('fs');
const content = `

// Phone mold setup
document.addEventListener("DOMContentLoaded", () => {
  const moldBtn = document.getElementById("phone-mold-toggle-btn");
  const moldSwitch = document.getElementById("phone_mold_switch");
  const moldOverlay = document.getElementById("phone_mold_overlay");
  
  if (moldBtn && moldSwitch && moldOverlay) {
    const isMoldEnabled = localStorage.getItem("phone_mold_enabled") === "true";
    if (isMoldEnabled) {
      moldSwitch.classList.add("active");
      moldOverlay.style.display = "block";
    }

    moldBtn.addEventListener("click", () => {
      const isActive = moldSwitch.classList.toggle("active");
      if (isActive) {
        moldOverlay.style.display = "block";
        localStorage.setItem("phone_mold_enabled", "true");
      } else {
        moldOverlay.style.display = "none";
        localStorage.setItem("phone_mold_enabled", "false");
      }
    });
  }
});
`;
fs.appendFileSync('public/OriginOS_web/all.js', content);
