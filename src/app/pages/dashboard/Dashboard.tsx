import { Link } from 'react-router-dom'
import { useCallback, useRef, useState } from "react";
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {

    const [Lista, setLista] = useState<string[]>(['banana', 'maça', 'melancia']);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if(e.key === 'Enter') {
            if(e.currentTarget.value.trim().length === 0) {
                return;
            }
            //Quando tiver apenas uma lista (e um item na lista)
            // setLista([...Lista, e.currentTarget.value]);

            //quando tiver mais de uma lista (e mais de um item na lista)
            const value = e.currentTarget.value;

            //para limpar o input
            e.currentTarget.value = '';
            setLista((oldlista) => {

                //para nao adicionar elementos repetidos
                if(oldlista.includes(value)) {
                    return oldlista;
                }
                return [...oldlista, value ]
            });
        }
    // }, [Lista])
    }, [])

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

            <p>Lista</p>

            <input 
                onKeyDown={handleInputKeyDown}
            />

            <ul>
                {Lista.map((value, index) => {
                    return <li key={value}>{value}</li>
                })}
            </ul>

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