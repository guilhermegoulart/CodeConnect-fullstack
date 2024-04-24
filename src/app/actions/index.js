"use server";

import { revalidatePath } from "next/cache";
import db from "../../../prisma/db";

export async function incrementThumbsUp(post) {
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  await db.post.update({
    where: { id: post.id },
    data: {
      Likes: {
        increment: 1,
      },
    },
  });

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function PostComment(post, formData) {
  const author = db.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  await db.comment.create({
    data: {
      text: FormData.get('text'),
      authorId: author.id,
      postId: post.id   
    }
    
  })
  
  revalidatePath('/')
  revalidatePath(`/${post.slug}`)
}