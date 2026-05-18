import { useEffect, useState } from "react";
import { Link } from "react-router";
import { supabase } from '../supabaseClient';
import '../styles/Usuarios.css'

export const Usuarios = () => {

    {/* Aquí se crean las Profile Cards */}
    const [perfiles, setPerfiles] = useState([]) 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
    const obtenerPerfiles = async () => {
        try {
            const { data, error: supabaseError } = await supabase
                .from('usuarios')
                .select('*')

            if (supabaseError) throw supabaseError

            setPerfiles(data)
        }
        catch (err) {
            console.log(err)
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

    obtenerPerfiles()
}, [])

    if(error){
        return <h1 style={{ color: 'red' }}>Hubo un error inesperado al obtener los usuarios</h1>
    }
    
    if(loading){
        return( 
        <div className="boxPerfiles">
            <h1> Cargando... </h1>

            {/* Elementos del fondo animado */}
        <div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
        </div>
        )
    }

    return<div className="boxPerfiles">  {/* Aquí se crean las Profile Cards */}
            {perfiles.map(user => (
                <div className="listaPerfiles" key={user.id}>
                    <h3>{user.nombre}</h3> {/* Se llama al array de los datos de usuarios guardado en la API */}
                    <h4>{user.email}</h4>
                    <Link to ={'/usuario/' + user.id} className="linkPerfil">Ver Detalles</Link>
                </div>
            ))
            }

            {/* Elementos del fondo animado */}
        <div class="background">
   </div>

        </div>
}