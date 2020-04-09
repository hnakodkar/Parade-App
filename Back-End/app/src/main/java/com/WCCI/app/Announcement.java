package com.WCCI.app;

import javax.persistence.Embeddable;
import java.sql.Timestamp;

@Embeddable
public class Announcement {
    private Timestamp timestamp;
    private String content;
    public Announcement(Timestamp timestamp,  String content){
        this.timestamp = timestamp;
        this.content = content;
    }

    public Announcement(){}

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public String getContent() {
        return content;
   }
}
