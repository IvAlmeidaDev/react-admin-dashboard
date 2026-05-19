import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "../styles/home.css"

export const HomeCards = () => {

    const [stats, setStats] = useState({
        total: 0,
        activos: 0,
        inactivos: 0
    });

    useEffect(() => {

        const obtenerUsuarios = async () => {

            const { data, error } = await supabase
                .from("usuarios")
                .select("*");

            if (error) {
                console.log(error);
                return;
            }

            const totalUsuarios = data.length;

            const usuariosActivos = data.filter(
                usuario => usuario.activo === true
            ).length;

            const usuariosInactivos = data.filter(
                usuario => usuario.activo === false
            ).length;

            setStats({
                total: totalUsuarios,
                activos: usuariosActivos,
                inactivos: usuariosInactivos
            });

        };

        obtenerUsuarios();

    }, []);

    return (

        <div className="dashboardCards">

            <div className="statCard">
                <h3>Total Usuarios</h3>
                <p>{stats.total}</p>
            </div>

            <div className="statCard">
                <h3>Usuarios Activos</h3>
                <p>{stats.activos}</p>
            </div>

            <div className="statCard">
                <h3>Usuarios Inactivos</h3>
                <p>{stats.inactivos}</p>
            </div>

                        {/* Elementos del fondo animado */}
            <div class="background">

            </div>

        </div>

    );

};