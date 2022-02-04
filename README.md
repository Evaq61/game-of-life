# Conway's Game of Life MERN Project
- This was a final project for Coding Dojo's MERN Stack, using React and JavaScript languages
- The project's goal was to make an app-like site, aimed at special needs children as a way to visually stimulate them. 
- Idea was given to me by my mother who works with special needs kids and told me they often use apps that function simialr to this, anything that can get them distracted and calm down

# First make a react project
- no server needed for this project currently, just the client front end
```
npx create-react-app client
```
# Installation
- We will need to install immer for a 'produce' function and a 'current' function
- both needed for the Conway's Game of Life Grid building
```
npm install immer
```
- We will also want useSound Hooks if we want to add in some sound effects
- disclaimer: I find this hook set to be a little glitchy and won't play the sounds 100% of the time, mostly issues in loop like code
```
npm install use-sound
```
# Basic Run down
- Most of the functions can be done with useState, useEffect and a lot of if checks
- You can write all the code in 1 file if you choose, but it ends up being a lot for just 1 page
- I personally made multiple components to try and lighten the code, but considering everything is built off the grid; that file ended up being more of the main container for the project

# Views
- Main view: Conatains the Grid Componenet

# Components
- Grid: Basically your main container with all the other components and their logic
- ClearButton: Clears the Grid
- ColorOptions: Sets the buttons and inputs to chagne to default color of the grid simuation
- RandomButton: Renders the Grid with random squares for a random simualtion
- RunButton: Starts and Stops the simualtion
- SoundButton: This isn't needed but I left it in for a misc. sound effect. It was also good for testing the sound itself to see if it was still working in general
- SpeedBar: A slider to set the simulation speed




