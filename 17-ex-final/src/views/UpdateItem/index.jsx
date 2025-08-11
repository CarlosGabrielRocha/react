import { useParams } from "react-router-dom";
import ManagerItemForm from "../../components/ManagerItemForm";
import styles from './UpdateItem.module.css'

export default function UpdateItem() {
  const { itemId } = useParams()

  return (
    <section className={styles.wrapper}>
      <ManagerItemForm itemId={itemId} action='edit' />
    </section>
  )
}