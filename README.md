# 🌐 Ameni Gharbi — Personal Portfolio

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Advanced-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> A modern, responsive personal portfolio website built with React and Vite, showcasing my skills, projects, and contact information as a Frontend Developer.

---

## 📸 Preview

![Portfolio Preview](https://via.placeholder.com/900x500?text=Ameni+Gharbi+Portfolio)

---

## ✨ Features

- ⚡ **Fast Performance** — Built with Vite for lightning-fast development and builds
- 📱 **Fully Responsive** — Works perfectly on desktop, tablet, and mobile
- 🎨 **Professional Design** — Clean dark navy & blue color scheme with smooth animations
- 🧩 **Component-Based** — Modular React components for easy maintenance
- 🎯 **Modern CSS** — Advanced CSS with custom properties, animations, and transitions
- ♿ **Accessible** — Semantic HTML and proper contrast ratios

---

## 🛠️ Tech Stack

| Technology   | Version | Purpose                        |
|--------------|---------|-------------------------------|
| React        | 18.x    | UI Component Library           |
| Vite         | 5.x     | Build Tool & Dev Server        |
| JavaScript   | ES6+    | Programming Language           |
| CSS3         | —       | Styling & Animations           |
| HTML5        | —       | Markup & Structure             |

---

## 📁 Project Structure
```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.css
│   │   ├── ProjectShowcase/
│   │   │   ├── ProjectShowcase.jsx
│   │   │   └── ProjectShowcase.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/amenigharbi1O16/portfolio.git
```

2. **Navigate to the project directory**
```bash
cd portfolio
```

3. **Install dependencies**
```bash
npm install
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser** and visit:
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🧩 Components Overview

### `Header`
Displays the portfolio owner's name, tagline, and navigation links. Features a dark navy gradient background with smooth hover animations.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | The name displayed as the main heading |
| `tagline` | `string` | A short description shown below the name |

---

### `About`
Shows a profile picture, bio, and a list of skills as interactive badges.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `profileImage` | `string` | URL of the profile picture |
| `bio` | `string` | A short personal description |
| `skills` | `array` | List of skill strings to display as badges |

---

### `ProjectShowcase`
A grid layout that renders multiple `ProjectCard` components.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `projects` | `array` | Array of project objects |

---

### `ProjectCard`
Displays an individual project with its name, description, and tech stack.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Name of the project |
| `description` | `string` | Short description of the project |
| `technologies` | `array` | List of technologies used |

---

### `Contact`
Shows contact information including email, GitHub, and LinkedIn links.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `email` | `string` | Contact email address |
| `github` | `string` | GitHub profile URL |
| `linkedin` | `string` | LinkedIn profile URL |

---

### `Footer`
Simple footer with copyright notice.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Name to display in the copyright |

---

## 💼 Projects Showcased

| Project | Description | Technologies |
|---------|-------------|--------------|
| **React Lab** | My first React project built with reusable components | React, Vite, CSS |
| **Portfolio Website** | A personal portfolio showcasing my skills and projects | React, HTML, CSS |
| **Todo App** | A simple and clean task management application | React, JavaScript |

---

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary Dark | `#0f172a` | Headers, backgrounds |
| Primary | `#1e293b` | Cards, sections |
| Accent Blue | `#2563eb` | Highlights, badges, hover states |
| Accent Light | `#3b82f6` | Links, accents |
| White | `#ffffff` | Text on dark backgrounds |
| Gray 600 | `#475569` | Body text |

### Typography
- **Font Family:** Inter, -apple-system, BlinkMacSystemFont, Segoe UI
- **Base Size:** 16px
- **Headings:** Bold (700–800 weight)
- **Body:** Regular (400 weight), 1.8 line-height

---

## 📬 Contact

**Ameni Gharbi** — Frontend Developer

- 📧 Email: [amenigharbi1016@gmail.com](mailto:amenigharbi1016@gmail.com)
- 💼 GitHub: [github.com/amenigharbi1O16](https://github.com/amenigharbi1O16)
- 🔗 LinkedIn: [linkedin.com/in/ameni-gharbi-22688b386](https://www.linkedin.com/in/ameni-gharbi-22688b386/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Made with ❤️ by <strong>Ameni Gharbi</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
