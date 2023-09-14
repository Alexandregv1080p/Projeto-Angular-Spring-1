package com.alexandre.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alexandre.backend.model.Client;
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
    @PutMapping(value = "/{id}")
    public Task updateTask(@PathVariable Long id,@RequestBody TaskForm form){
        return service.update(id,form);
    }
    @GetMapping(value = "/{id}")
    @ResponseBody
    public Task get(@PathVariable Long id){
        return service.get(id);
    }
}
