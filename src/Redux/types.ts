export interface IContact {
    username: string,
    name: string,
    phoneNumber: string,
    email: string,
    id: number
}
export interface IReduxState {
    contacts: IContact[],
    username: string,
    isAuth: boolean
};

export enum ContactActionTypes {
    LOAD_CONTACTS = 'LOAD_CONTACTS',
    ADD_CONTACT = 'ADD_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    EDIT_CONTACT = 'EDIT_CONTACT',
};
interface ILoadContacts {
    type: ContactActionTypes.LOAD_CONTACTS,
    data: IContact[],
    username: string
};
interface IAddContact {
    type: ContactActionTypes.ADD_CONTACT,
    contact: IContact,
};
interface IDeleteContact {
    type: ContactActionTypes.DELETE_CONTACT,
    id: number,
};
interface IEditContact {
    type: ContactActionTypes.EDIT_CONTACT,
    contact: IContact,
    id: number,
};

export type ContactAction = ILoadContacts | IAddContact | IDeleteContact | IEditContact;