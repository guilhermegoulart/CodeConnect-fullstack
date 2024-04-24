'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../Icons/Chat"
import { Modal } from "../Modal"

export const ModalComment = () => {
  const modalRef = useRef(null)

  return (
    <>                                        
      <Modal ref={modalRef}>
        <form>
          <textarea name="text"></textarea>
          <button></button>
        </form>
      </Modal>
      <IconButton
        onClick={() => modalRef.current.openModal()}
      >
        <Chat />
      </IconButton>
    </>
  )
}