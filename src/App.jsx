import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FoodContainer from "./components/FoodContainer/FoodContainer";
export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodContainer />
      </div>
    );
  }
}
