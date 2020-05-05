import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Score from "./components/Score";
import Grid from "./components/Grid";
import Item from "./components/Item";
import Footer from "./components/Footer";
import images from "./photos.json"
import './App.css';

// Added key parameters to the <i> tags and map methods to avoid warnings

class App extends Component {
  state = {
    images,
    highScore: 0,
    score: 0,
    message: [<i key="r" className="fas fa-chevron-circle-right"></i>, " Click Any Character to Start ", <i key="l" className="fas fa-chevron-circle-left"></i>],
    wrong: " "
  };

  // Scrambles the image grid on load
  componentDidMount() {
    this.scramble()
  }

  // Function that scrambles the image grid
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

  // Function that checks what the user clicked against it's clicked 
  // boolean value. If it's false it adds +1 to the score and sets it to 
  // true. It also checks if your score is 12. If it is, it sends a message that 
  // you've won and runs the reset function. If true it sends a message telling 
  // the user they clicked that already and runs the reset function with a wrong 
  // varible changed to activate the shake animation.
  check = (id) => {
    let image = this.state.images;

    for (let i = 0; i < image.length; i++) {
      if (image[i].id === id && !image[i].clicked) {
        image[i].clicked = true;
        this.setState({ images, score: this.state.score + 1, message: "", wrong: " " }, () => {
          if (this.state.score === 12) {
            this.setState({ message: [<i className="fas fa-chevron-circle-right"></i>, " That's all 12.. Great Job! ", <i className="fas fa-chevron-circle-left"></i>] })
            return this.reset()
          } else {
            return this.scramble()
          }
        })
      } else if (image[i].id === id && image[i].clicked) {
        this.setState({ message: [<i key="r2" className="fas fa-chevron-circle-right"></i>, ` ${image[i].name} Already Clicked.. Try Again `, <i key="l2" className="fas fa-chevron-circle-left"></i>], wrong: "set" }, () => {
          return this.reset()
        })
      }
    }
  }

  // Resets the booleans to false in the json file and the score to zero 
  // in the state. If the wrong varibale === "set" it changes it to "wrong" 
  // which adds it to the class of the items in the grid which activates 
  // the shake animation. It also checks the current score against the highscore
  // and updates it if it's higher.
  reset = () => {
    let images = this.state.images.map(element => {
      return element.clicked = false
    });

    if (this.state.wrong === "set") {
      if (this.state.score > this.state.highScore) {
        this.setState({ images, score: 0, highScore: this.state.score, wrong: "wrong" })
        this.scramble()
      } else {
        this.setState({ images, score: 0, wrong: "wrong" })
        this.scramble()
      }
    } else {
      if (this.state.score > this.state.highScore) {
        this.setState({ images, score: 0, highScore: this.state.score, wrong: " " })
        this.scramble()
      } else {
        this.setState({ images, score: 0, wrong: " " })
        this.scramble()
      }
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
              key={item.id}
              wrong={this.state.wrong}
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
