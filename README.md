# get-my-drink

A simple SPA that uses html, css, and javascript to populate the index page with coctail information. Uses the coctailsdb public API to search for a drink using the input from the user. 

Right now it pulls the name of the drink, a thumbnail image, ingredients, measurements, glass type, and instructions.

There is a check to see if any measurements or ingredients are null after the third so that null won't be added to the html.

TODO:
1. Get a random drink, instead of the first one returned

  *now it grabs a random drink from the list of drinks using index = Math.ceil(Math.random() * data.drinks.length -1)
  
2. Create a carousel to house several drinks that the user can scroll through
