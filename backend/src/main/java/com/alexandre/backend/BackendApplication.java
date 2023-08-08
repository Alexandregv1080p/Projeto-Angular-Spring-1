package com.alexandre.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import com.alexandre.backend.model.Client;
import com.alexandre.backend.repository.ClientRepository;

@SpringBootApplication
public class BackendApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Bean
	CommandLineRunner initDatabase(ClientRepository clientRepository){
		return arg ->{
			clientRepository.deleteAll();

			Client c = new Client();
			c.setImage("g.png");
			c.setName("Alexandre");
			c.setLastName("Gomes");
			c.setEmail("alex@mail.com");
			c.setStatus("Ativo");
			c.setPosition("Junior");
			c.setTitle("Software Developer");
			c.setDataNasc("1999-10-30");

			clientRepository.save(c);
		};
	}
}
