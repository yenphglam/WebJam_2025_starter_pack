import styles from "./Navbar.module.css";

export default function Navbar({ currentPage, setCurrentPage }) {

    const handleNavClick = (page) => (e) => {
        e.preventDefault(); // stop page refresh
        setCurrentPage(page);
    };

    return (
        <nav className={styles.navbar}>
            <img src="src\assets\logo.png" alt="HyGenie Logo" className={styles.logo}></img>
            <div className={styles.navbarItems}>
                <a
                    href="#"
                    className={`${styles.navbarItem} ${currentPage === "home" ? styles.selected : ""}`}
                    onClick={handleNavClick("home")}
                >
                    Home
                </a>

                <a
                    href="#"
                    className={`${styles.navbarItem} ${currentPage === "quiz" ? styles.selected : ""}`}
                    onClick={handleNavClick("quiz")}
                >
                    Quiz
                </a>

                <a
                    href="#"
                    className={`${styles.navbarItem} ${currentPage === "faq" ? styles.selected : ""}`}
                    onClick={handleNavClick("faq")}
                >
                    FAQ
                </a>

                <a
                    href="#"
                    className={`${styles.navbarItem} ${currentPage === "contact" ? styles.selected : ""}`}
                    onClick={handleNavClick("contact")}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}
