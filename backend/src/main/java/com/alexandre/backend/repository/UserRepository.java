package com.alexandre.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexandre.backend.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{
    
}