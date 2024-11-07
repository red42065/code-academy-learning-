// Write your code here:
function dogFactory(name, breed, weight) {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    /**
     * @param {any} newName
     */
    set name(newName) {
      if (typeof newName === "string") {
        this._name = newName;
      } else {
        console.log("set valid name");
      }
    },
    /**
     * @param {any} newBreed
     */
    set breed(newBreed) {
      if (typeof newBreed === "string") {
        this._breed = newBreed;
      } else {
        console.log("set valid breed");
      }
    },
    /**
     * @param {any} newWeight
     */
    set weight(newWeight) {
      if (typeof newWeight === "number") {
        this._weight = newWeight;
      } else {
        console.log("set valid weight");
      }
    },
    get name() {
      if (this._name) {
        return this._name;
      } else {
        console.log("name is missing");
      }
    },
    get breed() {
      if (this._breed) {
        return this._breed;
      } else {
        console.log("breed is missing");
      }
    },
    get weight() {
      if (this._weight) {
        return this._weight;
      } else {
        console.log("weight is missing");
      }
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight += 1;
    },
  };
}
