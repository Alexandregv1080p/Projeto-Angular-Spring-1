package com.alexandre.backend.model;



public class EmailRequest {

   
    private Long id;
    private String name;
    private String email;
    private String telephone;
    private String subject;
    private String description;

    public EmailRequest(Long id,String subject,String name, String email, String telephone, String description) {
        super();
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.email = email;
        this.telephone = telephone;
        this.description = description;
    }
    public void setSubject(String subject){
        this.subject = subject;
    }
    public String getSubject(){
        return subject;
    }
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
