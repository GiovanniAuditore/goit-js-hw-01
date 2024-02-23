
'use strict';


function isEnoughCapacity(products, containerSize) {
    let totalQuantity = 0;

    // Перебираємо об'єкт products і додаємо кількість кожного товару до totalQuantity
    for (const quantity of Object.values(products)) {
        totalQuantity += quantity;
    }

    // Перевіряємо, чи загальна кількість товарів менше або дорівнює containerSize
    return totalQuantity <= containerSize;
}


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false


