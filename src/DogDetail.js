import React from "react";
import './DogDetail.css';
import {Link} from 'react-router-dom';

class DogDetail extends React.Component {
  render() {
    console.log(this.props)
    const { name, age, src, facts } = this.props.dog;
    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img src={src} className="card-img-top" alt="DogDetail 1" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Age: {age}</p>
              </div>
              <ul className="list-group list-group-flush">
                {facts.map((fact, idx) => (
                  <li key={idx} className="list-group-item">{fact}</li>
                ))}
              </ul>
              <div className="card-body">
                <Link className="card-link" to='/dogs'>{"<<"} Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetail;
