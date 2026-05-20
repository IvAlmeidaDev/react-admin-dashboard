import { useNavigate } from "react-router";
import { useEffect , useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router"
import { supabase } from '../supabaseClient';

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
            [name]:
            name === 'activo' 
            ? value === 'true' 
            : value
        }))
    }

    async function manejarEnvio(evento) {
        evento.preventDefault()
        

        // Validación para que los campos no puedan quedar vacios//
        if (!usuario.nombre.trim() || !usuario.email.trim() || !usuario.contraseña.trim()) {
            toast.error('Por favor, completa todos los campos');
            return;
        }

        //Cambiar los datos de la BD//
        try {
            const{error} = await supabase
            .from('usuarios')
            .update({
                nombre: usuario.nombre,
                email: usuario.email,
                activo: usuario.activo,
                contraseña: usuario.contraseña,
            })
            .eq('id', id)

            if (error) throw error

            toast.success('Perfil actualizado correctamente')
            navigate('/usuario/' + id)
        }
        
        catch (err){
            console.log(err)
            toast.error('Error al actualizar usuario')
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
                const { data, error } = await supabase
                .from ('usuarios') /*Selecciona la tabla usuarios */ 
                .select('*') /*Seleccionar todos los campos*/
                .eq('id', id) /*Busca la fila con el id especificado*/
                .single() /*Traer el array como un solo objeto*/

                if (error) throw error

                setUsuario(data)
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

        </div>

    return(
        <div className="UserBox">
            
            <Link to={`/usuario/${id}`} className="back-button"> Volver</Link>

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