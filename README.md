# VN History RAG

An AI-powered Vietnamese history chatbot using **Retrieval-Augmented Generation (RAG)** to deliver contextual and document-based answers.

This project provides a web interface that helps users explore Vietnamese history through natural language questions. The system connects to a backend hosted on **Hugging Face Spaces**, where the RAG pipeline retrieves relevant historical context and generates answers.

---

## 🌐 Live Demo

Try the application here:

👉 https://vn-history-rag.vercel.app/

---

## 🔗 Backend

The backend is deployed on Hugging Face Spaces:

👉 https://huggingface.co/spaces/SangDinhVan/RAG_History_SPACE/tree/main

---

## ✨ Features

- 🇻🇳 Vietnamese history question answering
- 🔎 Retrieval-Augmented Generation for contextual responses
- 📚 Document-based historical knowledge retrieval
- 💬 Chatbot-style interaction
- ⚡ Backend hosted on Hugging Face Spaces
- ☁️ Web app deployed with Vercel

---

## 🧠 About the Project

**VN History RAG** is designed to support learning and exploring Vietnamese history in a more interactive way.

Instead of answering only from a model’s internal knowledge, the system uses a RAG approach: it retrieves relevant information from historical documents first, then generates an answer based on that context. This helps make responses more grounded, useful, and suitable for history-related questions.

---

## 🛠️ Tech Stack

- Frontend: React / Vite
- Deployment: Vercel
- Backend: Hugging Face Spaces
- AI Method: Retrieval-Augmented Generation
- Language: Vietnamese

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/SangDinhVan/VN-history-RAG.git
cd VN-history-RAG
```

Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://huggingface.co/spaces/SangDinhVan/RAG_History_SPACE
```

Update the value if your backend endpoint is different.

---

## ▶️ Run Locally

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

---

## ☁️ Deploy on Vercel

1. Push this project to GitHub
2. Import the repository into Vercel
3. Add the environment variable:

```env
VITE_API_URL=https://huggingface.co/spaces/SangDinhVan/RAG_History_SPACE
```

4. Deploy the project

---

## 📁 Project Structure

```text
VN-history-RAG/
├── public/
├── src/
├── package.json
├── vite.config.js
└── README.md
```

---

## 📌 Note

The RAG backend, model logic, document retrieval pipeline, and related AI components are hosted separately on Hugging Face Spaces.

This repository focuses on the web application interface and its connection to the deployed backend service.

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Developed by SangDinhVan
