import React from 'react';
import { Routes } from './routes';
// import { UsuarioLogadoProvider } from './shared/contexts/UsuarioLogado';

// antes estava funcion App () {}
export const App = () => {
  return (
    //UsuarioLogadoProvider -> Colocando ele aqui agora voce compartilha o contexto com todas as rotas
    // <UsuarioLogadoProvider>
      <Routes />
    // </UsuarioLogadoProvider>
   
  );
}


// export default App;
