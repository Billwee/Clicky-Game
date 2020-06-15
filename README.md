# Clicky-Game

## Overview
This application is a memory game built with React where the object is to click each image only once. Click all twelve images and you win. Click the same images twice and it's game over. This memory game themed around Nintendo's Super Smash Bros. so "Choose your character!" wisely.

## Deployment

The game can be played by [Clicking Here](https://billwee.github.io/Clicky-Game/).

## Tech Used

- React.js
- Node.js
- HTML
- CSS
- Bootstrap

## User Experience

- After the page loads a header, scoreboard, and image grid are displayed.

  - The image grid is shuffled on every page load and image click regardless of choice.

- Clicking one of the images starts the game and adds +1 to your score.

  - This counter helps the user keep track of images left to click

- If all images are clicked successfully. A message telling the user so pops up and the game starts over.

- If an incorrect choice is made a shaking animation is run on the image grid and a game over message is displayed asking the user to try again.

- The highest score for the user's session is also displayed on the scoreboard.

