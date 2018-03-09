import React from "react";
import ReactDOM from "react-dom";
import Block from './../Block'; 
import Home from './../Home'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


class App extends React.Component {
  // constructor() {
  //   super(); 
  //   this.state = {
  //     userName: "you"
  //   }
  // }
  render() {
    return (
      <div id="App">
        <div className="App-header">
          <h2>Block Explorer</h2>
        </div>
        <div className="App-nav">
          <Router>
            <div> 
              <Link to="/">Home</Link> 
              <Link to="/block">Block></Link> 
              <Route exact path="/" component={Home}/> 
              <Route exact path="/block" render={() => (
                <h3>Please select a blockhash.</h3>
              )}/> 
              <Route path="/block/:blockHash" component={Block}/> 
            </div>
          </Router>
        </div> 
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);