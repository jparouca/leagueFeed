import React, { useState } from 'react';
import { format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import {Avatar} from './Avatar'
import styles from './Post.module.css';


export function Post ({ author, publishedAt, content }) {
    const [comments, setComments] = useState ([
        'The ecstasy of opening night'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedFormatted = format(
        publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{locale: ptBr,
        });

    const publishedDistanceToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        
        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText]);
        setNewCommentText('')
        event.target.comment.value = '';
    }

    function handleCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToBeDeleted) {
        const commentsWithoutDeleted = comments.filter(comments => {
            return comments != commentToBeDeleted;
        })
        setComments(commentsWithoutDeleted);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    function hadleNewCommentInvalid() {
        console.log(event);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDistanceToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type ==='link') { 
                        return <p key={line.content}><a href="#">(line.content)</a></p>
                   } 
                })}
                <a href="https://www.linkedin.com/in/jparouca/">LinkedIn</a>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Comente o que achou'
                    value={newCommentText}
                    onChange={handleCommentChange}
                    onInvalid={hadleNewCommentInvalid}
                    required
                 />

                 <footer>
                    <button type='submit' disabled={isNewCommentEmpty} >
                        Publicar
                    </button>
                 </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comments => {
                    return (
                    <Comment 
                    key={comments} 
                    content={comments}
                    onDeleteComment={deleteComment} 
                     />
                    )
                })}
            </div>

        </article>
    )
}