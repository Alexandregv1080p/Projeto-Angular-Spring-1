package com.alexandre.backend.controller;

public class InvalidOldPasswordException extends RuntimeException {

    public InvalidOldPasswordException() {
        super("A senha antiga não é válida.");
    }
}