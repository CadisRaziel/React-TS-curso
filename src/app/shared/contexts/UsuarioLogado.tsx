//componente para usar o nome do usuario em mais de uma tela

import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;

    logout: () => void;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({}) => {

    const handleLogout = useCallback(() => {
        console.log('logout executou')
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Vitor', logout: handleLogout }}>

        </UsuarioLogadoContext.Provider>
    );
}


