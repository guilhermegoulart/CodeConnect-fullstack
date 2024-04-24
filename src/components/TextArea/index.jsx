import styles from './textarea.module.css'

export const TextArea = ({children, ...rest}) => {
  return (
    <textarea className={styles.textarea} {...rest}>
      {children}
    </textarea>
  )
}