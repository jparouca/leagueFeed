import styles from './Avatar.module.css';


export function Avatar({ Bordered = true, src }) {

    return (
        <img 
        className={Bordered ? styles.avatarBordered : styles.avatar}
        src={src} />
    );
}