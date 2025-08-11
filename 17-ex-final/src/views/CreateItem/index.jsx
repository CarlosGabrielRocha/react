import ManagerItemForm from "../../components/ManagerItemForm"
import styles from "./CreateItem.module.css"

export default function CreateItem() {
  return (
    <section className={styles.wrapper}>
      <ManagerItemForm action='create' />
    </section>
  )
}