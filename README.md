# 🚀 GigsAnchor

## AI-Powered Parametric Insurance for Gig Workers

\---

## 🧠 Overview

GigsAnchor is an AI-driven parametric insurance platform designed to protect food delivery partners (Zomato, Swiggy) from income loss caused by external disruptions such as:

* 🌧️ Heavy rain \& floods
* 🌡️ Extreme heat
* 🌫️ Severe air pollution
* 🚧 Curfews / social disruptions

These disruption types are aligned with real-world scenarios where workers cannot operate or access delivery zones.

Unlike traditional insurance, this system is:

* ✅ Fully automated
* ✅ Real-time data driven
* ✅ Fraud-resistant
* ✅ Weekly subscription based

\---

## 💳 Weekly Premium Plans

The platform follows a simple weekly pricing model, aligned with gig workers’ earning cycles.

|Plan|Price|Coverage|
|-|-|-|
|🟢 Basic|₹59|Standard payout rates|
|🔵 Premium|₹79|Higher payout + priority claims|

👉 Workers can choose plans based on their risk exposure and working hours.

\---

## ⚙️ Tech Stack

|Layer|Technology Used|
|-|-|
|Frontend|ReactJS|
|Backend (Core)|Spring Boot|
|AI / ML Services|FastAPI|
|Database|MySQL|

\---

## ⚙️ How It Works

### 🔄 Continuous Monitoring System

* The system evaluates conditions every 30 minutes
* Each evaluation generates a trigger event
* Triggers are stored and analyzed over time

\---

## 🌍 Disruption Detection System

### 🌧️ Environmental Triggers (Automatic)

* Weather Data → OpenWeather
* Air Quality Data → OpenAQ

### 🌪️ Environmental Conditions Covered

* 🌧️ Heavy Rain / Flooding
* 🌡️ Extreme Heat
* 🌫️ Severe Pollution

👉 These conditions can halt deliveries and reduce income.

\---

### 🚧 Social Triggers (Hybrid: Automatic + Manual)

**Automatic:**

* News monitoring (GDELT, NLP)

**Manual:**

* Admin-triggered curfew / riots
* Location + notes

\---

## 📊 Trigger Rule

```
Trigger check interval: 30 minutes  
Minimum triggers required: 6  
```

👉 6 triggers = 3 hours disruption

\---

## ⚡ Trigger → Action Flow

```
1. Detect disruption (env/social)
2. Generate trigger every 30 min
3. Store triggers
4. If triggers ≥ 6 → VALID DISRUPTION
5. Auto-create claim
6. Send to fraud detection
```

👉 Social disruptions (auto/manual) can directly trigger claims without waiting.

\---

## 🔄 Claim Triggering Logic

```
Environmental triggers ≥ 6
OR
Social disruption detected
```

\---

## 🧾 Claim Lifecycle

```
PENDING → VERIFIED → PAID
```

\---

## 💸 Payout Logic

* Based on duration of disruption
* Adjusted by selected plan

### 📊 Example

|Duration|Triggers|Payout|
|-|-|-|
|1 hour|2 triggers|₹50|
|3 hours|6 triggers|₹150|

👉 Premium users may receive higher payout multipliers.

\---

## 🛡️ Fraud Detection System

The system uses AI-powered fraud scoring (FastAPI) to validate claims.

\---

## 📊 Fraud Score (0–100%)

Each claim is assigned a fraud score based on:

|Factor|Description|
|-|-|
|🛵 Order Activity|Deliveries during disruption|
|⏱️ Time Consistency|Matching timestamps|
|📍 Movement Pattern|Real vs static movement|
|🔁 Claim Behavior|Repeated suspicious claims|

\---

## 🧠 Fraud Score Interpretation

|Score Range|Meaning|Action|
|-|-|-|
|0–30%|Low risk|✅ Auto-approve|
|31–70%|Medium risk|⚠️ Manual review / delay|
|71–100%|High risk|❌ Reject / flag|

\---

## ⚠️ Core Fraud Rule

```
IF:
- No delivery activity
AND
- Continuous disruption triggers

THEN:
→ High fraud score
→ Claim flagged
```

\---

## 🧠 Anti-Spoofing Strategy

Instead of relying only on GPS, the system validates:

* Work activity (orders)
* Movement patterns
* Behavioral consistency

👉 Prevents GPS spoofing fraud.

\---

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
        Fraud Detection / Weather / Social Data
```

\---

## 🔄 System Workflow

```
1. Fetch environmental \& social data
2. Generate triggers (every 30 min)
3. Validate trigger threshold
4. Create claim
5. Calculate fraud score (FastAPI)
6. Approve / review / reject
7. Delay 24 hours
8. Credit payout
```

\---

## 📊 Trigger Summary

|Type|Source|Mode|
|-|-|-|
|Weather|OpenWeather|Automatic|
|Pollution|OpenAQ|Automatic|
|Social (AI)|GDELT / NLP models|Automatic|
|Social (Admin)|Admin Dashboard|Manual|

\---

## ✨ Key Features

* ⚡ Fully automated claims
* ⏱️ 30-minute monitoring cycle
* 📊 6-trigger validation system
* 🤖 AI fraud scoring (0–100%)
* 🛡️ Anti-GPS spoofing
* 💳 Weekly plans (₹59 / ₹79)
* 🔄 Hybrid disruption detection
* 💸 24-hour payout delay

\---

## 🎯 Final Vision

* Protect Zomato \& Swiggy delivery partners’ income
* Ensure fair, unbiased payouts
* Build trust through intelligent fraud detection

\---

## 💡 One-Line Pitch

> “GigsAnchor is an AI-powered parametric insurance platform that automatically compensates food delivery partners when disruptions stop them from earning — using real-time triggers, fraud detection, and weekly micro-insurance.”

\---

## 📌 Future Improvements

* Real-time notifications
* Advanced ML fraud models
* Platform API integration
* Hyper-local risk prediction
* Dynamic premium pricing

