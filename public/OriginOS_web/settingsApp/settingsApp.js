let duration = 1.7 * currentSpeed;

const AboutInSetting = document.getElementById("about_setting");
const animationInSetting = document.getElementById("animation_setting");
const app4animation = document.getElementById("app4animation");
const khaysetting1_2 = document.getElementById("khaysetting1-2");
const credits = document.getElementById("app4credits");
const back7 = document.getElementById("back_to_setting7");

const back = document.getElementById("back_to_setting");
const back2 = document.getElementById("back_to_setting2");
const selectSpeed = document.querySelector(".select-speed-wrapper");

const app4 = document.getElementById("app4");
const app4main = document.getElementById("app4main");

const app4_theme = document.getElementById("app4theme");
const theme_option = document.getElementById("theme_setting");
const back3 = document.getElementById("back_to_setting3");

const wallpaper_btn = document.getElementById("wallpaper-btn");
const wallpaper_option = document.getElementById("app4wallpaper");
const back4 = document.getElementById("back_to_setting4");

const aod_option = document.getElementById("app4aod");
const aod_btn = document.getElementById("aod-btn");
const back5 = document.getElementById("back_to_setting5");

const live_wallpaper_btn = document.getElementById("live-wallpaper-btn");
const videoInput = document.getElementById("videoInput");
let selectedVideoFile = null;

const lock_btn = document.getElementById("lock-btn");
const back6 = document.getElementById("back_to_setting6");
target.innerText += " ga";
const lock_option = document.getElementById("app4lock");
const wallpaper_btn2 = document.querySelector(".wallpaper-btn-2");

const home_btn = document.getElementById("home-btn");
const app4_home = document.getElementById("app4home");
const back8 = document.getElementById("back_to_setting8");

const finger = document.getElementById("finger-btn");
const app4_finger = document.getElementById("app4finger");
const back9 = document.getElementById("back_to_setting9");

const vesion_setting = document.getElementById("khaysetting1-1");
const app4_vesion = document.getElementById("app4vesion");
const back10 = document.getElementById("back_to_setting10");

const language_btn = document.querySelector(".khaysetting5");
const app4audio = document.getElementById("app4audio");
const back11 = document.getElementById("back_to_setting11");

const icon_btn = document.getElementById("icon_btn");
const app4_icon = document.getElementById("app4icon");
const back12 = document.getElementById("back_to_setting12");

const lock_style_btn = document.getElementById("lock_style");
const app4_lock_style = document.getElementById("app4lockstyle");
const back13 = document.getElementById("back_to_setting13");

const display_setting_btn = document.getElementById("display_setting");
const app4display = document.getElementById("app4display");
const back_to_setting_display = document.getElementById("back_to_setting_display");
const phoneEdgeRadius = document.getElementById("phoneEdgeRadius");
const phoneEdgeRadiusVal = document.getElementById("phoneEdgeRadiusVal");
const phoneEdgeColor = document.getElementById("phoneEdgeColor");
const phoneBorderWidth = document.getElementById("phoneBorderWidth");
const phoneBorderWidthVal = document.getElementById("phoneBorderWidthVal");
const swipeBarWidth = document.getElementById("swipeBarWidth");
const swipeBarWidthVal = document.getElementById("swipeBarWidthVal");
const swipeBarHeight = document.getElementById("swipeBarHeight");
const swipeBarHeightVal = document.getElementById("swipeBarHeightVal");
const swipeBarColor = document.getElementById("swipeBarColor");
const swipeBarBottom = document.getElementById("swipeBarBottom");
const swipeBarBottomVal = document.getElementById("swipeBarBottomVal");
const swipeBarOpacity = document.getElementById("swipeBarOpacity");
const swipeBarOpacityVal = document.getElementById("swipeBarOpacityVal");
const swipeBarRadius = document.getElementById("swipeBarRadius");
const swipeBarRadiusVal = document.getElementById("swipeBarRadiusVal");
const swipeBarDisplayToggle = document.getElementById("swipeBarDisplayToggle");
const lockClockOpacity = document.getElementById("lockClockOpacity");
const lockClockOpacityVal = document.getElementById("lockClockOpacityVal");
const fullScreenToggle = document.getElementById("fullScreenToggle");

const crea_pass = document.querySelector(".container_crea_pass");
const box_pass1 = document.getElementById("box_pass1");
const box_pass2 = document.getElementById("box_pass2");
const pass_icon_btn = document.getElementById("icon_pass1");
const finger_icon_btn = document.getElementById("icon_pass2");
const back14 = document.getElementById("back_to_setting14");

const hideTimeouts_open_close = {};

function showPopup_open_close(target, mode = "flex", className = "open") {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  if (hideTimeouts_open_close[id]) {
    clearTimeout(hideTimeouts_open_close[id]);
    hideTimeouts_open_close[id] = null;
  }

  el.style.display = mode;

  requestAnimationFrame(() => {
    el.classList.remove("close");
    el.classList.add(className);
  });
}

target.innerText += "lax";

function hidePopup_open_close(target, mode = "none", className = "open") {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  el.classList.remove(className);

  hideTimeouts_open_close[id] = setTimeout(() => {
    el.style.display = mode;
    hideTimeouts_open_close[id] = null;
  }, currentSpeed700);
}

//about option
// Cloud Sync logic
const cloudSyncBtn = document.getElementById("cloud_sync_setting");
const cloudStatus = document.getElementById("cloud_status");

if (cloudSyncBtn) {
  cloudSyncBtn.addEventListener("click", async () => {
    if (!window.signInWithGoogle) {
      if (typeof tb_system === "function") tb_system("Firebase is initializing...");
      return;
    }

    try {
      if (!window.firebaseAuth.currentUser) {
        const user = await window.signInWithGoogle();
        if (user && cloudStatus) {
            cloudStatus.textContent = `Logged in as ${user.email}`;
            if (typeof tb_system === "function") tb_system("Logged in successfully");
            window.syncEverything();
        }
      } else {
        // Already logged in, trigger manual sync
        window.syncEverything();
        if (typeof tb_system === "function") tb_system("Syncing data...");
      }
    } catch (e) {
      console.error(e);
      if (typeof tb_system === "function") tb_system("Authentication failed");
    }
  });
}

// Update UI if already logged in
window.setInterval(() => {
    if (window.firebaseAuth && window.firebaseAuth.currentUser && cloudStatus) {
        if (!cloudStatus.textContent.includes(window.firebaseAuth.currentUser.email)) {
             cloudStatus.textContent = `Synced. Logged in as ${window.firebaseAuth.currentUser.email}`;
        }
    }
}, 5000);

AboutInSetting.addEventListener("click", () => {
  showPopup_open_close(app4);

  theme_option.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";

  vesion_setting.addEventListener("click", handleShowVersion);
  back10.addEventListener("click", handleHideVersion);

  khaysetting1_2.addEventListener("click", handleShowCredits);
  back7.addEventListener("click", handleHideCredits);
});
back.addEventListener("click", () => {
  hidePopup_open_close(app4);

  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";

  vesion_setting.removeEventListener("click", handleShowVersion);
  back10.removeEventListener("click", handleHideVersion);

  khaysetting1_2.removeEventListener("click", handleShowCredits);
  back7.removeEventListener("click", handleHideCredits);
});

function handleShowCredits() {
  showPopup_open_close(credits);
}
function handleHideCredits() {
  hidePopup_open_close(credits);
}
function handleShowVersion() {
  showPopup_open_close(app4_vesion);
}
function handleHideVersion() {
  hidePopup_open_close(app4_vesion);
}

const blurAppBtn = document.getElementById("blurApp");

//animation option
animationInSetting.addEventListener("click", () => {
  showPopup_open_close(app4animation);
  document.getElementById(
    "scaling-box"
  ).style.animation = `scaleUpDown ${duration}s ease-out infinite`;

  AboutInSetting.style.pointerEvents = "none";
  theme_option.style.pointerEvents = "none";

  blurAppBtn.addEventListener("click", handleBlurAppToggle);

  animation_more_btn.addEventListener("click", show_app4MoreAnimation);
  back15.addEventListener("click", hide_app4MoreAnimation);
});
back2.addEventListener("click", () => {
  hidePopup_open_close(app4animation);
  document.getElementById("scaling-box").style.animation = "none";

  AboutInSetting.style.pointerEvents = "auto";
  theme_option.style.pointerEvents = "auto";

  blurAppBtn.removeEventListener("click", handleBlurAppToggle);

  animation_more_btn.removeEventListener("click", show_app4MoreAnimation);
  back15.removeEventListener("click", hide_app4MoreAnimation);
});

lock_style_btn.addEventListener("click", () => {
  showPopup_open_close(app4_lock_style);

  theme_option.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  AboutInSetting.style.pointerEvents = "none";

  add_pass_events();
  addSettingsListeners_finger_pass();
});
back13.addEventListener("click", () => {
  hidePopup_open_close(app4_lock_style);

  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";
  AboutInSetting.style.pointerEvents = "auto";

  remove_pass_events();
  removeSettingsListeners_finger_pass();
});

display_setting_btn.addEventListener("click", () => {
  showPopup_open_close(app4display);
  theme_option.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  AboutInSetting.style.pointerEvents = "none";
  lock_style_btn.style.pointerEvents = "none";
});

back_to_setting_display.addEventListener("click", () => {
  hidePopup_open_close(app4display);
  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";
  AboutInSetting.style.pointerEvents = "auto";
  lock_style_btn.style.pointerEvents = "auto";
});

const fullScreenToggleNormal = document.getElementById("fullScreenToggleNormal");
const phoneScaleSlider = document.getElementById("phoneScaleSlider");
const phoneScaleSliderVal = document.getElementById("phoneScaleSliderVal");

if (phoneScaleSlider) {
  phoneScaleSlider.addEventListener("input", (e) => {
    const val = e.target.value;
    if (phoneScaleSliderVal) phoneScaleSliderVal.textContent = `${val}x`;
    document.documentElement.style.setProperty("--bg--scale_phone", val);
  });
}

const sharpPhoneTemplateToggle = document.getElementById("sharpPhoneTemplateToggle");
if (sharpPhoneTemplateToggle) {
  sharpPhoneTemplateToggle.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    localStorage.setItem("sharpPhoneTemplate", isChecked);
    applySharpPhoneTemplate(isChecked);
  });
}

function applySharpPhoneTemplate(isSharp) {
  const sharpSlider = document.getElementById("sharpPhoneSlider");
  if (sharpSlider) {
      sharpSlider.style.backgroundColor = isSharp ? "#ff4d4f" : "#555";
  }
  if (isSharp) {
    document.documentElement.style.setProperty("--bg--power_button_radius", "0px");
  } else {
    document.documentElement.style.setProperty("--bg--power_button_radius", "5px");
  }
}

phoneEdgeRadius.addEventListener("input", (e) => {
  const val = e.target.value;
  phoneEdgeRadiusVal.textContent = `${val}px`;
  document.documentElement.style.setProperty("--bg--border_radius_phone", `${val}px`);
  localStorage.setItem("phoneEdgeRadius", val);
});

if (phoneEdgeColor) {
  phoneEdgeColor.addEventListener("input", (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty("--bg--border_color_phone", val);
    localStorage.setItem("phoneEdgeColor", val);
    const preview = document.getElementById("phoneEdgeColorPreview");
    const hex = document.getElementById("phoneEdgeColorHex");
    if (preview) preview.style.background = val;
    if (hex) hex.textContent = val.toUpperCase();
  });
}

if (phoneBorderWidth) {
  phoneBorderWidth.addEventListener("input", (e) => {
    const val = e.target.value;
    if (phoneBorderWidthVal) phoneBorderWidthVal.textContent = `${val}px`;
    document.documentElement.style.setProperty("--bg--border_width_phone", `${val}px`);
    localStorage.setItem("phoneBorderWidth", val);
  });
}

if (swipeBarWidth) {
  swipeBarWidth.addEventListener("input", (e) => {
    const val = e.target.value;
    if (swipeBarWidthVal) swipeBarWidthVal.textContent = `${val}px`;
    document.documentElement.style.setProperty("--bg--swipe_width", `${val}px`);
    localStorage.setItem("swipeBarWidth", val);
  });
}

if (swipeBarHeight) {
  swipeBarHeight.addEventListener("input", (e) => {
    const val = e.target.value;
    if (swipeBarHeightVal) swipeBarHeightVal.textContent = `${val}px`;
    document.documentElement.style.setProperty("--bg--swipe_height", `${val}px`);
    localStorage.setItem("swipeBarHeight", val);
  });
}

if (swipeBarColor) {
  swipeBarColor.addEventListener("input", (e) => {
    const val = e.target.value;
    document.documentElement.style.setProperty("--bg--swipe_color", val);
    localStorage.setItem("swipeBarColor", val);
    const preview = document.getElementById("swipeBarColorPreview");
    const hex = document.getElementById("swipeBarColorHex");
    if (preview) preview.style.background = val;
    if (hex) hex.textContent = val.toUpperCase();
  });
}

if (swipeBarBottom) {
  swipeBarBottom.addEventListener("input", (e) => {
    const val = e.target.value;
    if (swipeBarBottomVal) swipeBarBottomVal.textContent = `${val}px`;
    document.documentElement.style.setProperty("--bg--swipe_bottom", `${val}px`);
    localStorage.setItem("swipeBarBottom", val);
  });
}

if (swipeBarOpacity) {
  swipeBarOpacity.addEventListener("input", (e) => {
    const val = e.target.value;
    if (swipeBarOpacityVal) swipeBarOpacityVal.textContent = val;
    document.documentElement.style.setProperty("--bg--swipe_opacity", val);
    localStorage.setItem("swipeBarOpacity", val);
  });
}

if (swipeBarRadius) {
  swipeBarRadius.addEventListener("input", (e) => {
    const val = e.target.value;
    if (swipeBarRadiusVal) swipeBarRadiusVal.textContent = `${val}px`;
    document.documentElement.style.setProperty("--bg--swipe_radius", `${val}px`);
    localStorage.setItem("swipeBarRadius", val);
  });
}

if (swipeBarDisplayToggle) {
  swipeBarDisplayToggle.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    document.documentElement.style.setProperty("--bg--swipe_display", isChecked ? "flex" : "none");
    localStorage.setItem("swipeBarDisplay", isChecked ? "flex" : "none");
  });
}

if (lockClockOpacity) {
  lockClockOpacity.addEventListener("input", (e) => {
    const val = e.target.value;
    if (lockClockOpacityVal) lockClockOpacityVal.textContent = val;
    document.documentElement.style.setProperty("--bg--lock_clock_opacity", val);
    localStorage.setItem("lockClockOpacity", val);
  });
}

function updateFullScreenUI(isFull) {
  if (isFull) {
    document.body.classList.add("full-screen");
    document.documentElement.style.setProperty("--bg--size_width_phone", "100vw");
    document.documentElement.style.setProperty("--bg--size_height_phone", "100vh");
    document.documentElement.style.setProperty("--bg--scale_phone", "1");
  } else {
    document.body.classList.remove("full-screen");
    // Restore default width/height as they aren't on display settings anymore
    document.documentElement.style.setProperty("--bg--size_width_phone", "330px");
    document.documentElement.style.setProperty("--bg--size_height_phone", "700px");

    // Restore values from active sliders in settings
    if (phoneEdgeRadius) {
        document.documentElement.style.setProperty("--bg--border_radius_phone", `${phoneEdgeRadius.value}px`);
    } else {
        document.documentElement.style.setProperty("--bg--border_radius_phone", "50px");
    }

    if (phoneScaleSlider) {
        document.documentElement.style.setProperty("--bg--scale_phone", phoneScaleSlider.value);
    } else {
        document.documentElement.style.setProperty("--bg--scale_phone", "0.8");
    }
  }
}

if (fullScreenToggle) {
  fullScreenToggle.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    if (isChecked && fullScreenToggleNormal) fullScreenToggleNormal.checked = false;
    updateFullScreenUI(isChecked);
    
    if (isChecked) {
      requestFullscreen();
    } else {
      if (!fullScreenToggleNormal?.checked) {
        exitFullscreen();
      }
    }
  });
}

if (fullScreenToggleNormal) {
  fullScreenToggleNormal.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    if (isChecked && fullScreenToggle) {
        fullScreenToggle.checked = false;
        updateFullScreenUI(false);
    }
    
    if (isChecked) {
      requestFullscreen();
    } else {
      if (!fullScreenToggle?.checked) {
          exitFullscreen();
      }
    }
  });
}

function requestFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

document.addEventListener("fullscreenchange", () => {
  const isFull = !!document.fullscreenElement;
  if (!isFull) {
    if (fullScreenToggle) fullScreenToggle.checked = false;
    if (fullScreenToggleNormal) fullScreenToggleNormal.checked = false;
    updateFullScreenUI(false);
  }
});

document.addEventListener("webkitfullscreenchange", () => {
  const isFull = !!document.webkitFullscreenElement;
  if (fullScreenToggle && fullScreenToggle.checked !== isFull) {
    fullScreenToggle.checked = isFull;
    updateFullScreenUI(isFull);
  }
});

document.addEventListener("msfullscreenchange", () => {
  const isFull = !!document.msFullscreenElement;
  if (fullScreenToggle && fullScreenToggle.checked !== isFull) {
    fullScreenToggle.checked = isFull;
    updateFullScreenUI(isFull);
  }
});

let time_unlock_finger = 100;
let finger_fast = 0;
let transparent_password = 0;

// --- Hàm xử lý sự kiện ---
function onFastFingerClick(event) {
  const btn = event.target;
  btn.classList.toggle("active");
  finger_fast = btn.classList.contains("active") ? 1 : 0;
  time_unlock_finger = finger_fast ? 0 : 100;
  localStorage.setItem("fast_finger", finger_fast);
}

function onTransparentPasswordClick(event) {
  const btn = event.target;
  btn.classList.toggle("active");
  transparent_password = btn.classList.contains("active") ? 1 : 0;
  localStorage.setItem("transparent_password", transparent_password);

  document.querySelectorAll(".key_password").forEach((el) => {
    el.style.background = transparent_password ? "#ffffff00" : "#ffffff50";
  });
}

// --- Thêm sự kiện ---
function addSettingsListeners_finger_pass() {
  document
    .getElementById("fast_finger")
    .addEventListener("click", onFastFingerClick);
  document
    .getElementById("transparent_password")
    .addEventListener("click", onTransparentPasswordClick);
}

// --- Gỡ sự kiện ---
function removeSettingsListeners_finger_pass() {
  document
    .getElementById("fast_finger")
    .removeEventListener("click", onFastFingerClick);
  document
    .getElementById("transparent_password")
    .removeEventListener("click", onTransparentPasswordClick);
}

// --- Phục hồi trạng thái từ localStorage ---
function restoreSettings_finger_pass() {
  finger_fast = parseInt(localStorage.getItem("fast_finger")) || 0;
  transparent_password =
    parseInt(localStorage.getItem("transparent_password")) || 0;

  const fastBtn = document.getElementById("fast_finger");
  const transBtn = document.getElementById("transparent_password");

  if (finger_fast) {
    fastBtn.classList.add("active");
    time_unlock_finger = 0;
  } else {
    fastBtn.classList.remove("active");
    time_unlock_finger = 100;
  }

  if (transparent_password) {
    transBtn.classList.add("active");
    document.querySelectorAll(".key_password").forEach((el) => {
      el.style.background = "#ffffff00";
    });
  } else {
    transBtn.classList.remove("active");
    document.querySelectorAll(".key_password").forEach((el) => {
      el.style.background = "#ffffff50";
    });
  }
}

language_btn.addEventListener("click", () => {
  showPopup_open_close(app4audio);

  AboutInSetting.style.pointerEvents = "none";
  theme_option.style.pointerEvents = "none";

  addSystemVolumeListeners();
});
back11.addEventListener("click", () => {
  hidePopup_open_close(app4audio);

  AboutInSetting.style.pointerEvents = "auto";
  theme_option.style.pointerEvents = "auto";
});

let volume_all_volume = 1;
let volume_click_volume = 0;
let volume_unlock_volume = 1;
let volume_charge_volume = 1;

const slider_volume = document.getElementById("volume_all_slider");
const toggle_click_volume = document.getElementById("toggle_click_volume");
const toggle_unlock_volume = document.getElementById("toggle_unlock_volume");
const toggle_charge_volume = document.getElementById("toggle_charge_volume");

function addSystemVolumeListeners() {
  slider_volume.addEventListener("input", onVolumeSliderInput);
  slider_volume.addEventListener("pointerup", onVolumeSliderRelease);
  toggle_click_volume.addEventListener("click", onClickToggle);
  toggle_unlock_volume.addEventListener("click", onUnlockToggle);
  toggle_charge_volume.addEventListener("click", onChargeToggle);
}

function removeSystemVolumeListeners() {
  slider_volume.removeEventListener("input", onVolumeSliderInput);
  slider_volume.removeEventListener("pointerup", onVolumeSliderRelease);
  toggle_click_volume.removeEventListener("click", onClickToggle);
  toggle_unlock_volume.removeEventListener("click", onUnlockToggle);
  toggle_charge_volume.removeEventListener("click", onChargeToggle);
}

function updateIndividualVolumes() {
  if (toggle_click_volume.classList.contains("active")) {
    volume_click_volume = (volume_all_volume * value_volume) / 100;
  }
  if (toggle_unlock_volume.classList.contains("active")) {
    volume_unlock_volume = (volume_all_volume * value_volume) / 100;
  }
  if (toggle_charge_volume.classList.contains("active")) {
    volume_charge_volume = (volume_all_volume * value_volume) / 100;
  }
}

function onVolumeSliderInput() {
  volume_all_volume = parseFloat(slider_volume.value);
  localStorage.setItem("volume_all_volume", volume_all_volume);
  updateIndividualVolumes();
}

function onVolumeSliderRelease() {
  playmusic(
    "https://cropgif.net/audio/1776965686907-f4ab76ce-4428-40c0-afb5-a6a3f6935865.ogg",
    volume_click_volume
  );
}

function onClickToggle() {
  const isActive = toggle_click_volume.classList.toggle("active");
  if (isActive) {
    volume_click_volume = volume_all_volume;
    playmusic(
      "https://cropgif.net/audio/1776965686907-f4ab76ce-4428-40c0-afb5-a6a3f6935865.ogg",
      volume_click_volume
    );
    phone.addEventListener("click", clickSound);
  } else {
    volume_click_volume = 0;
    phone.removeEventListener("click", clickSound);
  }
  localStorage.setItem("volume_click_volume", volume_click_volume);
  updateIndividualVolumes();
}

function onUnlockToggle() {
  const isActive = toggle_unlock_volume.classList.toggle("active");
  if (isActive) {
    volume_unlock_volume = volume_all_volume;
  } else {
    volume_unlock_volume = 0;
  }
  localStorage.setItem("volume_unlock_volume", volume_unlock_volume);
  updateIndividualVolumes();
}

function onChargeToggle() {
  const isActive = toggle_charge_volume.classList.toggle("active");
  if (isActive) {
    volume_charge_volume = volume_all_volume;
  } else {
    volume_charge_volume = 0;
  }
  localStorage.setItem("volume_charge_volume", volume_charge_volume);
  updateIndividualVolumes();
}

// Khôi phục trạng thái từ localStorage

function handleBoxPass1() {
  remove_pass_btn.style.display = "none";
  showPopup_open_close(crea_pass);
  if (pass_password == "") {
    stage_crea_pass = 1;
    document.getElementById("title_crea_pass").textContent =
      "Create new password";
  }
}

function handleBack14() {
  stage_crea_pass = 0;
  input_crea_pass = "";
  newPass_crea_pass = "";
  document.getElementById("title_crea_pass").textContent =
    pass_password === "" ? "Create new password" : "Enter old password";
  document.getElementById("error_crea_pass").textContent = "";
  updateDots_crea_pass();
  hidePopup_open_close(crea_pass);
  remove_pass_btn.style.display = "none";
}

function handleBoxPass2() {
  if (pass_password != "") {
    box_pass2.classList.toggle("off");
    status_pass2.textContent = box_pass2.classList.contains("off")
      ? "OFF"
      : "ON";

    finger_icon_btn.style.fill = box_pass2.classList.contains("off")
      ? "#000000"
      : "#ffffff";
    finger_biometrics = box_pass2.classList.contains("off") ? 0 : 1;
    localStorage.setItem("finger_saved", finger_biometrics.toString());
  } else tb_system("create password first");
}

function add_pass_events() {
  box_pass1.addEventListener("click", handleBoxPass1);
  back14.addEventListener("click", handleBack14);
  box_pass2.addEventListener("click", handleBoxPass2);
}

function remove_pass_events() {
  box_pass1.removeEventListener("click", handleBoxPass1);
  back14.removeEventListener("click", handleBack14);
  box_pass2.removeEventListener("click", handleBoxPass2);
}

if (saved_finger_local == 0) {
  box_pass2.classList.add("off");
  finger_icon_btn.style.fill = "#000000";
  status_pass2.textContent = box_pass2.classList.contains("off") ? "OFF" : "ON";
  finger_biometrics = box_pass2.classList.contains("off") ? 0 : 1;
}

document.addEventListener("DOMContentLoaded", () => {
    // Restore sharp phone template Setting
    const savedSharpPhoneTemplate = localStorage.getItem("sharpPhoneTemplate");
    if (savedSharpPhoneTemplate === "true" && typeof applySharpPhoneTemplate === 'function') {
        const sharpToggle = document.getElementById("sharpPhoneTemplateToggle");
        if (sharpToggle) sharpToggle.checked = true;
        applySharpPhoneTemplate(true);
    }

    // Restore display settings
    const savedEdgeRadius = localStorage.getItem("phoneEdgeRadius");
    if (savedEdgeRadius && phoneEdgeRadius) {
        phoneEdgeRadius.value = savedEdgeRadius;
        phoneEdgeRadiusVal.textContent = `${savedEdgeRadius}px`;
        document.documentElement.style.setProperty("--bg--border_radius_phone", `${savedEdgeRadius}px`);
    }

    const savedEdgeColor = localStorage.getItem("phoneEdgeColor");
    if (savedEdgeColor && phoneEdgeColor) {
        phoneEdgeColor.value = savedEdgeColor;
        document.documentElement.style.setProperty("--bg--border_color_phone", savedEdgeColor);
        const preview = document.getElementById("phoneEdgeColorPreview");
        const hex = document.getElementById("phoneEdgeColorHex");
        if (preview) preview.style.background = savedEdgeColor;
        if (hex) hex.textContent = savedEdgeColor.toUpperCase();
    }

    const savedBorderWidth = localStorage.getItem("phoneBorderWidth");
    if (savedBorderWidth && phoneBorderWidth) {
        phoneBorderWidth.value = savedBorderWidth;
        if (phoneBorderWidthVal) phoneBorderWidthVal.textContent = `${savedBorderWidth}px`;
        document.documentElement.style.setProperty("--bg--border_width_phone", `${savedBorderWidth}px`);
    }

    const savedSwipeWidth = localStorage.getItem("swipeBarWidth");
    if (savedSwipeWidth && swipeBarWidth) {
        swipeBarWidth.value = savedSwipeWidth;
        if (swipeBarWidthVal) swipeBarWidthVal.textContent = `${savedSwipeWidth}px`;
        document.documentElement.style.setProperty("--bg--swipe_width", `${savedSwipeWidth}px`);
    }

    const savedSwipeHeight = localStorage.getItem("swipeBarHeight");
    if (savedSwipeHeight && swipeBarHeight) {
        swipeBarHeight.value = savedSwipeHeight;
        if (swipeBarHeightVal) swipeBarHeightVal.textContent = `${savedSwipeHeight}px`;
        document.documentElement.style.setProperty("--bg--swipe_height", `${savedSwipeHeight}px`);
    }

    const savedSwipeColor = localStorage.getItem("swipeBarColor");
    if (savedSwipeColor && swipeBarColor) {
        swipeBarColor.value = savedSwipeColor;
        document.documentElement.style.setProperty("--bg--swipe_color", savedSwipeColor);
        const preview = document.getElementById("swipeBarColorPreview");
        const hex = document.getElementById("swipeBarColorHex");
        if (preview) preview.style.background = savedSwipeColor;
        if (hex) hex.textContent = savedSwipeColor.toUpperCase();
    }

    const savedSwipeBottom = localStorage.getItem("swipeBarBottom");
    if (savedSwipeBottom && swipeBarBottom) {
        swipeBarBottom.value = savedSwipeBottom;
        if (swipeBarBottomVal) swipeBarBottomVal.textContent = `${savedSwipeBottom}px`;
        document.documentElement.style.setProperty("--bg--swipe_bottom", `${savedSwipeBottom}px`);
    }

    const savedSwipeOpacity = localStorage.getItem("swipeBarOpacity");
    if (savedSwipeOpacity && swipeBarOpacity) {
        swipeBarOpacity.value = savedSwipeOpacity;
        if (swipeBarOpacityVal) swipeBarOpacityVal.textContent = savedSwipeOpacity;
        document.documentElement.style.setProperty("--bg--swipe_opacity", savedSwipeOpacity);
    }

    const savedSwipeRadius = localStorage.getItem("swipeBarRadius");
    if (savedSwipeRadius && swipeBarRadius) {
        swipeBarRadius.value = savedSwipeRadius;
        if (swipeBarRadiusVal) swipeBarRadiusVal.textContent = `${savedSwipeRadius}px`;
        document.documentElement.style.setProperty("--bg--swipe_radius", `${savedSwipeRadius}px`);
    }

    const savedSwipeDisplay = localStorage.getItem("swipeBarDisplay");
    if (savedSwipeDisplay && swipeBarDisplayToggle) {
        swipeBarDisplayToggle.checked = savedSwipeDisplay === "flex";
        document.documentElement.style.setProperty("--bg--swipe_display", savedSwipeDisplay);
    }

    const savedLockClockOpacity = localStorage.getItem("lockClockOpacity");
    if (savedLockClockOpacity && lockClockOpacity) {
        lockClockOpacity.value = savedLockClockOpacity;
        if (lockClockOpacityVal) lockClockOpacityVal.textContent = savedLockClockOpacity;
        document.documentElement.style.setProperty("--bg--lock_clock_opacity", savedLockClockOpacity);
    }

    // Notch settings restoration
    const notchWidth = document.getElementById("notchWidth");
    const notchWidthVal = document.getElementById("notchWidthVal");
    const notchHeight = document.getElementById("notchHeight");
    const notchHeightVal = document.getElementById("notchHeightVal");
    const notchRadius = document.getElementById("notchRadius");
    const notchRadiusVal = document.getElementById("notchRadiusVal");

    const savedNotchWidth = localStorage.getItem("notchWidth");
    if (savedNotchWidth && notchWidth) {
        notchWidth.value = savedNotchWidth;
        if (notchWidthVal) notchWidthVal.textContent = savedNotchWidth;
        document.documentElement.style.setProperty("--bg--notch-width", `${savedNotchWidth}px`);
    }

    const savedNotchHeight = localStorage.getItem("notchHeight");
    if (savedNotchHeight && notchHeight) {
        notchHeight.value = savedNotchHeight;
        if (notchHeightVal) notchHeightVal.textContent = savedNotchHeight;
        document.documentElement.style.setProperty("--bg--notch-height", `${savedNotchHeight}px`);
    }

    const savedNotchRadius = localStorage.getItem("notchRadius");
    if (savedNotchRadius && notchRadius) {
        notchRadius.value = savedNotchRadius;
        if (notchRadiusVal) notchRadiusVal.textContent = `${savedNotchRadius}px`;
        document.documentElement.style.setProperty("--bg--notch-radius", `${savedNotchRadius}px`);
    }
});

// Notch event listeners
document.addEventListener("DOMContentLoaded", () => {
    const notchWidth = document.getElementById("notchWidth");
    const notchWidthVal = document.getElementById("notchWidthVal");
    const notchHeight = document.getElementById("notchHeight");
    const notchHeightVal = document.getElementById("notchHeightVal");
    const notchRadius = document.getElementById("notchRadius");
    const notchRadiusVal = document.getElementById("notchRadiusVal");

    if (notchWidth) {
        notchWidth.addEventListener("input", (e) => {
            const val = e.target.value;
            document.documentElement.style.setProperty("--bg--notch-width", `${val}px`);
            if (notchWidthVal) notchWidthVal.textContent = `${val}px`;
            localStorage.setItem("notchWidth", val);
        });
    }

    if (notchHeight) {
        notchHeight.addEventListener("input", (e) => {
            const val = e.target.value;
            document.documentElement.style.setProperty("--bg--notch-height", `${val}px`);
            if (notchHeightVal) notchHeightVal.textContent = `${val}px`;
            localStorage.setItem("notchHeight", val);
        });
    }

    if (notchRadius) {
        notchRadius.addEventListener("input", (e) => {
            const val = e.target.value;
            document.documentElement.style.setProperty("--bg--notch-radius", `${val}px`);
            if (notchRadiusVal) notchRadiusVal.textContent = `${val}px`;
            localStorage.setItem("notchRadius", val);
        });
    }
});

let blur_app = 0;
let blurCustomOpeing = localStorage.getItem("blurAllApp") || 20;

function handleBlurAppToggle() {
  blurAppBtn.classList.toggle("active");
  blur_app = blurAppBtn.classList.contains("active") ? 1 : 0;

  if (blur_app) {
    lp.style.display = "flex";
    lp.style.filter = `blur(${blurCustomOpeing}px)`;
    localStorage.setItem("blur_App_saved", "1");
  } else {
    lp.style.filter = "blur(0px)";
    lp.style.display = "none";
    localStorage.removeItem("blur_App_saved");
  }
}

//theme option
theme_option.addEventListener("click", () => {
  showPopup_open_close(app4_theme);

  AboutInSetting.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  updateTime2();

  wallpaper_btn.addEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.addEventListener("click", handleOpenWallpaperPopup);
  back4.addEventListener("click", handleCloseWallpaperPopup);

  if (live_wallpaper_btn) {
    live_wallpaper_btn.addEventListener("click", () => {
      videoInput.click();
    });
  }

  const addLiveWallpaperBtn = document.getElementById("addLiveWallpaperBtn");
  if (addLiveWallpaperBtn) {
    addLiveWallpaperBtn.addEventListener("click", () => {
      videoInput.click();
    });
  }

  if (videoInput) {
    videoInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith("video/")) {
        selectedVideoFile = file;
        showWallpaperPopup("", null, true);
      }
    });
  }

  aod_btn.addEventListener("click", handleOpenAODOption);
  back5.addEventListener("click", handleCloseAODOption);

  lock_btn.addEventListener("click", handleShowLockOption);
  back6.addEventListener("click", handleHideLockOption);

  home_btn.addEventListener("click", showHomeApp);
  back8.addEventListener("click", hideHomeApp);

  finger.addEventListener("click", showFingerPopup);
  back9.addEventListener("click", hideFingerPopup);

  addEventListeners_aod_preview();
});
back3.addEventListener("click", () => {
  hidePopup_open_close("app4theme");

  AboutInSetting.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";

  wallpaper_btn.removeEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.removeEventListener("click", handleOpenWallpaperPopup);
  back4.removeEventListener("click", handleCloseWallpaperPopup);

  aod_btn.removeEventListener("click", handleOpenAODOption);
  back5.removeEventListener("click", handleCloseAODOption);

  lock_btn.removeEventListener("click", handleShowLockOption);
  back6.removeEventListener("click", handleHideLockOption);

  home_btn.removeEventListener("click", showHomeApp);
  back8.removeEventListener("click", hideHomeApp);

  finger.removeEventListener("click", showFingerPopup);
  back9.removeEventListener("click", hideFingerPopup);

  removeEventListeners_aod_preview();
});

function handleOpenWallpaperPopup() {
  showPopup_open_close(wallpaper_option);
  addWallpaperImageListeners();
}
function handleCloseWallpaperPopup() {
  hidePopup_open_close(wallpaper_option);
  removeWallpaperImageListeners();
}

const buttons = document.querySelectorAll(".img-button");
const wallpaper_preview = document.querySelector(".wallpaper-preview");
const wallpaper_preview2 = document.querySelector(".wallpaper-preview2");
const wallPaper2 = document.querySelector(".wallpaper2");
const addBtn = document.getElementById("addBtn");

const popup_overlay_wallpaper = document.getElementById(
  "popup_overlay_wallpaper"
);
const btn_set_home_wallpaper = document.getElementById(
  "btn_set_home_wallpaper"
);
const btn_set_lock_wallpaper = document.getElementById(
  "btn_set_lock_wallpaper"
);
const btn_set_both_wallpaper = document.getElementById(
  "btn_set_both_wallpaper"
);
const btn_cancel_wallpaper = document.getElementById("btn_cancel_wallpaper");

let selectedImageUrl = "";
let selectedButton = null;

function setLockWallpaper(imageUrl, btn) {
  lock_wallpaper = imageUrl;
  setData("lock_wallpaper", imageUrl);
  removeData("lock_video_wallpaper");
  const lockVideo = document.getElementById("lockVideoWallpaper");
  if (lockVideo) lockVideo.style.display = "none";

  wallPaper2.style.backgroundImage = `url('${imageUrl}')`;
  wallpaper_preview2.style.backgroundImage = `url('${imageUrl}')`;

  select_color_from_img(imageUrl);
}

function setHomeWallpaper(imageUrl, btn) {
  home_wallpaper = imageUrl;
  setData("home_wallpaper", home_wallpaper);
  removeData("home_video_wallpaper");
  const homeVideo = document.getElementById("homeVideoWallpaper");
  if (homeVideo) homeVideo.style.display = "none";

  // Đổi sang màu xanh lá
  document.documentElement.style.setProperty(
    "--bg--wallpaper",
    `url('${imageUrl}')`
  );
  wallpaper.style.backgroundImage = `url('${imageUrl}')`;
}

function setLockVideoWallpaper(file) {
  setData("lock_video_wallpaper", file);
  removeData("lock_wallpaper");
  const lockVideo = document.getElementById("lockVideoWallpaper");
  if (lockVideo) {
    const url = URL.createObjectURL(file);
    lockVideo.src = url;
    lockVideo.style.display = "block";
    lockVideo.play();
  }
  const wallPaper2 = document.querySelector(".wallpaper2");
  if (wallPaper2) wallPaper2.style.backgroundImage = "none";
  const wallpaper_preview2 = document.querySelector(".wallpaper-preview2");
  if (wallpaper_preview2) wallpaper_preview2.style.backgroundImage = "none";
}

function setHomeVideoWallpaper(file) {
  setData("home_video_wallpaper", file);
  removeData("home_wallpaper");
  const homeVideo = document.getElementById("homeVideoWallpaper");
  if (homeVideo) {
    const url = URL.createObjectURL(file);
    homeVideo.src = url;
    homeVideo.style.display = "block";
    homeVideo.play();
  }
  document.documentElement.style.setProperty("--bg--wallpaper", "none");
  const wallpaper = document.getElementById("wallpaper");
  if (wallpaper) wallpaper.style.backgroundImage = "none";
}

function setBothWallpapers(imageUrl) {
  setHomeWallpaper(imageUrl);
  setLockWallpaper(imageUrl);
  hideWallpaperPopup();
}

function showWallpaperPopup(imageUrl, button, isVideo = false) {
  selectedImageUrl = imageUrl;
  selectedButton = button;
  if (!isVideo) selectedVideoFile = null;
  showPopup_open_close(popup_overlay_wallpaper);
  showPopup_open_close("popup_wallpaperid", "block");
}

function hideWallpaperPopup() {
  hidePopup_open_close(popup_overlay_wallpaper);
  hidePopup_open_close("popup_wallpaperid");
  selectedImageUrl = "";
  selectedButton = null;
}

function setActive(btn) {
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  select_color_from_img(selectedImageUrl);
}

function handleImageButtonClick(e) {
  const img = e.currentTarget.getAttribute("data-img");
  showWallpaperPopup(img, e.currentTarget);
}

function handleAddButtonClick() {
  fileInput.value = "";
  fileInput.click();
}

function handleFileInputChange(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataUrl = e.target.result;
      addBtn.setAttribute("data-img", dataUrl);
      showWallpaperPopup(dataUrl, addBtn);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image.");
  }
}

// Popup button actions
btn_set_lock_wallpaper.addEventListener("click", () => {
  if (selectedVideoFile) {
    setLockVideoWallpaper(selectedVideoFile);
  } else {
    setLockWallpaper(selectedImageUrl, selectedButton);
  }
  hideWallpaperPopup();
});

btn_set_home_wallpaper.addEventListener("click", () => {
  if (selectedVideoFile) {
    setHomeVideoWallpaper(selectedVideoFile);
  } else {
    setHomeWallpaper(selectedImageUrl, selectedButton);
  }
  hideWallpaperPopup();
});

btn_set_both_wallpaper.addEventListener("click", () => {
  if (selectedVideoFile) {
    setLockVideoWallpaper(selectedVideoFile);
    setHomeVideoWallpaper(selectedVideoFile);
  } else {
    setLockWallpaper(selectedImageUrl, selectedButton);
    setHomeWallpaper(selectedImageUrl, selectedButton);
  }
  hideWallpaperPopup();
});

btn_cancel_wallpaper.addEventListener("click", () => {
  hideWallpaperPopup();
});

// Init listeners
function addWallpaperImageListeners() {
  buttons.forEach((btn) => {
    if (btn !== addBtn) {
      btn.addEventListener("click", handleImageButtonClick);
    }
  });

  addBtn.addEventListener("click", handleAddButtonClick);
  fileInput.addEventListener("change", handleFileInputChange);
}

function removeWallpaperImageListeners() {
  buttons.forEach((btn) => {
    if (btn !== addBtn) {
      btn.removeEventListener("click", handleImageButtonClick);
    }
  });

  addBtn.removeEventListener("click", handleAddButtonClick);
  fileInput.removeEventListener("change", handleFileInputChange);
}

// Tùy chọn: auto click ảnh đầu tiên
if (buttons[0]) {
  buttons[0].click();
}

function handleOpenAODOption() {
  showPopup_open_close(aod_option);
  addWallpaperSettingListeners();
}
function handleCloseAODOption() {
  hidePopup_open_close(aod_option);
  removeWallpaperSettingListeners();
}

let always_on_displays = 1;
let hide_wallpaper = 0;

function handleToggleAlwaysOnDisplays() {
  const el = document.getElementById("Alway-on-displays");
  el.classList.toggle("active");
  always_on_displays = el.classList.contains("active") ? 1 : 0;

  localStorage.setItem("always_on_displays_saved", always_on_displays);

  const hideWallEl = document.getElementById("setting-item-hide-wall");

  if (always_on_displays) {
    hideWallEl.style.filter = "brightness(1)";
    hideWallEl.style.pointerEvents = "auto";

    lockscreen_style_opacity = 1;
    hide_wallpaper = 0;

    wallpaper_lock_off_opacity = 1;
    wallpaper_lock_off_height = 50;
    wallpaper_lock_off_scale = 40;
    wallpaper_lock_off_borderRadius = 0;
    wallpaper_lock_off_transform = "translateY(0px)";

    lockclock_style_transform = "scale(0.75) translateY(250px)";
    dateText_style_transform = "translateY(160px) translateX(-50%) scale(0.95)";

    localStorage.removeItem("always_on_displays_saved");
    localStorage.removeItem("hide_wallpaper_saved");

    document.getElementById("wallpaper_aod2").classList.remove("hidden2");
  } else {
    hideWallEl.style.filter = "brightness(0.7)";
    hideWallEl.style.pointerEvents = "none";

    document.getElementById("Hide-wallPaper").classList.remove("active");
    hide_wallpaper = 1;
    lockscreen_style_opacity = 0;

    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.85) translateY(60px)";

    document.getElementById("wallpaper_aod2").classList.add("hidden2");
  }
}

function handleToggleHideWallpaper() {
  const el = document.getElementById("Hide-wallPaper");
  el.classList.toggle("active");
  hide_wallpaper = el.classList.contains("active") ? 1 : 0;

  localStorage.setItem("hide_wallpaper_saved", hide_wallpaper);

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.85) translateY(60px)";

    document.getElementById("wallpaper_aod2").classList.add("hidden2");
  } else {
    wallpaper_lock_off_opacity = 1;
    wallpaper_lock_off_height = 50;
    wallpaper_lock_off_scale = 40;
    wallpaper_lock_off_borderRadius = 0;
    wallpaper_lock_off_transform = "translateY(0px)";

    document.getElementById("wallpaper_aod2").classList.remove("hidden2");

    lockclock_style_transform = "scale(0.75) translateY(250px)";
    dateText_style_transform = "translateY(160px) translateX(-50%) scale(0.95)";

    localStorage.removeItem("hide_wallpaper_saved");
  }
}

let display_wallpaper_for_show_aod_img = "flex";
const wallpaper_aod2 = document.getElementById("wallpaper_aod2");

function addEventListeners_aod_preview() {
  document.querySelectorAll(".aod_preview_screen").forEach((div) => {
    div.addEventListener("click", handleAodPreviewClick);
  });

  document
    .getElementById("upload_aod_wallpaper")
    .addEventListener("change", handleUploadAodWallpaper);
}

function removeEventListeners_aod_preview() {
  document.querySelectorAll(".aod_preview_screen").forEach((div) => {
    div.removeEventListener("click", handleAodPreviewClick);
  });

  document
    .getElementById("upload_aod_wallpaper")
    .removeEventListener("change", handleUploadAodWallpaper);
}

function handleAodPreviewClick(event) {
  const div = event.currentTarget;

  if (hide_wallpaper || !always_on_displays) {
    tb_system("turn off Hide wallpaper fist");
    return;
  }

  current_wallpaper_lock = div.getAttribute("current_wallpaper_lock");

  if (div.id === "soon") {
    document.getElementById("upload_aod_wallpaper").click();
  }

  document.querySelectorAll(".aod_preview_screen").forEach((el) => {
    el.classList.remove("active");
  });
  div.classList.add("active");

  const display = div.getAttribute("display_wallpaper_aod2");
  const opacity = div.getAttribute("opacity") || "1";

  display_wallpaper_for_show_aod_img = opacity;
  localStorage.setItem("current_wallpaper_lock", current_wallpaper_lock);
  localStorage.setItem("wallpaper_aod2_display", display);
  localStorage.setItem("wallpaper_aod2_opacity", opacity);

  wallpaper_aod2.style.display = display;
  wallpaper_aod2.style.opacity = opacity;
}

function handleUploadAodWallpaper(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    const imageData = reader.result;

    const soonDiv = document.getElementById("soon");
    const display = soonDiv.getAttribute("display_wallpaper_aod2");
    const opacity = soonDiv.getAttribute("opacity");
    const currentWallpaper = soonDiv.getAttribute("current_wallpaper_lock");

    setData("wallpaper_aod2_image", imageData);
    localStorage.setItem("wallpaper_aod2_display", display);
    localStorage.setItem("wallpaper_aod2_opacity", opacity);
    localStorage.setItem("current_wallpaper_lock", currentWallpaper);

    wallpaper_aod2.style.backgroundImage = `url('${imageData}')`;
    wallpaper_aod2.style.display = display;
    wallpaper_aod2.style.opacity = opacity;

    display_wallpaper_for_show_aod_img = opacity;
    current_wallpaper_lock = currentWallpaper;

    document.querySelectorAll(".aod_preview_screen").forEach((el) => {
      el.classList.remove("active");
    });
    soonDiv.classList.add("active");
  };
  reader.readAsDataURL(file);
}

function addWallpaperSettingListeners() {
  document
    .getElementById("Alway-on-displays")
    .addEventListener("click", handleToggleAlwaysOnDisplays);
  document
    .getElementById("Hide-wallPaper")
    .addEventListener("click", handleToggleHideWallpaper);
}
function removeWallpaperSettingListeners() {
  document
    .getElementById("Alway-on-displays")
    .removeEventListener("click", handleToggleAlwaysOnDisplays);
  document
    .getElementById("Hide-wallPaper")
    .removeEventListener("click", handleToggleHideWallpaper);
}

//lock screen option
function handleShowLockOption() {
  showPopup_open_close(lock_option);

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", handleColorCircleClick);
  });
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  customColorBtn.addEventListener("click", handleCustomColorClick);
  colorPicker.addEventListener("input", handleColorPickerInput);
  sizeSlider.addEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").addEventListener("click", handleBtn1Click);
  document.getElementById("btn2").addEventListener("click", handleBtn2Click);

  button_decor.addEventListener("click", handleDecorClick);
  close_controls_locktext.addEventListener(
    "click",
    handleclose_controls_locktextClick
  );

  addeventlistener_color_circle2();
}
function handleHideLockOption() {
  hidePopup_open_close(lock_option);

  colorCircles.forEach((circle) => {
    circle.removeEventListener("click", handleColorCircleClick);
  });
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  customColorBtn.removeEventListener("click", handleCustomColorClick);
  colorPicker.removeEventListener("input", handleColorPickerInput);
  sizeSlider.removeEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").removeEventListener("click", handleBtn1Click);
  document.getElementById("btn2").removeEventListener("click", handleBtn2Click);

  button_decor.removeEventListener("click", handleDecorClick);
  close_controls_locktext.removeEventListener(
    "click",
    handleclose_controls_locktextClick
  );

  removeeventlistener_color_circle2();
}

const clock_preview = document.getElementById("clock_preview");
const colorCircles = document.querySelectorAll(".color-circle");
const customColorBtn = document.getElementById("customColor");
const colorPicker = document.getElementById("colorPicker");
const sizeSlider = document.getElementById("sizeSlider");
target.innerText += "yA";
const date_preview = document.getElementById("dateTextPreview");
const button_decor = document.getElementById("button_decor");

const controls_main = document.getElementById("controls_main");
const controls_date = document.getElementById("controls_date");
const controls_locktext = document.getElementById("controls_locktext");

const close_controls_main = document.getElementById("close_controls_main");
const close_controls_date = document.getElementById("close_controls_date");
const close_controls_locktext = document.getElementById(
  "close_controls_locktext"
);

const lock_preview = document.querySelector(".lock_preview");

function handleDecorClick() {
  controls_locktext.classList.add("open");
  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  lock_preview.style.transform =
    "translateX(-50%) scale(0.53) translateY(-160px)";
}
function handleclose_controls_locktextClick() {
  controls_locktext.classList.remove("open");
  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  if (
    !document.querySelector(".wallpaper2")?.classList.contains("hidden_overlay")
  )
    document.getElementById("controls_colorful_photos").classList.add("open");
}
date_preview.addEventListener("click", () => {
  controls_locktext.classList.remove("open");

  controls_date.classList.add("open");
  controls_main.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.9) translateY(90px)";
  clock_preview.classList.add("hidden");
  dateTextPreview.classList.remove("hidden");
});
close_controls_date.addEventListener("click", () => {
  controls_date.classList.remove("open");
  lock_preview.style.transform = "translateX(-50%) scale(0.7)";
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");
});

const lessMoreInput = document.getElementById("less_more_input");
const lessMoreEdit = document.getElementById("less_more_edit");

// Load từ localStorage hoặc mặc định
let custom_text_less_is_more =
  localStorage.getItem("custom_text_less_is_more") || "Less is more";

// Gán giá trị vào giao diện
lessMoreInput.value = custom_text_less_is_more;
document.getElementById("text_lock_cus").textContent = custom_text_less_is_more;
document.getElementById("text_lock_cus_2").textContent =
  custom_text_less_is_more;

// Bấm nút edit
lessMoreEdit.onclick = (e) => {
  e.stopPropagation();
  lessMoreInput.disabled = false;
  lessMoreInput.classList.add("editable");
  lessMoreInput.style.borderBottom = "6px solid gray";
  lessMoreInput.focus();
  // Đặt con trỏ ở cuối
  const len = lessMoreInput.value.length;
  lessMoreInput.setSelectionRange(len, len);
};

// Khi blur input
lessMoreInput.onblur = () => {
  lessMoreInput.disabled = true;
  lessMoreInput.classList.remove("editable");
  lessMoreInput.style.borderBottom = "none";

  // Nếu trống thì trả lại mặc định
  if (lessMoreInput.value.trim() === "") {
    lessMoreInput.value = "Less is more";
  }

  // Cập nhật preview và lưu
  custom_text_less_is_more = lessMoreInput.value;
  localStorage.setItem("custom_text_less_is_more", custom_text_less_is_more);
  document.getElementById("text_lock_cus").textContent =
    custom_text_less_is_more;
  document.getElementById("text_lock_cus_2").textContent =
    custom_text_less_is_more;
};

// Gõ tới đâu cập nhật tới đó
lessMoreInput.addEventListener("input", () => {
  if (lessMoreInput.value.length > 14) {
    lessMoreInput.value = lessMoreInput.value.slice(0, 14);
    tb_system("Maximum 14 characters!");
    lessMoreInput.style.borderBottom = "6px solid red";
  } else {
    lessMoreInput.style.borderBottom = "6px solid gray";
  }

  document.getElementById("text_lock_cus").textContent =
    custom_text_less_is_more;
  document.getElementById("text_lock_cus_2").textContent =
    custom_text_less_is_more;

  localStorage.setItem("custom_text_less_is_more", custom_text_less_is_more);
});

// Enter để blur
lessMoreInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    lessMoreInput.blur();
    lessMoreInput.style.borderBottom = "none";
  }
});

const optNone = document.getElementById("optNone");
const optText = document.getElementById("optText");
const textInput = document.getElementById("textInput");
const editBtn = document.getElementById("editBtn");

let saved = localStorage.getItem("custom_text_lock_screen") || "Text";
textInput.value = saved;

if (saved === "") optNone.classList.add("active");
else optText.classList.add("active");

function setActive_date(opt) {
  optNone.classList.remove("active");
  optText.classList.remove("active");
  opt.classList.add("active");
}

optNone.onclick = () => {
  setActive_date(optNone);
  custom_text_lock_screen = "";
  dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
  document.getElementById(
    "dateTextPreview"
  ).textContent = `${formatted} ${custom_text_lock_screen}`;
  if (!textInput.value.trim()) textInput.value = "Text";
  localStorage.setItem("custom_text_lock_screen", "");
};

optText.onclick = () => {
  setActive_date(optText);
  if (!textInput.value.trim()) textInput.value = "Text";

  custom_text_lock_screen = textInput.value;
  dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
  document.getElementById(
    "dateTextPreview"
  ).textContent = `${formatted} ${custom_text_lock_screen}`;
  localStorage.setItem("custom_text_lock_screen", textInput.value);
};

editBtn.onclick = (e) => {
  e.stopPropagation();
  setActive_date(optText);
  textInput.disabled = false;
  textInput.classList.add("editable");
  textInput.style.borderBottom = "6px solid gray";

  textInput.focus();
  textInput.setSelectionRange(textInput.value.length, textInput.value.length);
};

textInput.onblur = () => {
  textInput.disabled = true;
  textInput.classList.remove("editable");
  textInput.style.borderBottom = "none";

  if (optText.classList.contains("active")) {
    custom_text_lock_screen = textInput.value;
    dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
    document.getElementById(
      "dateTextPreview"
    ).textContent = `${formatted} ${custom_text_lock_screen}`;
    localStorage.setItem("custom_text_lock_screen", textInput.value);
  }
};

textInput.onkeydown = (e) => {
  if (e.key === "Enter") {
    if (!textInput.value.trim()) textInput.value = "Text";
    textInput.blur();

    dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
    document.getElementById(
      "dateTextPreview"
    ).textContent = `${formatted} ${custom_text_lock_screen}`;
  }
  custom_text_lock_screen = textInput.value;
};

textInput.addEventListener("input", () => {
  if (textInput.value.length > 14) {
    textInput.value = textInput.value.slice(0, 14);
    tb_system("Maximum 14 characters!");
    textInput.style.borderBottom = "6px solid red";
  } else {
    textInput.style.borderBottom = "6px solid gray";
  }

  custom_text_lock_screen = textInput.value;
  localStorage.setItem("custom_text_lock_screen", custom_text_lock_screen);
});

clock_preview.addEventListener("click", () => {
  controls_main.classList.add("open");

  controls_locktext.classList.remove("open");
  controls_date.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.9) translateY(90px)";
  dateTextPreview.classList.add("hidden");
  clock_preview.classList.remove("hidden");
});
close_controls_main.addEventListener("click", () => {
  controls_main.classList.remove("open");
  lock_preview.style.transform = "translateX(-50%) scale(0.7)";
  dateTextPreview.classList.remove("hidden");
  clock_preview.classList.remove("hidden");
});

const btnThin = document.getElementById("btn_main");
const btnBold = document.getElementById("btn_font");
const btnGlassClock = document.getElementById("btn_glass_clock");

btnThin.addEventListener("click", () => {
  clock_preview.style.fontWeight = "300";
  lockclock.style.fontWeight = "300";

  localStorage.setItem("font_weight_lock", "300");
});

btnBold.addEventListener("click", () => {
  clock_preview.style.fontWeight = "600";
  lockclock.style.fontWeight = "600";

  localStorage.setItem("font_weight_lock", "600");
});

btnGlassClock.addEventListener("click", () => {
  clock_preview.classList.toggle("glassy-clock");
  lockclock.classList.toggle("glassy-clock");
  
  if (clock_preview.classList.contains("glassy-clock")) {
    localStorage.setItem("clock_glass_saved", "1");
  } else {
    localStorage.removeItem("clock_glass_saved");
  }
});

document.querySelectorAll(".font-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const font = btn.getAttribute("data-font");
    const style = btn.getAttribute("data-style") || "default";
    const min = parseInt(btn.getAttribute("data-min")) || 40;
    const max = parseInt(btn.getAttribute("data-max")) || 150;

    clock_preview.style.fontFamily = font;
    lockclock.style.fontFamily = font;

    if (style === "hollow") {
      clock_preview.classList.add("hollow-style");
      lockclock.classList.add("hollow-style");
      localStorage.setItem("clock_style_saved", "hollow");
    } else {
      clock_preview.classList.remove("hollow-style");
      lockclock.classList.remove("hollow-style");
      localStorage.setItem("clock_style_saved", "default");
    }
    
    // Trigger update immediately
    if (typeof updateTime === "function") updateTime();
    if (typeof updateTime2 === "function") updateTime2();

    sizeSlider.min = min;
    sizeSlider.max = max;

    if (sizeSlider.value < min) sizeSlider.value = min;
    if (sizeSlider.value > max) sizeSlider.value = max;

    clock_preview.style.fontSize = `${sizeSlider.value}px`;
    lockclock.style.fontSize = `${sizeSlider.value}px`;
    localStorage.setItem("fontSize", sizeSlider.value);

    localStorage.setItem("font_lock_saved", font);
    localStorage.setItem("font_min_lock_saved", min);
    localStorage.setItem("font_max_lock_saved", max);
  });
});

let color_contrastColor_saved = localStorage.getItem(
  "color_contrastColor_saved"
);
let color_contrastColor = true;
if (!color_contrastColor_saved) color_contrastColor = false;

function handleColorCircleClick(e) {
  const color = e.currentTarget.getAttribute("data-color");
  if (color) {
    color_contrastColor = false;
    localStorage.setItem("color_contrastColor_saved", 0);

    clock_preview.style.color = color;
    lockclock.style.color = color;
    dateText.style.color = color;
    date_preview.style.color = color;
    localStorage.setItem("color_lock_saved", color);
  }
}

function handleCustomColorClick() {
  colorPicker.click();
}

function handleColorPickerInput() {
  const value = colorPicker.value;
  clock_preview.style.color = value;
  lockclock.style.color = value;
  dateText.style.color = value;
  date_preview.style.color = value;
}

function handleSizeSliderInput() {
  const size = sizeSlider.value;
  clock_preview.style.fontSize = `${size}px`;
  lockclock.style.fontSize = `${size}px`;

  localStorage.setItem("fontSize", size);
}

function triggerColorPicker_lockscreen() {
  document.getElementById("color_input_lockscreen").click();
}

function darkenColor_lockscreen(rgb, amount = 100) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  contrastColor = brightness > 120 ? "#141414" : "#ffffff";
  updateWallpaperBorderColor(getReadableColor(rgb), rgb);

  if (color_contrastColor) {
    if (
      !document
        .querySelector(".wallpaper2")
        ?.classList.contains("hidden_overlay")
    ) {
      clock_preview.style.color = contrastColor;
      lockclock.style.color = contrastColor;
      dateText.style.color = contrastColor;
      date_preview.style.color = contrastColor;
      localStorage.setItem("color_lock_saved", contrastColor);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    } else {
      clock_preview.style.color = contrastColor2;
      lockclock.style.color = contrastColor2;
      dateText.style.color = contrastColor2;
      date_preview.style.color = contrastColor2;
      localStorage.setItem("color_lock_saved", contrastColor2);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    }
  }

  return `rgb(${Math.max(r - amount, 0)}, ${Math.max(
    g - amount,
    0
  )}, ${Math.max(b - amount, 0)})`;
}
function getReadableColor(color) {
  let r, g, b;

  // Nếu là rgb() hoặc rgba()
  if (color.startsWith("rgb")) {
    const values = color.match(/\d+/g).map(Number);
    [r, g, b] = values;
  }

  // Nếu là hex (#rrggbb hoặc #rgb)
  else if (color.startsWith("#")) {
    color = color.slice(1);
    if (color.length === 3) {
      color = color
        .split("")
        .map((c) => c + c)
        .join(""); // #abc -> #aabbcc
    }
    const bigint = parseInt(color, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
  }

  // Nếu không hợp lệ
  else {
    console.warn("Unsupported color format:", color);
    return "#000"; // fallback
  }

  // Chuyển RGB → HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // Điều chỉnh để dễ đọc
  s *= 100;
  l *= 100;
  if (l < 50) {
    l = Math.min(100, l + 40);
    s = Math.max(20, s - 30);
  } else {
    l = Math.max(0, l - 40);
    s = Math.max(20, s - 30);
  }

  h = Math.round(h * 360);
  s = Math.round(s);
  l = Math.round(l);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

let contrastColor = "#ffffff";
let contrastColor2 = "#ffffff";
function select_color_from_img(url_img) {
  const img = new Image();
  // img.crossOrigin = "anonymous"; // Quan trọng nếu ảnh từ web khác
  img.src = url_img;

  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0,
      g = 0,
      b = 0,
      total = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      total++;
    }

    r = Math.round(r / total);
    g = Math.round(g / total);
    b = Math.round(b / total);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const darker = darkenColor_lockscreen(rgb, 100);
    phone_lock_background = `linear-gradient(to bottom, ${darker}, ${rgb})`;

    // Áp dụng nền
    lock_preview.style.background = phone_lock_background;
    phone.style.background = phone_lock_background;

    // 🔁 Tính màu chữ ngược lại (đen hoặc trắng)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    contrastColor = brightness > 120 ? "#131313" : "#ffffff";
    contrastColor2 = brightness > 120 ? "#131313" : "#ffffff";

    updateWallpaperBorderColor(getReadableColor(rgb), rgb);

    // Lưu
    localStorage.setItem("lockscreenColor", phone_lock_background);
  };
}

function updateWallpaperBorderColor(color, color_text) {
  const styleTagId = "wallpaper-style-dynamic";
  let styleTag = document.getElementById(styleTagId);

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  document.querySelectorAll(".text_lock").forEach((el) => {
    el.style.color = color_text;
  });
  document.querySelectorAll(".text_lock_2").forEach((el) => {
    el.style.color = color_text;
  });
  document.querySelectorAll(".img_lock_svg").forEach((el) => {
    el.style.fill = color_text;
  });

  styleTag.textContent = `
  .wallpaper::before,
  .wallpaper2::before {
    content: "";
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    height: calc(100% - 60px);
    width: calc(100% - ${wallpaper_border});
    border: ${wallpaper_border} solid ${color};
    border-bottom: 60px solid ${color};
    transition: none;
  }
`;
  localStorage.setItem("wallpaper_border_color", color_text);
}

function handleBtn1Click() {
  wallpaper_lock_height = 70;
  wallpaper_lock_scale = 80;
  wallpaper_lock_borderRadius = 15;
  wallpaper_lock_opacity = 1;
  wallpaper_lock_transform = "translateY(250px)";

  document.getElementById("btn1").style.border = "4px solid #f65268";
  document.getElementById("btn1").style.boxShadow =
    "0 0 10px rgba(246,82,104,0.5)";
  document.getElementById("btn2").style.border = "4px solid #ffffff";
  document.getElementById("btn2").style.boxShadow = "none";

  wallpaper2.style.height = `${wallpaper_lock_height}%`;
  wallpaper2.style.scale = `${wallpaper_lock_scale}%`;
  wallpaper2.style.borderRadius = wallpaper_lock_borderRadius == 50 ? 'var(--bg--border_radius_phone)' : `${wallpaper_lock_borderRadius}px`;
  wallpaper2.style.opacity = 1;
  wallpaper2.style.transform = wallpaper_lock_transform;

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;
  }

  wallPaper2.classList.remove("hidden_overlay");
  wallpaper.classList.remove("hidden_overlay");

  localStorage.setItem("btn1_2_saved", "1");

  document.getElementById("controls_colorful_photos").classList.add("open");

  if (color_contrastColor) {
    if (
      !document
        .querySelector(".wallpaper2")
        ?.classList.contains("hidden_overlay")
    ) {
      clock_preview.style.color = contrastColor;
      lockclock.style.color = contrastColor;
      dateText.style.color = contrastColor;
      date_preview.style.color = contrastColor;
      localStorage.setItem("color_lock_saved", contrastColor);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    } else {
      clock_preview.style.color = contrastColor2;
      lockclock.style.color = contrastColor2;
      dateText.style.color = contrastColor2;
      date_preview.style.color = contrastColor2;
      localStorage.setItem("color_lock_saved", contrastColor2);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    }
  }
}

function handleBtn2Click() {
  wallpaper_lock_height = 100;
  wallpaper_lock_scale = 100;
  wallpaper_lock_borderRadius = 50;
  wallpaper_lock_opacity = 1;
  wallpaper_lock_transform = "translateY(0px)";

  document.getElementById("btn2").style.border = "4px solid #f65268";
  document.getElementById("btn2").style.boxShadow =
    "0 0 10px rgba(246,82,104,0.5)";
  document.getElementById("btn1").style.border = "4px solid #ffffff";
  document.getElementById("btn1").style.boxShadow = "none";

  wallpaper2.style.height = `${wallpaper_lock_height}%`;
  wallpaper2.style.scale = `${wallpaper_lock_scale}%`;
  wallpaper2.style.borderRadius = wallpaper_lock_borderRadius == 50 ? 'var(--bg--border_radius_phone)' : `${wallpaper_lock_borderRadius}px`;
  wallpaper2.style.opacity = 1;
  wallpaper2.style.transform = wallpaper_lock_transform;

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;
  }

  wallPaper2.classList.add("hidden_overlay");
  wallpaper.classList.add("hidden_overlay");

  localStorage.setItem("btn1_2_saved", "0");

  document.getElementById("controls_colorful_photos").classList.remove("open");

  if (color_contrastColor) {
    if (
      !document
        .querySelector(".wallpaper2")
        ?.classList.contains("hidden_overlay")
    ) {
      clock_preview.style.color = contrastColor;
      lockclock.style.color = contrastColor;
      dateText.style.color = contrastColor;
      date_preview.style.color = contrastColor;
      localStorage.setItem("color_lock_saved", contrastColor);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    } else {
      clock_preview.style.color = contrastColor2;
      lockclock.style.color = contrastColor2;
      dateText.style.color = contrastColor2;
      date_preview.style.color = contrastColor2;
      localStorage.setItem("color_lock_saved", contrastColor2);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    }
  }
}

let wallpaper_border = "10px"; // mặc định

const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

document
  .getElementById("button_style_colotful_photos")
  .addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName.toLowerCase() === "button") {
      const size = target.getAttribute("data-border-size");
      if (size) {
        wallpaper_border = size + "px"; // Gán border

        // Lưu vào localStorage
        localStorage.setItem("wallpaper_border", wallpaper_border);

        // Tách màu cuối cùng từ phone_lock_background
        const matches = phone_lock_background.match(
          /rgb\((\d+), (\d+), (\d+)\)/g
        );
        if (!matches || matches.length === 0) return;

        const lastRGB = matches[matches.length - 1];
        localStorage.setItem("wallpaper_border_color", lastRGB); // Lưu màu

        updateWallpaperBorderColor(getReadableColor(lastRGB), lastRGB); // Gọi lại hàm

        applyLockscreenLayout(wallpaper_border); // Cập nhật layout
      }
    }
  });

function applyLockscreenLayout(borderSize) {
  const isZero = borderSize === "0px";

  if (isZero) {
    document.getElementById("s1_colotful_photos").classList.remove("active");
    document.getElementById("s2_colotful_photos").classList.add("active");
  } else {
    document.getElementById("s1_colotful_photos").classList.add("active");
    document.getElementById("s2_colotful_photos").classList.remove("active");
  }

  document.getElementById("text_lock_cus_2").style.bottom = isZero
    ? "63px"
    : "17px";
  document.getElementById("text_lock_cus_2").style.fontSize = isZero
    ? "34px"
    : "25px";
  document.getElementById("text_lock_cus").style.bottom = isZero
    ? "63px"
    : "17px";
  document.getElementById("text_lock_cus").style.fontSize = isZero
    ? "34px"
    : "25px";

  document.querySelectorAll(".img_lock_2").forEach((el) => {
    el.style.left = isZero ? "10px" : "";
    el.style.right = isZero ? "" : "10px";
  });

  document.querySelectorAll(".img_lock").forEach((el) => {
    el.style.left = isZero ? "10px" : "";
    el.style.right = isZero ? "" : "10px";
  });

  document.querySelectorAll(".img_lock_svg").forEach((el) => {
    el.style.width = el.style.height = isZero ? "46px" : "24px";
  });
}

function addeventlistener_color_circle2() {
  document.querySelectorAll(".color-circle2").forEach((el) => {
    el.addEventListener("click", handle_color_circle2);
  });
}

function removeeventlistener_color_circle2() {
  document.querySelectorAll(".color-circle2").forEach((el) => {
    el.removeEventListener("click", handle_color_circle2);
  });
}

function handle_color_circle2(e) {
  const el = e.currentTarget;
  const color = el.getAttribute("data-color");
  if (color) {
    updateWallpaperBorderColor(getReadableColor(color), color);

    const color_lockscreen = color;
    const colorBtn_lockscreen = document.getElementById("color_lockscreen");

    // Convert hex to computed rgb
    const temp_lockscreen = document.createElement("div");
    temp_lockscreen.style.color = color_lockscreen;
    document.body.appendChild(temp_lockscreen);
    const computedColor_lockscreen = getComputedStyle(temp_lockscreen).color;
    document.body.removeChild(temp_lockscreen);

    const darkerColor_lockscreen = darkenColor_lockscreen(
      computedColor_lockscreen,
      100
    );

    phone_lock_background = `linear-gradient(to bottom, ${darkerColor_lockscreen}, ${computedColor_lockscreen})`;

    lock_preview.style.background = phone_lock_background;
    phone.style.background = phone_lock_background;
    localStorage.setItem("lockscreenColor", phone_lock_background);
  } else {
    const wallpaperEl = document.querySelector(".wallpaper2");
    const bg = window.getComputedStyle(wallpaperEl).backgroundImage;
    const match = bg.match(/url\(["']?(.*?)["']?\)/);
    const imageUrl = match ? match[1] : null;
    select_color_from_img(imageUrl);
  }
}

target.innerText += "15";

function showHomeApp() {
  showPopup_open_close(app4_home);

  // Scale Icon
  buttons_size.forEach((button2) => {
    button2.addEventListener("click", handleScaleIcon);
  });

  // Dock Bar Toggle
  document
    .getElementById("dock-bar")
    .addEventListener("click", handleDockBarToggle);

  // Dock Glass Toggle
  document
    .getElementById("dock-glass")
    .addEventListener("click", handleDockGlassToggle);

  // Dark Mode Toggle
  document
    .getElementById("dark-mode")
    .addEventListener("click", handleDarkModeToggle);

  // Glassy Control Center Toggle
  const glassyCCToggle = document.getElementById("glassy-control-center-toggle");
  if (glassyCCToggle) {
    glassyCCToggle.addEventListener("click", handleGlassyControlCenterToggle);
    if (localStorage.getItem("glassy_control_center_saved") == 1) {
      glassyCCToggle.classList.add("active");
    }
  }

  icon_btn.addEventListener("click", showIconPopup);
  back12.addEventListener("click", hideIconPopup);

  borderRadiusSystemBtn.addEventListener("click", showBorderRadiusSystem);
  back_BorderRadiusSystem.addEventListener("click", hideBorderRadiusSystem);
}
function hideHomeApp() {
  hidePopup_open_close(app4_home);

  buttons_size.forEach((button2) => {
    button2.removeEventListener("click", handleScaleIcon);
  });

  document
    .getElementById("dock-bar")
    .removeEventListener("click", handleDockBarToggle);

  document
    .getElementById("dock-glass")
    .removeEventListener("click", handleDockGlassToggle);

  document
    .getElementById("dark-mode")
    .removeEventListener("click", handleDarkModeToggle);

  // Glassy Control Center Toggle
  const glassyCCToggle = document.getElementById("glassy-control-center-toggle");
  if (glassyCCToggle) {
    glassyCCToggle.removeEventListener("click", handleGlassyControlCenterToggle);
  }

  icon_btn.removeEventListener("click", showIconPopup);
  back12.removeEventListener("click", hideIconPopup);

  borderRadiusSystemBtn.removeEventListener("click", showBorderRadiusSystem);
  back_BorderRadiusSystem.removeEventListener("click", hideBorderRadiusSystem);
}

let scale_icon = 100; // Biến mặc định ban đầu là 120
let dock_bar = 1;
let dark_mode = 1;

const buttons_size = document.querySelectorAll(".scale-button");
const acctive_button_size = document.querySelector(
  '.scale-button[data-scale="120"]'
);

if (acctive_button_size) {
  acctive_button_size.classList.add("active");
}

function handleScaleIcon(e) {
  buttons_size.forEach((btn) => btn.classList.remove("active"));
  this.classList.add("active");

  scale_icon = parseInt(this.dataset.scale);
  localStorage.setItem("scale_icon_saved", scale_icon);

  for (let i = 1; i <= 11; i++) {
    boxes[`box${i}`].style.scale = `${scale_icon}%`;
  }
  if (currentOpeningBtn) currentOpeningBtn.style.scale = `100%`;
}

function handleDockBarToggle() {
  this.classList.toggle("active");
  dock_bar = this.classList.contains("active") ? 1 : 0;

  if (dock_bar) {
    document.querySelector(".khayapp").style.display = "";
    localStorage.removeItem("dock_bar_saved");
  } else {
    document.querySelector(".khayapp").style.display = "none";
    localStorage.setItem("dock_bar_saved", 1);
  }
}

function handleDockGlassToggle() {
  this.classList.toggle("active");
  const isGlass = this.classList.contains("active");
  const khayapp = document.querySelector(".khayapp");

  if (isGlass) {
    khayapp.classList.add("glassy");
    localStorage.setItem("dock_glass_saved", 1);
  } else {
    khayapp.classList.remove("glassy");
    localStorage.removeItem("dock_glass_saved");
  }
}

function handleGlassyControlCenterToggle() {
  this.classList.toggle("active");
  const isGlass = this.classList.contains("active");
  const controlCenter = document.querySelector(".control-centerControlsCenter");
  const lpControlCenter = document.querySelector(".lpControlCenterControlsCenter");

  if (isGlass) {
    if (controlCenter) controlCenter.classList.add("glassy-controls-center");
    if (lpControlCenter) lpControlCenter.classList.add("glassy-mode");
    localStorage.setItem("glassy_control_center_saved", 1);
  } else {
    if (controlCenter) controlCenter.classList.remove("glassy-controls-center");
    if (lpControlCenter) lpControlCenter.classList.remove("glassy-mode");
    localStorage.removeItem("glassy_control_center_saved");
  }
}

function handleDarkModeToggle() {
  this.classList.toggle("active");
  dark_mode = this.classList.contains("active") ? 1 : 0;

  localStorage.setItem("dark_mode_saved", dark_mode);
  if (dark_mode == 0) localStorage.removeItem("dark_mode_saved");

  set_dark_mode(dark_mode);
}

function set_dark_mode(mode) {
  if (mode) {
    document.documentElement.style.setProperty("--bg--background2", "#171719");
    document.documentElement.style.setProperty("--bg--background", "#000000");
    document.documentElement.style.setProperty("--bg--color", "#ffffff");

    document.querySelectorAll(".btn_calc").forEach((el) => {
      el.style.color = "#aba9ab";
      el.style.background = "#272627";
    });

    document.querySelectorAll(".equal_calc").forEach((el) => {
      el.style.color = "#ffeff6";
      el.style.background = "#f45e5a";
    });

    document.querySelectorAll(".orange_calc").forEach((el) => {
      el.style.color = "#e85f5c";
      el.style.background = "#341414";
    });

    document.querySelectorAll(".gray_calc").forEach((el) => {
      el.style.color = "#db5e61";
    });

    document.querySelectorAll(".lottie-box").forEach((el) => {
      el.style.background = "#171719";
    });
  } else {
    document.documentElement.style.setProperty("--bg--background2", "#ffffff");
    document.documentElement.style.setProperty("--bg--background", "#eaeaea");
    document.documentElement.style.setProperty("--bg--color", "#171719");

    document.querySelectorAll(".btn_calc").forEach((el) => {
      el.style.color = "#353535";
      el.style.background = "#f3f3f3";
    });

    document.querySelectorAll(".equal_calc").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#f0625d";
    });

    document.querySelectorAll(".orange_calc").forEach((el) => {
      el.style.color = "#de4315";
      el.style.background = "#fbc4ab";
    });

    document.querySelectorAll(".gray_calc").forEach((el) => {
      el.style.color = "#d84315";
    });

    document.querySelectorAll(".lottie-box").forEach((el) => {
      el.style.background = "#ffffff";
    });
  }
}

const borderRadiusSlider = document.getElementById("borderRadiusSystemSlider");

// Khi thay đổi slider
borderRadiusSlider.addEventListener("input", function () {
  document.documentElement.style.setProperty(
    "--bg--border_radius_system",
    `${this.value}px`
  );
  localStorage.setItem("borderRadiusSystem", this.value);
});

// Khởi tạo giá trị ban đầu từ slider
document.documentElement.style.setProperty(
  "--bg--border_radius_system",
  `${borderRadiusSlider.value}px`
);

function showFingerPopup() {
  showPopup_open_close(app4_finger);

  btnWhite.addEventListener("click", handleBtnWhiteClick);
  btnBlue.addEventListener("click", handleBtnBlueClick);

  addLottiePreviewEvents();
}
function hideFingerPopup() {
  hidePopup_open_close(app4_finger);

  btnWhite.removeEventListener("click", handleBtnWhiteClick);
  btnBlue.removeEventListener("click", handleBtnBlueClick);

  removeLottiePreviewEvents();
}

const fingerprint_preview = document.getElementById("fingerprint_preview");
const btnWhite = document.getElementById("btn-white");
const btnBlue = document.getElementById("btn-blue");

fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
btnWhite.style.border = "4px solid #f65268";

function handleBtnWhiteClick() {
  fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
  fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
  btnWhite.classList.add("active");
  btnBlue.classList.remove("active");
  btnBlue.style.border = "4px solid rgb(225, 225, 225)";
  btnWhite.style.border = "4px solid #f65268";
  footerText.style.color = "rgb(255, 255, 255)";
  localStorage.setItem("btn_finger_saved", "btnWhite");
}

function handleBtnBlueClick() {
  fingerprint_preview.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  fingerprint.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  btnWhite.style.border = "4px solid rgb(225, 225, 225)";
  btnBlue.style.border = "4px solid #f65268";
  footerText.style.color = "#6cd0ff";
  localStorage.setItem("btn_finger_saved", "btnBlue");
}

let lottieBoxes = [];

// Hàm đổi animation chính (không autoplay)
function changeLottieAnimation(newPath, newSpeed = 1) {
  if (animation) animation.destroy(); // Xóa animation cũ

  animation = lottie.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: newPath,
  });

  animation.setSpeed(newSpeed);

  // ✅ Lưu vào localStorage
  localStorage.setItem("selectedLottiePath", newPath);
  localStorage.setItem("selectedLottieSpeed", newSpeed);

  animation.addEventListener("DOMLoaded", () => {
    animation.goToAndStop(animation.totalFrames, true); // Dừng tại frame cuối
  });
}

function addLottiePreviewEvents() {
  const lottieBoxes = Array.from(document.querySelectorAll(".lottie-box"));

  lottieBoxes.forEach((box) => {
    const player = box.querySelector("lottie-player");
    const speed = parseFloat(box.getAttribute("data-speed")) || 1;

    player.setAttribute("loop", "true");

    const onReady = () => {
      player.setSpeed(speed);
      player.play();
    };

    if (player.shadowRoot?.querySelector("svg")) {
      onReady();
    } else {
      player.addEventListener("ready", onReady, { once: true });
    }

    box.addEventListener(
      "click",
      (box._clickHandler = () => {
        lottieBoxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
        const path = box.getAttribute("data-path");
        changeLottieAnimation(path, speed); // 👈 truyền path và speed vào
      })
    );
  });
}

// Tự động khởi động khi trang sẵn sàng

window.showIconPopup = function showIconPopup(boxNum) {
  // If boxNum is a string or number, it's called from a long press on an app icon
  if ((typeof boxNum === "string" || typeof boxNum === "number") && boxNum !== "") {
    const boxId = `box${boxNum}`;
    const customIconPopup = document.getElementById("customIconPopup");
    const customIconPopupCard = document.getElementById("customIconPopupCard");
    const iconFileInput = document.getElementById("iconFileInput");

    // Clear previous input
    iconFileInput.value = "";

    customIconPopup.style.display = "flex";
    // Slight delay to allow CSS to apply display flex before transitioning
    setTimeout(() => {
        customIconPopup.classList.add("show_alert");
        if (customIconPopupCard) {
            customIconPopupCard.style.transform = "scale(1)";
            customIconPopupCard.style.opacity = "1";
        }
    }, 10);

    window.closeCustomIconPopup = function() {
        customIconPopup.classList.remove("show_alert");
        if (customIconPopupCard) {
            customIconPopupCard.style.transform = "scale(0.9)";
            customIconPopupCard.style.opacity = "0";
        }
        setTimeout(() => {
            customIconPopup.style.display = "none";
        }, 300); // Wait for transition
    };

    // Handle File selection
    iconFileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target.result;
                
                // Save to localStorage
                const savedIcons = JSON.parse(localStorage.getItem("custom_icons") || "{}");
                savedIcons[boxId] = base64;
                localStorage.setItem("custom_icons", JSON.stringify(savedIcons));
                
                // Apply immediately
                if (typeof window.restoreIconPack === "function") {
                    window.restoreIconPack();
                } else if (typeof applyCustomIcons === "function") {
                    applyCustomIcons();
                }
                
                if (window.closeCustomIconPopup) window.closeCustomIconPopup();
                if (typeof tb_system === "function") tb_system("تم تغيير الأيقونة بنجاح");
            };
            reader.readAsDataURL(file);
        }
    };
    
    const btnResetIcon = document.getElementById("btn_reset_icon");
    if (btnResetIcon) {
        btnResetIcon.onclick = () => {
             const savedIcons = JSON.parse(localStorage.getItem("custom_icons") || "{}");
             delete savedIcons[boxId];
             localStorage.setItem("custom_icons", JSON.stringify(savedIcons));
             if (typeof window.restoreIconPack === "function") {
                 window.restoreIconPack();
             } else if (typeof applyCustomIcons === "function") {
                 applyCustomIcons();
             }
             if (window.closeCustomIconPopup) window.closeCustomIconPopup();
             if (typeof tb_system === "function") tb_system("تم الاستعادة بنجاح");
        };
    }

  } else {
    showPopup_open_close(app4_icon);
  }
};
function hideIconPopup() {
  hidePopup_open_close(app4_icon);
}

const borderRadiusSystemBtn = document.getElementById("borderRadiusSystemBtn");
const app4BorderRadiusSystem = document.getElementById(
  "app4BorderRadiusSystem"
);
const back_BorderRadiusSystem = document.getElementById(
  "back_BorderRadiusSystem"
);

function showBorderRadiusSystem() {
  showPopup_open_close(app4BorderRadiusSystem);
}
function hideBorderRadiusSystem() {
  hidePopup_open_close(app4BorderRadiusSystem);
}

// ==-- ICON PACK FUNCTIONS WITH LOCALSTORAGE --==

function icon_originos() {
  localStorage.setItem("selected_icon_pack", "originos");
  updateIconBorder("originos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "105%");

  setIconAndBackgroundGradient("box1", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879769/epi1zelgc7psfftbiolu.png");
  setIconAndBackgroundGradient("box2", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879798/pzbkxijj1fndyljflsyo.png");
  setIconAndBackgroundGradient("box3", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879893/ofqsd17zxv2lovn7gkzw.png");
  setIconAndBackgroundGradient("box4", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879959/scmhkapwddr2ec1qxyj9.png");
  setIconAndBackgroundGradient("box5", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880033/kyjzfzvvpcluqxskwai0.png");
  setIconAndBackgroundGradient("box6", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880068/n7au3djcmnr0zmb9u4un.png");
  setIconAndBackgroundGradient("box7", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880129/q9hmesxieiqaacrtwxw8.png");
  setIconAndBackgroundGradient("box8", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880178/ulmb11gfmhkfahxfqnrb.png");
  setIconAndBackgroundGradient("box9", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776881062/gw2qnq06r2a0ffurbqba.png");
  setIconAndBackgroundGradient("box10", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776881228/lp1xh3qqb6bnd23r0wcc.png");
  setIconAndBackgroundGradient("box12", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776881265/toeld2nea85tifvh0gti.png");
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_hyperos() {
  localStorage.setItem("selected_icon_pack", "hyperos");
  updateIconBorder("hyperos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "115%");

  setIconAndBackgroundGradient2(
    "box1",
    "originos_data/iconPacks/hype_icon/system_calculator.png"
  );
  setIconAndBackgroundGradient2(
    "box2",
    "originos_data/iconPacks/hype_icon/system_filemanager.png"
  );
  setIconAndBackgroundGradient2(
    "box3",
    "originos_data/iconPacks/hype_icon/system_music.png"
  );
  setIconAndBackgroundGradient2(
    "box4",
    "originos_data/iconPacks/hype_icon/system_settings.png"
  );
  setIconAndBackgroundGradient2(
    "box5",
    "originos_data/iconPacks/hype_icon/system_messages.png"
  );
  setIconAndBackgroundGradient2(
    "box6",
    "originos_data/iconPacks/hype_icon/system_photos.png"
  );
  setIconAndBackgroundGradient2(
    "box7",
    "originos_data/iconPacks/hype_icon/system_calendar.png"
  );
  setIconAndBackgroundGradient2(
    "box8",
    "originos_data/iconPacks/hype_icon/system_dialer.png"
  );
  setIconAndBackgroundGradient2(
    "box9",
    "originos_data/iconPacks/hype_icon/system_clock.png"
  );
  setIconAndBackgroundGradient2(
    "box10",
    "originos_data/iconPacks/hype_icon/system_compass.png"
  );
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_hyperos3() {
  localStorage.setItem("selected_icon_pack", "hyperos3");
  updateIconBorder("hyperos3_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient("box1", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879769/epi1zelgc7psfftbiolu.png");
  setIconAndBackgroundGradient("box2", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879798/pzbkxijj1fndyljflsyo.png");
  setIconAndBackgroundGradient("box3", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879893/ofqsd17zxv2lovn7gkzw.png");
  setIconAndBackgroundGradient("box4", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776879959/scmhkapwddr2ec1qxyj9.png");
  setIconAndBackgroundGradient("box5", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880033/kyjzfzvvpcluqxskwai0.png");
  setIconAndBackgroundGradient("box6", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880068/n7au3djcmnr0zmb9u4un.png");
  setIconAndBackgroundGradient("box7", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880129/q9hmesxieiqaacrtwxw8.png");
  setIconAndBackgroundGradient("box8", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776880178/ulmb11gfmhkfahxfqnrb.png");
  setIconAndBackgroundGradient("box9", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776881062/gw2qnq06r2a0ffurbqba.png");
  setIconAndBackgroundGradient("box10", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776881228/lp1xh3qqb6bnd23r0wcc.png");
  setIconAndBackgroundGradient("box12", "https://res.cloudinary.com/dhlxcif1m/image/upload/v1776881265/toeld2nea85tifvh0gti.png");
  
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_ios(e) {
  localStorage.setItem("selected_icon_pack", "ios");
  updateIconBorder("ios_icon");
  document.documentElement.style.setProperty("--bg-size_img", "115%");

  setIconAndBackgroundGradient(
    "box1",
    "originos_data/iconPacks/i_icon/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "originos_data/iconPacks/i_icon/files.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "originos_data/iconPacks/i_icon/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "originos_data/iconPacks/i_icon/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "originos_data/iconPacks/i_icon/messages.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "originos_data/iconPacks/i_icon/gallery.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "originos_data/iconPacks/i_icon/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "originos_data/iconPacks/i_icon/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "originos_data/iconPacks/i_icon/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "originos_data/iconPacks/i_icon/compass.png"
  );
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_coloros() {
  localStorage.setItem("selected_icon_pack", "coloros");
  updateIconBorder("coloros_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(
    "box1",
    "originos_data/iconPacks/o_icon/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "originos_data/iconPacks/o_icon/files.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "originos_data/iconPacks/o_icon/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "originos_data/iconPacks/o_icon/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "originos_data/iconPacks/o_icon/messages.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "originos_data/iconPacks/o_icon/gallery.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "originos_data/iconPacks/o_icon/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "originos_data/iconPacks/o_icon/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "originos_data/iconPacks/o_icon/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "originos_data/iconPacks/o_icon/compass.png"
  );
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

const preview = document.getElementById("preview_icon");

function icon_oneui() {
  localStorage.setItem("selected_icon_pack", "oneui");
  updateIconBorder("oneui_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  box1.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/calculator.png")`
  );
  box1.style.background = "#00000000";

  box2.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/files.png")`
  );
  box2.style.background = "#00000000";

  box3.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/music.png")`
  );
  box3.style.background = "#00000000";

  box4.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/settings.png")`
  );
  box4.style.background = "#00000000";

  box5.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/messages.png")`
  );
  box5.style.background = "#00000000";

  box6.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/gallery.png")`
  );
  box6.style.background = "#00000000";

  box7.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/calendar.png")`
  );
  box7.style.background = "#00000000";

  box8.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/oui_icon/phone.png")`
  );
  box8.style.background = "#00000000";

  setIconAndBackgroundGradient(
    "box9",
    "originos_data/iconPacks/oui_icon/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "originos_data/iconPacks/oui_icon/compass.png"
  );

  slider.value = 23;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = true;
}
function icon_harmonyos() {
  localStorage.setItem("selected_icon_pack", "harmonyos");
  updateIconBorder("harmonyos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "110%");

  setIconAndBackgroundGradient(
    "box1",
    "originos_data/iconPacks/harmonyos_icon/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "originos_data/iconPacks/harmonyos_icon/files.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "originos_data/iconPacks/harmonyos_icon/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "originos_data/iconPacks/harmonyos_icon/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "originos_data/iconPacks/harmonyos_icon/messages.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "originos_data/iconPacks/harmonyos_icon/gallery.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "originos_data/iconPacks/harmonyos_icon/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "originos_data/iconPacks/harmonyos_icon/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "originos_data/iconPacks/harmonyos_icon/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "originos_data/iconPacks/harmonyos_icon/compass.png"
  );
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_ios26_light1() {
  localStorage.setItem("selected_icon_pack", "i26Light1");
  updateIconBorder("i26Light1");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(
    "box1",
    "originos_data/iconPacks/i26Light1/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "originos_data/iconPacks/i26Light1/files.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "originos_data/iconPacks/i26Light1/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "originos_data/iconPacks/i26Light1/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "originos_data/iconPacks/i26Light1/messages.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "originos_data/iconPacks/i26Light1/gallery.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "originos_data/iconPacks/i26Light1/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "originos_data/iconPacks/i26Light1/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "originos_data/iconPacks/i26Light1/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "originos_data/iconPacks/i26Light1/compass.png"
  );
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_ios26_light2() {
  localStorage.setItem("selected_icon_pack", "i26Light2");
  updateIconBorder("i26Light2");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  box1.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/calculator.png")`
  );
  box1.style.background = "#00000000";

  box2.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/files.png")`
  );
  box2.style.background = "#00000000";

  box3.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/music.png")`
  );
  box3.style.background = "#00000000";

  box4.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/settings.png")`
  );
  box4.style.background = "#00000000";

  box5.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/messages.png")`
  );
  box5.style.background = "#00000000";

  box6.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/gallery.png")`
  );
  box6.style.background = "#00000000";

  box7.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/calendar.png")`
  );
  box7.style.background = "#00000000";

  box8.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/phone.png")`
  );
  box8.style.background = "#00000000";

  box9.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/clock.png")`
  );
  box9.style.background = "#ffffff50";

  box10.style.setProperty(
    "--bg--originos",
    `url("originos_data/iconPacks/i26Light2/compass.png")`
  );
  box10.style.background = "#ffffff50";
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}
function icon_pixel() {
  localStorage.setItem("selected_icon_pack", "pixel");
  updateIconBorder("pix_icon");
  document.documentElement.style.setProperty("--bg-size_img", "110%");

  setIconAndBackgroundGradient(
    "box1",
    "originos_data/iconPacks/pix_icon/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "originos_data/iconPacks/pix_icon/files.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "originos_data/iconPacks/pix_icon/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "originos_data/iconPacks/pix_icon/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "originos_data/iconPacks/pix_icon/messages.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "originos_data/iconPacks/pix_icon/gallery.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "originos_data/iconPacks/pix_icon/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "originos_data/iconPacks/pix_icon/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "originos_data/iconPacks/pix_icon/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "originos_data/iconPacks/pix_icon/compass.png"
  );
  slider.value = 40;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = true;
}

function icon_nothing() {
  localStorage.setItem("selected_icon_pack", "nothing");
  updateIconBorder("nothing_icon");
  document.documentElement.style.setProperty("--bg-size_img", "110%");

  setIconAndBackgroundGradient(
    "box1",
    "originos_data/iconPacks/nothing_icon/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "originos_data/iconPacks/nothing_icon/files.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "originos_data/iconPacks/nothing_icon/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "originos_data/iconPacks/nothing_icon/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "originos_data/iconPacks/nothing_icon/messages.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "originos_data/iconPacks/nothing_icon/gallery.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "originos_data/iconPacks/nothing_icon/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "originos_data/iconPacks/nothing_icon/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "originos_data/iconPacks/nothing_icon/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "originos_data/iconPacks/nothing_icon/compass.png"
  );
  slider.value = 40;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = true;
}

function icon_minimalos() {
  localStorage.setItem("selected_icon_pack", "minimalos");
  updateIconBorder("minimalos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(
    "box1",
    "https://img.icons8.com/ios-filled/256/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "https://img.icons8.com/ios-filled/256/folder-invoices.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "https://img.icons8.com/ios-filled/256/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "https://img.icons8.com/ios-filled/256/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "https://img.icons8.com/ios-filled/256/speech-bubble.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "https://img.icons8.com/ios-filled/256/stack-of-photos.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "https://img.icons8.com/ios-filled/256/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "https://img.icons8.com/ios-filled/256/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "https://img.icons8.com/ios-filled/256/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "https://img.icons8.com/ios-filled/256/compass.png"
  );
  slider.value = 40;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_neonos() {
  localStorage.setItem("selected_icon_pack", "neonos");
  updateIconBorder("neonos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(
    "box1",
    "https://img.icons8.com/neon/256/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "https://img.icons8.com/neon/256/folder-invoices.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "https://img.icons8.com/neon/256/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "https://img.icons8.com/neon/256/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "https://img.icons8.com/neon/256/speech-bubble.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "https://img.icons8.com/neon/256/stack-of-photos.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "https://img.icons8.com/neon/256/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "https://img.icons8.com/neon/256/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "https://img.icons8.com/neon/256/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "https://img.icons8.com/neon/256/compass.png"
  );
  slider.value = 40;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_3dos() {
  localStorage.setItem("selected_icon_pack", "3dos");
  updateIconBorder("3dos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(
    "box1",
    "https://img.icons8.com/3d-fluency/256/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "https://img.icons8.com/3d-fluency/256/folder-invoices.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "https://img.icons8.com/3d-fluency/256/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "https://img.icons8.com/3d-fluency/256/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "https://img.icons8.com/3d-fluency/256/speech-bubble.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "https://img.icons8.com/3d-fluency/256/stack-of-photos.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "https://img.icons8.com/3d-fluency/256/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "https://img.icons8.com/3d-fluency/256/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "https://img.icons8.com/3d-fluency/256/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "https://img.icons8.com/3d-fluency/256/compass.png"
  );
  slider.value = 40;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_glassos() {
  localStorage.setItem("selected_icon_pack", "glassos");
  updateIconBorder("glassos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(
    "box1",
    "https://img.icons8.com/glassmorphism/256/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "https://img.icons8.com/glassmorphism/256/folder-invoices.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "https://img.icons8.com/glassmorphism/256/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "https://img.icons8.com/glassmorphism/256/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "https://img.icons8.com/glassmorphism/256/speech-bubble.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "https://img.icons8.com/glassmorphism/256/stack-of-photos.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "https://img.icons8.com/glassmorphism/256/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "https://img.icons8.com/glassmorphism/256/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "https://img.icons8.com/glassmorphism/256/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "https://img.icons8.com/glassmorphism/256/compass.png"
  );
  slider.value = 40;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

function icon_custom() {
  localStorage.setItem("selected_icon_pack", "custom");
  updateIconBorder("custom_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");
}

function icon_flymeos() {
  localStorage.setItem("selected_icon_pack", "flymeos");
  updateIconBorder("flymeos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(
    "box1",
    "https://img.icons8.com/fluency/256/calculator.png"
  );
  setIconAndBackgroundGradient(
    "box2",
    "https://img.icons8.com/fluency/256/folder-invoices.png"
  );
  setIconAndBackgroundGradient(
    "box3",
    "https://img.icons8.com/fluency/256/music.png"
  );
  setIconAndBackgroundGradient(
    "box4",
    "https://img.icons8.com/fluency/256/settings.png"
  );
  setIconAndBackgroundGradient(
    "box5",
    "https://img.icons8.com/fluency/256/speech-bubble.png"
  );
  setIconAndBackgroundGradient(
    "box6",
    "https://img.icons8.com/fluency/256/stack-of-photos.png"
  );
  setIconAndBackgroundGradient(
    "box7",
    "https://img.icons8.com/fluency/256/calendar.png"
  );
  setIconAndBackgroundGradient(
    "box8",
    "https://img.icons8.com/fluency/256/phone.png"
  );
  setIconAndBackgroundGradient(
    "box9",
    "https://img.icons8.com/fluency/256/clock.png"
  );
  setIconAndBackgroundGradient(
    "box10",
    "https://img.icons8.com/fluency/256/compass.png"
  );
  slider.value = 40;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  slider.disabled = false;
}

// -- Shared helper to update border --
function updateIconBorder(activeId) {
  document.querySelectorAll(".box_icon").forEach((el) => {
    el.style.border = "4px solid transparent";
  });
  const active = document.getElementById(activeId);
  if (active) active.style.border = "4px solid #f65268";
}

let pack = localStorage.getItem("selected_icon_pack");
// -- Restore icon pack when loading --
function restoreIconPack() {
  pack = localStorage.getItem("selected_icon_pack");
  if (pack === "originos") icon_originos();
  else if (pack === "hyperos") icon_hyperos();
  else if (pack === "hyperos3") icon_hyperos3();
  else if (pack === "ios") icon_ios();
  else if (pack === "coloros") icon_coloros();
  else if (pack === "oneui") icon_oneui();
  else if (pack === "harmonyos") icon_harmonyos();
  else if (pack === "i26Light2") icon_ios26_light2();
  else if (pack === "i26Light1") icon_ios26_light1();
  else if (pack === "pixel") icon_pixel();
  else if (pack === "nothing") icon_nothing();
  else if (pack === "glassos") icon_glassos();
  else if (pack === "neonos") icon_neonos();
  else if (pack === "3dos") icon_3dos();
  else if (pack === "minimalos") icon_minimalos();
  else if (pack === "custom") applyCustomIcons();
  else if (pack === "flymeos") icon_flymeos();
  else icon_originos();
}

const root = document.documentElement;
const slider = document.getElementById("radius_slider");

let value;

slider.addEventListener("pointerdown", () => {
  pack = localStorage.getItem("selected_icon_pack");
  if (pack === "oneui" || pack === "pixel" || pack === "nothing") {
    tb_system(`Can't change the roundness of this icon pack`);
    return;
  }
});
slider.addEventListener("input", () => {
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
});

function setIconAndBackgroundGradient2(boxSelector, imageUrl) {
  const savedIcons = JSON.parse(localStorage.getItem("custom_icons") || "{}");
  if (savedIcons[boxSelector]) {
      imageUrl = savedIcons[boxSelector];
  }

  const box = document.getElementById(boxSelector);
  if (!box) return;

  // Gán icon vào CSS biến
  box.style.setProperty("--bg--originos", `url("${imageUrl}")`);

  const img = new Image();
  // img.crossOrigin = "anonymous"; // CORS: bắt buộc nếu ảnh từ CDN, GitHub...
  img.src = imageUrl;

  img.onload = () => {
    const w = img.width;
    const h = img.height;

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });
    ctx.drawImage(img, 0, 0);

    const middleY = Math.floor(h / 2);
    const leftX = Math.min(8, w - 1);
    const rightX = Math.max(w - 8, 0);

    try {
      const leftColorData = ctx.getImageData(leftX, middleY, 1, 1).data;
      const rightColorData = ctx.getImageData(rightX, middleY, 1, 1).data;

      const leftColor = `rgb(${leftColorData[0]}, ${leftColorData[1]}, ${leftColorData[2]})`;
      const rightColor = `rgb(${rightColorData[0]}, ${rightColorData[1]}, ${rightColorData[2]})`;

      box.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    } catch (e) {
      console.warn("getImageData error:", e);
      box.style.background = "#eaeaea"; // fallback
    }
  };
}

function setIconAndBackgroundGradient(boxSelector, imageUrl) {
  const savedIcons = JSON.parse(localStorage.getItem("custom_icons") || "{}");
  if (savedIcons[boxSelector]) {
      imageUrl = savedIcons[boxSelector];
  }

  const box = document.getElementById(boxSelector);
  if (!box) return;

  // Set icon background
  box.style.setProperty("--bg--originos", `url("${imageUrl}")`);

  const img = new Image();
  img.crossOrigin = "anonymous"; // important for CORS
  img.src = imageUrl;

  img.onload = () => {
    const w = img.width;
    const h = img.height;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });
    ctx.drawImage(img, 0, 0);

    const centerX = Math.floor(w / 2);
    const topY = Math.min(8, h - 1);
    const bottomY = Math.max(h - 9, 0);

    try {
      const top = ctx.getImageData(centerX, topY, 1, 1).data;
      const bottom = ctx.getImageData(centerX, bottomY, 1, 1).data;

      const topColor = `rgb(${top[0]}, ${top[1]}, ${top[2]})`;
      const bottomColor = `rgb(${bottom[0]}, ${bottom[1]}, ${bottom[2]})`;

      box.style.background = `linear-gradient(to bottom, ${topColor}, ${bottomColor})`;
    } catch (e) {
      console.warn("Could not extract image data:", e);
      box.style.background = "#eaeaea"; // fallback
    }
  };
}

function removeAllUIEventListeners() {
  // Gỡ popup version
  vesion_setting.removeEventListener("click", showPopup_open_close(credits));
  back10.removeEventListener("click", handleHideVersion);

  khaysetting1_2.removeEventListener("click", handleShowCredits);
  back7.removeEventListener("click", handleHideCredits);

  wallpaper_btn.removeEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.removeEventListener("click", handleOpenWallpaperPopup);
  back4.removeEventListener("click", handleCloseWallpaperPopup);

  aod_btn.removeEventListener("click", handleOpenAODOption);
  back5.removeEventListener("click", handleCloseAODOption);

  lock_btn.removeEventListener("click", handleShowLockOption);
  back6.removeEventListener("click", handleHideLockOption);

  home_btn.removeEventListener("click", showHomeApp);
  back8.removeEventListener("click", hideHomeApp);

  finger.removeEventListener("click", showFingerPopup);
  back9.removeEventListener("click", hideFingerPopup);

  icon_btn.removeEventListener("click", showIconPopup);
  back12.removeEventListener("click", hideIconPopup);

  animation_more_btn.removeEventListener("click", show_app4MoreAnimation);
  back15.removeEventListener("click", hide_app4MoreAnimation);

  anim_unlock_btn.removeEventListener("click", show_app4UnlockAnimation);
  back16.removeEventListener("click", hide_app4UnlockAnimation);

  anim_open_app_btn.removeEventListener("click", show_app4AppOpeningAnimation);
  back17.removeEventListener("click", hide_app4AppOpeningAnimation);

  anim_close_app_btn.removeEventListener("click", show_app4AppClosingAnimation);
  back18.removeEventListener("click", hide_app4AppClosingAnimation);

  ControlsCenterAnimBtn.removeEventListener(
    "click",
    show_app4ControlsCenterAnim
  );
  back19.removeEventListener("click", hide_app4ControlsCenterAnim);
  document
    .getElementById("item_anim_controlsCenter_Anim2")
    .removeEventListener("click", preivewAnimationControlsCenter);
  document
    .getElementById("item_anim_controlsCenter_Anim1")
    .removeEventListener("click", preivewAnimationControlsCenter);

  document
    .getElementById("parallelAnimationToggle")
    .removeEventListener("click", handleParallelAnimationToggle);
  document
    .getElementById("multipleClickAppToggle")
    .removeEventListener("click", handlemultipleClickAppToggle);

  timeAnimationUnlock.removeEventListener("input", timeAnimationUnlockEvent);
  easingAnimationUnlock.removeEventListener(
    "input",
    easingAnimationUnlockEvent
  );

  removeEventCustomOpening();
  removeEventCustomSclosing();

  remove_pass_events();
  removeEventListeners_aod_preview();

  borderRadiusSystemBtn.removeEventListener("click", showBorderRadiusSystem);
  back_BorderRadiusSystem.removeEventListener("click", hideBorderRadiusSystem);
}

const animation_more_btn = document.getElementById("animation_more_btn");
const app4_more_animation = document.getElementById("app4MoreAnimation");
const back15 = document.getElementById("back_to_setting_MoreAnimation");

function show_app4MoreAnimation() {
  showPopup_open_close(app4_more_animation);

  anim_unlock_btn.addEventListener("click", show_app4UnlockAnimation);
  back16.addEventListener("click", hide_app4UnlockAnimation);

  anim_open_app_btn.addEventListener("click", show_app4AppOpeningAnimation);
  back17.addEventListener("click", hide_app4AppOpeningAnimation);

  anim_close_app_btn.addEventListener("click", show_app4AppClosingAnimation);
  back18.addEventListener("click", hide_app4AppClosingAnimation);

  ControlsCenterAnimBtn.addEventListener("click", show_app4ControlsCenterAnim);
  back19.addEventListener("click", hide_app4ControlsCenterAnim);
}
function hide_app4MoreAnimation() {
  hidePopup_open_close(app4_more_animation);

  anim_unlock_btn.removeEventListener("click", show_app4UnlockAnimation);
  back16.removeEventListener("click", hide_app4UnlockAnimation);

  anim_open_app_btn.removeEventListener("click", show_app4AppOpeningAnimation);
  back17.removeEventListener("click", hide_app4AppOpeningAnimation);

  anim_close_app_btn.removeEventListener("click", show_app4AppClosingAnimation);
  back18.removeEventListener("click", hide_app4AppClosingAnimation);

  ControlsCenterAnimBtn.removeEventListener(
    "click",
    show_app4ControlsCenterAnim
  );
  back19.removeEventListener("click", hide_app4ControlsCenterAnim);
}

document.getElementById("uploadFileTXT").addEventListener("click", () => {
  document.getElementById("uploadConfig").click();
});
const allowedKeys = [
  "time_allTmp",
  "valScaleApp",
  "valScaleWallpaper",
  "cubic_ratioParam",
  "cubic_allParam",
  "timeHidingIconAppTmp",
  "delayHidingIconAppTmp",
  "valTimeTransform",
  "valDampingTransform",
  "timeScale",
  "valDampingScale",
  "valEasing",
  "timeShowingIconAppTmp",
  "delayShowingIconAppTmp",
  "sizeIconOpening",
  "positionIconOpening",
  "sensitivityNavBarValue",
  "maxDragNavValue",
  "easingForUnlockAnimation",
  "speedForUnlockAnimation",
  "animationGroupForUnlockAnimation",
  "animationForUnlockAnimation",
];

const schema = {
  time_allTmp: "number",
  valScaleApp: "number",
  valScaleWallpaper: "number",
  cubic_ratioParam: "string",
  cubic_allParam: "string",
  timeHidingIconAppTmp: "number",
  delayHidingIconAppTmp: "number",
  valTimeTransform: "number",
  valDampingTransform: "number",
  timeScale: "number",
  valDampingScale: "number",
  valEasing: "number",
  timeShowingIconAppTmp: "number",
  delayShowingIconAppTmp: "number",
  sizeIconOpening: "string",
  positionIconOpening: "string",
  sensitivityNavBarValue: "number",
  maxDragNavValue: "number",
  easingForUnlockAnimation: "number",
  speedForUnlockAnimation: "number",
  animationGroupForUnlockAnimation: "number",
  animationForUnlockAnimation: "number",
};

document
  .getElementById("uploadConfig")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "text/plain") {
      showPopup1_alert("❌ Only accept .txt files");
      this.value = ""; // reset input
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      try {
        const config = {};
        const lines = content
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0)
          .map((l) => l.split("//")[0].trim()); // remove comment

        for (let line of lines) {
          if (!line.includes(":")) continue;

          let [key, rawVal] = line
            .split(":")
            .map((s) => s.trim().replace(/,$/, ""));

          if (!allowedKeys.includes(key)) {
            showPopup1_alert(`❌ keyword "${key}" is not supported`);
            this.value = "";
            return;
          }

          const expectedType = schema[key];
          let val;

          if (expectedType === "number") {
            val = parseFloat(rawVal);
            if (isNaN(val)) {
              showPopup1_alert(`❌ ${key} must be a number`);
              this.value = "";
              return;
            }
          } else if (expectedType === "string") {
            if (!(rawVal.startsWith('"') && rawVal.endsWith('"'))) {
              showPopup1_alert(`❌ ${key} must be a string inside quotes`);
              this.value = "";
              return;
            }
            val = rawVal.slice(1, -1);

            if (
              val.includes("{") ||
              val.includes("}") ||
              val.includes("[") ||
              val.includes("]")
            ) {
              showPopup1_alert(
                `❌ ${key} string value not allowed to contain {} or []`
              );
              this.value = "";
              return;
            }
          } else {
            showPopup1_alert(`❌ Unsupported type for ${key}`);
            this.value = "";
            return;
          }

          config[key] = val;
        }

        // run
        showPopup2_alert(
          "Are you sure you want to import this txt file? It may break the web.",
          "Continue",
          "Cancel",
          () => {
            animationCustomByTXT(config);
          }
        );
      } catch (err) {
        showPopup1_alert("❌ Invalid configuration file");
        console.error(err);
      } finally {
        this.value = "";
      }
    };
    reader.readAsText(file);
  });

const defaultConfig = {
  // Closing Transform closing
  valTimeTransform: 0.5,
  valDampingTransform: 0,

  // Closing Scale closing
  timeScale: 0.5,
  valDampingScale: 0,

  // Easing closing
  valEasing: 0.25,
  easingScaleClosing: 1 - 0.25,

  // Opening App
  time_allTmp: 0.25,
  valScaleApp: 86,
  valScaleWallpaper: 110,
  cubic_ratioParam: "cubic-bezier(0.07,0.74,0.37,0.98)",
  cubic_allParam: "cubic-bezier(0.25,0.1,0.25,1)",

  timeHidingIconAppTmp: 0.3,
  delayHidingIconAppTmp: 0,

  timeShowingIconAppTmp: 0.3,
  delayShowingIconAppTmp: 0.05,
  positionIconOpening: "top",
  sizeIconOpening: "100%",

  sensitivityNavBarValue: 0.08,
  maxDragNavValue: 150,

  easingForUnlockAnimation: 0.25,
  speedForUnlockAnimation: 0.6,
  animationGroupForUnlockAnimation: 1,
  animationForUnlockAnimation: 1,
};

const mappingAnimationTXT = {
  // ================= OPEN APP =================
  time_allTmp: "time_all",
  valScaleApp: "scaleAllApp",
  valScaleWallpaper: "scaleWallpaperAnim",
  cubic_ratioParam: "cubic_ratio",
  cubic_allParam: "cubic_all",
  timeHidingIconAppTmp: "timeHidingIcon",
  delayHidingIconAppTmp: "delayHidingIcon",
  positionIconOpening: "positionIcon",
  sizeIconOpening: "sizeIcon",

  // ================= CLOSE APP =================
  valTimeTransform: "timeTransformClosing",
  valDampingTransform: "dampingTransformClosing",
  timeScale: "timeScaleClosing",
  valDampingScale: "dampingScaleClosing",
  valEasing: "easingScaleClosing",
  timeShowingIconAppTmp: "timeShowingIcon",
  delayShowingIconAppTmp: "delayShowingIcon",
  sensitivityNavBarValue: "sensitivityNavBar",
  maxDragNavValue: "maxDragNav",

  // ================ UNLOCK ANIMATION ===========

  easingForUnlockAnimation: "easingAnimationUnlock",
  speedForUnlockAnimation: "timeAnimationUnlock",
  animationGroupForUnlockAnimation: "groups_unlock_saved",
  animationForUnlockAnimation: "anim_unlock_saved",
};

document.getElementById("exportConfigBtn").addEventListener("click", () => {
  showPopup2_alert(
    "Do you want to download your animation configuration?",
    "Download",
    "Cancel",
    () => {
      const lines = Object.entries(mappingAnimationTXT).map(
        ([exportName, localKey]) => {
          let val = localStorage.getItem(localKey);
          if (val === null) val = defaultConfig[exportName];

          const isNumber = !isNaN(parseFloat(val)) && isFinite(val);
          const finalVal = isNumber ? val : `"${val}"`;

          return `  ${exportName}: ${finalVal},`;
        }
      );

      const fileContent = `const config = {\n${lines.join("\n")}\n};`;
      const blob = new Blob([fileContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "animation-config.txt";
      a.click();

      URL.revokeObjectURL(url);
    }
  );
});

const anim_unlock_btn = document.getElementById("anim_unlock_btn");
const app4_unlock_animation = document.getElementById("app4UnlockAnimation");
const back16 = document.getElementById("back_UnlockAnimation");

function show_app4UnlockAnimation() {
  showPopup_open_close(app4_unlock_animation);

  timeAnimationUnlock.addEventListener("input", timeAnimationUnlockEvent);
  easingAnimationUnlock.addEventListener("input", easingAnimationUnlockEvent);
  reset_anim_unlock_btn.addEventListener("click", reset_anim_unlock_btn_event);
}
function hide_app4UnlockAnimation() {
  hidePopup_open_close(app4_unlock_animation);

  timeAnimationUnlock.removeEventListener("input", timeAnimationUnlockEvent);
  easingAnimationUnlock.removeEventListener(
    "input",
    easingAnimationUnlockEvent
  );
  reset_anim_unlock_btn.removeEventListener(
    "click",
    reset_anim_unlock_btn_event
  );
}

const timeAnimationUnlock = document.getElementById("timeAnimationUnlock");
const timeAnimationUnlockVal = document.getElementById(
  "timeAnimationUnlockVal"
);

const easingAnimationUnlock = document.getElementById("easingAnimationUnlock");
const easingAnimationUnlockVal = document.getElementById(
  "easingAnimationUnlockVal"
);

timeAnimationUnlock.value =
  parseFloat(localStorage.getItem("timeAnimationUnlock")) || 0.6;
timeAnimationUnlockVal.textContent =
  parseFloat(localStorage.getItem("timeAnimationUnlock")) || 0.6;
function timeAnimationUnlockEvent(e) {
  const val = parseFloat(e.target.value).toFixed(2);
  timeAnimationUnlockVal.textContent = val;
  localStorage.setItem("timeAnimationUnlock", `${val}`);
  timeUnlock = val * currentSpeed;
}

easingAnimationUnlock.value =
  localStorage.getItem("easingAnimationUnlock") ?? 0.25;
easingAnimationUnlockVal.textContent =
  localStorage.getItem("easingAnimationUnlock") ?? 0.25;
function easingAnimationUnlockEvent(e) {
  const val = parseFloat(e.target.value).toFixed(2);
  easingAnimationUnlockVal.textContent = val;
  localStorage.setItem("easingAnimationUnlock", `${val}`);
  easingAnimationForUnlock = val;
}

const reset_anim_unlock_btn = document.getElementById("reset_anim_unlock_btn");
function reset_anim_unlock_btn_event(
  animunlock = 1,
  groupunlock = 1,
  timeunlock = 0.6,
  easingunlock = 0.25
) {
  animunlock = Math.min(Math.max(parseInt(animunlock) || 1, 1), 5);
  groupunlock = Math.min(Math.max(parseInt(groupunlock) || 1, 1), 3);

  timeAnimationUnlock.value = timeunlock;
  timeAnimationUnlockVal.textContent = timeunlock;
  timeUnlock = timeunlock * currentSpeed;
  localStorage.setItem("timeAnimationUnlock", timeunlock);
  easingAnimationUnlock.value = easingunlock;
  easingAnimationUnlockVal.textContent = easingunlock;
  easingAnimationForUnlock = easingunlock;
  localStorage.setItem("easingAnimationUnlock", easingunlock);

  items_unlock_anim_btn.forEach((el) => el.classList.remove("active"));

  const dataAnim = animunlock;
  const dataGroup = groupunlock;

  const activeItem = document.querySelector(
    `[data-anim="${dataAnim}"][data-group="${dataGroup}"]`
  );
  if (activeItem) {
    activeItem.classList.add("active");
  }

  anim_unlock = allAnimUnlock["anim" + dataAnim];
  groups_anim = allAnimUnlock_GroupAnim["anim" + dataGroup];

  anim_unlock_pre = allAnimUnlock_pre["anim" + dataAnim];
  groups_anim_pre = allAnimUnlock_GroupAnim_pre["anim" + dataGroup];

  localStorage.setItem("anim_unlock_saved", dataAnim);
  localStorage.setItem("groups_unlock_saved", dataGroup);

  Object.entries(anim_unlock_pre).forEach(([id, transform]) => {
    const box_pre = document.getElementById(`preview_${id}`);
    box_pre.style.transform = transform;
    box_pre.style.opacity = "0";
    box_pre.style.transition = "all 0s";
    box_pre.style.zIndex = "1";
  });

  clearTimeout(IdTimeOut_show_unlock_anim_pre);
  IdTimeOut_show_unlock_anim_pre = setTimeout(() => {
    groups_anim_pre.forEach((group, groupIndex) => {
      const delay = groupIndex * 0.1 * currentSpeed; // delay 0.1s
      group.ids.forEach((id) => {
        const box = document.getElementById(`preview_box${id}`);

        box.style.transition = `all ${currentSpeed6}s cubic-bezier(.38,1.25,.65,1), opacity ${currentSpeed3}s`;
        box.style.transitionDelay = `${delay}s`;
        box.style.transform = "translateX(0px) translateY(0px) scale(1)";
        box.style.opacity = "1";
        box.style.zIndex = "10";
      });
    });
  }, 10);
}
const anim_open_app_btn = document.getElementById("anim_open_app_btn");
const app4AppOpeningAnimation = document.getElementById(
  "app4AppOpeningAnimation"
);
const back17 = document.getElementById("back_AppOpeningAnimation");

function show_app4AppOpeningAnimation() {
  showPopup_open_close(app4AppOpeningAnimation);
  document
    .getElementById("parallelAnimationToggle")
    .addEventListener("click", handleParallelAnimationToggle);
  document
    .getElementById("multipleClickAppToggle")
    .addEventListener("click", handlemultipleClickAppToggle);

  addEventCustomOpening();
}
function hide_app4AppOpeningAnimation() {
  hidePopup_open_close(app4AppOpeningAnimation);
  document
    .getElementById("parallelAnimationToggle")
    .removeEventListener("click", handleParallelAnimationToggle);
  document
    .getElementById("multipleClickAppToggle")
    .removeEventListener("click", handlemultipleClickAppToggle);

  removeEventCustomOpening();
}

parallelAnimation = 1;
function handleParallelAnimationToggle() {
  this.classList.toggle("active");
  parallelAnimation = this.classList.contains("active") ? 1 : 0;

  if (parallelAnimation) {
    openPopupFromCurrentButton = function () {
      showPopup_open_close(app);
      currentOpeningBtn.style.transition = `all ${time_opening_app}s ${cubic_all}, aspect-ratio ${time_aspect_ratio_app}s ${cubic_ratio}`;

      currentOpeningBtn.classList.add("open");
      currentOpeningBtn.style.scale = "100%";

      allApp.style.transition =
        wallpaper.style.transition = `all ${time_opening_app}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;

      lp.style.transition = `all ${time_opening_app}s cubic-bezier(0.23, 0.55, 0.54, 0.97), opacity ${currentSpeed3}s`;
      wallpaper.style.scale = `${scaleWallpaper}%`;
      lp.classList.add("open");

      lp.style.scale = `${scaleAllAppReverse}`;
      allApp.style.scale = `${scaleAllApp}%`;

      currentOpeningBtn.style.transform = `scale(${scaleAllAppReverse})`;

      nav.style.height = "40px";
      isMo = true;
    };

    localStorage.setItem("parallelAnimation_saved", 1);
  } else {
    localStorage.setItem("parallelAnimation_saved", 0);

    openPopupFromCurrentButton = function () {
      showPopup_open_close(app);
      currentOpeningBtn.style.transition = `all ${time_opening_app}s ${cubic_all}, aspect-ratio ${time_aspect_ratio_app}s ${cubic_ratio}`;

      currentOpeningBtn.classList.add("open");
      currentOpeningBtn.style.scale = "100%";

      allApp.style.transition =
        wallpaper.style.transition = `all ${time_opening_app}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;

      lp.style.transition = `all ${time_opening_app}s cubic-bezier(0.23, 0.55, 0.54, 0.97), opacity ${currentSpeed3}s`;
      wallpaper.style.scale = `${scaleWallpaper}%`;
      lp.classList.add("open");

      lp.style.scale = `${scaleAllAppReverse}`;
      allApp.style.scale = `${scaleAllApp}%`;

      currentOpeningBtn.style.transform = `scale(${scaleAllAppReverse})`;

      nav.style.height = "40px";
      isMo = true;
      document.querySelectorAll(".box").forEach((box) => {
        if (box == currentOpeningBtn) return;
        // Ngắt transition/animation
        box.style.transition = "none";

        void box.offsetWidth;
        box.classList.remove("open");
        box.classList.remove("hien");
      });
    };
  }
}
multipleClickApp = 1;
function handlemultipleClickAppToggle() {
  this.classList.toggle("active");
  multipleClickApp = this.classList.contains("active") ? 1 : 0;

  if (multipleClickApp) {
    localStorage.setItem("multipleClickApp_saved", 1);
    multipleClickAppTime = multipleClickApp * currentSpeed5 * 1000;
  } else {
    localStorage.setItem("multipleClickApp_saved", 0);
    multipleClickAppTime = multipleClickApp * currentSpeed5 * 1000;
  }
}

const anim_close_app_btn = document.getElementById("anim_close_app_btn");
const app4AppClosingAnimation = document.getElementById(
  "app4AppClosingAnimation"
);
const back18 = document.getElementById("back_AppClosingAnimation");

function show_app4AppClosingAnimation() {
  showPopup_open_close(app4AppClosingAnimation);

  addEventCustomSclosing();
}
function hide_app4AppClosingAnimation() {
  hidePopup_open_close(app4AppClosingAnimation);

  removeEventCustomSclosing();
}

const ControlsCenterAnimBtn = document.getElementById("ControlsCenterAnimBtn");
const app4ControlsCenterAnim = document.getElementById(
  "app4ControlsCenterAnim"
);
const back19 = document.getElementById("back_ControlsCenterAnim");

function show_app4ControlsCenterAnim() {
  showPopup_open_close(app4ControlsCenterAnim);

  document
    .getElementById("item_anim_controlsCenter_Anim2")
    .addEventListener("click", preivewAnimationControlsCenter);
  document
    .getElementById("item_anim_controlsCenter_Anim1")
    .addEventListener("click", preivewAnimationControlsCenter);
}
function hide_app4ControlsCenterAnim() {
  hidePopup_open_close(app4ControlsCenterAnim);

  document
    .getElementById("item_anim_controlsCenter_Anim2")
    .removeEventListener("click", preivewAnimationControlsCenter);
  document
    .getElementById("item_anim_controlsCenter_Anim1")
    .removeEventListener("click", preivewAnimationControlsCenter);
}

function preivewAnimationControlsCenter(e) {
  const boxId = e.currentTarget.id;
  const lastChar = boxId.charAt(boxId.length - 1);

  if (lastChar === "2") {
    transformControlCenterControlsCenter = transformControlCenter2;
    timeDelayControlsCenter = 0;
  } else {
    transformControlCenterControlsCenter = transformControlCenter1;
    timeDelayControlsCenter = 0.01;
  }

  localStorage.setItem("transformControlCenter", lastChar);

  document.querySelectorAll(".item_anim_controlsCenter").forEach((el) => {
    el.classList.remove("active");
  });
  e.currentTarget.classList.add("active");

  const keys = Object.keys(transformControlCenterControlsCenter);
  const totalItems = keys.length;

  for (let i = totalItems - 1; i >= 0; i--) {
    const idControlsCenter = keys[i];
    const itemControlsCenter = document.getElementById(
      `controlCenterID${idControlsCenter}Preview`
    );

    itemControlsCenter.style.transition = `all 0s`;
    itemControlsCenter.style.transform =
      transformControlCenterControlsCenter[idControlsCenter];
    itemControlsCenter.style.zIndex = 1;
    itemControlsCenter.style.opacity = 0;
  }

  setTimeout(() => {
    Object.keys(transformControlCenterControlsCenter).forEach(
      (idControlsCenter, indexControlsCenter) => {
        const itemControlsCenter = document.getElementById(
          `controlCenterID${idControlsCenter}Preview`
        );
        const delayControlsCenterTmp =
          indexControlsCenter * timeDelayControlsCenter * currentSpeed;
        itemControlsCenter.style.transition = `all ${currentSpeed5}s, opacity ${currentSpeed3}s`;
        itemControlsCenter.style.transitionDelay = `${delayControlsCenterTmp}s`;
        itemControlsCenter.style.transform = "";
        itemControlsCenter.style.zIndex = 10;
        itemControlsCenter.style.opacity = 1;
      }
    );
  }, 60);

  closeControlsCenter();
}

document.addEventListener("DOMContentLoaded", () => {
    const iconFolderInput = document.getElementById("iconFolderInput");
    if (iconFolderInput) {
        iconFolderInput.addEventListener("change", (e) => {
            const files = e.target.files;
            if (!files || files.length === 0) return;

            const savedIcons = JSON.parse(localStorage.getItem("custom_icons") || "{}");
            let updated = false;

            const promises = Array.from(files).map((file) => {
                return new Promise((resolve) => {
                    if (!file.type.startsWith("image/")) {
                        resolve();
                        return;
                    }
                    // Clean filename, e.g., "الحاسبة.png" -> "الحاسبة"
                    const fileName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
                    const fileNameWithoutExtLower = fileName.toLowerCase().trim();
                    const fullFileNameLower = file.name.toLowerCase().trim();
                    
                    const keywords = typeof window.getAppKeywords === "function" ? window.getAppKeywords() : {};
                    
                    // Find if there is a matching app name
                    let app = window.customApps ? window.customApps.find(a => a.name.toLowerCase().trim() === fileNameWithoutExtLower) : null;
                    
                    if (!app && window.customApps) {
                        // Check against keywords (like "calculator.png")
                        app = window.customApps.find(a => {
                            const kw = keywords[a.id];
                            if (kw) {
                                const kwClean = kw.substring(0, kw.lastIndexOf('.')).toLowerCase().trim() || kw.toLowerCase().trim();
                                return kwClean === fileNameWithoutExtLower || kw === fullFileNameLower;
                            }
                            return false;
                        });
                    }

                    if (app) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                            savedIcons[app.id] = ev.target.result;
                            updated = true;
                            resolve();
                        };
                        reader.readAsDataURL(file);
                    } else {
                        resolve();
                    }
                });
            });

            Promise.all(promises).then(() => {
                if (updated) {
                    localStorage.setItem("custom_icons", JSON.stringify(savedIcons));
                    if (typeof applyCustomIcons === "function") {
                        applyCustomIcons();
                    }
                    if (typeof tb_system === "function") {
                        tb_system("تم اختيار الأيقونات بنجاح");
                    }
                } else {
                     if (typeof tb_system === "function") tb_system("لم يتم العثور على أيقونات مطابقة لأسماء التطبيقات");
                }
            });
        });
    }

    const open3dPhoneBtn = document.getElementById("open_3d_phone_btn");
    const phone3dPopup = document.getElementById("phone3dPopup");
    
    if (open3dPhoneBtn && phone3dPopup) {
        open3dPhoneBtn.addEventListener("click", () => {
            phone3dPopup.style.display = "block";
        });
    }

    // Clock Position Toggle Logic
    const btnClockTop = document.getElementById("btn_clock_pos_top");
    const btnClockCenter = document.getElementById("btn_clock_pos_center");
    const clockMain = document.getElementById("lockclock");
    const clockPreview = document.getElementById("clock_preview");
    const dateMain = document.getElementById("dateText");
    const datePreview = document.getElementById("dateTextPreview");

    function applyClockPosition(position) {
        if (position === "center") {
            if (clockMain) clockMain.classList.add("centered");
            if (clockPreview) clockPreview.classList.add("centered");
            if (dateMain) dateMain.classList.add("clock-centered");
            if (datePreview) datePreview.classList.add("clock-centered");
            if (btnClockCenter) btnClockCenter.classList.add("active");
            if (btnClockTop) btnClockTop.classList.remove("active");
        } else {
            if (clockMain) clockMain.classList.remove("centered");
            if (clockPreview) clockPreview.classList.remove("centered");
            if (dateMain) dateMain.classList.remove("clock-centered");
            if (datePreview) datePreview.classList.remove("clock-centered");
            if (btnClockTop) btnClockTop.classList.add("active");
            if (btnClockCenter) btnClockCenter.classList.remove("active");
        }
        localStorage.setItem("lock_clock_position", position);
    }

    if (btnClockTop && btnClockCenter) {
        btnClockTop.addEventListener("click", () => applyClockPosition("top"));
        btnClockCenter.addEventListener("click", () => applyClockPosition("center"));
        
        // Initial load
        const savedPos = localStorage.getItem("lock_clock_position") || "top";
        applyClockPosition(savedPos);
    }
});

window.close3DPhonePopup = function() {
    const phone3dPopup = document.getElementById("phone3dPopup");
    if (phone3dPopup) {
        phone3dPopup.style.display = "none";
    }
};