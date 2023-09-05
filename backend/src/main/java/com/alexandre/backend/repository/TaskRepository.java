package com.alexandre.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexandre.backend.model.Task;

public interface TaskRepository extends JpaRepository<Task,Long>{
    
}
