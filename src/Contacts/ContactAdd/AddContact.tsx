import './index.css';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact as addContactAction } from "../../Redux/actions";
import { IReduxState } from '../../Redux/types';
import { AppDispatch } from '../..';

export const AddContact: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null);
    const username = useSelector((state: IReduxState) => state.username);

    const addContact = async () => {
        const contact = ({
            username: username,
            name: formRef.current!.contactName.value,
            phoneNumber: formRef.current!.phoneNumber.value,
            email: formRef.current!.email.value
        });
        dispatch(addContactAction(contact));
    };

    return (
        <div className='addContact'>
            <p className='username'>{username}</p>
            <form ref={formRef}>
                <div>Имя <input type='text' name='contactName'/></div>
                <div>Номер телефона <input type='text' name='phoneNumber'/></div>
                <div>Email <input type='text' name='email'/></div>
            </form>
            <button onClick={addContact}>Добавить</button>
        </div>
    )
}