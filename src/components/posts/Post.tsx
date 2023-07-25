import styles from "./Post.module.css";
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

type Content = {
  type: "paragraph" | "link";
  content: string;
};

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}

//em vez de usar props fazer desistruturacao de objeto {}
export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  };

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'de' y 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commnetToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((commnent) => {
      return commnent !== commnetToDelete;
    });

    //imutabilidade não sofrem mutação, não alterar valor da variável,cria um novo valor com o set(um novo espaço na memoria)
    setComments(commentsWithoutDeletedOne);
  };

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("Este campo é obrigatório!");
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src={post.author.avatarUrl}
            onClick={() => alert("bora ver")}
          />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
        
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            name="comment"
            value={newCommentText}
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Comentar
            </button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                avatar={post.author.avatarUrl}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
