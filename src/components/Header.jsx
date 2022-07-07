import styles from './Header.module.css'
import lolLogo from '../assets/lol-logo.svg'


export function Header() {
    return(
        <header className={styles.header}>
            <img src={lolLogo} alt="" />
        </header>
    )
}