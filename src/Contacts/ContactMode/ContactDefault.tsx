import { IContact } from '../../Redux/types'

interface ContactDefaultProps extends IContact {
    editMode(): void
}

export const ContactDefault: React.FC<ContactDefaultProps> = ({name, phoneNumber, email, editMode}) => {
    return (
        <>
            <div className="contact">
                <p>{name}</p>
                <p>{phoneNumber}</p>
                <p>{email}</p>
            </div>
            <button onClick={() => editMode()}>Редактировать</button>
        </>
    );
}