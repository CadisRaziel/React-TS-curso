import { Link } from 'react-router-dom'
import { useRef } from "react";
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {

    //utilizando o contexto
    const { nomeDoUsuario, logout } = useUsuarioLogado();

    //useRef não altera o valor visualmente (nao da um build da pagina) porém esta atualizando
    const counterRef = useRef({ counter: 0 })

    return (
        <div>
            <p>Dashboard</p>

            {/* utilizando o contexto */}
            <p>{nomeDoUsuario}</p>


            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={logout}>Logout</button>
            <Link to={'/entrar'}> Login</Link>
        </div>
    );

    //!tanto com 0 ou informando ser um number daria certo
    // const counterRef = useRef(0)
    // return (
    //    <div>
    //    <p>Dashboard</p>
    //    <p>Contador: { counterRef.current }</p>
    //    <button onClick={ () => counterRef.current++ }>Somar</button>
    //    <Link to={'/entrar'}> Login</Link>
    //    </div>
    // );
};