import { useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router"
import { supabase } from '../supabaseClient'
import '../styles/Registro.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Registro = () => {
    const navigate = useNavigate()

    const [User, setUser] = useState({
        nombre: '',
        email: '',
        activo: true,
        contraseña: '',
    })

    function manejarCambio(evento) {
        const { name, value } = evento.target
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function manejarEnvio(evento) {
        evento.preventDefault()

        try {
            const { error } = await supabase
                .from('usuarios')
                .insert([
                    {
                        nombre: User.nombre,
                        email: User.email,
                        activo: User.activo,
                        contraseña: User.contraseña
                    }
                ])

            if (error) throw error

            toast.success('✅ Usuario creado correctamente!')

            setUser({
                nombre: '',
                email: '',
                activo: true,
                contraseña: '',
            })

            setTimeout(() => {
                navigate('/usuarios')
            }, 100)

        }
        catch (err) {
            console.log(err)
            toast.error('Error al enviar los datos')
        }
    }

    return (
        <div>
            <Link to="/" className="back-button"> Volver</Link>

            <div className="RegistroBox">
                <h1 className="registro_header">Registro</h1>

                <form className="RegistroForma" onSubmit={manejarEnvio}>

                    <input
                        className="registro_input"
                        type='text'
                        placeholder="Nombre"
                        name='nombre'
                        value={User.nombre}
                        onChange={manejarCambio}
                    />

                    <input
                        className="registro_input"
                        type='email'
                        placeholder="Correo"
                        name='email'
                        value={User.email}
                        onChange={manejarCambio}
                    />

                    <input
                        className="registro_input"
                        type='password'
                        placeholder="Contraseña"
                        name='contraseña'
                        value={User.contraseña}
                        onChange={manejarCambio}
                    />

                    <button type="submit" className="BotonEnviar">
                        Crear Cuenta
                    </button>

                </form>
            </div>

            {/* Fondo animado */}
            <div className="background">
            </div>
        </div>
    )
}