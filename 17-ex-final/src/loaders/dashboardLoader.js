import databaseLoader from "./databaseLoader";

export default function dashboardLoader() {
  const database = databaseLoader()
  const itemsDiversity = database.length 
  const totalOfItems = database.reduce((accum, current) => accum += current.quantity, 0)
  const addedLast10Days = database.filter(item => {
    const difference = new Date() - new Date(item.addedDate)  
    const isValidDate = Math.floor((difference / (1000 * 60 * 60 * 24))) <= 10
    return isValidDate
  }) 
  const lowInStock = database.filter(item => item.quantity < 10)
  return { itemsDiversity, totalOfItems, addedLast10Days, lowInStock}
}