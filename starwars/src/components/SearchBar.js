import React, {Component} from "react"
import axios from "axios"
// const { API_KEY} = data.results
const API_URL = "https://swapi.co/api/people/"

class Search extends Component {
    state = {
        query: '',
        result:[]
    }

    getInfo = () => {
        axios.get(`${API_URL}`)
        .then(({data}) => {
        
            this.setState({
                result: data.data
              
            })
            console.log(data.data.results)
        })
    }


    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if(this.state.query && this.state.query.length > 1) {
                if(this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {

            }
        })
    }

    render() {
        return(
            <form>
                <input placeholder="Search..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                />
            
            </form>
        )
    }

}


export default Search