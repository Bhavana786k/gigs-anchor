package com.gigsanchor.services;

import com.gigsanchor.models.Claim;
import com.gigsanchor.models.Policy;
import com.gigsanchor.models.TriggerLog;
import com.gigsanchor.repositories.TriggerLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;
import java.util.Optional;

@Service
public class ClaimAutomationService {
    @Autowired
    private TriggerLogRepository triggerLogRepository;
    
    @Autowired
    private ClaimService claimService;
    
    @Autowired
    private PolicyService policyService;
    
    @Autowired
    private AIServiceClient aiServiceClient;

    public Claim simulateTriggerAndAutomateClaim(String triggerType, Long userId, String location) {
        // Log Trigger
        TriggerLog log = new TriggerLog();
        log.setType(triggerType);
        log.setLocation(location);
        triggerLogRepository.save(log);

        // Fetch Policy
        Optional<Policy> policyOpt = policyService.getPolicyByUserId(userId);
        if (policyOpt.isEmpty()) {
             return null;
        }

        // Simulate behavior inputs based on triggerType to showcase AI detection demo
        double movement = 0.2; 
        double orderAct = 0.3;
        double weatherValid = 0.1;
        
        if ("GPS_SPOOFING".equalsIgnoreCase(triggerType)) {
             movement = 0.95; // Suspicious static position
             orderAct = 0.95; // No deliveries done during "shift"
        } else if ("WEATHER_MISMATCH".equalsIgnoreCase(triggerType)) {
             weatherValid = 0.85; // Weather didn't match external APIs
        }

        Map<String, Object> fraudResult = aiServiceClient.calculateFraudScore(movement, orderAct, weatherValid, 0.1, 0.1);
        
        Double fraudScorePct = (Double) fraudResult.get("fraud_score");
        String decision = (String) fraudResult.get("decision");
        List<String> reasons = (List<String>) fraudResult.get("explanation");

        // Auto-create claim
        Claim claim = new Claim();
        claim.setUserId(userId);
        claim.setFraudScore(fraudScorePct);
        claim.setStatus(decision);
        
        Double premium = policyOpt.get().getPremium();
        claim.setAmount(premium * 3.0); // Arbitrary payout calculation for demo
        
        if (reasons != null && !reasons.isEmpty()) {
            claim.setReason(String.join(", ", reasons));
        }

        return claimService.createClaim(claim);
    }
}
