package com.gigsanchor.controllers;

import com.gigsanchor.services.PremiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/premium")
public class PremiumController {
    @Autowired
    private PremiumService premiumService;

    @GetMapping("/calculate")
    public ResponseEntity<?> calculatePremium(
            @RequestParam double rain, 
            @RequestParam double aqi, 
            @RequestParam double areaRisk, 
            @RequestParam double workHours) {
        Map<String, Object> response = premiumService.calculatePremium(rain, aqi, areaRisk, workHours);
        return ResponseEntity.ok(response);
    }
}
