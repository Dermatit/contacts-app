import { memo } from "react";

interface SearchBoxProps {
    onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void
};

export const SearchBox: React.FC<SearchBoxProps> = memo(({onSearchChange}) => {
    return (
        <input type='search' placeholder='Найти контакт' onChange={e => onSearchChange(e)}/>
    );
});