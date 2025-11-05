import RandomItem from "@/components/RandomItem";
import Hero from "@/components/Hero";
import styles from "./MainContent.module.css";

export default function MainContent() {
    return (
		<>
			<Hero />
			<img id={styles.homeBanner} src="https://youthclinic.com/wp-content/uploads/2019/08/YC_WebsiteBanners_FightTheFlu_LandingPage_201908_KMH_R1_PR-1024x334.jpg"></img>
			<div id={styles.quizInfoSection}>
				<div className="header-section">
					<h1>What's the Hygiene Quiz?</h1>
					<p>Our proprietary quiz will ask you basic hygiene questions and give you a fun score to measure your likelihood of getting the flu! We will provide you tips and resources to live flu-free. It only takes 5 minutes, and it could save you more than 5 days of sickness.</p>
					<button class="button-dark">Take the Quiz</button>
				</div>
			</div>
		</>
    )
}