import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <a className="brand" href="#">HygenicMe</a>
            <div id={styles.footerItems}>
                <a className={styles.footerItem} href="#">Home</a>
                <a className={styles.footerItem} href="#">Quiz</a>
                <a className={styles.footerItem} href="#">FAQ</a>
                <a className={styles.footerItem} href="#">Contact</a>
            </div>
        </footer>
    )
}