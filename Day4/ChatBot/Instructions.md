# 🌟 OpenRouter AI Chatbot 🤖✨

![Chatbot Banner](https://media.giphy.com/media/3oKIPwoeGErMmaI43C/giphy.gif)

A **smart AI chatbot** powered by **OpenRouter AI**, enabling **real-time conversations** between users and AI.

Built with: **HTML, CSS, JavaScript, Node.js, Express**.

---

## 💬 Project Overview

Welcome to your AI chatbot! 🚀

* Chat with an AI in **real-time**
* Easy-to-use frontend interface 🎨
* Integrated with **OpenRouter AI** for smart responses
* Learn **frontend-backend communication** + **API integration**

**AI Model Used:** `deepseek/deepseek-chat-v3.1:free`

---

## 🔥 Features

* 🌐 **Real-time chat** with AI
* 🎨 **Animated frontend UI**
* ⚡ **Fast backend responses**
* 🔒 **Secure API key authentication**
* 🌟 **CORS enabled** for smooth communication

---

## 🏗 Project Structure

### **1️⃣ Frontend**

* Built with **HTML, CSS & JS**
* Components:

  * **Title/Header** 🎨
  * **Input box** ✏️
  * **Send button** 💌
  * **Chat display area** 💡

![Frontend Demo](https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif)

### **2️⃣ Backend**

* Built with **Node.js & Express**
* Receives messages → sends to OpenRouter → returns AI response
* **CORS Enabled**: Allows frontend and backend on different ports

**CORS Explained:** 🌐
CORS (Cross-Origin Resource Sharing) allows the frontend (`localhost:5500`) to talk to the backend (`localhost:3001`) securely.

### **3️⃣ OpenRouter AI Integration**

* Access AI models via **OpenRouter API**
* **Free model**: `deepseek-chat-v3.1:free`
* **Get API Key**:

  1. Sign up at [OpenRouter AI](https://openrouter.ai/)
  2. Navigate to **API Keys**
  3. Generate a new key 🔑
  4. Add it to your backend

![API Key](https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif)

---

## 🚀 How the Chatbot Works

1. User types a message ✏️
2. Frontend sends it to backend 💌
3. Backend sends it to **OpenRouter AI** 🤖
4. AI generates response ⚡
5. Backend sends response to frontend 💡
6. Response is displayed in chat area

![Chatbot Interaction](https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif)

✨ Real-time communication for a **fluid chat experience**!

---

## ⚡ How to Run the Project

### **Backend Setup**

```bash
# Navigate to project folder
cd path/to/project

# Install dependencies
npm install express cors node-fetch@2

# Run backend server
node server.js
```

> Backend runs on `http://localhost:3001`

### **Frontend Setup**

1. Open `index.html` in your browser 🌐
2. Start chatting! 💬

> Make sure backend is running for AI responses.

---

## 💡 Key Points

* Keep your **API key secret** 🔒
* Backend must be running for chat to work
* Experiment with **different AI models**
* **CORS** allows smooth communication between frontend & backend

---

## 🎨 Screenshots / Demo

* **Type your message** ✏️
* **Click Send** 💌
* **Receive AI response instantly** ⚡

![Demo GIF](https://media.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.gif)

---

## 📌 Summary

You’ve built a **fully functional AI chatbot** powered by **OpenRouter AI**.
Connects a **friendly frontend** to a **backend server**, sending messages to an AI model and displaying responses **in real-time**.

Perfect for **learning AI integration** in web applications!

---

## ⭐ Technologies Used

| Frontend   | Backend | AI                        |
| ---------- | ------- | ------------------------- |
| HTML       | Node.js | OpenRouter AI             |
| CSS        | Express | `deepseek-chat-v3.1:free` |
| JavaScript | CORS    | API integration           |

---

## 🏷️ Badges

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter-AI-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

---

✅ This README now has:

* GIFs for animation
* Emojis for visual guidance
* Clean sections & formatting
* Clear run instructions
