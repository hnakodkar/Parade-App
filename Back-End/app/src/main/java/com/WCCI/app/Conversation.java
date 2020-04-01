package com.WCCI.app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Conversation {
    @Id
    @GeneratedValue
    private Long id;

    private String name;


}
