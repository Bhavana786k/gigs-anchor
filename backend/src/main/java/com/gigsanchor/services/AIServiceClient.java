package com.gigsanchor.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.HashMap;

@Service
public class AIServiceClient {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String AI_BASE_URL = "http://localhost:8000/api/ai";

    public Map<String, Object> calculateRiskScore(double rain, double aqi, double areaRisk, double workHours) {
        Map<String, Object> request = new HashMap<>();
        request.put("rain_probability", rain);
        request.put("aqi_level", aqi);
        request.put("area_risk", areaRisk);
        request.put("working_hours_factor", workHours);

        ResponseEntity<Map> response = restTemplate.postForEntity(AI_BASE_URL + "/risk-score", request, Map.class);
        return response.getBody();
    }

    public Map<String, Object> calculateFraudScore(double movement, double order, double weather, double frequency, double timeConsistent) {
        Map<String, Object> request = new HashMap<>();
        request.put("movement_pattern_score", movement);
        request.put("order_activity_score", order);
        request.put("weather_validation_score", weather);
        request.put("claim_frequency_score", frequency);
        request.put("time_consistency_score", timeConsistent);

        ResponseEntity<Map> response = restTemplate.postForEntity(AI_BASE_URL + "/fraud-score", request, Map.class);
        return response.getBody();
    }
}
