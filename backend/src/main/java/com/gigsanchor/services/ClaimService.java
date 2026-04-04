package com.gigsanchor.services;

import com.gigsanchor.models.Claim;
import com.gigsanchor.repositories.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClaimService {
    @Autowired
    private ClaimRepository claimRepository;

    public Claim createClaim(Claim claim) {
        return claimRepository.save(claim);
    }

    public List<Claim> getClaimsByUserId(Long userId) {
        return claimRepository.findByUserId(userId);
    }
}
