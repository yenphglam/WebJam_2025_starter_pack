import styles from "./FAQ.module.css";

export default function FAQ() {
    return (
        <>
            <div className={styles.headerSection}>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className={styles.questionAnswerSection}>
                <h2>What is HyGenie?</h2>
                <p>
                    Our quiz will ask you basic questions and give you a score for your likelihood of having the flu! We will provide you tips and resources to get help. It only takes 5 minutes, and it could save you more than 5 days of sickness this cold season.
                </p>
            </div>
        </>
    );
}