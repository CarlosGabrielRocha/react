import styles from './Input.module.css'

export default function Input({label, id, value, handler, ...props}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
       required
       type="text"
       id={id} 
       value={value}
       onChange={handler}
       {...props}
      />
    </div>
  )
}