import React, { } from 'react'
import ReactDOM from 'react-dom/client'
/* importando as dependencias do browserRouter e Router Provider*/
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
 /* importando os elementos */
import App from './App.jsx'
import Home from './Home.jsx'
import Error from './Error.jsx'
import Casual from './Casual.jsx'
import Carrinho from './componentes/Carrinho.jsx'
import Masculino from './componentes/Masculino.jsx'
import Feminino from './componentes/Feminino.jsx'
import CarouselsC from './Carrousels/CarouselsC.jsx'
import Login from './componentes/Login.jsx'
import CarouselsF from './Carrousels/CarouselsF.jsx'
import CarouselsO from './Carrousels/CarouselsO.jsx'
import CarouselsM from './Carrousels/CarrouselsM.jsx'
import Outlet from './componentes/Outlet.jsx'

 /* criando a função createBrowser */
const router =createBrowserRouter([
{
   /* chamando o elemento principal(pai) */
  path: '/', element: <App />,
   /*  chamando o elemento de erro*/
  errorElement: <Error />,

   /* chamando elementos filhos */
children:[
  {path: '/home', element:<Home />},
  {path: '/Casual', element:<Casual />},
  {path: '/Carrinho', element:<Carrinho />},
  {path: '/Feminino', element:<Feminino />},
  {path: '/Masculino', element:<Masculino />},
  {path: '/CarouselsC', element:<CarouselsC />},
  {path: '/CarouselsF', element:<CarouselsF />},
  {path: '/CarouselsO', element:<CarouselsO />},
  {path: '/CarouselsM', element:<CarouselsM />},
  {path: '/Login', element:<Login />},
  {path: '/Outlet', element:<Outlet />},
]

}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/*chamando a função que será renderizada */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

