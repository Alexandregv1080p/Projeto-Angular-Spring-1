package com.alexandre.backend.model.form;


import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Getter
@Setter
public class ClientForm {

    private String image;
    private String name;
    private String lastName;
    private String email;
    private String title;
    private String status;
    private String position;
    private String date;

}
