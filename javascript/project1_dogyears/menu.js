const menu = {
  _meal: "",
  _price: 0,
  /**
   * @param {string} mealToCheck
   */
  set meal(mealToCheck) {
    if (typeof mealToCheck == "string") {
      this._meal = mealToCheck;
    } else {
      console.log("enter valid meal");
    }
  },

  /**
   * @param {number} priceToCheck
   */
  set price(priceToCheck) {
    if (typeof priceToCheck == "number") {
      this._price = priceToCheck;
    } else {
      console.log("enter valid price");
    }
  },

  get todaysSpecial() {
    if (
      typeof this._meal === "string" &&
      typeof this._price === "number" &&
      this._meal &&
      this._price > 0
    ) {
      console.log(`Today's Special is ${this._meal} for ${this._price}`);
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Spaghetti";
menu.price = 5;
console.log(menu._meal);
console.log(menu._price);

let todayspecial = menu.todaysSpecial;
console.log(todayspecial);
