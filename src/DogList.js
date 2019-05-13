import React from "react";
import DogCard from "./DogCard";

class DogList extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-3 text-center mt-3 mb-3">Dog list</h1>
        <p className="CardDealer-author">
          Made by{" "}
          <a
            href="https://github.com/quangnd/dog-list-router"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mun
          </a>{" "}
          with ❤️
        </p>
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
