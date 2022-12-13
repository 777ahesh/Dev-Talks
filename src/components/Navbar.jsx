// import PropTypes from 'prop-types'
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  //   static propTypes = {}

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Dev<span>Talks</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/html" className="nav-link">HTML</Link>
              </li>
              <li className="nav-item">
              <Link to="/css" className="nav-link">CSS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/js">
                  JavaScript</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/node">
                  Node Js</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/react">
                  React Js</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/svelte">
                  Svelte Js</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/next">
                  Next Js</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/angular">
                  Angular Js</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vue">
                  Vue Js</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/express">
                  Express Js</Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
