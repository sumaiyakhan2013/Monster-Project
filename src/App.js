import React, {Component} from 'react';
import './App.css';
import {CardList} from './comp/cardList-comp/cardList-comp.jsx';
import {SearchList} from './comp/searchList-comp/searchList-comp.jsx';


class App extends Component {

constructor()
{
  super();
  this.state={
      monsters:[],
      searchField:""
  }
}

componentDidMount()
{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({monsters:users}));
      
}

handleChange= e => this.setState({searchField:e.target.value})


  render(){
    let {monsters,searchField}=this.state
    let searchArr = monsters.filter(
      (monster) =>(monster.name.toLowerCase().includes(searchField.toLowerCase()))  
      )

    return (<div className='App'>
    <SearchList placeholder="search Monsters" handleChange={this.handleChange}/>           
    <CardList monsters={searchArr} />
    </div>)
  }



}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
