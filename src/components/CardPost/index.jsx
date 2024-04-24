import Image from "next/image";
import Link from "next/link";

import { Avatar } from "../Avatar";
import { incrementThumbsUp } from "@/app/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment, modalComment }  from "../ModalComment"

import styles from "./cardpost.module.css";

export const CardPost = ({ post, highlight }) => {

  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          <Image
            src={post.cover}
            fill
            alt={`Capa do post de titulo: ${post.title}`}
          />
        </figure>
      </header>

      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Ver detalhes
        </Link>
      </section>

      <footer className={styles.footer}>
        <div>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
            <p>{post.Likes}</p>
          </form>
          <div>
            <ModalComment />
            <p>
              {post.comments.lenght}
            </p>
          </div>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    
    </article>
  );
};
