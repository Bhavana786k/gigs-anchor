from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="GigsAnchor AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RiskRequest(BaseModel):
    rain_probability: float
    aqi_level: float
    area_risk: float
    working_hours_factor: float

class FraudRequest(BaseModel):
    movement_pattern_score: float
    order_activity_score: float
    weather_validation_score: float
    claim_frequency_score: float
    time_consistency_score: float

@app.post("/api/ai/risk-score")
def calculate_risk_score(request: RiskRequest):
    # Risk Score = (Rain * 0.4) + (AQI_normalized * 0.3) + (AreaRisk * 0.2) + (WorkHours * 0.1)
    aqi_norm = min(request.aqi_level / 500.0, 1.0)
    
    risk_score = (request.rain_probability * 0.4) + \
                 (aqi_norm * 0.3) + \
                 (request.area_risk * 0.2) + \
                 (request.working_hours_factor * 0.1)
                 
    premium = 50 + (risk_score * 50)
    
    category = "Low"
    if risk_score > 0.6:
        category = "High"
    elif risk_score > 0.3:
        category = "Medium"
        
    return {
        "risk_score": risk_score,
        "weekly_premium": premium,
        "risk_category": category,
        "message": f"Premium computed due to {category} risk factors."
    }

@app.post("/api/ai/fraud-score")
def calculate_fraud_score(request: FraudRequest):
    fraud_score_pct = (request.movement_pattern_score * 0.3 + 
                   request.order_activity_score * 0.2 +
                   request.weather_validation_score * 0.2 +
                   request.claim_frequency_score * 0.2 +
                   request.time_consistency_score * 0.1) * 100
                   
    # Anti-Spoofing & Market Crash requirement
    if request.movement_pattern_score > 0.9 and request.order_activity_score > 0.9:
         fraud_score_pct = max(fraud_score_pct, 85.0)

    decision = "REVIEW"
    reasons = []
    
    if fraud_score_pct <= 30:
        decision = "APPROVED"
        reasons.append("All patterns normal.")
    elif fraud_score_pct <= 70:
        decision = "REVIEW"
        if request.weather_validation_score > 0.5:
            reasons.append("Weather mismatch.")
    else:
        decision = "REJECTED"
        if request.movement_pattern_score > 0.8:
            reasons.append("No movement detected (GPS spoofing).")
        if request.order_activity_score > 0.8:
            reasons.append("No delivery activity.")

    if not reasons:
        if decision == "REJECTED":
            reasons.append("High overall suspicion index.")
        elif decision == "REVIEW":
            reasons.append("Needs manual review.")

    return {
        "fraud_score": fraud_score_pct,
        "decision": decision,
        "explanation": reasons
    }

@app.get("/health")
def health():
    return {"status": "ok"}
