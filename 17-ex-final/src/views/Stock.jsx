import { useLoaderData } from "react-router-dom";
import Table from "../components/table";
import { DeleteButton, UpdateButton, ViewButton } from "../components/buttons";

export default function Stock() {
  const items = useLoaderData()

  return (
    <div>
      
      {
        items.length > 0 ?
        <>
          <h1>Items em Estoque</h1>
          <Table cols={['ID', 'Nome', 'Em Estoque', 'Categoria', 'Ações']}>
            <tbody>
              {
                items.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.category}</td>
                      <td>
                        <ViewButton to={`/items/${item.id}`} />
                        <UpdateButton to={`/items/update/${item.id}`} />
                        <DeleteButton item={item} />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </>
        :
        <h1>Não há items no estoque!</h1>
      }

    </div>
  )
}