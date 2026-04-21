# Project Variables
PYTHON = ./.venv/bin/python3
STREAMLIT = ./.venv/bin/streamlit
PORT = 8501

.PHONY: run-ui run-next run-api test-back link-ext db-init help

# --- Help ---
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  run-ui      Start the Streamlit frontend at fronten_streamlit/frontend.py on port $(PORT)"
	@echo "  run-next    Start the Next.js frontend at frontend-next on port 3000"
	@echo "  run-api     Start the FastAPI backend server using uvicorn"
	@echo "  test-back   Run backend/test_agent.py using PYTHONPATH"
	@echo "  link-ext    Link the backend folder as a Gemini CLI extension"
	@echo "  db-init     Initialize the SQLite database with sample data"

# --- Frontend ---
run-ui:
	@echo "Starting Streamlit frontend..."
	$(STREAMLIT) run fronten_streamlit/frontend.py --server.port $(PORT)

run-next:
	@echo "Starting Next.js frontend..."
	cd frontend-next && npm run dev

# --- API ---
run-api:
	@echo "Starting FastAPI backend..."
	PYTHONPATH=. $(PYTHON) -m uvicorn backend.main:app --reload

# --- Backend ---
test-back:
	@echo "Running backend tests..."
	PYTHONPATH=. $(PYTHON) -m backend.test_agent

link-ext:
	@echo "Linking backend extension..."
	gemini extensions link backend

# --- Database ---
db-init:
	@echo "Initializing database..."
	$(PYTHON) data/database.py



