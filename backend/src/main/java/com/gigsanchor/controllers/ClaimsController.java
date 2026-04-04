package com.gigsanchor.controllers;

import com.gigsanchor.models.Claim;
import com.gigsanchor.services.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/claims")
public class ClaimsController {
    @Autowired
    private ClaimService claimService;

    @PostMapping("/create")
    public ResponseEntity<?> createClaim(@RequestBody Claim claim) {
        return ResponseEntity.ok(claimService.createClaim(claim));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserIdClaims(@PathVariable Long userId) {
        return ResponseEntity.ok(claimService.getClaimsByUserId(userId));
    }
}
