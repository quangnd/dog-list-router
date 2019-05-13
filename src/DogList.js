import React from "react";
import DogCard from "./DogCard";

class DogList extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-2 text-center mt-3 mb-3">Dog list</h1>
        <div className="row">
          {this.props.dogs.map((dog, idx) => (
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
