import Comment from "../Comment";

export default function CommentList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li>
          <Comment comment={comment} key={comment.id} />
        </li>
      ))}
    </ul>
  );
}
