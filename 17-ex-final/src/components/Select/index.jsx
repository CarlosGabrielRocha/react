import styles from './Select.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function Select({ options, id, label, value, handler}) { // options = {value, text}[]
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={handler}
      >
        {
          options.map(({value, text}) =>
            <option value={value} key={uuidv4()}>{text}</option> 
          )
        }
      </select>
    </div>
  )
}