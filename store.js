// ============================================================
// BASE DE DATOS COMPLETA DE MODELOS CON ID E IMAGEN
// ============================================================
const MODELS_DETAIL = {
  iphone: [
    { id: "iphone_16_pm", name: "iPhone 16 Pro Max", image: "https://i.imgur.com/I02Qzbr.jpeg" },
    { id: "iphone_16_pro", name: "iPhone 16 Pro", image: "https://i.imgur.com/I02Qzbr.jpeg" },
    { id: "iphone_16", name: "iPhone 16", image: "https://i.imgur.com/I02Qzbr.jpeg" },
    { id: "iphone_15_pm", name: "iPhone 15 Pro Max", image: "https://i.imgur.com/2rbwdyN.png" },
    { id: "iphone_15_pro", name: "iPhone 15 Pro", image: "https://i.imgur.com/2rbwdyN.png" },
    { id: "iphone_15", name: "iPhone 15", image: "https://i.imgur.com/2rbwdyN.png" },
    { id: "iphone_14_pm", name: "iPhone 14 Pro Max", image: "https://i.imgur.com/FI6Z7pO.png" },
    { id: "iphone_14", name: "iPhone 14", image: "https://i.imgur.com/FI6Z7pO.png" },
    { id: "iphone_13", name: "iPhone 13", image: "https://i.imgur.com/FBxVP3I.png" },
    { id: "iphone_12", name: "iPhone 12", image: "https://i.imgur.com/fE29r73.jpeg" },
    { id: "iphone_11", name: "iPhone 11", image: "https://i.imgur.com/fE29r73.jpeg" },
    { id: "iphone_xr", name: "iPhone XR", image: "https://i.imgur.com/fE29r73.jpeg" },
    { id: "iphone_x", name: "iPhone X", image: "https://i.imgur.com/fE29r73.jpeg" }
  ],
  ipad: [
    { id: "ipad_pro", name: "iPad Pro", image: "https://i.imgur.com/5iQJ8Ny.png" },
    { id: "ipad_air", name: "iPad Air", image: "https://i.imgur.com/5iQJ8Ny.png" },
    { id: "ipad_mini", name: "iPad Mini", image: "https://i.imgur.com/5iQJ8Ny.png" },
    { id: "ipad_10th", name: "iPad 10th Gen", image: "https://i.imgur.com/5iQJ8Ny.png" },
    { id: "ipad_9th", name: "iPad 9th Gen", image: "https://i.imgur.com/5iQJ8Ny.png" }
  ],
  macbook: [
    { id: "mb_pro_m3", name: "MacBook Pro M3", image: "https://i.imgur.com/z0XkEtS.png" },
    { id: "mb_pro_m2", name: "MacBook Pro M2", image: "https://i.imgur.com/z0XkEtS.png" },
    { id: "mb_air_m4", name: "MacBook Air M4", image: "https://i.imgur.com/z0XkEtS.png" },
    { id: "mb_air_m3", name: "MacBook Air M3", image: "https://i.imgur.com/z0XkEtS.png" },
    { id: "mb_air_m2", name: "MacBook Air M2", image: "https://i.imgur.com/z0XkEtS.png" },
    { id: "mb_air_m1", name: "MacBook Air M1", image: "https://i.imgur.com/z0XkEtS.png" }
  ],
  watch: [
    { id: "watch_ultra", name: "Apple Watch Ultra", image: "https://i.imgur.com/VDyEZgw.jpeg" },
    { id: "watch_series9", name: "Apple Watch Series 9", image: "https://i.imgur.com/VDyEZgw.jpeg" },
    { id: "watch_se", name: "Apple Watch SE", image: "https://i.imgur.com/VDyEZgw.jpeg" }
  ],
  imac: [
    { id: "imac_m3", name: "iMac M3", image: "https://i.imgur.com/z0XkEtS.png" },
    { id: "imac_m1", name: "iMac M1", image: "https://i.imgur.com/z0XkEtS.png" }
  ]
};

// ============================================================
// MANTENER COMPATIBILIDAD CON EL CÓDIGO ANTIGUO (strings)
// ============================================================
const MODELS = {};
for (const [category, modelsArray] of Object.entries(MODELS_DETAIL)) {
  MODELS[category] = modelsArray.map(model => model.name);
}

// ============================================================
// FUNCIÓN PARA OBTENER DATOS COMPLETOS DE UN MODELO
// ============================================================
function getModelDetails(category, modelName) {
  const models = MODELS_DETAIL[category];
  if (!models) return null;
  return models.find(m => m.name === modelName) || null;
}

// ============================================================
// CATÁLOGO DE VENTAS Y ACCESORIOS (sin cambios, solo añadí el MacBook Air M4)
// ============================================================
const STORE = {
  accesorios: [
    { id: 1, name: "Cargador USB-C 20W Apple", price: 1200, image: "https://i.imgur.com/awRBPUu.jpeg" },
    { id: 2, name: "Cable Lightning Original", price: 700, image: "https://i.imgur.com/XasaDsN.jpeg" },
    { id: 3, name: "AirPods Pro 2", price: 13500, image: "https://i.imgur.com/VDyEZgw.jpeg" },
    { id: 4, name: "Funda Premium iPhone 17 Pro Max", price: 800, image: "https://i.imgur.com/BizERzE.jpeg" },
    { id: 5, name: "Power Bank 10,000mAh", price: 1800, image: "https://i.imgur.com/mCRwG2c.png" }
  ],
  dispositivos: [
    { id: 101, name: "iPhone 16", tipo: "iPhone", price: 36600, stock: 28, image: "https://i.imgur.com/I02Qzbr.jpeg" },
    { id: 102, name: "iPhone 16e", tipo: "iPhone", price: 22200, stock: 2, image: "https://i.imgur.com/2LqFdzT.jpeg" },
    { id: 103, name: "iPhone 15 Plus", tipo: "iPhone", price: 26100, stock: 1, image: "https://i.imgur.com/FI6Z7pO.png" },
    { id: 104, name: "iPhone 15", tipo: "iPhone", price: 22950, stock: 8, image: "https://i.imgur.com/2rbwdyN.png" },
    { id: 105, name: "iPhone 14", tipo: "iPhone", price: 26100, stock: 0, image: "https://i.imgur.com/FI6Z7pO.png" },
    { id: 106, name: "iPhone 13", tipo: "iPhone", price: 16500, stock: 4, image: "https://i.imgur.com/FBxVP3I.png" },
    { id: 201, name: "MacBook Air M4", tipo: "MacBook", price: 65000, stock: 4, image: "https://i.imgur.com/z0XkEtS.png" },
    { id: 301, name: "iPad 10", tipo: "iPad", price: 28000, stock: 6, image: "https://i.imgur.com/5iQJ8Ny.png" }
  ]
};

// ============================================================
// (OPCIONAL) EJEMPLO DE CÓMO USAR LAS NUEVAS IMÁGENES EN REPARACION.HTML
// ============================================================
// En tu archivo reparacion.html, cuando el usuario seleccione un modelo,
// puedes hacer:
//
// const deviceCat = document.getElementById('device').value;
// const modelName = document.getElementById('model').value;
// const modelData = getModelDetails(deviceCat, modelName);
// if (modelData) {
//    document.getElementById('modelImage').src = modelData.image;
// }