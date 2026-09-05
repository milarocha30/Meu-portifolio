import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Projetos from './components/Projetos.jsx'

const container = document.getElementById('react-projetos')

if (container) {
    createRoot(container).render(
        <StrictMode>
            <Projetos />
        </StrictMode>
    )
}
console.log("REACT FOI CARREGADO!");