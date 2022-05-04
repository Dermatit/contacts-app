import { IReduxState, ContactActionTypes, ContactAction } from "./types";

const initialState: IReduxState = {
    contacts: [],
    username: '',
    isAuth: false
};

const contactsReducer = (state = initialState, action: ContactAction): IReduxState => {
    switch(action.type) {
        case ContactActionTypes.LOAD_CONTACTS: {
            const contactsNew = action.data.map(elem => elem);
            return {
                ...state,
                contacts: contactsNew,
                username: action.username,
                isAuth: true
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
            const filteredContacts = [...state.contacts];
            filteredContacts.splice(contactIndex, 1);
            return {
                ...state,
                contacts: filteredContacts
            };
        };
        case ContactActionTypes.EDIT_CONTACT: {
            const contactIndex = state.contacts.findIndex(elem => elem.id === action.id);
            const filteredContacts = [...state.contacts];
            filteredContacts.splice(contactIndex, 1, action.contact);
            return {
                ...state,
                contacts: filteredContacts
            };
        };
        default: return state;
    };
};

export const rootReducer = contactsReducer;