function getShippingMessage (country, price, deliveryFee){
    let totalPrice = (country+price+deliveryFee)
    return ("Shipping to ${country} will cost ${totalPrice} credits")
}