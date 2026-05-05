const fs = require('fs');

const path = 'public/OriginOS_web/language.js';
let data = fs.readFileSync(path, 'utf8');

// Insert phone_mold into each block
data = data.replace(/'en': \{/, "'en': {\n        'phone_mold': 'Phone Template',");
data = data.replace(/'ar': \{/, "'ar': {\n        'phone_mold': 'قالب الهاتف',");
data = data.replace(/'fr': \{/, "'fr': {\n        'phone_mold': 'Modèle de téléphone',");
data = data.replace(/'zh-CN': \{/, "'zh-CN': {\n        'phone_mold': '手机模板',");

fs.writeFileSync(path, data);
