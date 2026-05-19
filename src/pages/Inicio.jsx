import '../styles/Inicio.css'
import '../styles/anim_bg.css'
import { Link } from 'react-router'

export const Inicio = () => {
    return <div className="inicio"> 
        <h1 className='inicio_header'>INICIO</h1>
        
        <Link to="/usuarios" className="link-button"> Ver Usuarios</Link>
        <Link to="/registro" className="link-button"> Crear Usuario</Link>
        
        {/* Elementos del fondo animado */}
        <div class="background">

</div>

        
        </div>





}