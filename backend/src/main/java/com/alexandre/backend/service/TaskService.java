package com.alexandre.backend.service;

import java.util.List;

import com.alexandre.backend.model.Task;
import com.alexandre.backend.model.form.TaskForm;

public interface TaskService {
    
    Task create(TaskForm task);

    Task get(Long id);

    List<Task> getAll();

    Task update(Long id, TaskForm task);

    void delete(Long id);
}
