import './index.css';
import { FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact as addContactAction } from "../../Redux/actions";
import { IReduxState } from '../../Redux/types';
import { AppDispatch } from '../..';

export const AddContact: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null);
    const username = useSelector((state: IReduxState) => state.username);

    const addContact = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const contact = ({
            username,
            name: formRef.current!.contactName.value,
            phoneNumber: formRef.current!.phoneNumber.value,
            email: formRef.current!.email.value
        });
        dispatch(addContactAction(contact));
        formRef.current!.reset();
    };

    return (
        <div className='add-contact'>
            <form ref={formRef} onSubmit={e => addContact(e)}>
                <div><p>Добавьте контакт</p><p>{username}</p></div>
                <input type='text' name='contactName' maxLength={40} placeholder='Имя' />
                <input type='text' name='phoneNumber' maxLength={40} placeholder='Номер телефона'/>
                <input type='text' name='email' maxLength={40} placeholder='Email'/>
                <button type='submit'>Добавить</button>
            </form>
        </div>
    );
};