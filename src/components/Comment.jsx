import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';
import {Avatar} from './Avatar'

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handelDeleteComment(){
       onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        
        <div className={styles.comment}>
            <Avatar Bordered={false} src="https://github.com/jparouca.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Khada Jhin</strong>
                            <time title="15 de Junho de 2022" dateTime="2022-05-11 8:13:30">
                                Cerca de 2h atrás
                            </time>
                        </div>

                        <button onClick={handelDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}