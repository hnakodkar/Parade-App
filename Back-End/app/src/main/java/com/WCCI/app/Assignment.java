package com.WCCI.app;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;

@Embeddable
public class Assignment {
    private String name;
    private String desription;
    private Long time;


    public Assignment() {}

    public Assignment(String name, String desription, Long time) {
        this.name = name;

        this.desription = desription;
        this.time = time;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesription() {
        return desription;
    }

    public void setDesription(String desription) {
        this.desription = desription;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }
}