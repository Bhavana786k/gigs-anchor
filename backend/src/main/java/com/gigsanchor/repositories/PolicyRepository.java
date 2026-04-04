package com.gigsanchor.repositories;
import com.gigsanchor.models.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
public interface PolicyRepository extends JpaRepository<Policy, Long> {
    Optional<Policy> findByUserId(Long userId);
}
