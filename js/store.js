//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("Bmeer", "BMW M4", "Beautiful Car to Drive fast and reliable! Always count on german engineering.", 23000, 90000, 155, 6.3, "Camper Stove, Fridge, Freezer, Double Beds, Tent, Gas Cooker, Fishing Rods", "No problems currently exist with this car", "12 John Street, Levenshulme, Manchester M19 3AZ"),
        new product("camper-vw", "VW Camper", "One for the campervan fans! All round dream to drive! Cmon take a road trip!", 34000, 90000, 155, 6.3, "Camper Stove, Fridge, Freezer, Double Beds, Tent, Gas Cooker, Fishing Rods", "No problems currently exist with this car", "12 John Street, Levenshulme, Manchester M19 3AZ"),
        new product("transporter", "VW Transporter", "One heck of a drive. 2 litre turbo diesel engine. Very economical and great at saving money.", 30000, 90000, 155, 6.3, "Camper Stove, Fridge, Freezer, Double Beds, Tent, Gas Cooker, Fishing Rods", "No problems currently exist with this car", "12 John Street, Levenshulme, Manchester M19 3AZ"),
        new product("vw-camper", "VW Camper Spec 2", "The California’s dynamics aren’t car-like but they’re quite impressive viewed in the right context. This isn’t a drive to savour, it’s a functional vehicle, but it rides smoothly and quietly, it’s decently mechanically refined, directionally easy to manage and performs well enough.", 12000, 90000, 155, 6.3, "Camper Stove, Fridge, Freezer, Double Beds, Tent, Gas Cooker, Fishing Rods", "No problems currently exist with this car", "12 John Street, Levenshulme, Manchester M19 3AZ")
            ];
    // this.dvaCaption = [
    //     "Negligible",
    //     "Low",
    //     "Average",
    //     "Good",
    //     "Great"
    // ];
    // this.dvaRange = [
    //     "below 5%",
    //     "between 5 and 10%",
    //     "between 10 and 20%",
    //     "between 20 and 40%",
    //     "above 40%"
    // ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
