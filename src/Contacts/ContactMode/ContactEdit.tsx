import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../Redux/actions";
import { IContact } from '../../Redux/types'
import { AppDispatch } from '../../'

interface ContactEditProps extends IContact{
    editMode(): void
}

export const ContactEdit: React.FC<ContactEditProps> = ({name, phoneNumber, email, id, editMode, username}) => {
    const dispatch: AppDispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null);

    const acceptEdit = () => {
        const contact = {
            username: username,
            name: formRef.current!.contactName.value,
            phoneNumber: formRef.current!.phoneNumber.value,
            email: formRef.current!.email.value,
            id: id
        }
        dispatch(editContact(id, contact));
        editMode();
    }

    return (
        <div className="contact">
            <form ref={formRef}>
                <input type='text' name='contactName' defaultValue={name}/>
                <input type='text' name='phoneNumber' defaultValue={phoneNumber}/>
                <input type='text' name='email' defaultValue={email}/>
            </form>
            <div style={{display : 'flex'}}>
                <button onClick={() => editMode()}>Назад</button>
                <button onClick={() => acceptEdit()}>Ок</button>
            </div>
        </div>
    );
}