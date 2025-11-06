import styles from "./Quiz.module.css";
import { useState } from "react";

export default function Quiz() {
    const questions = 
    [
        "Have you had a fever in the past few days?",
        "Have you been feeling tired or weak?",
        "Are you experiencing body aches or muscle pain?",
        "Do you have a cough?",
        "Do you have nasal congestion or a runny nose?",
        "Do you have a sore throat?",
        "Have you experienced chills or shivering?",
        "Have your symptoms appeared suddenly (within 2 to 3 days)?",
        "Have you been around anyone recently who was sick with the flu?",
        "Do you have headaches or pressure around your forehead or temples?"
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleCheck = (index, value) => {
        setSubmitted(false); 
        setError("");
        setAnswers(prev => {
            const next = [...prev];
            next[index] = prev[index] === value ? null : value;
            return next;
            });
    };

  const handleSubmit = () => {
    if (answers.some(a => a === null)) {
        setError("Please answer every question before submitting!");
        setSubmitted(false);
        return;
    }
    setSubmitted(true);
    };

    const score = answers.filter(a => a === "yes").length;
    const message = 
        score <= 3 ? "You probably don't have the flu." 
        : score <= 6 ? "You might have the flu. Make sure to continue to check your symptoms." 
        : "You have the flu. Please consult a healthcare professional for proper diagnosis and treatment if it worsens!";

    return (
    <div>
        <h1 className={styles.quiztitle}>Flu Quiz</h1>
        <p className={styles.quizdesc}>Please answer each question truthfully to see if you have the flu.</p>
        <div className={styles.quizform}>
            <ol>
                {questions.map((q, i) => (
                    <li key={i}>
                        <span className={styles.questions}>{q}</span>
                        <div className={styles.quizcheckboxes}>
                            <label>
                                <input type="checkbox" checked={answers[i] === "yes"} onChange={() => handleCheck(i, "yes")}/>{" "}
                                Yes
                            </label>

                            <label>
                                <input type="checkbox" checked={answers[i] === "no"} onChange={() => handleCheck(i, "no")}/>{" "}
                                No
                            </label>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
        {error && <p className={styles.errormsg}>{error}</p>}
        <div className={styles.submitcontainer}>
            <button onClick={handleSubmit} className={styles.submitbtn}>Submit</button>
        </div>
        {submitted && (
            <div className={styles.quizscore}>
                <h2>Your Score: {score} / {questions.length}</h2>
                <p>{message}</p>
            </div>
        )}
    </div>
    );
}