package com.alexandre.backend.service;

import java.util.List;


import com.alexandre.backend.model.Client;
import com.alexandre.backend.model.form.ClientForm;

public interface ClientService {
    Client create(ClientForm form);

    Client get(Long id);

    List<Client> getAll();

    Client update (Long id, ClientForm form);

    void delete(Long id);
}
