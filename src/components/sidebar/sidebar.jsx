import { Link } from "react-router";
import './sidebar.css'
import logo from '../../assets/Vitejs-logo.svg'

export const Sidebar = () => {
    return (
            <aside className="sidebar">

      <div className="sidebar_logo">
        <img src={logo} alt="Logo"></img>
      </div>

      <nav className="sidebar_nav">
        <ul>

          <li>
            <a className="sidebar_button" href="/">Inicio</a>
          </li>

          <li>
            <a className="sidebar_button" href="/usuarios">Usuarios</a>
          </li>

          <li>
            <a className="sidebar_button" href="/registro">Crear Usuario</a>
          </li>

        </ul>
      </nav>

    </aside>
    );
}