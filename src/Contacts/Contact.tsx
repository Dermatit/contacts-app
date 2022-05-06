import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact as deleteContactAction } from "../Redux/actions";
import { ContactEdit } from "./ContactMode/ContactEdit";
import { ContactDefault } from "./ContactMode/ContactDefault";
import { IReduxState } from "../Redux/types";
import { AppDispatch } from '..';
import { IContact } from  '../Redux/types';

interface ContactProps {
    elem: IContact
};

export const Contact: React.FC<ContactProps> = memo(({elem}) => {
    const dispatch: AppDispatch = useDispatch();
    const username = useSelector((state:IReduxState) => state.username);
    const [editing, setEditing] = useState<boolean>(true);
    
		// тут в принципе тоже в useCallback можно оборачивать
    const toggleEdit = () => setEditing(prevState => !prevState);
    const deleteContact = () => dispatch(deleteContactAction(elem.id));

    return (
        <div className='contact-container'>
            {editing? <ContactDefault {...elem} toggleEdit={toggleEdit}/> : <ContactEdit {...elem} toggleEdit={toggleEdit} username={username}/>}
            <button className='delete-contact' onClick={() => deleteContact()}>x</button>
        </div>
    );
});