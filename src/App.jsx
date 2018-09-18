import React, { Component } from 'react'
import Logo from './logo.svg'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <Logo width={100} height={100} className={styles.reactSvg} />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className={styles.link}
            href="https://rollupjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about RollupJS
          </a>
        </header>
      </div>
    )
  }
}

export default App
