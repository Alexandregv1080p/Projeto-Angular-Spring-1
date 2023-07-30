package com.alexandre.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@Entity
@Table(name = "tb_clients")
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
