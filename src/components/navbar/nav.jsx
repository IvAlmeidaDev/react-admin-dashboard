import { useState } from "react";
import { Link } from "react-router";
import './nav.css'

export const Nav = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <nav className="nav-container">
            <div className="nav-header">
                <h2>Mi Sitio</h2>
                <button className="hamburger" onClick={toggleMenu}>
                ☰
        </button>
    </div>

    <div className={`nav-links ${menuAbierto ? "activo" : ""}`}>
        <Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link>
        <Link to="/registro" onClick={() => setMenuAbierto(false)}>Registro</Link>
        <Link to="/usuarios" onClick={() => setMenuAbierto(false)}>Usuarios</Link>
    </div>
    </nav>
    );
};