import { Link } from "react-router";
import './sidebar.css'

export const Sidebar = () => {
    return (
            <aside className="sidebar">

      <div className="sidebar_logo">
        <h2>Mi Sitio</h2>
      </div>

      <nav className="sidebar_nav">
        <ul>

          <li className="sidebar_button">
            <a href="/">Inicio</a>
          </li>

          <li className="sidebar_button">
            <a href="/usuarios">Usuarios</a>
          </li>

          <li className="sidebar_button">
            <a href="/registro">Crear Usuario</a>
          </li>

        </ul>
      </nav>

    </aside>
    );
}