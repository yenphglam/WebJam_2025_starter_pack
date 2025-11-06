import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQs = [
    { question: "What is HyGenie?", answer: "HyGenie is a website where you can take quick quizzes to help identify potential illnesses based on your symptoms. It provides tips, resources, and hygiene guidance to keep you healthy." },
    { question: "Why use HyGenie?", answer: "HyGenie helps you stay informed about your health in a fun and interactive way. It can be more helpful than Google and quicker than going to a physician." },
    { question: "Is HyGenie free?", answer: "Yes! All quizzes and resources on HyGenie are completely free to use." },
    { question: "How long does it take to complete a quiz?", answer: "Each quiz takes about 5 minutes to complete. It's designed to be quick, fun, and informative." },
    { question: "How accurate is HyGenie?", answer: "HyGenie strives to provide helpful insights, but it cannot replace professional medical advice. Always consult a healthcare professional for a proper diagnosis." },
    { question: "Is my personal information safe?", answer: "Yes! HyGenie does not store personal information beyond what is needed for your quiz results. Your privacy is always respected." },
];

export default function FAQ() {
    const [questionIndex, setQuestionIndex] = useState(null);

    const toggleQuestion = (index) => {
        setQuestionIndex(questionIndex === index ? null : index);
    };

    return (
        <>
            <div className={styles.headerSection}>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className={styles.questionAnswerSection}>
                {FAQs.map((item, index) => (
                    <div key={index} className={styles.questionAnswer}>
                        <h2
                            onClick={() => toggleQuestion(index)}
                            className={styles.question}
                        >
                            {item.question}
                        </h2>
                        {questionIndex === index && <p className={styles.answer}>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </>
    );
}
