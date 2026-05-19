/*LIBERÍAS DE REACT*/
import { BrowserRouter, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*IMPORTAR COMPONENTES */ 
import {Nav} from "./components/navbar/nav.jsx"
import {Sidebar} from "./components/sidebar/sidebar.jsx"


/*IMPORTAR PAGINAS */
import { HomeCards } from "./pages/home.jsx"
import { Error404 } from "./pages/error404"
import { Inicio } from "./pages/Inicio"
import {Usuarios} from "./pages/Usuarios"
import { DetallesId } from "./pages/userid"
import { Registro } from "./pages/Registro"
import { Editar } from "./pages/EditarPerfil"


/*IMPORTAR ESTILOS */
import './fonts/font-families.css'
import './App.css'


function App() {

  return (
  <BrowserRouter>

    <div className="app">

      <Sidebar />

      <div className="mainContent">

        <Nav />

        <main>
          <Routes>
            <Route path='/' element={<HomeCards />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/usuario/:id' element={<DetallesId />} />
            <Route path='/usuario/editar/:id' element={<Editar />} />
            <Route path='*' element={<Error404 />} />
          </Routes>

          <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="colored"
          />

        </main>

      </div>

    </div>

  </BrowserRouter>
)
}

export default App
