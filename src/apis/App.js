import React,{Component} from "react"

class App extends Component{
    
    
    constructor(){
        super()
        
        this.state={
        
        
            firstname:""
        
        }
        
        
        
    }
    
    handleChange(event){
        
       this.setState({
       
       firstname:event.target.value
       
       }) 
        
    }
    
    
 
    render(){
        
        
     return(
     
     <form>
     
         <input type="text" onChange={this.handleChange} />
         <p>       {this.state.firstname}  </p>
            </form>
         
     )   
        
    }
    
    
}

export default App
