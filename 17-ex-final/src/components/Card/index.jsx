import styles from './Card.module.css'

export default function Card({ title, value }) {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <span>{value}</span>
    </div>
  )
}