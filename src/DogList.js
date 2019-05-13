import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import DogCard from "./DogCard";
import DogDetail from "./DogDetail";

class DogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dogs: this.props.dogs };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.dogs.map((dog, idx) => (
            <div className="col-sm" key={idx}>
              <DogCard {...dog} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
