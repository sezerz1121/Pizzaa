import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const PizzaJSON =[
    {
      
        "name": "Margherita",
        "toppings": ["tomato sauce", "fresh mozzarella", "basil"],
        "base": "thin crust",
        "cheese": "mozzarella",
        "salsa": {
            "name": "Tomato Salsa",
            "spiciness": "Medium"
          },
      
    },
    {
      
        "name": "Pepperoni",
        "toppings": ["tomato sauce", "pepperoni", "mozzarella cheese"],
        "base": "classic crust",
        "cheese": "mozzarella",
        "salsa": {
            "name": "Tomato Salsa",
            "spiciness": "Medium"
          },
      
    },
    {
      
        "name": "Veggie Delight",
        "toppings": ["tomato sauce", "bell peppers", "red onions", "mushrooms", "black olives", "spinach"],
        "base": "whole wheat crust",
        "cheese": "cheddar",
        "salsa": {
            "name": "Tomato Salsa",
            "spiciness": "Medium"
          },
      
    }
  ]
  
   
  let data;
  var currentimage="styles/empty.png";
  var backgroundColor="rgb(11, 182, 11)";
app.get("/", (req, res) => {
    
    res.render("index.ejs",{ pizza: data ,currentimage,backgroundColor});
  });
app.post("/Pizza", (req, res) => {
    switch (req.body.choice) {
        case "Margherita":
            data =PizzaJSON[0];
            currentimage="styles/pizza1.png";
            backgroundColor="#FED479";
        break;
        case "Pepperoni":
            data =PizzaJSON[1];
            currentimage="styles/pizza3.png";
            backgroundColor="#BFC04E";
        break;
        case "Veggie-Delight":
            data =PizzaJSON[2];
            currentimage="styles/pizza2.png";
            backgroundColor="#F4694F";
        break;
        case "Order":
            data =PizzaJSON[2];
            currentimage="styles/pizza2.png";
            backgroundColor="#F4694F";
        break;
            
        default:
            break;
    };
    
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});