import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsDataProvider from './Context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProductsDataProvider>
            <App />
        </ProductsDataProvider>
    </StrictMode>,
)
