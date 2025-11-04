# 🌸 FlowerPot

An **offline flower encyclopedia** built with **Next.js** and **Tauri**.  
I built this because I want to access floriography without internet.

---

## 🌼 Features
- Daily flower recommendation with meaning (floriography)
- Flower encyclopedia with details like origin, characteristic, and care
- Care guide for each flower’s growth stages
- Floriography dictionary
- Favorites list for quick access
- Works fully offline

---

## 🖥️ Platform
Currently available as a **Windows desktop app** (EXE or MSI build).  
Cross-platform builds (macOS/Linux) will come later when I'm motivated.

---

## ⚙️ Build Instructions
```bash
# Clone
git clone https://github.com/KittiphichAnuduang/flowerpot.git
cd flowerpot

# Install dependencies
npm install

# Run development build
npx tauri dev

# Build desktop app
npx tauri build

# 📦 Output

src-tauri/target/release/app.exe — Portable offline app

src-tauri/target/release/bundle/msi/ — Optional Windows installer
```