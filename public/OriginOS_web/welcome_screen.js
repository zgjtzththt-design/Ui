function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.style.display = 'flex';
        welcomeScreen.style.opacity = '1';
    }
}

function nextSetupStep() {
    document.getElementById('welcome-screen').classList.add('active-state');
}

function setLanguage(lang) {
    console.log("Setting language to:", lang);
    localStorage.setItem("language", lang);
    
    // Update UI highlights
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.lang === lang) {
            btn.classList.add('selected');
        }
    });

    // Here we would call the project's translation function
    if (typeof applyLanguage === 'function') {
        applyLanguage(lang);
    } else {
        // Fallback for demo if no global function exists yet
        updateTextsLocally(lang);
    }
}

function finishSetup() {
    localStorage.setItem("welcome_completed", "true");
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        // No reload needed
    }, 500);
}

function updateTextsLocally(lang) {
    const translations = {
        'ar': {
            'welcome': 'Xiaomi HyperOS',
            'setup_title': 'إعدادات اللغة والأذونات',
            'root_perm': 'السماح بعمليات الروت',
            'apps_perm': 'السماح بقراءة قائمة التطبيقات',
            'finish': 'إنهاء الإعداد'
        },
        'fr': {
            'welcome': 'Xiaomi HyperOS',
            'setup_title': 'Langue et Autorisations',
            'root_perm': 'Autoriser les opérations Root',
            'apps_perm': 'Autoriser la lecture des apps',
            'finish': 'Terminer la configuration'
        },
        'en': {
            'welcome': 'Xiaomi HyperOS',
            'setup_title': 'Language & Permissions',
            'root_perm': 'Allow Root operations',
            'apps_perm': 'Allow reading apps list',
            'finish': 'Finish Setup'
        },
        'zh-CN': {
            'welcome': '小米澎湃OS',
            'setup_title': '语言与权限设置',
            'root_perm': '允许Root操作',
            'apps_perm': '允许读取已安装应用列表',
            'finish': '完成设置'
        }
    };

    const t = translations[lang] || translations['en'];
    
    const setupTitle = document.querySelector('#welcome-setup-screen h2');
    if (setupTitle) setupTitle.textContent = t.setup_title;
    
    const perms = document.querySelectorAll('.perm-card');
    if (perms[0]) perms[0].textContent = t.root_perm;
    if (perms[1]) perms[1].textContent = t.apps_perm;
    
    const finishBtn = document.querySelector('.finish-btn');
    if (finishBtn) finishBtn.textContent = t.finish;

    // Set document attribute but preserve LTR direction
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
        updateTextsLocally(savedLang);
    }

    setTimeout(() => {
        showWelcomeScreen();
    }, 6500); // Wait for boot animation to finish
});
