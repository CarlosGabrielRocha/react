import styles from './TextArea.module.css'

export default function TextArea({id, label, cols, rows, value, handler}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <textarea 
        id={id} 
        cols={cols} 
        rows={rows} 
        value={value} 
        onChange={handler}
        required>
      </textarea>
    </div>
  )
}