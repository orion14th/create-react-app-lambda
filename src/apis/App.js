import React, {Component} from "react"

class App extends Component(){
    constructor(){
        
     super()
        
        this.state={
        
         firstname:""   
        
        }
        
     
    this.handleChange=this.handleChange.bind(this)
       } 

handleChange(event){
    
    this.setState({
    
        firstname:event.target.value
    
    })
}

render(){
    
 
    return(
    
  <form> <input name="firstname1" type="text" onChange={this.handleChange} placeholder="firstname..."  />  <p>{this.state.firstname}</p> </form>

  )
    
}
    
}


export default App
