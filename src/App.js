import React, {Component} from 'react'
import './App.css';

// Images
import BicycleImg from './Images/bicycle.svg';
import CheeseImg from './Images/cheese.svg';
import TomatoImg from './Images/tomato.svg';

import Card from './Components/Card';

class App extends Component{
  state = {
    words: [
      {polish: "ser", english: "cheese", img: CheeseImg, text: "", done: "no"},
      {polish: "rower", english: "bicycle", img: BicycleImg, text: "", done: "no"},
      {polish: "pomidor", english: "tomato", img: TomatoImg, text: "", done: "no"}
    ]
  }

  onChangeHandler = (event, id) =>{
    const words = [...this.state.words];

    const word = {...this.state.words[id]};
    word.text = event.target.value;

    if(event.target.value === this.state.words[id].polish){
      word.done = "yes";
    }

    words[id] = word;

    this.setState({words: words});
  }

  onClickHandler = (event, id) =>{
    const words = [...this.state.words];

    const word = {...this.state.words[id]};

    word.done = "shown";

    words[id] = word;

    this.setState({words: words});
  }


  render(){


    return (
      <div className="App">
        <h1>Learning cards</h1>
        <div className="CardsBox">
          {
            this.state.words.map((word, index) =>{
              return(
                <Card 
                  key={word.english}
                  english={word.english} 
                  img={word.img}
                  done={word.done}
                  polish={word.polish}
                  change={event => this.onChangeHandler(event, index)}
                  click={event => this.onClickHandler(event, index)}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
  
}

export default App;
