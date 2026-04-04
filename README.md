# GigsAnchor

AI-powered parametric insurance platform for food delivery partners.

## Core Features
- ⚡ **Parametric Automation Engine**: Generates trigger events and processes them identically to a real-world scenario without human intervention.
- 🧠 **AI Fraud Engine**: Uses Python logic mimicking ML to detect spoofing and weather-claim mismatch natively.
- 🎨 **Glassmorphism Theme**: Cutting-edge visual design created entirely via Vanilla CSS for optimal customization.

## Prerequisites
- Node.js & npm
- Python 3.9+ 
- Java 17 & Maven
- Docker Desktop (for MySQL) OR a local MySQL server instance running

## Quick Start
1. Ensure your MySQL server is running or execute `docker-compose up -d`.
   - Default config used by backend: `gigs_anchor` DB, user: `gigs_user`, pass: `gigs_password`.
2. Ensure database definitions from `schema.sql` are loaded (Docker does this automatically on first boot).

### Run AI Service (Port 8000)
```powershell
cd ai-service
.\venv\Scripts\activate.ps1
uvicorn main:app --reload --port 8000
```

### Run Spring Boot Backend (Port 8080)
```powershell
cd backend
mvn spring-boot:run
```

### Run React Frontend (Port 5173)
```powershell
cd frontend
npm run dev
```

Navigate to **http://localhost:5173** to witness the demo!
