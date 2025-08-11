import { useContext } from "react"
import { useParams } from "react-router-dom"
import DatabaseContext from "../../contexts/databaseContext"
import { DeleteButton, UpdateButton } from "../../components/buttons"
import InfoRow from "../../components/InfoRow"
import styles from './Item.module.css'

export default function Item() {
  const { itemId } = useParams()
  const { findData } = useContext(DatabaseContext)
  
  const item = findData(itemId)
  return (

    <section className={styles.wrapper}>
      <div>
        <h1>{item.name}</h1>
        <UpdateButton to={`/items/update/${item.id}`} />
        <DeleteButton item={item} />
      </div>
      
      <div>
        <InfoRow>Categoria: {item.category}</InfoRow>
        <InfoRow>Quantidade em estoque: {item.quantity}</InfoRow>
        <InfoRow>Preço: R${item.price}</InfoRow>
      </div>

      <div className={styles.description}>
        <p>{item.description}</p>
      </div>

      <div>
        <p>Cadastrado em: {new Date(item.addedDate).toLocaleString()}</p>
        <p>Última atualização: {item.updatedDate}</p>
      </div>
    </section>
  )
}