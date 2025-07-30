import styles from "./Textarea.module.css";

export default function Textarea({ labelText, id, cols, rows, value, setValue }) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id}>{labelText}</label>
            <textarea 
            id={id}
            cols={cols ? cols : '45'}
            rows={rows ? rows : '10'}
            required
            value={value}
            onChange={(ev) => setValue(ev.target.value)} >         
            </textarea>
        </div>
    )
}