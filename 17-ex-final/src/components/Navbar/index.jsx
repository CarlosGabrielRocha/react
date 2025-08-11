import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation()

  return (
    <nav>
      <Link 
       to='/items'
       className={`${location.pathname==='/items'?'selected':''}`}>
       Todos os items
      </Link>
      <Link 
        to="/items/create"
        className={`${location.pathname==='/items/create'?'selected':''}`}>
        Novo Item
      </Link>
    </nav>
  )
}
