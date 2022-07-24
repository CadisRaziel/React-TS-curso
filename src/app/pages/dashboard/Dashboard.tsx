import { Link } from 'react-router-dom'
import { useRef } from "react";

export const Dashboard = () => {

    //useRef não altera o valor visualmente (nao da um build da pagina) porém esta atualizando
    const counterRef = useRef({ counter: 0})
    
    return (
       <div>
       <p>Dashboard</p>
       <p>Contador: { counterRef.current.counter }</p>
       <button onClick={ () => counterRef.current.counter++ }>Somar</button>
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