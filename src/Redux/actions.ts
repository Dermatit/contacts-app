import { ContactActionTypes } from "./types";
import { AppDispatch } from "..";

export const loadContacts = (username : string) => {
    return async (dispatch : AppDispatch) => {
			const response = await fetch(`http://localhost:3001/contacts?username=${username}`);
		
			// а что если запрос не прошел? или произошла ошибка и контакты не загрузились?
			const data = response.json();
			dispatch({
				type: ContactActionTypes.LOAD_CONTACTS,
				data,
				username,
			})
    };
};

export const addContact = (contact : object) => {
	return async (dispatch : AppDispatch) => {
		const response = await fetch("http://localhost:3001/contacts", {
			method: 'POST',
			body: JSON.stringify(contact),
			headers: {'Content-type': 'application/json'}
		});

		// а что если запрос не прошел? или произошла ошибка и контакт не добавился?
		const data = await response.json();
		dispatch({
			type: ContactActionTypes.ADD_CONTACT,
			contact: data,
		});
	};
};

export const deleteContact = (id : number) => {
	return async (dispatch : AppDispatch) => {
		await fetch(`http://localhost:3001/contacts/${id}`, {
			method: 'DELETE',
		});

		// а что если запрос не прошел? или произошла ошибка и контакт не удалился на сервере?
    dispatch({
			type: ContactActionTypes.DELETE_CONTACT,
      id
		});
	};
};

export const editContact = (id : number, contact: object) => {
	return async (dispatch : AppDispatch) => {
		const response = await fetch(`http://localhost:3001/contacts/${id}`, {
			method: 'PUT',
			body: JSON.stringify(contact),
			headers: {'Content-type': 'application/json'}
		});

		// а что если запрос не прошел? или произошла ошибка и контакт не отредактировался?
		const data = await response.json();
		dispatch({
			type: ContactActionTypes.EDIT_CONTACT,
			contact: data,
			id
		});
	};
};

