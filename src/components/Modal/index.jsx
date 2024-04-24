'use client'

import styles from './modal.module.css';
import { forwardRef, useImperativeHandle, useRef } from "react";

export const Modal = forwardRef(({ children }, ref) => {
  
  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close();
  };

  const openModal = () => {
    dialogRef.current.showModal();
  };

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    };
  });

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <header className={styles.header}>
        <button onClick={closeModal}>
          x
        </button>
      </header>
      {children}
    </dialog>
  );
});
