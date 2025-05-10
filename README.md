# 30 Day Build, Use, Sell (B.U.S.) Challenge

Welcome to the **30 Day Build, Use, Sell (B.U.S.) Challenge** landing page project! This repository contains a responsive, animated React component designed to showcase daily AI tool builds and drive engagement for participants.

---

## 🚀 Project Overview

- **Name:** 30 Day Build, Use, Sell Challenge
- **Tagline:** *Hope on the 30 BUS To The Destination of Your Choice*  
- **Objective:** Demonstrate what’s possible with ambition and AI in just 30 days. Each day features a new AI tool that you can build, use, and sell.
- **Tech Stack:** React, Tailwind CSS (via utility classes), Framer Motion, Lucide React icons

---

## 📦 Repository Structure

```plaintext
├── public/
│   ├── 30 BUS Logo.png         # Main logo for the challenge
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   └── LandingPage.jsx     # Main landing page component
│   ├── App.jsx                 # App entrypoint
│   └── index.jsx               # React DOM render
├── .gitignore                  # Ignore node_modules, build files, etc.
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

---

## ⚙️ Prerequisites

- **Node.js** (>= 14)
- **npm** or **yarn**

---

## 🛠 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/30-bus-challenge.git
   cd 30-bus-challenge
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Customization

- **Logo:** Replace `public/30 BUS Logo.png` with your own version. Keep the filename the same to avoid code changes.
- **Brand Colors:** Update hex codes `gold` and `teal` in `LandingPage.jsx` to match your palette.
- **Copy & Links:** Modify headlines, subtitle, button text, and URLs directly in `LandingPage.jsx`.
- **Dark Mode Toggle:** Built-in switch in top-right; feel free to adjust positioning or icon styles.

---

## 📂 Folder Highlight: `LandingPage.jsx`

- **Animations:** Uses Framer Motion variants for fade-in and hover effects.
- **Responsive:** Tailored for mobile and desktop via Tailwind’s breakpoints.
- **Dark Mode:** Toggled via local React state; adapts gradients, backgrounds, and text colors.

---

## 📜 Scripts

- `npm run dev` / `yarn dev` — Start development server
- `npm run build` / `yarn build` — Create production build
- `npm run preview` / `yarn preview` — Preview production build locally

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/my-change`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/my-change`
5. Open a Pull Request

Please follow best practices: meaningful commits, clear PR title/description, and update this README if you add features.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Let’s make every day count—hope on the 30 BUS!**
