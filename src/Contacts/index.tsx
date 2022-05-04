import { AddContact } from "./ContactAdd/AddContact";
import { Contacts } from "./Contacts";
import './index.css';

export const ContactsPage: React.FC = () => {
    return (
        <div className='contacts-container'>
            <AddContact/>
            <Contacts/>
        </div>
    )
}