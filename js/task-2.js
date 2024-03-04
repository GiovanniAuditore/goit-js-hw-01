'use strict';


class Storage {
    #items
    constructor(items) {
      this.#items = items;
    }
    addItem(items) {
        this.#items.push(items)

    }

    getItems() {
        return this.#items;
    }

    removeItem(item){
        this.#items = this.#items.filter(function(existingItem) {
            return existingItem !== item;})
    }
    }






const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
