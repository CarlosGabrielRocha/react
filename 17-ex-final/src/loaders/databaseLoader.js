export default function databaseLoader() {
  const database = JSON.parse(window.localStorage.getItem('database-reactjs-finalex'))
  if (!database) return []
  return database
}