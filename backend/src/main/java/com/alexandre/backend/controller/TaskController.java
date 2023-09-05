package com.alexandre.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alexandre.backend.model.Task;
import com.alexandre.backend.model.form.TaskForm;
import com.alexandre.backend.service.impl.TaskServiceImpl;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskServiceImpl service;

    @GetMapping
    public List<Task> getAll(){
        return service.getAll();
    }
    @PostMapping 
    public Task create(@RequestBody TaskForm form){
        return service.create(form);
    }
    @GetMapping("/{id}")
    public Task get(@RequestParam(value = "id", required = true)Long id){
        return service.get(id);
    } 
}
