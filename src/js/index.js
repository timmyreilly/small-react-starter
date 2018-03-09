import React from "react";
import ReactDOM from "react-dom";


class Header extends React.Component {
  constructor() {
    super(); 
    this.state = {
      userName: "you"
    }
  }
  render() {
    return (
      <div id="menu">
        <h1 className="menu">Hello, {this.state.userName}</h1>
        <button>Wazzup</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);