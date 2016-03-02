//----------------------------------------------------------------
// product class
function product(sku, name, description, price, mileage, top_speed, acceleration, equipment, problems, location_pickup ) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.mileage = mileage;
    this.carInformation = {
        "Top Speed": top_speed,
        "Acceleration": acceleration,
        "Includes": equipment,
        "Existing Problems": problems,
        "Pick up Location": location_pickup
    };
}
