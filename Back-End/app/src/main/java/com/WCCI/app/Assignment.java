package com.WCCI.app;

import javax.persistence.*;

@Embeddable
public class Assignment {

    private String name;
    private String description;
    private Long time;

    public Assignment() {}

    public Assignment(String name, String description, Long time) {
        this.name = name;

        this.description = description;
        this.time = time;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }
}