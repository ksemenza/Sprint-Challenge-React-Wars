import React, {useState, useEffect, useReducer} from 'react';
import StarWarCard from "./components/StarWarsCard"
import SearchBar from "./components/SearchBar"
import { reducer, initialState } from "./components/SearchReducer"
import styled from "styled-components"
import './App.css';
import axios from "axios"



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  const [starWars, setStarWars] = useState([]);
  const [ dispatch] = useReducer(reducer, initialState)
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  
 const Cta = styled.div `
 display: grid;
 grid-gap: 20px;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 margin: 20px auto;
 max-width: 900px;
`
const HeadTitle = styled.h1`
margin: 0 auto;
text-align:center;
padding-bottom: 50px;
padding-top: 32px;

`

const CompCta = styled.div `
margin: 0 auto;
width:900px
`

useEffect(() => {
  axios
  .get("https://swapi.co/api/people/")
  .then(res => {
    // console.log(res.data.results)
    setStarWars(res.data.results)
   
  })
  .catch(error => {
    console.log ("starwar res.data", error)
  });
},[]);

 useEffect(() => {
   axios.get()
   .then(jsonRes => {
     console.log(jsonRes)
     dispatch({
      type: "SEARCH_CHARACTERS_SUCCESS",
      payload: jsonRes.data.Search
     })
   })
   .catch(err => {
     console.error(err); 
   })
 }, [dispatch]);

 /* const refreshPAge = () => {
   window.location.reload();
 }; */
/*TODO Add search function */
/*
 const search = searchValue => {
   dispatch({
     type: "SEARCH_CHARACTERS_REQUEST"
   });
   axios('https://swapi.co/api/people/?search=r2')
   .then( jsonRes => {
     if(jsonRes.data.Response === "True") {
       dispatch({
         type:"SEARCH_CHARACTERS_FAILURE",
         error: jsonRes.data.Error
       })
     }
   })
 }
*/



  return (
<CompCta>
    <HeadTitle className="Header">React Wars</HeadTitle>
    <SearchBar></SearchBar>
    <Cta>
      {starWars.map(sw => {
        return(
    
          <StarWarCard
          name={sw.name}
          height={sw.height}
          mass={sw.mass}
          />
       
        )
      })}

</Cta>

    </CompCta>

  );
}

export default App;