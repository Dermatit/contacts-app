import { IContact } from '../../Redux/types'

interface ContactDefaultProps extends IContact {
	toggleEdit(): void
};

export const ContactDefault: React.FC<ContactDefaultProps> = ({name, phoneNumber, email, toggleEdit}) => {
    return (
        <>
            <div className="contact">
                <p>{name}</p>
                <p>{phoneNumber}</p>
                <p>{email}</p>
            </div>
            <button onClick={toggleEdit}>Редактировать</button>
        </>
    );
};