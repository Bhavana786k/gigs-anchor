package com.gigsanchor.controllers;

import com.gigsanchor.models.User;
import com.gigsanchor.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        return ResponseEntity.ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> creds) {
        User user = authService.login(creds.get("email"), creds.get("password"));
        if (user != null) return ResponseEntity.ok(user);
        return ResponseEntity.status(401).body("Invalid Credentials");
    }
}
