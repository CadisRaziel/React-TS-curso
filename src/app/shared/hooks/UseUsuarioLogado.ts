//hooks personalizados
//aqui vamos fazer um hook personalizado para usar junto com o context do UsuarioLogado

import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts/UsuarioLogado";

export const useUsuarioLogado = () => {
    const context = useContext(UsuarioLogadoContext);
    return context;
}


//fica mais facil a utilização nas telas, pois precisa de menos importes, e posso separar todos os hooks com context auqi
//e depis exportar ali no index.ts
//ai quem chamar, vai chamar só uma classe com tudo isso aqui dentro
