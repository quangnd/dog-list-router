import React from "react";
import { Link } from "react-router-dom";

class DogCard extends React.Component {
  render() {
    const { name, src } = this.props;
    return (
      <div className="card">
        <img src={src} className="card-img-top" alt="DogCard 1" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text" />
          <Link className="btn btn-primary" to={`/dogs/${name}`}>
            See details
          </Link>
        </div>
      </div>
    );
  }
}

export default DogCard;
