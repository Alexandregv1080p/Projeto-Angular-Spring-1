package com.alexandre.backend.model.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskForm {
    private Long clientId;

    private String nomeTarefa;

    private Boolean status;
}
