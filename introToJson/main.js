

//////////////// EX1 + EX2 //////////////////////////

let recipe = {
    "healthy": true,
    "calories": 250,
    "name": "Mashed Potatoes",
    "serves": 4,
    "ingredients": [
      {
        "name": "water",
        "count": 1,
        "unit":"teaspoons"
      },
      {
        "name": "potatoes",
        "count": 2,
        "unit":"tablespoons"
      },
      {
        "name": "garlic powder",
        "count": 2,
        "unit": "tablespoons"
      },
      {
        "name": "salt",
        "count": 0.5,
        "unit": "teaspoon"
      },
      {
        "name": "pepper",
        "count": 0.25,
        "unit": "teaspoons"
      }
    ],
    "directions": [
      "Cut potatoes into half inch thick slices",  
      "Add potatoes to a pot and cover with an inch of water.",
      "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
      "Simmer for 20 minutes or until potatoes are fork tender.",
      "Drain water from potatoes, leaving the potatoes in the original pot.",
      "Add remaining ingredients to the pot with the potatoes.",
      "Mash potatoes until they reach the desired consistency.",
      "Serve immediately, or cover and refrigerate."
    ]
  }

console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"



//////////////// EX3//////////////////////////
 

let animals = [
    {
    "name": "Lion",
    "weight": 
        {
            "kilograms": 195,
            "tons": 0.21
        }
    ,
    "place": "Den",
    "endangered" : false,
    "food": {
        "Zebras": "50%", 
        "Rhinos": "25%",
        "Giraffes": "25%"
    },
    "strongerThanMe": [],
    "HowDelicious": 1

    },

    {
        "name": "Sheep",
        "weight": 
            {
                "kilograms": 60,
                "tons": 0.06
            }
        ,
        "place": "Pen",
        "endangered" : false,
        "food": {
            "Grass": "80%",
            "clover": "10%",
            "forbs": "10%"
        },
        "strongerThanMe": ["wolves", "foxes", "coyotes"],
        "HowDelicious": 5
    
    }, 

    {
        "name": "Fish",
        "weight": 
            {
                "kilograms": 10,
                "tons": 0.01
            },
        "place": "water",
        "endangered" : false,
        "food": {
            "brine shrimp": "50%", 
            "microworm": "50%"
        },
        "strongerThanMe": ["shark", "whale"],
        "HowDelicious": 4
    
    }, 

    {
        "name": "Squirrel",
        "weight": 
            {
                "kilograms": 2,
                "tons": 0.002
            },
        "place": "Drey",
        "endangered" : false,
        "food": {
            "nuts Acorns": "30%", 
            "walnuts": "40", 
            "peanuts": "30%"
        },
        "strongerThanMe": ["owls", "hawks", "snakes"],
        "HowDelicious": 2
    
    }, 

]


console.log(animals[0].name) //should print Lion
console.log(animals[1].weight.kilograms) //should print 60
console.log(animals[2].place) //should print water
console.log(animals[0].endangered) //should print false
console.log(animals[1].food.Grass) //should print 80%
console.log(animals[2].strongerThanMe) //should print ["shark", "whale"]
console.log(animals[1].HowDelicious) //should print 5

