import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ✅ Add this import
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
