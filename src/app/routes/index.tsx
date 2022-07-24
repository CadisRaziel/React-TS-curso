//atualizando o react router dom "rotas" (npm install react-router-dom)

import {BrowserRouter, Route, Routes as Switch, Navigate } from 'react-router-dom'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/entrar" element={Login} />
                <Route path="/pagina-inicial" element={Dashboard} />


                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Switch>
        </BrowserRouter>
    );
}