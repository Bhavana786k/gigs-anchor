package com.gigsanchor.controllers;

import com.gigsanchor.models.Policy;
import com.gigsanchor.services.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/policy")
public class PolicyController {
    @Autowired
    private PolicyService policyService;

    @PostMapping("/create")
    public ResponseEntity<?> createPolicy(@RequestBody Policy policy) {
        return ResponseEntity.ok(policyService.createPolicy(policy));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getPolicy(@PathVariable Long userId) {
        return policyService.getPolicyByUserId(userId)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
