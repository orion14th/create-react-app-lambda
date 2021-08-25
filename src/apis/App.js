import React,{Component} from "react"

class App extends Component{
    
    
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
     
     <form>
     
         <input type="text" onChange={this.handleChange} />
         <p>       {this.state.firstname} lll </p>
            </form>
         
     )   
        
    }
    
    
}

export default App
