const db = require("./models");

let products = [
    {
        
        title: `Faction Skis Chapter 1.0 Ski`,
        image:
          "https://content.backcountry.com/images/items/900/FSK/FSK0035/ONECOL.jpg",
        description: `
        Say Goodbye to the same old and say hello to the brand-new Chapter 1.0 With the same energetic poplat core as out freestyle skis, this flat-tailed, progressively shaped ski is manoeuvrable, versatile and is ready for you to start turning it up a gear all over the mountain.`,
        category: "Skies",
        subCategory: "Alpine",
        price: 463.16,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        
        title: `Salomon X-Race`,
        image:
          "https://content.backcountry.com/images/items/900/FSK/FSK0037/ONECOL.jpg",
        description: `
        The Salomon X-Race Lab is a great ski for racers looking for a nimble ride around the course or aggressive frontside skiers who want performance. The Active Contact Sidewalls rip into firm terrain and deliver a precise edge grip on the frim conditions. A Full length Wood S-Core works with Dual Titanium Laminates to add a damp and stable ride as you are zipping around the gates. Salomon's Pulse Pad Dampening System has elastomer dampeners that absorb vibrations and give you a smoother ride in any type of snow condition. The P69 Race Plate works together with the X-12 Lab Bindings to offer you a stronger power transmission underfoot with added edge grip.`,
        category: "Skies",
        subCategory: "Alpin",
        price: 499.95,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      
    

]

const seed = () => {
    return db.Products.bulkCreate(products)
}


seed();
module.exports = products