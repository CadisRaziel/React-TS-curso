//componente para usar o nome do usuario em mais de uma tela

import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({}) => {
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Vitor' }}>

        </UsuarioLogadoContext.Provider>
    );
}