package com.alexandre.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.alexandre.backend.model.Client;
import com.alexandre.backend.model.form.ClientForm;
import com.alexandre.backend.service.impl.ClientServiceImpl;


@RestController
@RequestMapping("/api/clients")
public class ClientController {
    
    @Autowired
    private ClientServiceImpl service;

    @GetMapping
    public List<Client> getAll(){
        return service.getAll();
    }
    @GetMapping(value = "/{id}")
    @ResponseBody
    public Client get(@PathVariable Long id){
        return service.get(id);
    }
    @PostMapping
    @ResponseBody
    public Client create( @RequestBody ClientForm form){
        return service.create(form);
    }
    @PutMapping(value = "/{id}")
    public Client updateClient(@PathVariable Long id,@RequestBody ClientForm form){
        return service.update(id,form);
    }
    @DeleteMapping(value = "/{id}")
    public void deleteClient(@PathVariable Long id){
        service.delete(id);
    }

}
