import styles from './Sidebar.module.css';
import  { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar () { 
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://media-exp1.licdn.com/dms/image/C4D16AQHEt3rlbeICRA/profile-displaybackgroundimage-shrink_350_1400/0/1639603534563?e=1661990400&v=beta&t=RdJrTR2_qcOVMrkV9HEXu3utGn2t05X4ypQaNbOaHsA" alt="" />
        
        <div className={styles.profile}>
            <Avatar src="https://github.com/jparouca.png" />

            <strong>Joao Pedro Arouca</strong>
            <span>Data Engineer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil</a>
        </footer>
        </aside>
    )
}