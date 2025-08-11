import styles from './InfoRow.module.css'

export default function InfoRow({ children }) {
  return (
    <span className={styles.wrapper}>
      {children}
    </span>
  )
}