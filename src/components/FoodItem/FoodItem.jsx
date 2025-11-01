import { Component } from 'react'
import styles from "./food.module.css"

export default class FoodItem extends Component {
  render() {
    return (
      <div className={styles.singleFood}>
        <div>
          <img src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp" />
        </div>
        <div className={styles.titlePrice}>
          <h3>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
          <p>$5.99</p>
        </div>
        <div className={styles.foodDesc}>
          Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s
          also popular in Eritrea. It’s made with diced tomatoes, minced onions,
          and finely chopped peppers dressed with a mixture of berbere spices,
          olive oil, vinegar, and lemon juice.
        </div>
      </div>
    );
  }
}
