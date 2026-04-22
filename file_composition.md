# File Composition

This document tracks the current file structure of the Ai-Agentic project.

```text
/home/rusydan/Ai-Agentic/
├── backend/               # FastAPI & Agentic Logic (LangGraph)
│   ├── main.py            # FastAPI Entry Point
│   ├── my_agent.py        # LangGraph Orchestration & Tools
│   ├── test_agent.py      # Backend Evaluation Tests
│   ├── backend.md         # Technical Spec for Design Tools
│   └── function.md        # Feature Overview
├── data/                  # SQLite Database Logic
│   ├── database.py        # Database operations
│   └── schema.sql         # SQL schema definition
├── frontend-next/         # Modern Next.js application
│   ├── app/               # Next.js App Router
│   │   ├── (auth)/        # Authentication group
│   │   │   └── login/     # Custom Login pages (Individual & Entrepreneur)
│   │   ├── (main)/        # Main application group (Sidebar & Dashboard)
│   │   ├── SidebarProvider/ # Custom Sidebar Layout implementation
│   │   ├── globals.css    # Global styles
│   │   └── layout.tsx     # Root layout
│   ├── components/        # React Components
│   │   ├── app-sidebar.tsx # Sidebar component definition
│   │   ├── theme/         # Theme management components
│   │   └── ui/            # Shadcn UI base components
│   ├── hooks/             # Custom React hooks (use-mobile.ts)
│   ├── lib/               # Utility functions
│   └── components.json    # Shadcn configuration
├── fronten_streamlit/     # Legacy Streamlit interface
│   ├── frontend.py        # Streamlit Chat Interface
│   └── design.md          # UI/UX Documentation
├── example-design/        # UI/UX Design assets and references
└── Makefile               # Automation commands
```

*Note: Sensitive files (.env), local environments (.venv), build artifacts (.next, dist), and database files (*.db) are tracked by .gitignore and excluded from this manifest.*
