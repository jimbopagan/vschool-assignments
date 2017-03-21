import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      count : 0
    }
    //this is how we put state into Component
    ///put data
  }
  increment(){
    let newCount = this.state.count + 1;
    this.setState({count: newCount})////this will only set state on what we cahged
  }
  decrement(){
    let newCount = this.state.count - 1;
    this.setState({count: newCount})
  }
  render (){
    return(
      <div>
      <button onClick = {this.increment.bind(this)}>+</button>///{ }means you are doin js
      <button onClick = {this.decrement.bind(this)}>-</button>
      <h1>{this.state.count}</h1>
      </div>
    )//must put parenthesis and create template inside
  }//it know render is an html
}

ReactDOM.render(<App/>, document.getElementById('app'));
