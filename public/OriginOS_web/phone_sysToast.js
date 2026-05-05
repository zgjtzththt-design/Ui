let display_phone = document.getElementById("display_phone");

function append_phone(val) {
  if (display_phone.innerText === " ") {
    display_phone.innerText = val;
  } else {
    display_phone.innerText += val;
  }
}

function backspace_phone() {
  let text = display_phone.innerText;
  if (text.length > 1) {
    display_phone.innerText = text.slice(0, -1);
  } else {
    display_phone.innerText = " ";
  }
}

function call_phone() {
  let num = display_phone.innerText;
  display_phone.innerText = " ";
  if (num != "") tb_system("SIM card not found");
}

function tb_system(message) {
  const toast = document.getElementById("systemToast");
  toast.textContent = message;
  showPopup_open_close(toast, "block", "show");

  clearTimeout(tb_system._timeout);
  tb_system._timeout = setTimeout(() => {
    hidePopup_open_close(toast, "none", "show");
  }, 3000);
}

// Function to auto-generate title from message
function extractTitleAndDesc(message, btnCount) {
  const lang = localStorage.getItem("language") || "en";
  const t = (typeof translations !== 'undefined' ? translations[lang] : null) || {
    confirm_action: "Confirm Action",
    system_alert: "System Alert"
  };
  
  let titleText = btnCount > 1 ? t.confirm_action : t.system_alert;
  let descText = message;
  
  if (message.includes('\n')) {
    const parts = message.split('\n');
    titleText = parts[0].trim();
    descText = parts.slice(1).join('\n').trim();
  } else if (message.includes('Version 2.0.00')) {
    titleText = t.update_system;
    descText = t.update_desc;
  } else if (message.includes('bugs or want to join')) {
    titleText = t.originos_community;
    descText = t.community_desc;
  } else if (message.includes('remove password')) {
    titleText = t.remove_password_title;
    descText = t.remove_password_desc;
  } else if (message.includes('مسح كافة البيانات')) {
    titleText = t.factory_reset;
  }

  return { title: titleText, desc: descText };
}

function showPopupInput(options) {
  const lang = localStorage.getItem("language") || "en";
  const t = (typeof translations !== 'undefined' ? translations[lang] : null) || {
    ok: "OK",
    cancel: "Cancel"
  };

  const {
    message = "",
    placeholder = "",
    defaultText = "",
    maxLength = null,
    buttonText = t.ok || "OK",
    cancelText = t.cancel || "Cancel",
    onSubmit,
    onCancel,
  } = options;

  const phoneContainer = document.querySelector(".phone");

  const backdrop_alert = document.createElement("div");
  backdrop_alert.className = "alert-backdrop";
  backdrop_alert.dir = "rtl";

  const box_alert = document.createElement("div");
  box_alert.className = "alert-card";

  const { title, desc } = extractTitleAndDesc(message, 2);

  const title_alert = document.createElement("div");
  title_alert.className = "alert-title";
  title_alert.textContent = title;

  const msg_alert = document.createElement("div");
  msg_alert.className = "alert-desc";
  msg_alert.textContent = desc;

  // Input container
  const inputContainer = document.createElement("div");
  inputContainer.className = "alert-input-container";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "alert-input editable";
  input.placeholder = placeholder;
  input.value = defaultText;

  if (maxLength) {
    input.maxLength = maxLength;
    input.addEventListener("input", () => {
      if (input.value.length >= maxLength) {
        input.style.borderColor = "#f65268";
        tb_system(`Maximum ${maxLength} characters!`);
      } else {
        input.style.borderColor = "#444";
      }
    });
  }

  inputContainer.appendChild(input);

  // Button container
  const btnContainer_alert = document.createElement("div");
  btnContainer_alert.className = "alert-buttons";

  // OK button
  const btn_ok = document.createElement("button");
  btn_ok.className = "alert-btn alert-btn-primary";
  btn_ok.textContent = buttonText;
  btn_ok.onclick = () => {
    closePopup_alert(backdrop_alert);
    if (typeof onSubmit === "function") onSubmit(input.value);
  };

  // Cancel button
  const btn_cancel = document.createElement("button");
  btn_cancel.className = "alert-btn alert-btn-secondary";
  btn_cancel.textContent = cancelText;
  btn_cancel.onclick = () => {
    closePopup_alert(backdrop_alert);
    if (typeof onCancel === "function") onCancel();
  };

  btnContainer_alert.appendChild(btn_ok);
  btnContainer_alert.appendChild(btn_cancel);

  // Assemble
  box_alert.appendChild(title_alert);
  box_alert.appendChild(msg_alert);
  box_alert.appendChild(inputContainer);
  box_alert.appendChild(btnContainer_alert);
  backdrop_alert.appendChild(box_alert);
  phoneContainer.appendChild(backdrop_alert);

  // Trigger animation
  setTimeout(() => {
    backdrop_alert.classList.add("show_alert");
    box_alert.classList.add("show_alert");
  }, 10);
}

function showPopup1_alert(
  message_alert,
  btnText_alert = null,
  onClose_alert = null
) {
  const lang = localStorage.getItem("language") || "en";
  const t = (typeof translations !== 'undefined' ? translations[lang] : null) || { ok: "OK" };
  const finalBtnText = btnText_alert || t.ok || "OK";

  createPopup_alert(message_alert, [
    { text: finalBtnText, action: onClose_alert },
  ]);
}

function showPopup2_alert(
  message_alert,
  yesText_alert = null,
  noText_alert = null,
  onYes_alert = null,
  onNo_alert = null
) {
  const lang = localStorage.getItem("language") || "en";
  const t = (typeof translations !== 'undefined' ? translations[lang] : null) || {
    apply: "Apply",
    yes: "Yes",
    cancel: "Cancel",
    no: "No"
  };
  const finalYesText = yesText_alert || t.apply || t.yes || "Apply";
  const finalNoText = noText_alert || t.cancel || t.no || "Cancel";

  createPopup_alert(message_alert, [
    { text: finalYesText, action: onYes_alert, primary: true },
    { text: finalNoText, action: onNo_alert, secondary: true },
  ]);
}

function createPopup_alert(message_alert, buttons_alert) {
  const phoneContainer = document.querySelector(".phone");

  const backdrop_alert = document.createElement("div");
  backdrop_alert.className = "alert-backdrop";
  backdrop_alert.dir = "rtl";

  const box_alert = document.createElement("div");
  box_alert.className = "alert-card";

  const { title, desc } = extractTitleAndDesc(message_alert, buttons_alert.length);

  const title_alert = document.createElement("div");
  title_alert.className = "alert-title";
  title_alert.textContent = title;

  const msg_alert = document.createElement("div");
  msg_alert.className = "alert-desc";
  msg_alert.textContent = desc;

  const btnContainer_alert = document.createElement("div");
  btnContainer_alert.className = "alert-buttons";

  buttons_alert.forEach((btnData_alert, index) => {
    const btn_alert = document.createElement("button");
    // Determine class based on position/secondary flag
    if (btnData_alert.secondary) {
        btn_alert.className = "alert-btn alert-btn-secondary";
    } else {
        btn_alert.className = "alert-btn alert-btn-primary";
    }
    
    // Fallback translations if they were in english originally
    let text = btnData_alert.text;
    const lang = localStorage.getItem("language") || "en";
    const t = (typeof translations !== 'undefined' ? (translations[lang] || translations['en']) : null) || {};

    const lowText = text.toLowerCase();
    
    // Check if text itself is a key
    if (t && t[text]) {
        text = t[text];
    } else if (t && t[lowText]) {
        text = t[lowText];
    } else if (t && (lowText === "continue" || lowText === "ok")) {
        text = t.apply || t.ok || text;
    } else if (t && lowText === "yes") {
        text = t.yes || t.apply || text;
    } else if (t && (lowText === "no" || lowText === "cancel")) {
        text = t.cancel || t.no || text;
    } else if (t && lowText === "join") {
        text = t.join || text;
    } else if (t && lowText === "open") {
        text = t.open || text;
    }

    btn_alert.textContent = text;
    btn_alert.onclick = () => {
      closePopup_alert(backdrop_alert);
      if (typeof btnData_alert.action === "function") btnData_alert.action();
    };
    btnContainer_alert.appendChild(btn_alert);
  });

  box_alert.appendChild(title_alert);
  box_alert.appendChild(msg_alert);
  box_alert.appendChild(btnContainer_alert);
  backdrop_alert.appendChild(box_alert);
  phoneContainer.appendChild(backdrop_alert);

  // Trigger animation
  setTimeout(() => {
    backdrop_alert.classList.add("show_alert");
    box_alert.classList.add("show_alert");
  }, 10);
}

function closePopup_alert(backdrop_alert) {
  const box_alert = backdrop_alert.querySelector(".alert-card");
  backdrop_alert.classList.remove("show_alert");
  if (box_alert) box_alert.classList.remove("show_alert");
  setTimeout(() => backdrop_alert.remove(), 500);
}

function hideAllAlerts() {
  document
    .querySelectorAll(".alert-backdrop")
    .forEach((backdrop_alert) => {
      const box_alert = backdrop_alert.querySelector(".alert-card");
      backdrop_alert.classList.remove("show_alert");
      if (box_alert) box_alert.classList.remove("show_alert");
      setTimeout(() => backdrop_alert.remove(), 500);
    });
}
