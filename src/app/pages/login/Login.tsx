import { useState } from "react";
import { useNavigate  } from "react-router-dom";


export const Login = () => {
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');


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