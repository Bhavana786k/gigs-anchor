package com.gigsanchor.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Map;

@Service
public class PremiumService {
    @Autowired
    private AIServiceClient aiServiceClient;

    public Map<String, Object> calculatePremium(double rain, double aqi, double areaRisk, double workHours) {
        return aiServiceClient.calculateRiskScore(rain, aqi, areaRisk, workHours);
    }
}
