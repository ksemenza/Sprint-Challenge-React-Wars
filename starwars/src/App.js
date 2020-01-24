import React, {useState, useEffect} from 'react';
import StarWarCard from "./components/StarWarsCard"
import styled from "styled-components"
import './App.css';
import axios from "axios"



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWars, setStarWars] = useState([]);
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
useEffect(() => {
  axios
  .get("https://swapi.co/api/people/")
  .then(res => {
    console.log(res.data.results)
    setStarWars(res.data.results)
   
  })
  .catch(error => {
    console.log ("starwar res.data", error)
  });
},[]);
 useEffect(() => {}, []);



  return (
<div>
    <h1 className="Header">React Wars</h1>
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
    </div>

  );
}

export default App;
