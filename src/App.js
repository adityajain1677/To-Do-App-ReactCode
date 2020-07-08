import React from 'react';
import './App.css';
import DisplayItems from './DisplayItems';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      items: [],
      currentItems: {
        text : "",
        key:""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleChange(event){
    this.setState({
      currentItems: {
        text: event.target.value,
        key: Date.now()
      } 
    })
  }
  handleClick(event){
    event.preventDefault()
    this.setState((state)=>{
      const items = state.items.concat(state.currentItems)
      return{
        items,
        currentItems : {
          text : '',
          key : ""
        }
      }
    })
    //alert(this.state.items)

  }

  handleRemove(key){
    const newList = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items : newList
    })
    
  }
  render(){
    return(
      <div className = "App">
        <header>
          <form className = "to-do-input">
            <input type="text" id= "text" placeholder="enter the text" name="todo" value = {this.state.currentItems.text} onChange={this.handleChange}/>
            <button type="submit" id= "btn" placeholder="submit" onClick= {this.handleClick}>Add</button>
          </form>
        </header>
        <div>
          <DisplayItems items = {this.state.items} handleRemove = {this.handleRemove}/>
        </div>
      </div>
      
    )
  }
}

export default App;
