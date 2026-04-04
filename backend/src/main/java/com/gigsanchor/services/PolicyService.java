package com.gigsanchor.services;

import com.gigsanchor.models.Policy;
import com.gigsanchor.repositories.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class PolicyService {
    @Autowired
    private PolicyRepository policyRepository;

    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    public Optional<Policy> getPolicyByUserId(Long userId) {
        return policyRepository.findByUserId(userId);
    }
}
