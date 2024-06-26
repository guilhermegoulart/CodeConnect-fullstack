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
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  await db.comment.create({
    data: {
      text: formData.get("text"),
      authorId: author.id,
      postId: post.id,
    },
  });

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function PostReply(parent, formData) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  const Post = await db.post.findFirst({
    where: {
      id: parent.postId,
    },
  });

  await db.comment.create({
    data: {
      text: formData.get("text"),
      authorId: author.id,
      postId: Post.id,
      parentId: parent.parentId ?? parent.id,
    },
  });

  revalidatePath(`/${Post.slug}`);
}
