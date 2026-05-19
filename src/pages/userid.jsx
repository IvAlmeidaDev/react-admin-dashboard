import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import '../styles/userid.css'
import { Link } from "react-router"
import { supabase } from '../supabaseClient';

import profilePlaceholder from '../assets/profile_placeholder.svg'
import { BotonEliminar } from "../components/Eliminar.jsx"

export const DetallesId = () => {
    
    const{id} = useParams()

    const [usuario,setUsuario] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)


    useEffect(() => {
        const obtenerUsuario = async () => {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.log(error)
            } else {
                setUsuario(data)
            }

            setLoading(false)
        }

        obtenerUsuario()
    }, [id])

    if (loading){
        return(
            <div className="UserBox">
                <h1>Cargando...</h1>
            
            {/* Elementos del fondo animado */}
        <div class="background">
</div>
            </div>
        )
    }
    
    if (!usuario) return <h1>Usuario no encontrado</h1>

    return(
    <div className="UserBox">
        <Link to="/usuarios" className="back-button"> Volver</Link>
        <h1 className="HeaderPerfil">Perfil:</h1>
        <img src={profilePlaceholder} className="profileImg"></img>

        <ul className="userDetailsBox">
            <li className="userDetailItem">ID: {id}</li>
            <li className="userDetailItem">Nombre: {usuario.nombre}</li>
            <li className="userDetailItem">Correo: {usuario.email}</li>
            <li className="Fecha">Fecha de Registro <br/>
            :{usuario.fechaCreacion}</li>
            <li className="userDetailItem">{usuario.activo ? 'Cuenta activa': 'Cuenta inactiva'}</li>
        </ul>

        <div className="EditarYBorrar">
            <Link to={'/usuario/editar/' + usuario.id} className="back-button"> Editar</Link>
            <BotonEliminar id={id} />
        </div>

        {/* Elementos del fondo animado */}
        <div class="background">
</div>
    </div>
    )
}