import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../Redux/actions";
import { IContact } from '../../Redux/types'
import { AppDispatch } from '../../'

interface ContactEditProps extends IContact{
	toggleEdit(): void
}

export const ContactEdit: React.FC<ContactEditProps> = ({name, phoneNumber, email, id, toggleEdit, username}) => {
    const dispatch: AppDispatch = useDispatch();
    const formRef = useRef<HTMLFormElement>(null);

    const acceptEdit = () => {
        const contact = {
            username: username,
            name: formRef.current!.contactName.value,
            phoneNumber: formRef.current!.phoneNumber.value,
            email: formRef.current!.email.value,
            id,
        }
        dispatch(editContact(id, contact));
        toggleEdit();
    }

    return (
        <>
            <div className="contact">
                <form ref={formRef}>
                    <input type='text' name='contactName' maxLength={40} defaultValue={name}/>
                    <input type='text' name='phoneNumber' maxLength={40} defaultValue={phoneNumber}/>
                    <input type='text' name='email' maxLength={40} defaultValue={email}/>
                </form>
            </div>
            <div className="contact-edit-button">
                <button onClick={toggleEdit}>Назад</button>
                <button onClick={acceptEdit}>Ок</button>
            </div>
        </>
    );
}