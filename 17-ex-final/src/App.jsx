import { RouterProvider } from "react-router-dom"
import router from "./router"
import DatabaseContext from "./contexts/databaseContext"
import useDatabase from "./hooks/useDatabase"


function App() {
  const [addData, findData, safeFindData, editData, deleteData] = useDatabase()

  return (
    <>
      <DatabaseContext.Provider value={{addData, findData, safeFindData, editData, deleteData}}>
        <RouterProvider router={router} />
      </DatabaseContext.Provider>
    </>
  ) 
}

export default App
