const translations = {
    'en': {
        'phone_name': 'Xiaomi HyperOS',
        'settings': 'Settings',
        'display': 'Display',
        'sound': 'Sound',
        'about': 'About',
        'language': 'Language',
        'back': 'Back',
        'finish': 'Finish',
        'setup_title': 'Language & Permissions',
        'internet_perm': 'Allow Internet connection ✓',
        'root_perm': 'Allow Root operations',
        'apps_perm': 'Allow reading apps list',
        'sharp_phone': 'Sharp Red Button',
        'sharp_phone_desc': 'Makes the screen power button (the red button) sharp and rectangular.',
        'edge_radius': 'Phone Edge Radius',
        'edge_color': 'Phone Edge Color',
        'border_width': 'Phone Border Width'
    },
    'ar': {
        'phone_name': 'Xiaomi HyperOS',
        'settings': 'الإعدادات',
        'display': 'الشاشة',
        'sound': 'الصوت',
        'about': 'حول',
        'language': 'اللغة',
        'back': 'رجوع',
        'finish': 'إنهاء',
        'setup_title': 'إعدادات اللغة والأذونات',
        'internet_perm': 'السماح بالاتصال بالإنترنت ✓',
        'root_perm': 'السماح بعمليات الروت',
        'apps_perm': 'السماح بقراءة قائمة التطبيقات',
        'sharp_phone': 'قالب حاد للزر الأحمر',
        'sharp_phone_desc': 'يجعل زر إغلاق الشاشة (الزر الأحمر) حاد الحواف ومستطيلاً بشكل كامل.',
        'edge_radius': 'نصف قطر حافة الهاتف',
        'edge_color': 'لون حافة الهاتف',
        'border_width': 'عرض حدود الهاتف'
    },
    'fr': {
        'phone_name': 'Xiaomi HyperOS',
        'settings': 'Paramètres',
        'display': 'Affichage',
        'sound': 'Son',
        'about': 'À propos',
        'language': 'Langue',
        'back': 'Retour',
        'finish': 'Terminer',
        'setup_title': 'Langue et Autorisations',
        'internet_perm': 'Autoriser connexion Internet ✓',
        'root_perm': 'Autoriser les opérations Root',
        'apps_perm': 'Autoriser la lecture des apps',
        'sharp_phone': 'Bouton rouge pointu',
        'sharp_phone_desc': 'Rend le bouton d\'alimentation (bouton rouge) pointu et rectangulaire.',
        'edge_radius': 'Rayon du bord du téléphone',
        'edge_color': 'Couleur du bord du téléphone',
        'border_width': 'Largeur de la bordure du téléphone'
    }
};

function applyLanguage(lang) {
    const t = translations[lang] || translations['en'];
    
    // Set lang attribute but keep LTR direction as requested
    document.documentElement.lang = lang;
    document.documentElement.dir = 'ltr'; 

    // Update common elements by ID
    const phoneName = document.getElementById('phoneName');
    if (phoneName) phoneName.textContent = t.phone_name;

    // Use data-i18n attributes for more complex elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Specific triggers for the welcome screen if it's open
    if (typeof updateTextsLocally === 'function') {
        updateTextsLocally(lang);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem("language") || 'ar';
    applyLanguage(savedLang);
});
