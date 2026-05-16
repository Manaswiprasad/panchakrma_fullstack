package com.panchakarma.service;

import com.panchakarma.model.Center;
import com.panchakarma.model.Remedy;
import com.panchakarma.repository.CenterRepository;
import com.panchakarma.repository.RemedyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    private final RemedyRepository remedyRepository;
    private final CenterRepository centerRepository;

    public DataSeeder(RemedyRepository remedyRepository, CenterRepository centerRepository) {
        this.remedyRepository = remedyRepository;
        this.centerRepository = centerRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (remedyRepository.count() == 0) {
            Remedy r1 = new Remedy();
            r1.setSymptom("Severe Cough and Phlegm");
            r1.setDiagnosis("Kapha Imbalance (Respiratory distress)");
            r1.setRecommendedPanchakarma("Vamana (Therapeutic Emesis)");
            r1.setHomeRemediesSteps(Arrays.asList(
                    "Drink ginger and tulsi tea 3 times a day.",
                    "Inhale steam with eucalyptus oil or ajwain (carom seeds).",
                    "Mix a teaspoon of honey with ginger juice and consume before bed.",
                    "Avoid cold drinks, dairy, and heavy meals."
            ));
            r1.setSeverityLevel("Medium");
            r1.setVideoUrl("https://www.youtube.com/embed/nU0lK5v8Q2U"); // placeholder link to a wellness video
            remedyRepository.save(r1);

            Remedy r2 = new Remedy();
            r2.setSymptom("Chronic Back Pain");
            r2.setDiagnosis("Vata Imbalance");
            r2.setRecommendedPanchakarma("Basti (Enema Therapy)");
            r2.setHomeRemediesSteps(Arrays.asList(
                    "Apply warm sesame oil on the lower back and massage gently.",
                    "Practice mild Yogasanas like Bhujangasana.",
                    "Drink warm water infused with cumin throughout the day.",
                    "Ensure adequate rest and avoid heavy weight lifting."
            ));
            r2.setSeverityLevel("High");
            r2.setVideoUrl("https://www.youtube.com/embed/S2G4dDE7D8Q");
            remedyRepository.save(r2);

            Remedy r3 = new Remedy();
            r3.setSymptom("Acne and Skin Inflammation");
            r3.setDiagnosis("Pitta Imbalance (Excess Heat)");
            r3.setRecommendedPanchakarma("Virechana (Purgation) or Raktamokshana (Blood letting)");
            r3.setHomeRemediesSteps(Arrays.asList(
                    "Apply aloe vera gel or neem paste directly on affected areas.",
                    "Drink coriander seeds soaked overnight in water.",
                    "Avoid spicy, fried, and fermented foods.",
                    "Eat cooling foods like cucumber, coconut water."
            ));
            r3.setSeverityLevel("Low");
            r3.setVideoUrl("https://www.youtube.com/embed/Yt18SST1XqM");
            remedyRepository.save(r3);
        }

        if (centerRepository.count() == 0) {
            Center c1 = new Center();
            c1.setName("Ayurvedagram Heritage Wellness Center");
            c1.setAddress("Hemmandanahalli, Whitefield, Bengaluru");
            c1.setLatitude(12.9806);
            c1.setLongitude(77.7816);
            c1.setContactNumber("+91-80-65651234");
            centerRepository.save(c1);

            Center c2 = new Center();
            c2.setName("Somatheeram Ayurvedic Health Resort");
            c2.setAddress("Chowara, Kovalam, Kerala");
            c2.setLatitude(8.3752);
            c2.setLongitude(77.0142);
            c2.setContactNumber("+91-471-2266501");
            centerRepository.save(c2);

            Center c3 = new Center();
            c3.setName("Patanjali Yogpeeth");
            c3.setAddress("Haridwar, Uttarakhand");
            c3.setLatitude(29.9457);
            c3.setLongitude(78.1642);
            c3.setContactNumber("+91-1334-240008");
            centerRepository.save(c3);
        }
    }
}
