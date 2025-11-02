import { Component } from "react";
import styles from "./food.module.css";

export default class FoodItem extends Component {
  render() {
    const { title, price, img, desc } = this.props;
    return (
      <div className={styles.singleFood}>
        <div>
          <img src={img} />
        </div>
        <div className={styles.titlePrice}>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className={styles.foodDesc}>{desc.slice(0, 290)}...</div>
      </div>
    );
  }
}
