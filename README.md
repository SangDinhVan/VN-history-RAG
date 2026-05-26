# VN History RAG 

Frontend web interface for a Vietnamese history question-answering chatbot using **Retrieval-Augmented Generation (RAG)**.

This repository contains only the **UI/frontend**.  
The backend RAG API is deployed separately on **Hugging Face Spaces**.

---

## 🌐 Live Demo

Coming soon...

---

## 🔗 Backend API

Backend deployed on Hugging Face Spaces:

```env
VITE_API_URL=your_huggingface_backend_url
```

---

## ✨ Features

- 🇻🇳 Vietnamese history Q&A interface
- 💬 Chatbot-style user experience
- 🔎 Connects to a RAG backend API
- 📱 Responsive frontend layout
- ☁️ Ready for Vercel deployment

---

## 🧠 About

**VN History RAG UI** is the frontend interface for a Vietnamese history chatbot.

Users can ask questions about Vietnamese history, and the UI sends requests to a backend RAG service hosted on Hugging Face Spaces. The backend handles document retrieval and answer generation.

---

## 🚀 Tech Stack

- Frontend: React / Vite
- Deployment: Vercel
- Backend: Hugging Face Spaces
- Method: Retrieval-Augmented Generation

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

Create a `.env` file:

```env
VITE_API_URL=your_huggingface_backend_url
```

Example:

```env
VITE_API_URL=https://your-space-name.hf.space
```

---

## ▶️ Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

---

## ☁️ Deploy on Vercel

1. Push this frontend project to GitHub
2. Import the repository into Vercel
3. Add the environment variable:

```env
VITE_API_URL=your_huggingface_backend_url
```

4. Deploy 🚀

---

## 📁 Project Structure

```text
VN-history-RAG/
├── src/
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## 📌 Note

This repository does **not** include the backend, model, vector database, or RAG pipeline.  
Those components are hosted separately on Hugging Face Spaces.

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Developed by SangDinhVan
