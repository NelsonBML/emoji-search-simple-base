import "./App.css";
import Line from "./components/Line";
import emojis from "./emojis.json";
import React from 'react';
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: '', emojis: emojis}
    //pour utiliser emojis en tant que tout le tableau dans tout le code librement
    //Pour ainsi faire il faut renommer les varioables dans les if/else dans clickToFilter
    //this.copyemojis = emojis
  } 
  

  clickToFilter = (kind) => {
    const newEmojis = [...emojis]
    let emojisFilter = []
    if (kind === "Animals") {
      //afficher "All" si on clique sur Animals
      emojisFilter = newEmojis.filter(elem => elem.keywords.includes("dog"))
      return this.setState({emojis: emojisFilter})
    }

    else if (kind === "People") {
      //afficher "People" si on clique sur People
      
      emojisFilter = newEmojis.filter(elem => elem.keywords.includes("women"))
      return this.setState({emojis: emojisFilter})
    }
    
    else if (kind === "All") {
      //afficher "Animals" si on clique sur All
      return this.setState({emojis: emojis})
    }

    else {

    }
    
}

handleChange = (event) => {
  
  this.setState({inputValue: event.target.value})
}  
    
componentDidUpdate () {
  console.log(this.state.inputValue)
} 

  //handleJsonInfo = () => {
  //  const valuesArray = JSON.parse(this.state.emojis)
  //}

  render () {
  return (
    <>
      <SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue}/>
      <div className="Search">
        <button onClick={() => this.clickToFilter("All")} className="button">All</button>
        <button onClick={() => this.clickToFilter("People")} className="button">People</button>
        <button onClick={() => this.clickToFilter("Animals")} className="button">Animals</button>
      </div>
      
      {this.state.emojis.map((elem, index) => {
        if (elem.keywords.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== - 1 || 
        elem.title.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1) {
          //this.state.emojis.slice(0, 16)
          return (
              <div key={index + elem.title}>
                <Line title={elem.title} symbol={elem.symbol}/>
              </div>
              )
            }
            //else return null
          }
      )}
    </>
    )
  }
}
//Étape 4 : implémenter le composant Line pour quon puisse copier le symbole en cliquant sur la ligne

export default App;
