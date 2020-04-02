package com.WCCI.app.repository;

import com.WCCI.app.Conversation;
import org.springframework.data.repository.CrudRepository;

public interface ConversationRepository extends CrudRepository <Conversation, Long> {
}
