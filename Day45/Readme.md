# Redux Auth Theme Project

This project is built with **React**, **Redux**, and **Tailwind CSS**. It focuses on implementing authentication and theme toggling features using modern frontend tools.

##  What I Learned Today

-  How to initialize a React project using **Vite**.
-  Installed and configured **Tailwind CSS** with PostCSS and Autoprefixer.
-  Faced and solved `npx tailwindcss` issues by using `.\node_modules\.bin\tailwindcss`.
-  Successfully generated:
  - `tailwind.config.js`
  - `postcss.config.js`
-  Updated `tailwind.config.js` to scan files in `./src/`.
-  Setup `index.css` with `@tailwind` directives.
-  Verified Tailwind setup with sample styles (`text-red-500`, `font-bold`, etc).
-  Learned how Tailwind integrates into React through `index.css`.

##  Tech Stack

- React + Vite
- Redux Toolkit
- Tailwind CSS
- PostCSS

## Setup Commands

```bash
# 1. Create React project
npm create vite@latest redux-auth-theme -- --template react

# 2. Install Tailwind & dependencies
npm install -D tailwindcss postcss autoprefixer

# 3. Generate Tailwind config files
.\node_modules\.bin\tailwindcss init -p

# 4. Add Tailwind to index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
