import { useSelector } from "react-redux";
import { Contact } from "./Contact";
import { SearchBox } from "./Searchbox/Searchbox";
import React, { useCallback, useState } from "react";
import { IReduxState } from "../Redux/types";
import { IContact } from  '../Redux/types';

export const Contacts: React.FC = () => {
    const contacts = useSelector((state:IReduxState) => state.contacts);
    const [searchBox, setSearchBox] = useState<string>('');

    const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearchBox(e.target.value), []);

		// здесь вообще херня какая-то непонятная происходить
		// избегай одинакового названия аргументов, тут везде elem...
		// ну и тут слишком много циклом, 100% есть способ легче сделать
    const filteredContacts: IContact[] = contacts.filter(elem => 
        Object.values(elem).map(elem => 
            elem.toString().toLowerCase().includes(searchBox.toLowerCase())).some((elem => 
                elem === true))
    );

    return (
        <div className='contacts'>
            <SearchBox onSearchChange={onSearchChange}/>
            {filteredContacts.map(elem => <Contact key={elem.id} elem={elem}/>)}
        </div>
    );
};