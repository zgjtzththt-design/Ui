const fs = require('fs');
const content = `

// Refined Phone mold setup
document.addEventListener("DOMContentLoaded", () => {
  const moldBtn = document.getElementById("phone-mold-toggle-btn");
  const moldSwitch = document.getElementById("phone_mold_switch");
  const moldOverlay = document.getElementById("phone_mold_overlay");
  const islandCircle = document.getElementById("island_circle");
  const island2 = document.getElementById("island2");
  const island = document.getElementById("island");
  
  if (moldBtn && moldSwitch && moldOverlay) {
    const isMoldEnabled = localStorage.getItem("phone_mold_enabled") === "true";
    
    function toggleIslands(enabled) {
      if(enabled) {
         if(islandCircle) islandCircle.style.display = 'none';
         if(island2) island2.style.display = 'none';
         if(island) island.style.display = 'none';
      } else {
         if(islandCircle) islandCircle.style.display = '';
         if(island2) island2.style.display = '';
         if(island) island.style.display = '';
      }
    }

    if (isMoldEnabled) {
      moldSwitch.classList.add("active");
      moldOverlay.style.display = "block";
      toggleIslands(true);
    }

    moldBtn.addEventListener("click", () => {
      const isActive = moldSwitch.classList.toggle("active");
      if (isActive) {
        moldOverlay.style.display = "block";
        localStorage.setItem("phone_mold_enabled", "true");
        toggleIslands(true);
      } else {
        moldOverlay.style.display = "none";
        localStorage.setItem("phone_mold_enabled", "false");
        toggleIslands(false);
      }
    });
  }
});
`;
fs.appendFileSync('public/OriginOS_web/all.js', content);
