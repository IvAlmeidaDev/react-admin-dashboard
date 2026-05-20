import { useNavigate } from "react-router";
import { useEffect , useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router"

import '../styles/Editar.css'

export const Editar = () =>{
    const navigate = useNavigate();
    const {id} = useParams()
    const [usuario,setUsuario] = useState({
        nombre: '',
        email: '',
        activo: true,
        contraseña: '',
    })
    
    const [Loading, setLoading] = useState(true)

    function manejarCambio(evento) {
        const {name, value} = evento.target
        setUsuario((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function manejarEnvio(evento) {
        evento.preventDefault()
        
        try {
            await fetch(
                'https://datum-q26q.onrender.com/api/usuarios/'+ id,
                {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(usuario)
                }
            )
        }
        
        catch (err){
            console.log(err)
        }
        
        finally{
            setUsuario({
                nombre:'',
                email: '',
                activo: true,
                contraseña: '',
            })
            navigate('/usuario/' + id)
        }
    }

    useEffect(() => {
        const obtenerPerfilId = async () => {
            try {
                const res = await fetch ('https://datum-q26q.onrender.com/api/usuarios/' + id)
                const data = await res.json ()
                setUsuario(data.datos)
            }

            catch (err) {
                console.log('Hubo un error en el try: ' + err)
            }

            finally {
                setLoading(false)
            }
        }

        obtenerPerfilId()
    }, [])


    if (Loading) return
    <h1 className="UserBox">Cargando...</h1>
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

    return(
        <div className="UserBox">
            
            <Link to="/usuarios" className="back-button"> Volver</Link>

            <h1 className="edit_header">Editar Perfil</h1>
        
            <form className="edit_form" onSubmit={manejarEnvio}>
                
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={manejarCambio}
                />

                <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    value={usuario.email}
                    onChange={manejarCambio}
                />

                <select
                    name="activo"
                    id=""
                    onChange={manejarCambio}
                    value={usuario.activo}>

                        <option value = "true">Cuenta Activa</option>
                        <option value = "false">Cuenta Inactiva</option>

                </select>

                <input
                    type="password"
                    placeholder="Contraseña"
                    name="contraseña"
                    value={usuario.contraseña}
                    onChange={manejarCambio}
                />

                <button type="submit" className="submit-button">Realizar Cambios</button>{''}

            </form>
        
        {/* Elementos del fondo animado */}
        <div class="background">
        </div>

        </div>
    )
}