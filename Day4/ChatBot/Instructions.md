# **Chatbot Project Using OpenRouter AI**

## **Project Overview**

This project demonstrates how to create a **web-based chatbot** using **OpenRouter AI**. The chatbot allows users to type messages in a frontend interface, sends these messages to an AI model on the backend, and displays AI-generated responses in real-time.

The AI model used is the **free version**: `tngtech/deepseek-r1t2-chimera:free`.

This project is perfect for learning:

* How frontend and backend communicate.
* How to integrate AI models into web applications.
* How to use APIs with authentication keys.

---

## **Project Structure**

### **1. Frontend**

* Built with **HTML, CSS, and JavaScript**.
* Features:

  * A **title/header** to indicate the app.
  * A **button** to send user messages.
  * A **display area** to show AI responses.
* Provides a **user-friendly interface** to interact with the chatbot.

### **2. Backend**

* Built with **Node.js and Express**.
* Responsibilities:

  * Receives messages from the frontend.
  * Sends them to the **OpenRouter API**.
  * Returns AI responses to the frontend.
* Uses **CORS** to allow communication between frontend and backend (different ports).

### **3. OpenRouter AI Integration**

* OpenRouter provides an API to access various AI models.
* The project uses the **free model**: `tngtech/deepseek-r1t2-chimera:free`.
* Steps to get an **API Key**:

  1. Go to [OpenRouter AI](https://openrouter.ai/).
  2. Sign up or log in.
  3. Navigate to the **API Keys** section.
  4. Click **Generate New Key**.
  5. Copy the key and use it in your backend server to authenticate requests.

---

## **How the Chatbot Works**

1. User types a message in the frontend and clicks the **Send/Get Data** button.
2. The frontend sends the message to the backend API endpoint (`/api/chat`) using `fetch`.
3. The backend sends the message to **OpenRouter AI** using your API key.
4. The AI model processes the message and returns a response.
5. The backend sends the AI response back to the frontend.
6. The frontend displays the response in the **output area**.

---

## **How to Run the Project**

### **Backend**

1. Install Node.js and npm.
2. Install dependencies:

   ```bash
   npm install express cors node-fetch@2
   ```
3. Add your **OpenRouter API key** in the backend code.
4. Run the backend server:

   ```bash
   node server.js
   ```
5. The backend runs on `http://localhost:3001`.

### **Frontend**

1. Open the HTML file in a browser.
2. Click the **Get Data from Backend** button to interact with the chatbot.

---

## **Adding Images in this README**

You can add images in this `instruction.md` to explain the project better:

```markdown
![Chatbot UI Screenshot](images/chatbot.png)
```

* **`images/chatbot.png`** should be in your repository folder.
* Or use a web URL directly:

```markdown
![OpenRouter Logo](https://openrouter.ai/logo.png)
```

---

## **Key Points**

* Make sure your **backend server** is running before sending requests from the frontend.
* Keep your **API key secret**; don’t push it publicly.
* You can experiment with **different AI models** offered by OpenRouter (free or paid).
