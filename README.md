# 🤖 UsTerprise AI-Agentic Console

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![LangGraph](https://img.shields.io/badge/LangGraph-232F3E?style=for-the-badge&logo=langchain)](https://langchain-ai.github.io/langgraph/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

An advanced, AI-driven Ecommerce Support ecosystem that leverages agentic reasoning to automate order management, providing a seamless experience for both businesses and customers.

---

## 🏗 Architecture Overview

This project is built on a **Modular Micro-Stack** architecture, separating concerns between a highly reactive frontend, a robust intelligence-driven backend, and a persistent data layer.

### 🌟 Why Python for Backend?

Python was chosen as the primary backend language because it is the **industry standard for AI and Machine Learning**. Its extensive ecosystem allows for:

- **Seamless AI Integration**: Direct access to LLM frameworks like LangChain and Google Generative AI.
- **Agentic Reasoning**: Efficient state management for complex logic workflows.
- **Rapid Prototyping**: Fast development cycles for API endpoints using FastAPI.

---

## 🛠 Tech Stack

### **Intelligence & Logic (Backend)**

- **[LangGraph](https://langchain-ai.github.io/langgraph/)**: The backbone of our Agentic logic. It manages the agent's state and circular workflows (Cycles).
- **[Google Gemini 2.5 Flash](https://deepmind.google/technologies/gemini/)**: The LLM "Brain" that processes natural language and makes tool-calling decisions.
- **[FastAPI](https://fastapi.tiangolo.com/)**: A modern, high-performance web framework for building APIs with Python.
- **[SQLite](https://www.sqlite.org/)**: Lightweight relational database for persistent order storage.

### **Experience (Frontend)**

- **[Next.js 15+](https://nextjs.org/)**: React 19 framework for building high-performance user interfaces.
- **[Shadcn UI](https://ui.shadcn.com/)**: Accessible components built with Radix UI.
- **[Styled Components](https://styled-components.com/)**: For advanced, dynamic CSS-in-JS styling and custom layouts.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS for responsive design and dark mode.
- **[Lucide React](https://lucide.dev/)**: For a consistent and professional icon system.
- **[Next Themes](https://github.com/pacocoursey/next-themes)**: For seamless dark/light mode management.

---

## 🚀 Key Features

- **✅ Agentic Order Support**: The AI can independently query, create, or cancel orders based on business logic.
- **🧠 Persistent Memory**: Uses `MemorySaver` to remember user context across different sessions (Thread-based persistence).
- **✨ Dynamic Fact Generation**: The agent generates interesting product facts based on the `item_type` in the database.
- **🌓 Dark Mode**: Full support for system-based or manual dark/light mode toggling.
- **🔐 Secure Access**: Professional, designed login portal with session handling.

---

## 📂 Project Structure

```text
/
├── fronten_streamlit/     # Legacy Streamlit interface
├── frontend-next/         # Modern Next.js application
├── backend/               # FastAPI & Agentic Logic (LangGraph)
├── data/                  # SQLite Database & Database Logic
├── example-design/        # UI/UX Design assets and references
└── Makefile               # Automation commands
```

---

## 🚦 Getting Started

### 1. Prerequisites

- Python 3.12+
- Node.js 18+
- Google Gemini API Key

### 2. Setup Backend

```bash
# Initialize database
make db-init

# Start FastAPI server
make run-api
```

### 3. Setup Frontend

```bash
# Navigate to frontend and install dependencies
cd frontend-next
npm install

# Start development server
npm run dev
```

### 4. Credentials for Testing(Choose Enterprise)

- **Email**: `tester@enterprise.com`
- **Company Name**: `tester123`
- **Password**: `12345`

---

## ⚖️ License

This project is for demonstration purposes for **UsTerprise Solutions**.

---

_Built with By Rusydan Eiman_
