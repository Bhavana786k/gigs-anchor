<<<<<<< HEAD
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
=======
# 🚀 GigsAnchor

## AI-Powered Parametric Insurance for Food Delivery Partners

---

## 🧠 Overview

GigsAnchor is an AI-driven parametric insurance platform designed to protect food delivery partners (Swiggy, Zomato) from income loss caused by external disruptions such as:

* 🌧️ Heavy rain & floods
* 🌡️ Extreme heat
* 🌫️ Severe air pollution
* 🚧 Curfews / social disruptions

These disruption types directly impact a delivery partner’s ability to work and earn.

Unlike traditional insurance, GigsAnchor is:

* ✅ Fully automated
* ✅ Real-time data driven
* ✅ AI-powered
* ✅ Fraud-resistant
* ✅ Weekly subscription based

---

## 🎯 Problem Statement

Food delivery partners rely on daily earnings. External disruptions like heavy rainfall, extreme heat, or pollution reduce working hours and directly impact income.

👉 GigsAnchor provides **automatic income protection** without requiring manual claim filing.

---

## 🧑‍🍳 Persona Focus: Food Delivery Partners

* Peak working hours: Lunch & Dinner
* Income depends on active delivery time
* Highly affected by weather conditions
* No financial safety net for disruptions

---

## 💳 Dynamic Weekly Premium Model (AI-Based)

Instead of fixed plans, GigsAnchor uses **dynamic pricing based on risk**.

```
Premium = Base Price + Risk Adjustment
```

### 📊 Risk Factors:

* Rain probability
* Air Quality Index (AQI)
* Area risk (historical disruptions)
* Working hours

### 📌 Example:

| Risk Level  | Premium  |
| ----------- | -------- |
| Low Risk    | ₹58/week |
| Medium Risk | ₹72/week |
| High Risk   | ₹88/week |

👉 Users can see **why their premium changes** (AI explainability).

---

## ⚙️ Tech Stack

| Layer            | Technology Used                    |
| ---------------- | ---------------------------------- |
| Frontend         | ReactJS                            |
| Backend (Core)   | Spring Boot                        |
| AI / ML Services | FastAPI                            |
| Database         | MySQL                              |
| APIs             | OpenWeather, OpenAQ (or mock APIs) |

---

## ⚙️ How It Works

### 🔄 Continuous Monitoring System

* System checks conditions every **30 minutes**
* Each check generates a **trigger event**
* Triggers are stored and evaluated

---

## 🌍 Disruption Detection System

### 🌧️ Environmental Triggers (Automatic)

* Weather Data → OpenWeather
* Air Quality Data → OpenAQ

### 🌪️ Conditions Covered

* 🌧️ Heavy Rain / Flooding
* 🌡️ Extreme Heat
* 🌫️ Severe Pollution

---

### 🚧 Social Triggers (Hybrid)

**Automatic:**

* News monitoring (NLP / GDELT)

**Manual:**

* Admin-triggered curfews or strikes

---

## 📊 Trigger Rule

```
Trigger check interval: 30 minutes  
Minimum triggers required: 6  
```

👉 6 triggers = **3 hours disruption**

---

## ⚡ Trigger → Action Flow

```
1. Detect disruption (environmental/social)
2. Generate trigger every 30 minutes
3. Store triggers
4. If triggers ≥ 6 → VALID DISRUPTION
5. Auto-create claim
6. Send to AI fraud detection
```

👉 Social disruptions can trigger **instant claims**

---

## 🔄 Claim Triggering Logic

```
Environmental triggers ≥ 6
OR
Social disruption detected
```

---

## 🧾 Claim Lifecycle

```
PENDING → VERIFIED → APPROVED → PAID
```

---

## 💸 Payout Logic

* Based on duration of disruption
* Adjusted using AI risk + plan

### 📊 Example

| Duration | Triggers   | Payout |
| -------- | ---------- | ------ |
| 1 hour   | 2 triggers | ₹50    |
| 3 hours  | 6 triggers | ₹150   |

👉 Premium users may receive **higher payout multipliers**

---

## 🧠 AI Risk Assessment Engine

The AI system evaluates:

* Weather forecasts
* Pollution levels
* Historical disruption patterns
* Location-based risks

### Outputs:

* Risk Score (0–1)
* Dynamic Premium
* Risk Category (Low / Medium / High)

---

## 🛡️ AI Fraud Detection System

Each claim is evaluated using a **Fraud Score (0–100%)**

### 📊 Factors:

| Factor              | Description                  |
| ------------------- | ---------------------------- |
| 🛵 Order Activity   | Deliveries during disruption |
| ⏱️ Time Consistency | Matching timestamps          |
| 📍 Movement Pattern | Real vs static movement      |
| 🔁 Claim Behavior   | Repeated suspicious claims   |
| 🌦️ Weather Match   | Claim vs actual weather      |

---

## 📈 Fraud Score Interpretation

| Score Range | Meaning     | Action           |
| ----------- | ----------- | ---------------- |
| 0–30%       | Low Risk    | ✅ Auto Approved  |
| 31–70%      | Medium Risk | ⚠️ Manual Review |
| 71–100%     | High Risk   | ❌ Rejected       |

---

## ⚠️ Core Fraud Rule

```
IF:
- No delivery activity
- No movement detected
- Continuous disruption triggers

THEN:
→ High fraud score
→ Claim flagged
```

---

## 🧠 Anti-Spoofing Strategy

To prevent GPS spoofing:

* Movement pattern tracking
* Order activity validation
* Behavioral consistency analysis
* Weather vs location verification

👉 Ensures only **genuine claims are approved**

---

## 🔍 Fraud Intelligence Example

```
Fraud Score: 78% (HIGH RISK)

Reasons:
- No movement detected
- No delivery activity
- Weather mismatch
```

---

## 💸 Payout System (Simulated)

```
PENDING → VERIFIED → APPROVED → PAID
```

👉 Example UI:

```
"₹150 credited to wallet"
```

---

## 🎮 Live Simulation Engine

To enable smooth demo:

* 🌧️ Simulate Rain
* 🌫️ Simulate Pollution

👉 Instantly triggers:

* Disruption detection
* Claim creation
* Fraud validation
* Payout

---

## 📊 Dashboard

### 👤 Worker Dashboard:

* Active policy
* Risk level
* Claims history
* Earnings protected

### 🧑‍💼 Admin Dashboard:

* Total claims
* Fraud detection rate
* Risk zones
* Payout analytics

---

## 📡 System Architecture

```
                 ReactJS Frontend
                        ↓
                Spring Boot Backend
                        ↓
┌───────────────┬───────────────┬───────────────┐
│               │               │               │
MySQL DB   FastAPI (AI)   External APIs   Admin Controls
                │
        Risk Engine + Fraud Detection
```

---

## 🔄 System Workflow

```
1. User registers and selects work profile
2. AI calculates risk & weekly premium
3. Policy is created
4. System monitors disruptions every 30 minutes
5. Triggers accumulate
6. Claim auto-generated
7. Fraud score calculated
8. Claim approved/rejected
9. Payout processed
```

---

## ✨ Key Features

* ⚡ Fully automated claims
* 🤖 AI-powered pricing & fraud detection
* 📊 Real-time risk scoring
* 🛡️ Anti-GPS spoofing
* 💳 Dynamic weekly premium
* 🎮 Live demo simulation
* 📡 Hybrid disruption detection

---

## 🎯 Final Vision

* Protect delivery partners’ income
* Ensure fair payouts
* Prevent fraud using AI
* Build trust in gig economy insurance

---

## 💡 One-Line Pitch

> “GigsAnchor automatically protects food delivery partners’ income using AI-driven risk pricing, real-time disruption tracking, and zero-touch claim payouts.”


>>>>>>> 20f2978585395a850f4cefad4354fb29f2b56cc6
