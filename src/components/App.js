import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";

const App = ({ location }) => {
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
};
App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

// const App = () => {
// return (
// <div className="App">
// <LocationDetails />
// </div>
// );
// };

// The above utilises an implicit return, which is a feature of arrow-functions.
// It is the same as this:
// const App = () => {
//  return <h1>Hello World</h1>;
// }
// or this:
// function App() {
//   return <h1>Hello World</h1>;
// }

export default App;
