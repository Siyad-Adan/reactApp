import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "MyGuy",
  };

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const style = {
      backgroundColor: "blue",
      border: "1px solid blue",
      padding: "100px",
    };

    return (
      <div className="App">
        <UserOutput style={style} username={this.state.username} />
        <UserInput
          style={style}
          name={this.state.username}
          changed={this.nameChangeHandler}
        />
        <button style={style}>Hi Boi</button>
      </div>
    );
  }
}

export default App;
