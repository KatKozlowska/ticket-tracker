import Team from "../../data/types";
import CardContainer from "../CardContainer/CardContainer";
import SearchBox from "../SearchBox/SearchBox";
import { useState, FormEvent } from "react";

type SearchProps = {
    team : Team[];
};

const SearchTeam = ({team}:SearchProps) => {
    const [search, setSearch] = useState<string>("");
    
    const handleInput = (event:FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    };

    const filteredTeam = team.filter( member => {
        return member.name.toLowerCase().includes(search.toLocaleLowerCase());
      
    
    });

    return (<>
    <SearchBox  searchTerm={search} handleInput={handleInput}/>
    <CardContainer team={filteredTeam}/>
    </>
)}

export default SearchTeam;