import React from "react"
import styled from 'styled-components'


const StarWarsCta = styled.div `
display:grid;
`

const StarWarCardStyle = styled.div `
background:#D2691E;
color: black;
width: 200px;
max-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`
const CharcSpecs = styled.p `
background-color: #FAF0E6;
padding: 15px 70px;
margin-top: -18px;
border 1px groove 
`

const StarWarsCard = props => {
    return(
 
        <StarWarsCta>
        <StarWarCardStyle>
            <h4>{props.name}</h4>
            <CharcSpecs>Height: {props.height}</CharcSpecs>
            <CharcSpecs>Weight: {props.mass}</CharcSpecs>
                    </StarWarCardStyle>
                    </StarWarsCta>

    )
}

export default StarWarsCard