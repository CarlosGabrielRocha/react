import styles from './Input.module.css'

export default function Input({ type, id, labelText, value, setValue }) {
    return (
       <div className={styles.wrapper}>
            <label htmlFor={id}>{labelText}</label>
            <input 
            type={type}
            id={id} 
            required
            value={value}
            onChange={(ev) => setValue(ev.target.value)}/>
       </div> 
    )
}