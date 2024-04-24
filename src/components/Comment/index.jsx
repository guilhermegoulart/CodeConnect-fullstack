import Image from "next/image";
import styles from "./coment.module.css";

export default function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <Image
        src={comment.author.avatar}
        width={32}
        height={32}
        alt={`avatar do(a) ${comment.author.name}`}
      />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  );
}
