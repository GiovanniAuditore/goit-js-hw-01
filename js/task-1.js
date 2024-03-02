"use strict";

const car = {
  brand: "Porsche",
  speed: 0,
  acceleration(){
    this.speed +=10;
    console.log(this.speed);

  }
  stoping(){
    if (this.speed >= 0){
      this.speed -= 10;
    }
    else(
      console.log("No speed")
    )
  }
}