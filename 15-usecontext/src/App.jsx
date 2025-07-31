import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

export default function App() {
  const user = {
    name: "João",
    email: "Joao@email.com"
  }
  return (
    <>
    <UserContext.Provider value={user}>
      <Header />
      <h1>Usando contexto</h1>
      <Container>
        <p>Este é o nosso app com contexto</p>
      </Container>
    </UserContext.Provider>
    <div>
      {/* Não há acesso ao contexto */}
    </div>
    </>
  )
}
