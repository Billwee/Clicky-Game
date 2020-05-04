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

  scramble = () => {
    const images = this.state.images;

    let length = images.length, x, y;
    while (length) {

      x = Math.floor(Math.random() * length--)

      y = images[length]
      images[length] = images[x]
      images[x] = y;
    }

    console.log(images)

    this.setState({ images })
  }

  check = (id) => {

    let image = this.state.images

    for (let i = 0; i < image.length; i++) {
      if (image[i].id === id && !image[i].clicked) {
        image[i].clicked = true;
        this.setState({ images, score: this.state.score + 1 })
        return this.scramble()
      } else if (image[i].id === id && image[i].clicked) {
        return this.reset()

      }
    }
  }

  reset = () => {
    let images = this.state.images.map(element => {
      return element.clicked = false
    });

    if (this.state.score > this.state.highScore) {
      this.setState({ images, score: 0, highScore: this.state.score })
      this.scramble()
    } else {
      this.setState({ images, score: 0 })
      this.scramble()
    }


  }


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
            <Item
              id={item.id}
              image={item.image}
              clicked={item.clicked}
              check={this.check}
            />
          ))}
        </Grid>
      </Wrapper >
    )
  };
}

export default App;
