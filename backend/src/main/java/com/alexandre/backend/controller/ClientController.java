package com.alexandre.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alexandre.backend.repository.ClientRepository;

import ch.qos.logback.core.net.server.Client;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
    private ClientRepository clientRepository;

    @GetMapping
    public List<Client> list(){
        return null;
    }
}
