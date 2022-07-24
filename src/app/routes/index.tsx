//atualizando o react router dom "rotas" (npm install react-router-dom)
//adicionando no devDependencies o sistema de tipagem (npm install -D @types/react-router-dom)
//Atualizado \/
import {BrowserRouter, Route, Routes as Switch, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Dashboard />} />
               

                {/* aqui definimos qual pagina ele sempre vai iniciar */}
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Switch>
        </BrowserRouter>
    );
}


