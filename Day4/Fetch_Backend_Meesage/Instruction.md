# 🚀 Fetch Backend Message – Full Setup Guide

## 🧩 Project Overview

This project demonstrates how a **frontend web page** can communicate with a **Node.js + Express backend** using an API call.

When the user clicks the **“Get Data from Backend”** button, the frontend sends a request to the backend, and the backend responds with a message —  
✨ **“Hello from the backend!”** ✨

---

## 🏗️ Folder Structure

```

Fetch_Backend_Message/
├── Backend/
│   └── server.js          # Node.js backend using Express
└── Frontend/
├── index.html         # Main UI file
├── script.js          # Handles fetch request to backend
└── style.css          # (Optional) Styling for the frontend

````

---

## ⚙️ Step-by-Step Setup Instructions

### 1️⃣ Prerequisites

Make sure you have these installed:

- **Node.js** (v14 or above) → [Download here](https://nodejs.org/)
- **npm** (comes with Node)

To verify installation:
```bash
node -v
npm -v
````

---

### 2️⃣ Open Project in VS Code

Open your project folder:

```bash
Fetch_Backend_Message/
```

Then open a terminal in the **Backend** directory.

---

### 3️⃣ Initialize Node.js

In the terminal (inside the `Backend/` folder), run:

```bash
npm init -y
```

This will create a `package.json` file.

---

### 4️⃣ Install Dependencies

Install the required packages:

```bash
npm install express cors
```

---

### 5️⃣ Backend Code (server.js)

Your `server.js` file should look like this 👇
✅ *(Already done, just verify)*

```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

// Sample API endpoint
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

---

### 6️⃣ Run the Backend Server

From inside the `Backend/` folder, run:

```bash
node server.js
```

You should see:

```
Server is running on port 3000
```

✅ Backend is now live at:

```
http://localhost:3000/api/message
```

You can test it by opening that link in your browser —
you’ll see:

```json
{"message":"Hello from the backend!"}
```

---

### 7️⃣ Frontend Setup

Now open the **Frontend** folder.
It contains:

* `index.html` → main web page
* `script.js` → fetches data from backend
* `style.css` → optional styling

If your HTML already includes JS inline (like in your code), you don’t need separate JS/CSS files.

Ensure your fetch call URL matches your backend:

```js
fetch("http://localhost:3000/api/message")
```

---

### 8️⃣ Run the Frontend

You have two options:

#### 🅰️ Option 1 — Open Directly

* Simply open `index.html` in your browser.
* Click the **“Get Data from Backend”** button.
* It should display:

  ```
  Hello from the backend!
  ```

If you face a **CORS** or **fetch** error, ensure the backend is still running in the terminal.

---

#### 🅱️ Option 2 — Use Live Server (Recommended)

If using VS Code, right-click `index.html` → **“Open with Live Server”**
Then visit the provided local URL (like `http://127.0.0.1:5500/Frontend/index.html`)

---

### 9️⃣ Expected Output

✅ When the backend server is running and you open the frontend page:

* You see a **beautiful card with a button.**
* On clicking **“Get Data from Backend”**,
  the text below updates to:

  ```
  Hello from the backend!
  ```

---

## 💡 Bonus Tip

If you want to deploy this project:

* Host the **frontend** on Firebase / GitHub Pages
* Host the **backend** separately (e.g., Render, Vercel, or Railway)
* Update the fetch URL in `index.html` with your live backend API URL




Would you like me to generate this as a ready-to-download `.md` file for your repo?
```
