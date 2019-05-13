import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const dogLinks = this.props.dogs.map((dog, idx) => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/dogs">
          Dog List
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dogs">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
