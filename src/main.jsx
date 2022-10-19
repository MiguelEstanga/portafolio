import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contexto, { Global } from './context/Context'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Contexto>
       <App />
    </Contexto>
      
   




  </React.StrictMode>
)
