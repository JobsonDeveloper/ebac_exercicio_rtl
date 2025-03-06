import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/sotre';
import { adicionar } from '../../store/reducers/comentarios';

const Post = () => {
    const dispatch = useDispatch()
    const comments = useSelector((state: RootState) => state.comentarios.lista) 
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        dispatch(adicionar(newComment))
    }

    return (
        <div>
            <ul data-testId="listaComentarios" className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id}>
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} />
                <button type="submit" className={styles['post-comments-form-button']}>
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;