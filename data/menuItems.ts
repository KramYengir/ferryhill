import { info } from "console";

export const menuItems = [
  {
    name: "Fish",
    info: "Our fish are line-caught from sustainable fishing grounds, delivered fresh every day",
    items: [
      {
        id: 1,
        name: "Haddock",
        sizes: [
          { size: "Large", price: 6.2 },
          { size: "Small", price: 4.2 },
        ],
      },
      {
        id: 2,
        name: "Cod",
        sizes: [
          { size: "Large", price: 6.2 },
          { size: "Small", price: 4.2 },
        ],
      },
      {
        id: 3,
        name: "Plaice",
        price: 6.5,
      },
      {
        id: 4,
        name: "Homemade Fishcake",
        price: 2.0,
      },
      {
        id: 5,
        name: "Breaded Savoury Fishcake",
        price: 2.3,
      },
      {
        id: 6,
        name: "Salmon & Dill",
        price: 2.3,
      },
      {
        id: 7,
        name: "Calamari Rings",
        info: "Portion of 6",
        price: 6.0,
      },
      {
        id: 8,
        name: "Salt & Pepper Squid",
        info: "Portion of 8",
        price: 6.0,
      },
      {
        id: 9,
        name: "Breaded Scampi",
        info: "Portion of 10",
        price: 5.0,
      },
      {
        id: 10,
        name: "Fish Barm",
        sizes: [
          { size: "Large", price: 6.9 },
          { size: "Small", price: 4.9 },
        ],
      },
      {
        id: 11,
        name: "Fish Bites",
        info: "5 Pieces",
        price: 3.5,
      },
    ],
  },
  {
    name: "Chips & More",
    info: "Our chips are made from quality potatoes, peeled and chipped fresh on the day",
    items: [
      {
        id: 12,
        name: "Chips",
        sizes: [
          { size: "Large", price: 3.7 },
          { size: "Regular", price: 2.7 },
          { size: "Small", price: 2.3 },
        ],
        info: "Cheesy Chips Add £1",
      },
      {
        id: 121,
        name: "Cone of Chips",
        price: 1.1,
      },
      {
        id: 13,
        name: "Chip Barm",
        price: 2.7,
      },
      {
        id: 14,
        name: "Scallops",
        price: 3.0,
        info: "Or 70p Each",
      },
      {
        id: 15,
        name: "Sausage",
        sizes: [
          { size: "Large", price: 2.0 },
          { size: "Small", price: 1.0 },
        ],
        info: "Have it battered for just 50p extra!",
      },
    ],
  },
  {
    name: "Original Holland Pies",
    info: "Made In The Northwest Since 1851",
    items: [
      {
        id: 16,
        name: "Meat",
        price: 2.6,
      },
      {
        id: 17,
        name: "Meat & Potato",
        price: 2.6,
      },
      {
        id: 18,
        name: "Cheese & Onion",
        price: 2.6,
      },
      {
        id: 19,
        name: "Chicken & Mushroom",
        price: 2.6,
      },
      {
        id: 20,
        name: "Pasty",
        price: 2.6,
      },
      {
        id: 21,
        name: "Steak & Kidney Pie",
        price: 2.6,
      },
      {
        id: 22,
        name: "Steak & Kidney Pudding",
        price: 2.6,
      },
      {
        id: 23,
        name: "Peppered Steak",
        price: 2.6,
      },
    ],
  },
  {
    name: "Vegan Pies",
    items: [
      {
        id: 24,
        name: "Chicken & Mushroom",
        price: 3.5,
      },
      {
        id: 25,
        name: "Minced Steak & Onion",
        price: 3.5,
      },
    ],
  },
  {
    name: "Chicken",
    items: [
      {
        id: 26,
        name: "Chicken Breast",
        price: 4.6,
      },
      {
        id: 27,
        name: "100% Chicken Fillet Burger",
        price: 4.1,
      },
      {
        id: 28,
        name: "Chicken Nuggets",
        price: 4.5,
        info: "Portion Of 8 Or 60p Each",
      },
    ],
  },
  {
    name: "Extras",
    items: [
      {
        id: 29,
        name: "Chicken Curry",
        price: 6.3,
        info: "Served With Rice/Chips Or Half & Half",
      },
      {
        id: 30,
        name: "Chilli Con Carne",
        price: 6.3,
        info: "Served With Rice/Chips Or Half & Half",
      },
      {
        id: 31,
        name: "Half Rice / Half Chips & Curry",
        price: 3.9,
      },
      {
        id: 32,
        name: "Sausage Dinner",
        price: 6.7,
        info: "Sausage, Chips, Peas And Gravy",
      },
      {
        id: 33,
        name: "Pie Dinner",
        price: 7.2,
        info: "Any Pie, Chips, Peas And Gravy",
      },
      {
        id: 34,
        name: "Haggis",
        price: 3.1,
      },
      {
        id: 35,
        name: "Black Pudding",
        price: 3.1,
      },
      {
        id: 36,
        name: "Minted Pea Fritters",
        price: 3.0,
        info: "Portion of 2",
      },
      {
        id: 37,
        name: "Spam Fritters",
        price: 2.2,
      },
      {
        id: 38,
        name: "Spring Rolls",
        price: 3.5,
        info: "4 In A Portion",
      },
    ],
  },
  {
    name: "Sides & Sauces",
    items: [
      {
        id: 39,
        name: "Peas / Gravy / Spicy Curry / Fruity Curry / Beans",
        sizes: [
          { size: "Large", price: 1.8 },
          { size: "Small", price: 1.3 },
        ],
      },
      {
        id: 40,
        name: "Rice",
        price: 2.5,
      },
      {
        id: 41,
        name: "Salt & Pepper Seasoning",
        price: 0.5,
      },
    ],
  },
  {
    name: "Burgers",
    items: [
      {
        id: 42,
        name: "Plain",
        price: 3.0,
      },
      {
        id: 43,
        name: "Double",
        price: 4.0,
      },
      {
        id: 44,
        name: "Cheese",
        price: 3.3,
      },
      {
        id: 45,
        name: "Double Cheese",
        price: 4.6,
      },
      {
        id: 46,
        name: "Veggie",
        price: 3.6,
      },
    ],
  },
  {
    name: "Kids Menu",
    info: "Includes Chips, Drink, Ketchup And Toy",
    items: [
      {
        id: 47,
        name: "Chicken Nuggets",
        price: 4.5,
      },
      {
        id: 48,
        name: "Breaded Fishcake",
        price: 4.5,
      },
      {
        id: 49,
        name: "Fish Bites",
        price: 4.5,
      },
      {
        id: 50,
        name: "Sausage",
        price: 4.5,
      },
    ],
  },
  {
    name: "Gluten Free",
    info: "Available Monday & Tuesday",
    items: [
      {
        id: 51,
        name: "Fish",
        sizes: [
          { size: "Large", price: 6.4 },
          { size: "Small", price: 4.4 },
        ],
      },
      {
        id: 52,
        name: "Homemade Fishcake",
        price: 2.3,
      },
      {
        id: 53,
        name: "Scallops",
        price: 3.7,
        info: "Or 80p Each",
      },
      {
        id: 54,
        name: "Onion Rings",
        price: 3.3,
        info: "Or 70p Each",
      },
      {
        id: 55,
        name: "Sausage",
        price: 2.3,
      },
      {
        id: 56,
        name: "Battered Sausage",
        price: 2.8,
      },
      {
        id: 57,
        name: "Bottle Of Vinegar",
        price: 1.9,
      },
      {
        id: 571,
        name: "Fruity Curry",
        sizes: [
          { size: "Large", price: 1.8 },
          { size: "Small", price: 1.5 },
        ],
      },
    ],
  },
  {
    name: "Vegan Options",
    items: [
      {
        id: 58,
        name: "Burgers",
        price: 3.5,
      },
      {
        id: 59,
        name: "Chicken Strips",
        sizes: [
          { size: "With Chips", price: 4.8 },
          { size: "Without Chips", price: 3.6 },
        ],
      },
      {
        id: 60,
        name: "Nuggets",
        price: 4.0,
        info: "A Portion Of 8 Or 55p Each",
      },
      {
        id: 61,
        name: "Pies",
        sizes: [
          { size: "Chicken & Mushroom", price: 3.5 },
          { size: "Minced Steak & Onion", price: 3.5 },
        ],
      },
      {
        id: 62,
        name: "Small Sausage",
        price: 1.0,
      },
    ],
  },
  {
    name: "Specials",
    info: "Something a little different...",
    items: [
      {
        id: 63,
        name: "Chip Barm Special",
        price: 4.9,
      },
      {
        id: 64,
        name: "Battered Chip Barm",
        price: 3.0,
      },
      {
        id: 65,
        name: "Large Spring Rolls",
        price: 2.2,
      },
      {
        id: 66,
        name: "Minced Beef & Onion Pie",
        price: 2.4,
      },
      {
        id: 67,
        name: "Halloumi Fries",
        price: 3.5,
      },
      {
        id: 68,
        name: "Sweet Potato Fries",
        price: 3.5,
      },
      {
        id: 69,
        name: "Homemade Chicken Sticks",
        price: 3.0,
      },
      {
        id: 70,
        name: "Mozzarella Sticks",
        price: 3.0,
        info: "With Sweet Chilli Dip",
      },
      {
        id: 701,
        name: "Halloumi burger",
        price: 4.2,
      },
      {
        id: 702,
        name: "Steak Pie",
        price: 2.6,
      },
      {
        id: 703,
        name: "Pineapple or Banana Fritters",
        price: 1.5,
        info: "Treat yourself!",
      },
    ],
  },
  {
    name: "Lunchtime Special",
    items: [
      {
        id: 71,
        name: "Small Fish, Chips & Peas",
        price: 6.2,
        info: "Served In A Tray",
      },
    ],
  },
  {
    name: "Drinks",
    items: [
      {
        id: 72,
        name: "Cans",
        price: 1.3,
      },
      {
        id: 73,
        name: "Bottles",
        price: 1.9,
      },
      {
        id: 74,
        name: "Water",
        price: 0.9,
      },
      {
        id: 75,
        name: "Cartons",
        price: 0.5,
      },
      {
        id: 76,
        name: "Tea & Coffee",
        price: 1.5,
      },
    ],
  },
];
