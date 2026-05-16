package com.panchakarma.repository;

import com.panchakarma.model.Center;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CenterRepository extends MongoRepository<Center, String> {
}
