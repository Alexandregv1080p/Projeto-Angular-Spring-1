package com.alexandre.backend.model.form;


import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientForm {

    private MultipartFile imageFile;
    private String image;
    private String name;
    private String lastName;
    private String email;
    private String title;
    private String status;
    private String position;
    private String dataNasc;

}
