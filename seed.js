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
      {
        title: `Turbo Levo SL Comp Carbon`,
        image:
          "https://www.bikesonline.com/assets/full/7541222.jpg?20201115174829",
        description: `
        The Turbo Levo SL looks like a Stumpjumper and, out on the trail, feels like one too. That’s no mistake. We aimed to build a Stumpjumper with a bit more boost to it and that’s exactly what you get—a Sidearm chassis with just the right amount of front-to-rear stiffness and 150mm of smooth, custom-tuned FOX rear suspension. To top it all off, we constructed this Turbo Levo SL chassis entirely from our light-yet-strong FACT 11m carbon.
The lightweight SL 1.1 motor doubles your effort with as much as 240 watts of silent and powerful assistance to your pedals. The motor’s responsive torque curve delivers power perfectly in-tune with your normal riding cadence and leaves no resistance when you’re riding without power assistance.
Worried about running out of power? No problem. Turbo Levo SL eats up big miles and long days. And if you’re looking for even more miles, our optional range extender boosts your range by another 50 percent. On top of all that, our Mission Control App can handle battery management automatically, ensuring your battery will last as long as you need it to.
Assist up to 20 mph / 25 km/h`,
        category: "Bikes",
        subCategory: "CrossCountry",
        price: 8000,
        quantity: 50,
        tier: "two",
        featured: true,
        updatedBy: "KEVIN L",
        tax: "Taxes not included",
        shipping: "Shipping not included",
        InventoryItem: true,
      },
      {
        title: `Zero Gravity Aluminium`,
        image:
          "https://www.bikesonline.com/assets/alt_1/7541222.jpg?20210204201543",
        description: `
        The Turbo Levo SL looks like a Stumpjumper and, out on the trail, feels like one too. That’s no mistake. We aimed to build a Stumpjumper with a bit more boost to it and that’s exactly what you get—a Sidearm chassis with just the right amount of front-to-rear stiffness and 150mm of smooth, custom-tuned FOX rear suspension. To top it all off, we constructed this Turbo Levo SL chassis entirely from our light-yet-strong FACT 11m carbon.
The lightweight SL 1.1 motor doubles your effort with as much as 240 watts of silent and powerful assistance to your pedals. The motor’s responsive torque curve delivers power perfectly in-tune with your normal riding cadence and leaves no resistance when you’re riding without power assistance.
Worried about running out of power? No problem. Turbo Levo SL eats up big miles and long days. And if you’re looking for even more miles, our optional range extender boosts your range by another 50 percent. On top of all that, our Mission Control App can handle battery management automatically, ensuring your battery will last as long as you need it to.
Assist up to 20 mph / 25 km/h`,
        category: "Bikes",
        subCategory: "Downhill",
        price: 3333.89,
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