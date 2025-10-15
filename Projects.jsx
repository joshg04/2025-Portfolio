import styles from './Projects.module.css'
import musicVid from '/videos/musicApp.mp4'
import pokemonVid from '/videos/pokedexProj.mp4'


export default function Projects () {
    return (
        
        // Fix spacing for vid, text, and stack
        // Add hover effect
        // Link GitHub repos for everything
        // higher res videos or only video preview when hovering
        // Brittany Chiang style portfolio (succinct but looks good)
        <div className={styles.sectionContainer}>
        <h1>Projects</h1>
        <div className={styles.container}>
            <div className={styles.vidContainer}>
                <video className={styles.vidItem} src={musicVid} autoPlay muted loop />
                <div className={styles.textContainer}>
                    <h1>AI Music Recommendation App</h1>
                    <p>Some days I get tired of listening to the same songs on repeat, so I built a music recommendation app that helps users discover new artists and tracks based on their current mood or favorite genres. It integrates with the Spotify API and OpenAI to generate personalized suggestions, creating a dynamic listening experience tailored to each user.</p>
                </div>
                <h5>React.js, Node.js, Supabase, SupabaseAuth, OpenAI API, Spotify API</h5>
            </div>

            <div className={styles.vidContainer}>
                <video className={styles.vidItem} src={pokemonVid} autoPlay muted loop />
                <div className={styles.textContainer}>
                    <h1>Pokedex Web App</h1>
                    <p>I love Pokémon and wanted to expand my web development skills, so I built a responsive front-end Pokédex using HTML, CSS, and JavaScript. It fetches real-time data from the PokéAPI to display Pokémon stats, images, and types in a clean, searchable interface. This project helped me practice working with APIs, dynamic UI rendering, and modular JavaScript.</p>
                </div>
                <h5>Svelte.js, PokeAPI</h5>
            </div>
        </div>
        </div>

        
    )
}