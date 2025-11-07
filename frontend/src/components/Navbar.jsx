import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navspacer}>
                <img
                    src={logo}
                    alt="HyGenie Logo"
                    onClick={() => (window.location.href = "/")}
                    className={styles.logo}
                ></img>
            </div>
            <div className={styles.navbarItems}>
                <div className={styles.navbarItems}>
                    <Link
                        to="/"
                        className={`${styles.navbarItem} ${location.pathname === "/" ? styles.selected : ""}`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/quiz"
                        className={`${styles.navbarItem} ${location.pathname === "/quiz" ? styles.selected : ""}`}
                    >
                        Quiz
                    </Link>

                    <Link
                        to="/faq"
                        className={`${styles.navbarItem} ${location.pathname === "/faq" ? styles.selected : ""}`}
                    >
                        FAQ
                    </Link>

                    <Link
                        to="/contact"
                        className={`${styles.navbarItem} ${location.pathname === "/contact" ? styles.selected : ""}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
