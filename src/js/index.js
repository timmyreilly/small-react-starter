import React from "react";
import ReactDOM from "react-dom";


class Header extends React.Component {
  constructor() {
    super(); 
    this.state = {
      userName: "Tim"
    }
  }
  render() {
    return (
      <h1>Hello, {this.state.userName}</h1>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);