import './index.css';
import { FormEvent, useRef } from 'react';

export const SignUp: React.FC = () => {
    
    const formRef = useRef<HTMLFormElement>(null);

    const addUser = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = ({
            username: formRef.current!.username.value,
            email: formRef.current!.email.value,
            password: formRef.current!.password.value,
        });

        await fetch("http://localhost:3001/register", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'Content-type': 'application/json'}
        });
    };

    return (
        <div className='signInPage'>
            <form ref={formRef} onSubmit={e => addUser(e)}>
                <input className='auth-input' type="text" name='username' placeholder='Введите имя'/>
                <input className='auth-input' type="text" name='email' placeholder='Введите email'/>
                <input className='auth-input' type="password" name='password' placeholder='Введите пароль'/>
                <button className='auth-button' type='submit'>Зарегистрироваться</button>
            </form>
        </div>
    );
}