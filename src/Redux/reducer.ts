import { IReduxState, ContactActionTypes, ContactAction } from "./types";

const initialState: IReduxState = {
    contacts: [],
    username: '',
    isAuth: false
};

const contactsReducer = (state = initialState, action: ContactAction): IReduxState => {
    switch(action.type) {
        case ContactActionTypes.LOAD_CONTACTS: {
            return {
                ...state,
                contacts: action.data,
                username: action.username,
                isAuth: true,
            };
        };
        case ContactActionTypes.ADD_CONTACT: {
            const contactsNew = [...state.contacts, action.contact];
            return {
                ...state,
                contacts: contactsNew,
            };
        };
        case ContactActionTypes.DELETE_CONTACT: {
            const contactIndex = state.contacts.findIndex(elem => elem.id === action.id);
            const newContacts = [...state.contacts];
            newContacts.splice(contactIndex, 1);
            return {
                ...state,
                contacts: newContacts,
            };
        };
        case ContactActionTypes.EDIT_CONTACT: {
            const contactIndex = state.contacts.findIndex(elem => elem.id === action.id);
            const newContacts = [...state.contacts];
            newContacts.splice(contactIndex, 1, action.contact);
            return {
                ...state,
                contacts: newContacts
            };
        };
        default: return state;
    };
};

export const rootReducer = contactsReducer;