'use client'

import { IconButton } from "../IconButton";
import { ThumbsUp } from "../Icons/ThumbsUp";
import { Spinner } from "../Spinner";

import { useFormStatus } from 'react-dom'

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus()
  return (
    <IconButton disable={pending ? false : undefined}>
      {pending ? <Spinner/> : <ThumbsUp/>}
    </IconButton>
  );
}