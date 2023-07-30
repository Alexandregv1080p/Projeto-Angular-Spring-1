package com.alexandre.backend.service;

import org.hibernate.mapping.List;
import org.springframework.stereotype.Service;

import com.alexandre.backend.model.Client;

@Service
public interface ClientService {
    Client create(Client form);

    Client get(Long id);

    List<Client> getAll();

    Client update (Long id, C)
}
