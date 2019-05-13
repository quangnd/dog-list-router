import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Route, Switch, Link } from "react-router-dom";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import whiskey from "./images/whiskey.jpg";

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    const getDog = props => {
      console.log('in get Dog')
      const name = props.match.params.name;
      const currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetail {...props} dog={currentDog} />;
    };
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <h1>Dog list</h1>
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
