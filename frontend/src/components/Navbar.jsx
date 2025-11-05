import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a className="brand" href="#">HygenicMe</a>
            <div className={styles.navbarItems}>
                <a className={`${styles.navbarItem} ${styles.selected}`} href="#">Home</a>
                <a className={styles.navbarItem} href="#">Quiz</a>
                <a className={styles.navbarItem} href="#">FAQ</a>
                <a className={styles.navbarItem} href="#">Contact</a>
            </div>
        </nav>
    )
}