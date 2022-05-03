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
}

export const Contact: React.FC<ContactProps> = memo(({elem}) => {
    const dispatch: AppDispatch = useDispatch();
    const username = useSelector((state:IReduxState) => state.username);
    const [isEdit, setIsEdit] = useState<boolean>(true);
    const editMode = () => setIsEdit(!isEdit);

    const deleteContact = () => dispatch(deleteContactAction(elem.id));

    return (
        <div>
            {isEdit? <ContactDefault {...elem} editMode={editMode}/> : <ContactEdit {...elem} editMode={editMode} username={username}/>}
            <button onClick={() => deleteContact()}>x</button>
        </div>
    )
})