import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Score from "./components/Score";
import Grid from "./components/Grid";
import Item from "./components/Item";
import images from "./photos.json"
import './App.css';

class App extends Component {
  state = {
    images,
    highScore: 0,
    score: 0
  };


  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <Score
          current={this.state.score}
          high={this.state.highScore}
        />
        <Grid>
          {this.state.images.map(item => (
            // <Score />
            <Item
              id={images.id}
              image={item.image}
              clicked={item.clicked}
            />
          ))}
        </Grid>
      </Wrapper >
    )
  };
}

export default App;
