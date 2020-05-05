import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Score from "./components/Score";
import Grid from "./components/Grid";
import Item from "./components/Item";
import Footer from "./components/Footer";
import images from "./photos.json"


import './App.css';

class App extends Component {
  state = {
    images,
    highScore: 0,
    score: 0,
    message: [<i className="fas fa-chevron-circle-right"></i>, " Click Any Character to Start ", <i className="fas fa-chevron-circle-left"></i>]
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
    this.setState({ images })
  }

  check = (id) => {
    let image = this.state.images;

    for (let i = 0; i < image.length; i++) {
      if (image[i].id === id && !image[i].clicked) {
        image[i].clicked = true;
        this.setState({ images, score: this.state.score + 1, message: "" }, () => {
          if (this.state.score === 12) {
            return this.reset()
          } else {
            // return this.scramble()
          }
        })
      } else if (image[i].id === id && image[i].clicked) {
        this.setState({ message: [<i className="fas fa-chevron-circle-right"></i>, ` ${image[i].name} Already Clicked.. Try Again `, <i className="fas fa-chevron-circle-left"></i>] })
        return this.reset()

      }
    }
  }

  reset = () => {
    let images = this.state.images.map(element => {
      return element.clicked = false
    });

    if (this.state.score > this.state.highScore) {
      this.setState({ images, score: 0, highScore: this.state.score, message: [<i className="fas fa-chevron-circle-right"></i>, " That's all 12.. Great Job! ", <i className="fas fa-chevron-circle-left"></i>] })
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
          message={this.state.message}
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
        <Footer />
      </Wrapper >
    )
  };
}

export default App;
