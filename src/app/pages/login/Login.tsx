import {  useMemo, useState } from "react";
import { useNavigate  } from "react-router-dom";


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

    //imagine uma operação complexa e eu nao quero que ele fique sendo refeito toda vez que o estado seja alterado
    // useMemo = tipo um sharedPreference
    const emailLenght = useMemo(() => {
        return email.length * 2
    }, [email.length]);


    //para voltar para alguma pagina !! 
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pagina-inicial')
    }

    const handlerEntrar = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div>
            <form>
                <p>Quantiade de caracteres no email: {emailLenght}</p>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEMail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
                    
                </label>

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