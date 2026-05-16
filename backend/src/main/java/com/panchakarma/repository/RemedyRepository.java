package com.panchakarma.repository;

import com.panchakarma.model.Remedy;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RemedyRepository extends MongoRepository<Remedy, String> {
    List<Remedy> findBySymptomContainingIgnoreCase(String symptom);
}
