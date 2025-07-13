import styles from './Experience.module.css'

export default function Experience() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.dateLocationContainer}>
                    <h5>August 2024 -- December 2024</h5>
                </div>
                <div className={styles.descriptionContainer}>
                    <h1>Full Stack Developer Intern @ Capital Velocity LLC</h1>
                    <p>● Built a full-stack web application that centralizes grant and funding opportunities into a unified platform, enabling users to efficiently discover, organize, apply for, and receive personalized recommendations for relevant grants.
                        <br /><br />● Designed and implemented front end using React and Javascript, ensuring an intuitive user interface and seamless user experience.
                        <br /><br />● Built and Integrated back end APIs using Node and Express for real-time data updates and enhanced application workflows, enabling users to manage applications directly through the platform.</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.dateLocationContainer}>
                    <h5>December 2023 -- February 2024</h5>
                </div>
                <div className={styles.descriptionContainer}>
                <h1>Software Engineer Intern @ Bankhead Technologies</h1>
                <p>● Contributed to a full-stack web app that streamlined sales data into a single platform for a door-to-door sales company.
                    <br /><br />● Built responsive front-end features using Svelte.js, improving user experience for field reps.
                    <br /><br />● Worked in a cross-functional team alongside designers, backend developers, and stakeholders to ensure seamless
                    integration and alignment with business goals, resulting in improved workflow efficiency and data accessibility.</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.dateLocationContainer}>
                    <h5>August 2022 -- May 2025</h5>
                </div>
                <div className={styles.descriptionContainer}>
                    <h1>University of Nevada Las Vegas</h1>
                    <p>● Mastered fundamental computer science concepts through intensive study of data structures and algorithms
                    <br /><br />● Completed rigorous mathematics coursework that provided the analytical foundation for algorithm development and computational problem-solving
                    <br /><br />● Gained understanding of low-level computing through coursework in operating systems, assembly language, and computer architecture, developing expertise in how software interfaces with hardware and system-level programming concepts.</p>
                </div>
            </div>


        </div>
    )
}