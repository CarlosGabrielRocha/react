import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import DatabaseContext from "../../contexts/databaseContext"

function ViewButton({ to }) {
  return (
    <Link to={to}>
      <button style={{ backgroundColor: '#fff' }}>Ver</button>
    </Link>
  )
}

function UpdateButton({ to }) {
  return(
    <Link to={to}>
      <button style={{ backgroundColor: '#28a745'}}>Atualizar</button>
    </Link>
  )
}

function SaveButton() {
  return <button type="submit" style={{ backgroundColor: '#007BFF'}}>Salvar</button>
  
}

function DeleteButton({ item }) {
  const { deleteData } = useContext(DatabaseContext)
  const navigate = useNavigate()

  return (
    <button 
      style={{ backgroundColor: '#962626' }}
      onClick={() => {
        const should = confirm(`Remover ${item.name}?`)
        if (should) {
          deleteData(item.id)
          alert('O item foi removido com sucesso!')
          navigate('/items')
        }
      }}>
      Excluir
    </button>
  )
}

export { ViewButton, UpdateButton, SaveButton, DeleteButton}
