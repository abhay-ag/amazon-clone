// App.js

/*
    1. Imports components from Checkout.js, Home.js, Header.js, Login.js
    2. Switches between these components based on the route provided by react-router
    3. useEffect function fires when the app components load
    4. it is further used with firebase-tools to interact with firebase data and check the state of the user 
*/

// Header.js

/*
    1. Helps in the creation of the top navbar
    2. Includes a searchbar, logo, and other navigatory buttons
*/

// Home.js

/*
    1. Renders out all the products on the home page,
    2. Displays a hero banner
    3. include Product component from Product.js
*/

// Product.js

/*
    1. Defines a raw skeleton for how each product card will look like
    2. Takes in props like id, title, image, price, rating
    3. renders the cards according to them
*/

// firebase.js

/*
    ** CONTAINS THE FIRBASE CONFIG SCRIPT **
*/

// BasketItem.js

/*
    1. Defines a skeleton layout for how an item will look like in the cart
    2. takes in same props as Product.js
    3. Has a remove from basket button
*/

// Checkout.js

/*
    1. Contains all the products added in the card
    2. Proceed to checkout button
    3. an ad
    4. price totaller
*/

// reducer.js

/*
    1. Uses react context API to switch on input types and perform actions accordingly
    2. adds products to basket
    3. removes products from basket
    4. sets the user state [whether user is logged in or not]
*/

// StateProvider.js

/*  
    1. Creates a DATA LAYER using react context API
    2. this DATA LAYER stores all the information necessary
    3. has functions to input the data and access it
*/