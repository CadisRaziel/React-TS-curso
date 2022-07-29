//componente para usar o nome do usuario em mais de uma tela

import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;

    logout: () => void;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC = ({}) => {

    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() =>  {
           setNome('Vitor');
        }, 300);
    })

    const handleLogout = useCallback(() => {
        console.log('logout executou')
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>

        </UsuarioLogadoContext.Provider>
    );
}


