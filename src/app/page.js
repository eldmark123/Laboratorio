import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
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
    </main>
  )
}
