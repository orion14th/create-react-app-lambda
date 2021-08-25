import React, {Component} from "react"

class App extends Component(){
    constructor(){
        
     super()
        
        this.state={
        
         firstname:""   
        
        }
        
        
    }
    
    
    this.handlerChange=this.handlerChange.bind(this)
    
    
}

handlerChange(event){
    
    this.setState({
    
        firstname:event.target.value
    
    })
}

render(){
    
 
    return(
    
  <form> <input name="firstname" type="text" onChange={this.handlerChange} placeholder="firstname"  />  <p>{this.state.firstname}</p> </form>


 
    
    )
    
}


export default App
