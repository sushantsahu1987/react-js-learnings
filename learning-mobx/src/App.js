import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./App.css";

class App extends Component {

  state = {
    input: ''
  }
  
  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  onSubmitTodo = (e) => {
    e.preventDefault();
    this.props.TodoStore.add(this.state.input);
    this.setState({input: ''});

  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitTodo}>
          <input type="text" 
                 value={this.state.input} 
                 onChange={this.onInputChange}/>

          <button>Add</button>
        </form>

        <div>
          <ul>
            {
              this.props.TodoStore.tododatalist.map(item => {
                return <li key={item}> {item} </li>
              })

            }    
          </ul>
        </div> 
      </div>
    );
  }
}

export default inject('TodoStore')(observer(App));
