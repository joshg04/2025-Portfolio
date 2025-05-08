import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <a className={styles.navSectionheader}>Joshua Gutierrez</a>
                <a href="#about" className={styles.navItem}>About</a>
                <a href="#projects" className={styles.navItem}>Projects</a>
                <a href="#experience" className={styles.navItem}>Experience</a>
                <hr className={styles.divider} />
                <a className={styles.navSectionheader}>Contact</a>
                <a className={styles.navItem}>joshuagutierrez909@gmail.com</a>
                <a className={styles.navItem}>(702) 720 - 7182</a>
                <a href="https://www.linkedin.com/in/joshg04" className={styles.navItem}>LinkedIn</a>
                <a href="https://github.com/JOSHG04" className={styles.navItem}>GitHub</a>
            </nav>
        </aside>
    )
}