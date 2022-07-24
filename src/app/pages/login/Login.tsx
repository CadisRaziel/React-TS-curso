import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     if(window.confirm('Você é homen ?')) {
    //         console.log('sim')
    //     }else {
    //         console.log('não')
    //     }m 
    // }, []);

    // useEffect(() => {
    //     console.log(email)
    //     console.log(password)
    // }, [email, password])


    // evita que se reconstrua toda vez que um state for alterado
    //imagine uma operação complexa e eu nao quero que ele fique sendo refeito toda vez que o estado seja alterado
    // useMemo = tipo um sharedPreference (memoriza calculos)
    const emailLenght = useMemo(() => {
        return email.length * 2
    }, [email.length]);

    // useCallBack = tipo um sharedPreference (memoriza funcoes)
    // evita que se reconstrua toda vez que um state for alterado
    const handlerEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
       
    }, [email, password])


    //useRef = permite que armazena valor dentro de uma variavel
    //e esses valores não serao alterados quando o react builda a tela novamente
    //esse valor vai ser alterado depois que renderizar o html
    const inputPasswordRef = useRef<HTMLInputElement>(null);


    //para voltar para alguma pagina !! 
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pagina-inicial')
    }


    return (
        <div>
            <form>
                <p>Quantiade de caracteres no email: {emailLenght}</p>

                {/* <label>
                    <span>Email</span>
                    <input
                        value={email}
                        onChange={e => setEMail(e.target.value)}

                        // onKeyDown = ao apertar o enter vai focar no outro campo
                        onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                    />
                </label> 

                 <label>
                    <span>Senha</span>
                    <input
                        ref={inputPasswordRef}
                        type={"password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                </label> */}

                {/* Componetizado */}
                <InputLogin 
                label="Email" 
                value={email}
                onChange={newValue => setEMail(newValue)}
                onPressEnter={ () => inputPasswordRef.current?.focus()}
                />

                

                <InputLogin 
                label="Senha" 
                type={"password"}
                value={password} 
                ref={inputPasswordRef}
                onChange={newValue => setPassword(newValue)}                
                />
               

            </form>

            <button type="button" onClick={handlerEntrar}>
                Entrar
            </button>

            <button onClick={handleClick}>
                Voltar
            </button>
        </div>
    );
};