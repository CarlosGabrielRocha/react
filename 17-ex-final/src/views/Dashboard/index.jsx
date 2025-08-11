import { useLoaderData } from "react-router-dom"
import Card from "../../components/Card"
import styles from "./Dashboard.module.css"
import Table from "../../components/table"
import { ViewButton } from "../../components/buttons"


export default function Dashboard() {
  const { itemsDiversity, totalOfItems, addedLast10Days, lowInStock} = useLoaderData()

  return (
    <div className={styles.wrapper}>
      <h1>Dashboard</h1>

      <section>
        <Card title='Diversidade' value={itemsDiversity} />
        <Card title='Total' value={totalOfItems} />
        <Card title='Itens recentes' value={addedLast10Days.length} />
        <Card title='Acabando' value={lowInStock.length} />
      </section>

      <section>

        <Table cols={['Itens Recentes', 'ações']}>
          <tbody>
            {
              addedLast10Days.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td><ViewButton to={`/items/${item.id}`}/></td>
                  </tr>
                ) 
              })
            }
          </tbody>
        </Table>

        <Table cols={['Acabando', 'Quant', 'ações']}>
            <tbody>
              {
                lowInStock.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td><ViewButton to={`/items/${item.id}`}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
        </Table>
      </section>
    </div>
  )
}
