package com.alexandre.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alexandre.backend.model.Client;
import com.alexandre.backend.model.form.ClientForm;
import com.alexandre.backend.repository.ClientRepository;
import com.alexandre.backend.service.ClientService;

@Service
public class ClientServiceImpl implements ClientService{
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public Client create(ClientForm clientForm){
        Client cliente = new Client();
        cliente.setImage(clientForm.getDate());
        cliente.setName(clientForm.getName());
        cliente.setLastName(clientForm.getLastName());
        cliente.setEmail(clientForm.getEmail());
        cliente.setStatus(clientForm.getStatus());
        cliente.setPosition(clientForm.getPosition());
        cliente.setTitle(clientForm.getTitle());
        cliente.setDate(clientForm.getDate());
        return clientRepository.save(cliente);
    }
    @Override
    public Client get(Long id) {
        return clientRepository.getReferenceById(id);
    }
    @Override
    public Client update(Long id,ClientForm clientForm) {
        Client cliente = clientRepository.getReferenceById(id);
        cliente.setImage(clientForm.getDate());
        cliente.setName(clientForm.getName());
        cliente.setLastName(clientForm.getLastName());
        cliente.setEmail(clientForm.getEmail());
        cliente.setStatus(clientForm.getStatus());
        cliente.setPosition(clientForm.getPosition());
        cliente.setTitle(clientForm.getTitle());
        cliente.setDate(clientForm.getDate());
        return clientRepository.save(cliente);
    }
    @Override
    public List<Client> getAll() {
      return clientRepository.findAll();
    }
    @Override
    public void delete(Long id){
        clientRepository.deleteById(id);
    }

}
