import styles from './Sidebar.module.css'

export default function Sidebar({ activeSection, sectionRefs }) {
    // Helper to scroll smoothly to a section
    const handleNavClick = (section) => (e) => {
        e.preventDefault();
        if (sectionRefs && sectionRefs[section]?.current) {
            sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <a className={styles.navSectionheader}>Joshua Gutierrez</a>
                <a
                    id="about"
                    href="#about"
                    className={
                        `${styles.navItem} ${activeSection === 'about' ? styles.activeNavItem : ''}`
                    }
                    onClick={handleNavClick('about')}
                >
                    About
                </a>
                <a
                    id="projects"
                    href="#projects"
                    className={
                        `${styles.navItem} ${activeSection === 'projects' ? styles.activeNavItem : ''}`
                    }
                    onClick={handleNavClick('projects')}
                >
                    Projects
                </a>
                <a
                    id="experience"
                    href="#experience"
                    className={
                        `${styles.navItem} ${activeSection === 'experience' ? styles.activeNavItem : ''}`
                    }
                    onClick={handleNavClick('experience')}
                >
                    Experience
                </a>
                <hr className={styles.divider} />
                <a className={styles.navSectionheader}>Contact</a>
                <a className={styles.navItem}>joshuagutierrez909@gmail.com</a>
                <a className={styles.navItem}>(702) 720 - 7182</a>
                <a href="https://www.linkedin.com/in/joshg04" className={styles.navItem}>LinkedIn</a>
                <a href="https://github.com/JOSHG04" className={styles.navItem}>GitHub</a>
            </nav>
        </aside>
    );
}