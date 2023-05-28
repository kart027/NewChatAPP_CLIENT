import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AUTHCONTEXTPROVEIDER } from './context/authContext.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AUTHCONTEXTPROVEIDER>
        <App />
    </AUTHCONTEXTPROVEIDER>
     
    </BrowserRouter>

  </React.StrictMode>,
)
