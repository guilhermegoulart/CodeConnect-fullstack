import Comment from "../Comment";
import { Replies } from "../Replies";
import styles from "./commentist.module.css";

export default function CommentList({ comments }) {
  return (
    <section className={styles.comments}>
      <h2>
        Comentários
      </h2>
      <ul>
        {comments.map((comment) => (
          <li>
            <Comment comment={comment} key={comment.id} />
            <Replies />
          </li>
          ))}
      </ul>
    </section>
  );
}
