import { Component } from "react";
import styles from "./foods.module.css";
import FoodItem from "../FoodItem/FoodItem";
import menu from "../../data/foods";

export default class FoodContainer extends Component {
  render() {
    return (
      <div className={styles.foodsContainer}>
        {menu.map((food) => (
          <FoodItem key={food.id} {...food} />
        ))}
      </div>
    );
  }
}
