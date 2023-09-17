package com.alexandre.backend;

import java.text.DateFormat;
import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import com.alexandre.backend.model.Client;
import com.alexandre.backend.model.Task;
import com.alexandre.backend.repository.ClientRepository;
import com.alexandre.backend.repository.TaskRepository;

@SpringBootApplication
public class BackendApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Bean
	CommandLineRunner initDatabase(ClientRepository clientRepository, TaskRepository taskRepository){
		return arg ->{
			taskRepository.deleteAll();
			clientRepository.deleteAll();
		
			Client c = new Client();
			c.setImage("g.png"); 
			c.setName("Alexandre");
			c.setLastName("Gomes");
			c.setEmail("alex@mail.com");
			c.setStatus("Ativo");
			c.setPosition( "Junior");
			c.setTitle("Software Developer");
			c.setDataNasc("1999-10-30");
			clientRepository.save(c);

			Task t = new Task();
			t.setCliente(c);
			t.setDataInserida(LocalDateTime.now());
			t.setNomeTarefa("Migrar banco de dados");
			t.setStatus(true);
			taskRepository.save(t);
		};
	}
}
