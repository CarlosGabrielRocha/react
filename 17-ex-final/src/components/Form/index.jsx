import styles from './Form.module.css'

export default function Form({ children, submitFunction }) {
  return (
    <form 
      className={styles.wrapper} 
      onSubmit={submitFunction}>
        {children}
    </form>
  )
}