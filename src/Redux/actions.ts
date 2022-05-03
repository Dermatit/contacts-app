import { ContactActionTypes } from "./types";
import { AppDispatch } from "..";

export const loadContacts = (username : string) => {
    return async (dispatch : AppDispatch) => {
        await fetch(`http://localhost:3001/contacts?username=${username}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: ContactActionTypes.LOAD_CONTACTS,
            data: data,
            username: username
        }));
    };
};

export const addContact = (contact : object) => {
	return async (dispatch : AppDispatch) => {
		await fetch("http://localhost:3001/contacts", {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {'Content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(contact => dispatch({
			type: ContactActionTypes.ADD_CONTACT,
			contact: contact,
		}));
	};
};

export const deleteContact = (id : number) => {
	return async (dispatch : AppDispatch) => {
		await fetch(`http://localhost:3001/contacts/${id}`, {
            method: 'DELETE',
        });
        dispatch({
			type: ContactActionTypes.DELETE_CONTACT,
            id: id
		});
	};
};

export const editContact = (id : number, contact: object) => {
	return async (dispatch : AppDispatch) => {
		await fetch(`http://localhost:3001/contacts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {'Content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(contact => dispatch({
			type: ContactActionTypes.EDIT_CONTACT,
            contact: contact,
            id: id
		}));
	};
};

