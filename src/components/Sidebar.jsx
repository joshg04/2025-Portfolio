import styles from './Sidebar.module.css'
import { useState } from 'react'

export default function Sidebar({ activeSection, sectionRefs }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Helper to scroll smoothly to a section
    const handleNavClick = (section) => (e) => {
        e.preventDefault();
        if (sectionRefs && sectionRefs[section]?.current) {
            sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close menu after navigation
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Mobile burger menu button */}
            <button 
                className={styles.burgerButton} 
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
            </button>

            {/* Mobile backdrop */}
            {isMenuOpen && <div className={styles.backdrop} onClick={() => setIsMenuOpen(false)}></div>}

            <aside className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ''}`}>
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
            </nav>
        </aside>
        </>
    );
}