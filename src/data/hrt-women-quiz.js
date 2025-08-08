// src/data/hrt-women-quiz.js

export const quizData = {
    title: "HRT Women's Health Quiz",
    questions: [
        // Section 1
        {
            id: 'fatigue_frequency',
            sectionId: 'section1',
            section: 'Section 1: Symptom Awareness',
            question: "1. How often do you experience fatigue, even after a full night's sleep?",
            type: 'radio',
            options: ['Almost every day', 'A few times a week', 'Rarely', 'Never']
        },
        {
            id: 'mood_changes',
            sectionId: 'section1',
            section: 'Section 1: Symptom Awareness',
            question: "2. Have you noticed recent changes in your mood (e.g., increased anxiety, irritability, or sadness)?",
            type: 'radio',
            options: ["Yes, it's been noticeable", 'Sometimes', 'Not really', 'Not at all']
        },
        {
            id: 'hot_flashes',
            sectionId: 'section1',
            section: 'Section 1: Symptom Awareness',
            question: "3. Do you experience hot flashes or night sweats?",
            type: 'radio',
            options: ['Frequently', 'Occasionally', 'Rarely', 'Never']
        },
        {
            id: 'sex_drive_change',
            sectionId: 'section1',
            section: 'Section 1: Symptom Awareness',
            question: "4. How would you rate your current sex drive compared to a few years ago?",
            type: 'radio',
            options: ['Much lower', 'Slightly lower', 'About the same', 'Higher']
        },
        // Section 2
        {
            id: 'weight_gain',
            sectionId: 'section2',
            section: 'Section 2: Physical or Cognitive Changes',
            question: "5. Have you gained weight (especially around the belly) without major changes to diet or exercise?",
            type: 'radio',
            options: ['Yes', 'A little', 'No']
        },
        {
            id: 'brain_fog',
            sectionId: 'section2',
            section: 'Section 2: Physical or Cognitive Changes',
            question: "6. Are you noticing brain fog, forgetfulness, or difficulty concentrating?",
            type: 'radio',
            options: ['Yes, frequently', 'Occasionally', 'Rarely', 'Not at all']
        },
        {
            id: 'period_changes',
            sectionId: 'section2',
            section: 'Section 2: Physical or Cognitive Changes',
            question: "7. Are you having irregular or missed periods (if applicable)?",
            type: 'radio',
            options: ['Yes', 'Sometimes', 'No', "I've already reached menopause"]
        },
        // Section 3
        {
            id: 'life_quality_impact',
            sectionId: 'section3',
            section: 'Section 3: Lifestyle Impact',
            question: "8. How much are these symptoms affecting your quality of life?",
            type: 'radio',
            options: ['A lot I want help now', 'Somewhat', 'Not much', 'Not at all']
        },
        {
            id: 'doctor_discussion',
            sectionId: 'section3',
            section: 'Section 3: Lifestyle Impact',
            question: "9. Have you ever discussed hormone health with a doctor or specialist before?",
            type: 'radio',
            options: ["Yes, but didn't get answers", 'Yes, currently under care', 'No, never', "I've tried to, but gave up"]
        },
        {
            id: 'open_to_specialist',
            sectionId: 'section3',
            section: 'Section 3: Lifestyle Impact',
            question: "10. Would you be open to speaking with a specialist about how to rebalance your hormones and feel better?",
            type: 'radio',
            options: ["Yes, I'd like to learn more", 'Maybe I have questions', 'Not right now']
        }
    ],
    finalPage: {
        headline: "Based on your answers, you may be experiencing symptoms of hormonal imbalance.",
        message: "Our specialists can help you uncover the root cause and build a plan that works for your body.",
        ctaButton: "Book My Consultation"
    }
};