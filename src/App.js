import React, { Component } from 'react';
import Searchbutton from './searchbutton.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageURL : '',
      factsObj : '',
      imageLoading: false,
    };
  }

  onButtonClick = () => {
    this.setState({
      imageLoading: true
    })
    fetch(`https://aws.random.cat/meow`)
      .then(response => response.json())
      .then(data => this.setState({
        imageURL:data.file,
        imageLoading: false,
      }))
  }

  componentDidMount = () => {
    /*fetch(`https://cat-fact.herokuapp.com/facts`)
      .then(response => response.json())
      .then(data => this.setState({factsObj:data.all}));*/
  }

  render() {
      return (
        <div className="App">
          <h1 className="header-1">Your daily dose of cuteness</h1>
          <div className="button_container">
            {this.state.imageLoading && 
              <Searchbutton loading={true} onButtonClick = {this.onButtonClick}/>
            }
            {!this.state.imageLoading && 
              <Searchbutton loading={false} onButtonClick = {this.onButtonClick}/>
            }
          </div>
          {this.state.imageURL && <div className="cat_container">
            <img className="cat_img" src={this.state.imageURL} alt='cat pic'></img>
          </div>}
        </div>
      );
  }
}

export default App;
