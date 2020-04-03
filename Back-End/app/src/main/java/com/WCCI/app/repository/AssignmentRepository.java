package com.WCCI.app.repository;

import com.WCCI.app.Assignment;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface AssignmentRepository extends CrudRepository <Assignment, Long> {
}
