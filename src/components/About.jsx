import styles from './About.module.css'
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
import profPic from '../assets/Josh1.jpg'

export default function About({ projectsRef }) {
    const containerRef = useRef(null)

    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    const line3Ref = useRef(null)
    const line4Ref = useRef(null)
    const line5Ref = useRef(null)



    useEffect(() => {
        document.fonts.ready.then(() => {
            containerRef.current.style.visibility = "visible"

            const line1 = line1Ref.current
            const line2 = line2Ref.current
            const line3 = line3Ref.current
            const line4 = line4Ref.current
            const line5 = line5Ref.current



            if (!line1 || !line2 || !line3 || !line4 || !line5) return

            animate(
                line1,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 1, delay: 0.2, easing: "ease-out" }
            )

            animate(
                line2,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 1, delay: 0.8, easing: "ease-out" }
            )

            animate(
                line3,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 1.5, delay: 1.4, easing: "ease-out" }
            )

            animate(
                line4,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 1.5, delay: 2.0, easing: "ease-out" }
            )

            animate(
                line5,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 1.5, delay: 2.6, easing: "ease-out" }
            )
        })
    }, [])


    return (
        <div className={styles.container} ref={containerRef}>
            <h5 ref={line1Ref}>Hi, my name is</h5>
            <h1 ref={line2Ref}>Joshua Gutierrez.</h1>
            <h5 ref={line3Ref}>
                I'm a software engineer with a passion for learning new technologies and expanding my skillset. My current focus is full-stack web development and game design using Unity. I have hands-on experience building and deploying websites, and I'm actively seeking software engineering roles where I can contribute to impactful, user-centered products.
            </h5>
            <div className={styles.buttonContainer}>
            <a
  ref={line4Ref}
  href="#projects"
  className={styles.abtBtn}
  onClick={e => {
    e.preventDefault();
    if (projectsRef && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Check out what I have to offer!
</a>
            <a ref={line5Ref} href="../../public/Resume - Joshua Gutierrez.pdf" download className={styles.abtBtn}>Download my Resumé</a>
            </div>

        </div>
    )
}