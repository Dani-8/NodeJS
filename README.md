# Full-Stack Node.js & React Portfolio

A professional collection of two full-stack web applications built to demonstrate modern Node.js and React development patterns.

This repository contains independent frontend and backend implementations for each project so you can explore:
- clean Express API design
- React client architecture
- REST communication with Axios or Fetch
- frontend/back-end integration patterns
- project structure and deployment-ready setups

---

## 🚀 Projects Included

### 1. Project 01 — Connect Backend with Frontend
A beginner-friendly full-stack starter app that proves the client and server are connected and working together.

Key highlights:
- Node.js + Express server returning JSON from `/`
- React frontend fetching from local and deployed endpoints
- Automatic fallback between local and production server URLs
- Includes beginner guidance and a code explorer UI for learning full-stack flow

[Live Demo:](https://node-js-black-xi.vercel.app/)


### 2. Project 02 — KitchenVault
A premium recipe repository with a polished UI and backend-driven data flow.

Key highlights:
- CRUD operations for recipes
- Responsive frontend with modern styling
- Backend logic explorer for application structure
- Designed for regional flavor and UX clarity

[Live Demo:](https://node-js-kn2n.vercel.app/)

---

## 🧱 Repository Structure

```
my-app/
├─ project1/
│  ├─ backend/
│  │  ├─ package.json
│  │  └─ server.js
│  └─ frontend/
│     ├─ package.json
│     ├─ src/
│     ├─ public/
│     └─ vite.config.js
├─ project2/
│  ├─ backend/
│  │  ├─ package.json
│  │  └─ server.js
│  └─ frontend/
│     ├─ package.json
│     ├─ src/
│     ├─ public/
│     └─ vite.config.js
└─ README.md
```

Each project keeps backend and frontend code separate so you can work on the API and UI independently.

---

## 🧩 Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Lucide Icons

**Backend**
- Node.js
- Express

**Communication**
- REST APIs
- Axios or Fetch

**State Management**
- React Hooks
- In-memory backend state for fast iteration

---


## 🔍 What to Explore

Project files to review:
- `project1/backend/server.js`
- `project1/frontend/src/App.jsx`
- `project2/backend/server.js`
- `project2/frontend/src/App.jsx`
- `project2/frontend/src/useRecipes.js`

Use these files to trace how UI actions map to API requests and how data flows through the app.

---

## 📈 Future Improvements

### Planned enhancements for both projects:
- Add MongoDB persistence for durable storage
- Implement JWT authentication and authorization
- Introduce request validation and error-handling middleware
- Add cross-project CI/CD deployment configuration
- Improve form validation and UX feedback

---

## 📚 Notes

This repository is designed as a learning portfolio and a clean foundation for building production-ready Node.js + React applications.
