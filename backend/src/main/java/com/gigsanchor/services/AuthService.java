package com.gigsanchor.services;

import com.gigsanchor.models.User;
import com.gigsanchor.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

    public User login(String email, String password) {
        Optional<User> opt = userRepository.findByEmail(email);
        if (opt.isPresent() && opt.get().getPassword().equals(password)) {
            return opt.get();
        }
        return null;
    }
}
