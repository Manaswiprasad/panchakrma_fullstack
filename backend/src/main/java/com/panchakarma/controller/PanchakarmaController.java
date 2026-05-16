package com.panchakarma.controller;

import com.panchakarma.model.Center;
import com.panchakarma.model.Remedy;
import com.panchakarma.repository.CenterRepository;
import com.panchakarma.repository.RemedyRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // For development purposes
public class PanchakarmaController {

    private final RemedyRepository remedyRepository;
    private final CenterRepository centerRepository;

    public PanchakarmaController(RemedyRepository remedyRepository, CenterRepository centerRepository) {
        this.remedyRepository = remedyRepository;
        this.centerRepository = centerRepository;
    }

    @GetMapping("/remedies/search")
    public List<Remedy> searchRemedies(@RequestParam(value = "symptom", required = false) String symptom) {
        if (symptom != null && !symptom.trim().isEmpty()) {
            return remedyRepository.findBySymptomContainingIgnoreCase(symptom);
        }
        return remedyRepository.findAll();
    }

    @GetMapping("/centers")
    public List<Center> getCenters() {
        return centerRepository.findAll();
    }
}
