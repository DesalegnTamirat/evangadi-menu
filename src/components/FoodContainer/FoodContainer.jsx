import { Component } from "react";
import styles from "./foods.module.css";
import FoodItem from "../FoodItem/FoodItem";

export default class FoodContainer extends Component {
  render() {
    return (
      <div className={styles.foodsContainer}>
        <FoodItem />
      </div>
    );
  }
}
