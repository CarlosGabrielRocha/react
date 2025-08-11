import styles from './table.module.css'

export default function Table({ children, cols }) {

  return (
    <table className={styles.wrapper}>
        <THead cols={cols} />
      {children}
    </table>
  )
}

function THead({ cols }) {
  return (
    <thead>
      <tr itemScope='col'>
        {
          cols.map(col => {
            const id = Math.floor(Math.random() * 1000000)
            return <th key={id}>{col}</th>
          })
        }
      </tr>
    </thead>
  )
}