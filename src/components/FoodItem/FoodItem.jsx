import { Component } from "react";
import styles from "./food.module.css";

export default class FoodItem extends Component {
  render() {
    const { title, price, img, desc, link } = this.props;

    const size = 250;
    const trimmed = desc.length >= size ? `${desc.slice(0, size)}...` : desc;

    return (
      <div className={styles.singleFood}>
        <div>
          <img src={img} />
        </div>
        <div className={styles.titlePrice}>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className={styles.foodDesc}>{trimmed}</div>
        {link && (
          <div className={styles.link}>
            <a href="#">{link}</a>
          </div>
        )}
      </div>
    );
  }
}
