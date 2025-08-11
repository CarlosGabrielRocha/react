import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function getDatabase() {
  const database = JSON.parse(window.localStorage.getItem('database-reactjs-finalex'))
  if (!database) return []
  return database
}

export default function useDatabase() {
  const [database, setDatabase] = useState(getDatabase)

  const addData = (name, quantity, price, category, description) => {
    const updatedDatabase = [
      {
        id: uuidv4(),
        name,
        quantity,
        price,
        category,
        description,
        addedDate: new Date(),
        updatedDate: new Date().toLocaleString()
      }, ...database]
    setDatabase(updatedDatabase)
    window.localStorage.setItem('database-reactjs-finalex', JSON.stringify(updatedDatabase))
  }

  const editData = (itemId, attributes) => {
    attributes.updatedDate = new Date().toLocaleString()
    let itemIndex = database.findIndex(item => item.id === itemId)
    if (itemIndex === -1) throw new Error('Oops, parece que o item não foi encontrado!')
    const updatedDatabase = [...database]
    updatedDatabase[itemIndex] = {...updatedDatabase[itemIndex], ...attributes}
    setDatabase(updatedDatabase)
    window.localStorage.setItem('database-reactjs-finalex', JSON.stringify(updatedDatabase))
  }

  const deleteData = (itemId) => {
    setDatabase(state => {
      const updatedDatabase = state.filter(item => item.id !== itemId)
      window.localStorage.setItem('database-reactjs-finalex', JSON.stringify(updatedDatabase)) 
      return updatedDatabase    
    })
  }

  const findData = (itemId) => {
    const item = database.find(item => item.id === itemId)
    if (!item) throw new Error('Oops, parece que o item não foi encontrado!')
    return item
  }

  const safeFindData = itemId => database.find(item => item.id === itemId)

  return [addData, findData, safeFindData, editData, deleteData]
}