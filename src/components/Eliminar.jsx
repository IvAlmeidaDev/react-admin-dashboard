import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from '../supabaseClient';


export const BotonEliminar = ({ id }) => {
    
    const navigate = useNavigate();

    const manejarBorrar = async () => {
        const confirmar = window.confirm("¿Deseas eliminar este usuario?");
        if (!confirmar) return;

        try {
            const { error } = await supabase
                .from('usuarios')
                .delete()
                .eq('id', id);

            if (error) throw error;

            toast.error('Usuario Eliminado');

            navigate("/usuarios");
        }

        catch (err) {
            console.error(err);
            toast.error('No se pudo eliminar el usuario');
        }
    };

    return (
        <button onClick={manejarBorrar} className="back-button">Eliminar</button>);
};