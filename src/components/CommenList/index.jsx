import Comment from "../Comment";
import ReplyModal from "../ModalReply";
import { Replies } from "../Replies";
import styles from "./commentist.module.css";

export default function CommentList({ comments }) {
  return (
    <section className={styles.comments}>
      <h2>
        Comentários
      </h2>
      <ul>
        {comments.map((comments) => (
          <li key={comments.id}>
            <Comment comment={comments}  />
            <ReplyModal comment={comments} />
            <Replies />
          </li>
          ))}
      </ul>
    </section>
  );
}
