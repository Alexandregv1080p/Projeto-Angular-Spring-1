package com.alexandre.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alexandre.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
    
    Optional<User> findByEmail(String email);

    User findUserByEmail(String username);

    
}
