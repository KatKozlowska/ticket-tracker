

import { FormEventHandler } from "react";

type SearchBoxProps = {
  
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({searchTerm, handleInput}:SearchBoxProps) => {

    return(
        <div className="search__container">
            <p>Search by Name</p>
            <input 
            type="text"
            value={searchTerm}
            onInput={handleInput}/>
        </div>
    )
    
}

export default SearchBox;