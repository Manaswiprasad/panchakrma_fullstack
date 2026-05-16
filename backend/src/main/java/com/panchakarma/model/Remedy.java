package com.panchakarma.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "remedies")
public class Remedy {
    @Id
    private String id;
    private String symptom; // Example: "High Fever", "Digestion Issue"
    private String diagnosis; // Outline what it might be based on symptoms
    private String recommendedPanchakarma; // e.g., "Vaman", "Virechana"
    private List<String> homeRemediesSteps;
    private String severityLevel; // "Low", "Medium", "High"
    private String videoUrl; // Embedded video url for demonstration

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getSymptom() { return symptom; }
    public void setSymptom(String symptom) { this.symptom = symptom; }
    
    public String getDiagnosis() { return diagnosis; }
    public void setDiagnosis(String diagnosis) { this.diagnosis = diagnosis; }
    
    public String getRecommendedPanchakarma() { return recommendedPanchakarma; }
    public void setRecommendedPanchakarma(String recommendedPanchakarma) { this.recommendedPanchakarma = recommendedPanchakarma; }
    
    public List<String> getHomeRemediesSteps() { return homeRemediesSteps; }
    public void setHomeRemediesSteps(List<String> homeRemediesSteps) { this.homeRemediesSteps = homeRemediesSteps; }
    
    public String getSeverityLevel() { return severityLevel; }
    public void setSeverityLevel(String severityLevel) { this.severityLevel = severityLevel; }
    
    public String getVideoUrl() { return videoUrl; }
    public void setVideoUrl(String videoUrl) { this.videoUrl = videoUrl; }
}
