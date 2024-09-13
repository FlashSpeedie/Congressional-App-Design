package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin(origins = "http://localhost")
public class Controller {

    @GetMapping("/api/message")
    public String getString(){
        System.out.println("TRIEED");
        return "HELLO THIS IS THE MESSAGE";
        
    }
}
