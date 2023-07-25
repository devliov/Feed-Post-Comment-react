import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  content : string;
  onDeleteComment: (comment:string) => void;
  avatar: string;
}

export function Comment({ content, avatar, onDeleteComment } : CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeCount = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={avatar} alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eli Sousa</strong>
              <time title="11 de Maio de 20023" dateTime="05-04-2023 15:32:43">
                Cerca de 1hr atás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            <strong>Aplaudir</strong>
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
