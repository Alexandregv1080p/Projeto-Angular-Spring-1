package com.alexandre.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alexandre.backend.model.AuthenticationRequest;
import com.alexandre.backend.model.AuthenticationResponse;
import com.alexandre.backend.model.RegisterRequest;
import com.alexandre.backend.model.UpdateProfileRequest;
import com.alexandre.backend.model.User;
import com.alexandre.backend.repository.UserRepository;
import com.alexandre.backend.service.AuthenticateService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticateService authenticateService;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticateService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticateService.authenticate(request));
    }

    @GetMapping("/user-profile")
    public ResponseEntity<UserDetails> getUserProfile(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(userDetails);
    }

    @PutMapping("/update-profile")
    public ResponseEntity<Void> updateProfile(
            @RequestBody UpdateProfileRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        authenticateService.updateProfile(request, userDetails.getUsername());

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/change-password")
    public ResponseEntity<Void> changePassword(
        @RequestParam("newPassword") String newPassword,
        @RequestParam("oldPassword") String oldPassword,
        @AuthenticationPrincipal UserDetails userDetails) {

    User user = userRepository.findUserByEmail(userDetails.getUsername());

    if (!authenticateService.checkIfValidOldPassword(user, oldPassword)) {
        throw new InvalidOldPasswordException();
    }

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    String novaSenhaCodificada = encoder.encode(newPassword);

    user.setPassword(novaSenhaCodificada);
    userRepository.save(user);

    return ResponseEntity.noContent().build();
}

}
