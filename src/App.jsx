import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
      </div>
    );
  }
}
