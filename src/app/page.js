import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header"className={styles.header}>
        <div>
          <h1>
            <span>
            Hello <span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
          </h1>
          <br />
            <span>Josh Carlson</span>
        </div>
      </header>
      <section id="info"className ={styles.infoSection}>
        <img
        src='/Hola.avif'
        alt='Imagen'
        className={styles.image}/>
        <div className= {styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Josh</span>
          <br />
          <span className={styles.title}>Carlson</span>
        
          
          <div className={styles.list}>
          </div>
          <ul>
            <li>
              <span className={styles.grayText}>Age:</span> 27</li>
            <li>
            <span className={styles.grayText}>Nationality:</span> German</li>
            <li>
            <span className={styles.grayText}>Skill set:</span> Project Management and Financial Performance</li>
            <li>
            <span className={styles.grayText}>Langages:</span> English, German</li>
            <li>
            <span className={styles.grayText}>Academic information:</span> Mechanical Engineer </li>
          </ul>
          
          </div>
        </section>
    </main>
  )
}
