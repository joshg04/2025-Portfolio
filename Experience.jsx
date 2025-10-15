import styles from './Experience.module.css'

export default function Experience() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.dateLocationContainer}>
                    <h5>June 2025 -- Present</h5>
                </div>
                <div className={styles.descriptionContainer}>
                    <h1>Software Engineer Intern @ Jagris Inc</h1>
                    <p>● Developing a Svelte, Node, and PostgreSQL web application used by roofing sales representatives, increasing
                        monthly company revenue by over 10%.
                    <br /><br />● Building and maintaining a secure backend system supporting 50+ active employee logins, image storage, and report
                    management.
                    <br /><br />● Streamlining insurance claim report preparation, reducing time per report from several hours to under 15 minutes.</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.dateLocationContainer}>
                    <h5>August 2024 -- December 2024</h5>
                </div>
                <div className={styles.descriptionContainer}>
                    <h1>Software Engineer Intern @ Capital Velocity LLC</h1>
                    <p>● Engineered a full-stack web application with React, Node, and MongoDB that centralizes grant and sponsored
                        funding opportunities into a unified platform, enabling users to efficiently discover, organize, apply for, and receive
                        awards from grants worth upwards of $10,000.
                        <br /><br />● Developed and maintained a MongoDB backend supporting data storage and authentication for 500+ active users.
                        <br /><br />● Contributed to an increase of 10% in monthly revenue by improving product functionality and supporting sales
                        growth.</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.dateLocationContainer}>
                    <h5>December 2023 -- February 2024</h5>
                </div>
                <div className={styles.descriptionContainer}>
                <h1>Full Stack Developer Intern @ Bankhead Technologies</h1>
                <p>● Contributed to a full-stack web app with Svelte, Node, and PostgreSQL that streamlined sales data into a single
                digital platform for a door-to-door sales company, generating a monthly revenue increase of over $20,000.
                    <br /><br />● Increased customer conversion rates by 15% through implementing an improved onboarding flow and streamlined
                    checkout process.
                    <br /><br />● Implemented tools that accelerated sales documentation processes by 60%, allowing reps to focus on client
                    engagement.</p>
                </div>
            </div>
        </div>
    )
}