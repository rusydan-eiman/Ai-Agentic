# File Composition

This document tracks the current file structure of the Ai-Agentic project.

```text
/home/rusydan/Ai-Agentic/
├── fronten_streamlit/
│   ├── frontend.py        # Streamlit Chat Interface
│   └── design.md          # UI/UX Documentation
├── frontend-next/         # Next.js Frontend Application
│   ├── app/               # Next.js App Router
│   │   ├── header/        # Header components
│   │   └── sidebar/       # Sidebar components
│   ├── components/        # Shadcn UI components
│   │   ├── theme/         # Dedicated theme components folder
│   │   │   └── ModeToggle.tsx
│   │   ├── ui/            # Base shadcn components
│   │   └── theme-provider.tsx
│   ├── lib/               # Utility functions (utils.ts)
│   └── components.json    # Shadcn configuration
├── example-design/        # Design examples and assets
├── backend/
│   ├── __init__.py
│   ├── main.py            # FastAPI Entry Point (for Next.js integration)
│   ├── my_agent.py        # LangGraph Orchestration & Tools
│   ├── test_agent.py      # Backend Evaluation Tests
│   ├── backend.md         # Technical Spec for Design Tools
│   └── function.md        # Feature Overview
├── data/
│   ├── __init__.py
│   ├── database.py        # SQLite Database Logic
│   ├── orders.db          # SQLite Database File
│   └── schema.sql         # MySQL Migration Schema
├── file_composition.md    # Project structure manifest (this file)
├── Makefile               # Project automation commands
├── resume.md              # Resume keypoints (ignored by git)
├── .env                   # API Keys
└── .venv/                 # Virtual Environment
```
