import React, {useState} from "react"

const SearchBar = ({search}) => {
    const[searchValue, setSearchValue] = useState(" ");

    const handleSearchInputChange = e =>{
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue('');
     };

     const callSearchFunc = e => {
         e.preventDefault();
         search(searchValue);
         resetInputField();
     };

     return (
         <form className="search">
             <input
             value={searchValue}
             onChange={handleSearchInputChange}
             type='text'
             />
             <input onClick={callSearchFunc} type="submit" value="SEARCH" />
         </form>
     )

}

export default SearchBar