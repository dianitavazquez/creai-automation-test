# 🚀 Smoke Test Automation – creai.mx  
### QA Automation Engineer Technical Test

![Playwright](https://img.shields.io/badge/Framework-Playwright-2EAD33?logo=playwright&logoColor=white)
![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)
![Pattern](https://img.shields.io/badge/Pattern-POM-blueviolet)
![Status](https://img.shields.io/badge/Status-Completed-success)

---

## 📌 Overview  
Este proyecto implementa un **Smoke Test automatizado** para la homepage pública de **https://www.creai.mx**, desarrollado con **Playwright + TypeScript**, implementando buenas prácticas:  
- Page Object Model (POM)  
- Manejo centralizado de datos  
- Código modular, limpio y mantenible  
- Tests rápidos, estables y confiables  

---

## 🧪 Test Coverage
Los casos cubiertos incluyen:

### ✅ 1. Validación de carga inicial
- Validar que la página carga exitosamente.  
- Comprobar estado HTTP 200.  
- Verificar ausencia de errores de consola (error & severe logs).

### ✅ 2. Elementos clave visibles
- Logo de la marca visible.  
- Botón CTA ("Contacto" o equivalente) presente y operativo.  
- Validación de 3 secciones visibles cargadas correctamente.

### ✅ 3. Navegación
- Click en item del menú.  
- Validación de redirección a la sección/URL correcta.

### 📱 4. Mobile viewport (opcional)
- Prueba en viewport mobile.  
- Confirmar visibilidad de elementos clave en mobile.

---

## 🏗️ Project Structure (POM + TS)

```plaintext
📦 creai-smoke-playwright
├── src
│   ├── data
│   │   └── home.data.ts            # Test data centralizada
│   ├── fixtures
│   │   └── test-fixtures.ts        # Fixtures reutilizables 
│   ├── pages
│   │   └── home.page.ts            # Page Object Model
│   ├── tests
│   │   └── home.spec.ts            # Test suite principal
│   ├── utils
│   │   ├── consoleErrors.ts        # Validación de errores de consola
│   │   └── responseValidator.ts    # Validación de status de red
├── playwright.config.ts
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 📥 1. Clonar el repositorio
```bash
git clone git@github.com:dianitavazquez/creai-automation-test.git
cd CREAI-AUTOMATION-TEST
```

### 📦 2. Instalar dependencias
```bash
npm install
```
### 📸 3. Instalar Playwright browsers
```bash
npx playwright install
```

## ▶️ Running Tests

### 🔹 Ejecutar tests en modo headless
```bash
npx playwright test
```
### 🔹 Ejecutar con UI
```bash
npx playwright test --ui
```
### 🔹 Ejecutar solo el smoke test
```bash
npx playwright test home.spec.ts
```

## 🧠 Tech Stack

- Playwright 1.45+
- TypeScript
- Page Object Model
- Test Data
- Playwright Test Runner

## 👩🏻‍💻 Author

Diana Vázquez  
Senior QA Automation Engineer