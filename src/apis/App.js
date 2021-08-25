import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {
            
            name:"";
            }
        }
    }
    
    componentDidMount() {
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => this.setState({
        
        name:data.name
        
        }) 
                 
                 
                 
                 )
    }
    
    render() {
        return (
            <div>
            {this.state.character.name}
            </div>
        )
    }
}

export default App
