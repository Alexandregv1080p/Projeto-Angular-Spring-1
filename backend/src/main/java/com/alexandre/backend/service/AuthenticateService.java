package com.alexandre.backend.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.alexandre.backend.model.AuthenticationRequest;
import com.alexandre.backend.model.AuthenticationResponse;
import com.alexandre.backend.model.RegisterRequest;
import com.alexandre.backend.model.Role;
import com.alexandre.backend.model.UpdateProfileRequest;
import com.alexandre.backend.model.User;
import com.alexandre.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticateService {
    
    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                        .firstname(request.getFirstname())
                        .lastname(request.getLastname())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                 request.getPassword())
        );
        var user = repository.findByEmail(request.getEmail())
            .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
    }
    
    public void updateProfile(UpdateProfileRequest request, String userEmail) {
        Optional<User> optionalUser = repository.findByEmail(userEmail);
    
        try {
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                user.setFirstname(request.getFirstname());
                user.setLastname(request.getLastname());
                user.setEmail(request.getEmail());
    
                String newPassword = request.getPassword();
    
                String hashedPassword = passwordEncoder.encode(newPassword);
    
                user.setPassword(hashedPassword);
    
                repository.save(user);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public User findUserByEmail(String email) {
        return repository.findUserByEmail(email);
    }
    public boolean checkIfValidOldPassword(User user, String oldPassword) {
        return passwordEncoder.matches(oldPassword, user.getPassword());
    }
    public void changeUserPassword(User user, String newPassword) {
        user.setPassword(newPassword);
        repository.save(user);
    }
    
    
    
}
