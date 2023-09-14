package com.alexandre.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.alexandre.backend.model.Client;
import com.alexandre.backend.model.Task;
import com.alexandre.backend.model.form.TaskForm;
import com.alexandre.backend.repository.ClientRepository;
import com.alexandre.backend.repository.TaskRepository;
import com.alexandre.backend.service.TaskService;

@Service
@RestController
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Task create(TaskForm form) {
        Task task = new Task();
        Client client = clientRepository.findById(form.getClientId()).get();
        task.setCliente(client);
        task.setNomeTarefa(form.getNomeTarefa());
        task.setStatus(form.getStatus());
        return taskRepository.save(task);
    }


    @Override
    public Task get(Long id) {
        return taskRepository.getReferenceById(id);
    }

    @Override
    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    @Override
    public Task update(Long id, TaskForm form) {
        Task task = taskRepository.getReferenceById(id);
        Client client = clientRepository.findById(form.getClientId()).get();
        task.setCliente(client);
        task.setNomeTarefa(form.getNomeTarefa());
        task.setStatus(form.getStatus());
        return taskRepository.save(task);
    }

    @Override
    public void delete(Long id) {
        taskRepository.deleteById(id);
    }
    
}
