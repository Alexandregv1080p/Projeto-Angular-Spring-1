package com.alexandre.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long _id;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image;
    private String name;
    private String lastName;
    private String email;
    private String title;
    private String status;
    private String position;
    private String date;

}
