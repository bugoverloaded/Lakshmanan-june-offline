# 🛍️ Fashion-Hub — E-Commerce Destination

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-success?style=for-the-badge&logo=netlify)](https://fashionhubnew.netlify.app/)
[![React Version](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Bootstrap Version](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.2-FF00C1?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-44CC11?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Fashion-Hub** is a premium, highly responsive e-commerce web application tailored for modern fashion enthusiasts. Built on top of **React 19** and compiled with the speed of **Vite 7**, the platform provides an interactive shopping experience featuring elegant transitions via **Framer Motion**, sleek layouts designed with **Bootstrap 5.3**, and client-side navigation with **React Router v7**.

🔗 **Live URL:** [fashionhubnew.netlify.app](https://fashionhubnew.netlify.app/)

---

## ✨ Features

- **🌐 Modern Landing Page**: An eye-catching hero banner, interactive products section, styled banners, and visual testimonials.
- **✨ Micro-Animations**: Smooth, rich hover transitions and interactive elements powered by **Framer Motion**.
- **📱 Fully Responsive Design**: Built from the ground up using **Bootstrap 5's** flexbox grids and utility classes, looking flawless on mobile, tablet, and desktop screens.
- **🛣️ Client-Side Routing**: Fast page transitions and state persistence using **React Router v7**.
- **🔑 Secure-Look Authentication**: Dedicated, interactive **Login** and **Signup** layouts for user registration and authentication flows.
- **ℹ️ About Us Details**: An informative brand page highlighting the vision, mission, and sustainability initiatives of Fashion-Hub.
- **⛔ Custom 404 Routing**: A clean and modern "Page Not Found" visual handler that ensures a seamless fallback route.

---

## 🛠️ Tech Stack & Dependencies

| Tool/Library | Purpose | Details |
| :--- | :--- | :--- |
| **React 19** | Component UI Library | Core application skeleton |
| **Vite 7** | Development & Build Tool | Fast HMR and bundling |
| **React Router v7** | Routing Architecture | Multi-page routing configuration |
| **Bootstrap 5.3** | Component & Grid Styling | Responsive layouts and design system |
| **Framer Motion 12** | Interactive Motion | Smooth transitions and scaling animations |
| **ESLint** | Code Quality & Linting | Static analysis and code standard maintenance |

---

## 📁 Directory Structure

```text
app/
├── public/              # Static files (icons, favicon, etc.)
├── src/
│   ├── assets/          # Project images, graphics, and icons
│   ├── Components/      # Application view components:
│   │   ├── AboutUs.jsx  # Learn more about the brand
│   │   ├── Home.jsx     # Main e-commerce landing page
│   │   ├── Login.jsx    # Authentication Login page
│   │   ├── NotFound.jsx # 404 Error handler page
│   │   └── Signup.jsx   # Authentication Signup page
│   ├── App.css          # Local layout customization styles
│   ├── App.jsx          # Route management and base component layout
│   ├── index.css        # Global CSS, resets, and design system variables
│   └── main.jsx         # React application entry point
├── eslint.config.js     # Code standard settings
├── package.json         # Dependency manifest and start scripts
└── vite.config.js       # Vite build configurations
```

---

## 🚀 Getting Started

To launch a local copy of this project on your system, follow the steps below:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version `18.x` or above recommended) along with `npm`.

### 2. Installation
Clone the repository and install the required dependencies:
```bash
# Navigate to the project root directory
cd app

# Install dependencies
npm install
```

### 3. Run Development Server
Start the local server to run the application dynamically:
```bash
npm run dev
```
By default, the application will open on `http://localhost:5173`.

### 4. Build for Production
Create an optimized build production bundle:
```bash
npm run build
```
This generates static files inside the `dist/` directory ready for deployment on hosting services like Netlify, Vercel, or AWS.

### 5. Preview Production Build
Locally preview your production build:
```bash
npm run preview
```

---

## 🌎 Deployment

This website is automatically built and deployed via Netlify when changes are pushed to the main repository. 
You can access the live version here:
👉 **[Fashion-Hub Live Web Application](https://fashionhubnew.netlify.app/)**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the file for details.
