import React from 'react'
import { quizData } from './hrt-women-quiz'; // Assuming quizData is imported from a JSON file

export const quizHelpers = {
    // Flatten all questions with section info
    getAllQuestions: () => {
        return quizData.sections.reduce((allQuestions, section, sectionIndex) => {
            return allQuestions.concat(
                section.questions.map((question, questionIndex) => ({
                    ...question,
                    sectionId: section.id,
                    sectionTitle: section.title,
                    sectionIndex,
                    questionIndex,
                    globalIndex: allQuestions.length + questionIndex,
                    questionNumber: allQuestions.length + questionIndex + 1
                }))
            );
        }, []);
    },

    // Get section info by question index
    getSectionByQuestionIndex: (questionIndex) => {
        const allQuestions = quizHelpers.getAllQuestions();
        const question = allQuestions[questionIndex];
        if (!question) return null;

        return {
            ...quizData.sections[question.sectionIndex],
            currentQuestionInSection: question.questionIndex + 1,
            totalQuestionsInSection: quizData.sections[question.sectionIndex].questions.length
        };
    },

    // Get progress info
    getProgressInfo: (currentQuestionIndex) => {
        const allQuestions = quizHelpers.getAllQuestions();
        const totalQuestions = allQuestions.length;
        const currentQuestion = allQuestions[currentQuestionIndex];

        if (!currentQuestion) return null;

        const section = quizData.sections[currentQuestion.sectionIndex];
        const sectionProgress = (currentQuestion.questionIndex + 1) / section.questions.length;
        const overallProgress = (currentQuestionIndex + 1) / totalQuestions;

        return {
            currentStep: currentQuestionIndex,
            totalSteps: totalQuestions,
            currentSection: currentQuestion.sectionIndex,
            totalSections: quizData.sections.length,
            sectionProgress,
            overallProgress,
            sectionInfo: {
                id: section.id,
                title: section.title,
                description: section.description,
                currentQuestion: currentQuestion.questionIndex + 1,
                totalQuestions: section.questions.length
            }
        };
    }
};