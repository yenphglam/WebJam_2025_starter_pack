import styles from "./Home.module.css";

export default function Home({setCurrentPage}) {
    return(
        <>
            <div className={styles.headerSection}>
                <h1 className={styles.hometitle}>HyGenie</h1>
                <h2 className={styles.homedesc}>Clicks away from a healthier you!</h2>
            </div>
            <div className={styles.quizInfoSection}>
                <h1>What's the Flu Quiz?</h1>
                <p>
                    Our quiz will ask you basic questions and give you a score for your likelihood of having the flu! We will provide you tips and resources to get help. It only takes 5 minutes, and it could save you more than 5 days of sickness this cold season.
                </p>
                <button className={styles.quizbutton} onClick={() => setCurrentPage("quiz")}> Take Quiz</button>
            </div>
        </>
    );
}
