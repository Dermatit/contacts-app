import { FormEvent, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { loadContacts } from "../Redux/actions";
import { AppDispatch } from '..';

export const SignIn: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    
    const formRef = useRef<HTMLFormElement>(null);
    const [warning, setWarning] = useState<string>('');

    const addUser = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            email: formRef.current!.email.value,
            password: formRef.current!.password.value,
        };
        await fetch("http://localhost:3001/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'Content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => typeof data === 'string' ? setWarning(data) : dispatch(loadContacts(data.user.username)));
    };

    return (    
        <div className='sign-in'>
            <form ref={formRef} onSubmit={e => addUser(e)}>
                <input type="text" name='email' placeholder='Введите email'/>
                <input type="password" name='password' placeholder='Введите пароль'/>
                <button type='submit'>Войти</button>
            </form>
            <p>{warning}</p>
        </div>
    );
}