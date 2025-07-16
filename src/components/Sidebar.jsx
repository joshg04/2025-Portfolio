import styles from './Sidebar.module.css'
import ScrollSpy from 'react-scrollspy'

export default function Sidebar() {
    return (
        // <ScrollSpy items={["about", "projects", "experience"]}>
            <aside className={styles.sidebar}>
                <nav className={styles.nav}>
                    <a className={styles.navSectionheader}>Joshua Gutierrez</a>
                    <a id="about" href="#about" className={styles.navItem}>About</a>
                    <a id="projects" href="#projects" className={styles.navItem}>Projects</a>
                    <a id="experience" href="#experience" className={styles.navItem}>Experience</a>
                    <hr className={styles.divider} />
                    <a className={styles.navSectionheader}>Contact</a>
                    <a className={styles.navItem}>joshuagutierrez909@gmail.com</a>
                    <a className={styles.navItem}>(702) 720 - 7182</a>
                    <a href="https://www.linkedin.com/in/joshg04" className={styles.navItem}>LinkedIn</a>
                    <a href="https://github.com/JOSHG04" className={styles.navItem}>GitHub</a>
                </nav>
            </aside>
        // </ScrollSpy>
    )
}