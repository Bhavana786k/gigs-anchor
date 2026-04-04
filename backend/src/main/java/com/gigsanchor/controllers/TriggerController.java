package com.gigsanchor.controllers;

import com.gigsanchor.models.Claim;
import com.gigsanchor.services.ClaimAutomationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/triggers")
public class TriggerController {
    @Autowired
    private ClaimAutomationService claimAutomationService;

    @PostMapping("/simulate")
    public ResponseEntity<?> simulateTrigger(@RequestBody Map<String, Object> payload) {
        String type = (String) payload.get("type");
        Long userId = Long.valueOf(payload.get("userId").toString());
        String location = (String) payload.get("location");

        Claim resultingClaim = claimAutomationService.simulateTriggerAndAutomateClaim(type, userId, location);
        
        if (resultingClaim == null) {
             return ResponseEntity.badRequest().body("No active policy found for user.");
        }
        return ResponseEntity.ok(resultingClaim);
    }
}
