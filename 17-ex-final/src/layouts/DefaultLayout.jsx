import { Link, Outlet } from "react-router-dom";
import './layout.css'

export default function DefaultLayout({ children }) {
  return (
      <>
        <header>
            <Link to="/"><h1>React Stock</h1></Link>
              <div className="links">
                <Link to="/" className="link">Início</Link>
                <Link to="/items" className="link">Items</Link>
              </div> 
        </header>
        {children}
        <main>
          <Outlet />
        </main>
        <footer>
          <p>Made with React and React Router =)</p>
        </footer>
      </>
  )
}