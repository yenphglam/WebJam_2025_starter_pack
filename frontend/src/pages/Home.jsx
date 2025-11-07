import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.headerSection}>
                <div className={styles.titleContainer}>
                    <img src="src\assets\logo.png" alt="HyGenie Logo" className={styles.logo}></img>
                    <h1 className={styles.hometitle}>HyGenie</h1>
                </div>
                <h2 className={styles.homedesc}>Clicks away from a healthier you!</h2>
            </div>
            <div className={`${styles.infoSection} ${styles.quizBanner}`}>
                <h1>What's the Flu Quiz?</h1>
                <p>
                    Our quiz will ask you basic questions and give you a score for your likelihood of having the flu! We will provide you tips and resources to get help. It only takes 5 minutes, and it could save you more than 5 days of sickness this cold season.
                </p>
                <button className={styles.quizButton} onClick={() => navigate("/quiz")}>Take Quiz</button>
            </div>
            <div className={`${styles.infoSection} ${styles.faqBanner}`}>
                <h1>Want to discover more?</h1>
                <p>
                    Learn more about the flu, how to prevent it, and what to do if you think you have it. Explore the precautions we take to ensure your privacy stays private while using our services. Our FAQ section has all the information you need to stay informed and healthy this flu season.
                </p>
                <button className={styles.quizButton} onClick={() => navigate("/faq")}>Learn More</button>
            </div>
            <div className={`${styles.infoSection} ${styles.contactBanner}`}>
                <h1>Have a Question?</h1>
                <p>
                    Our team is here to help! If you have any questions about the flu, our services, or anything else, please don't hesitate to reach out. We value your feedback and are always looking for ways to improve. Click the button to view the HyGenie collaborators and how to get in touch!
                </p>
                <button className={styles.quizButton} onClick={() => navigate("/contact")}>Contact Us</button>
            </div>
        </>
    );
}
