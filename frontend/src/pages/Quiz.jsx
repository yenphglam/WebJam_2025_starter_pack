import styles from "./Quiz.module.css";
import quiz from "../pages/Quiz"

export default function Quiz() {
    return (
        <>
        <div className = {styles.quiztitle}>
            <h1>Flu Quiz</h1>
            <h3 className={styles.quizdesc}>
                This quiz will estimate your chances of having the flu based on your symptoms!
                The higher your score, the higher your chances are of having the flu!!!!!
            </h3> 
            {/* please change this description to something better idk*/}
        </div>
        <div className={styles.quizform}>
            <div className={styles.checkbox}>
                <div className={styles.yes}>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                    <button>y</button>
                </div>
                <div className={styles.no}>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                    <button>n</button>
                </div>
            </div>
            <div>
                <ol>
                    <li>Have you had a fever in the past few days?</li>
                    <li>Have you been feeling tired or weak?</li>
                    <li>Are you experiencing body aches or muscle pain?</li>
                    <li>Do you have a cough?</li>
                    <li>Do you have nasal congestion or a runny nose?</li>
                    <li>Do you have a sore throat?</li>
                    <li>Have you experienced chills or shivering?</li>
                    <li>Have your symptoms appeared suddenly (within 1-2 days)?</li>
                    <li>Have you been around anyone recently who was sick with the flu or similar symptoms?</li>
                    <li>do you have headaches or pressure around your forehead or temples?</li>
                </ol>
            </div>
        </div>
        </>
    );
}