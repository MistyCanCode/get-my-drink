//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#button').addEventListener('click', getDrink)
document.querySelector('#liquor').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        getDrink();
        e.preventDefault();
    }
})

function getDrink(){
let drink = document.querySelector('#liquor').value

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

fetch(url)
.then(res => res.json()) //parse respnse as JSON
.then(data => {
    console.log(data.drinks[0])
   document.querySelector('.name').innerText = data.drinks[0].strDrink
   document.querySelector('img').src = data.drinks[0].strDrinkThumb
   document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
   document.querySelector('#one').innerText = data.drinks[0].strMeasure1 + " " + data.drinks[0].strIngredient1
   document.querySelector('#two').innerText = data.drinks[0].strMeasure2 + " " + data.drinks[0].strIngredient2
   document.querySelector('#three').innerText = data.drinks[0].strMeasure3 + " " + data.drinks[0].strIngredient3
   if(data.drinks[0].strMeasure4 != null && data.drinks[0].strIngredient4 != null){
     document.querySelector('#four').innerText = data.drinks[0].strMeasure4 + " " + data.drinks[0].strIngredient4
     document.querySelector('#glass').innerText = data.drinks[0].strGlass
   }else if(data.drinks[0].strMeasure4 != null && data.drinks[0].strIngredient4 === null){
       document.querySelector('#four').innerText = data.drinks[0].strMeasure4
       document.querySelector('#glass').innerText = data.drinks[0].strGlass
   }else if(data.drinks[0].strIngredient4 != null && data.drinks[0].strMeasure4 === null){
       document.querySelector("#four").innerText = data.drinks[0].strIngredient4
       document.querySelector('#glass').innerText = data.drinks[0].strGlass
   }else{
       document.querySelector('#glass').innerText = data.drinks[0].strGlass
   }
   if(data.drinks[0].strMeasure5 != null && data.drinks[0].strIngredient5 != null){
    document.querySelector('#five').innerText = data.drinks[0].strMeasure5 + " " + data.drinks[0].strIngredient5
    document.querySelector('#glass').innerText = data.drinks[0].strGlass
  }else if(data.drinks[0].strMeasure5 != null && data.drinks[0].strIngredient5 === null){
      document.querySelector('#five').innerText = data.drinks[0].strMeasure5
      document.querySelector('#glass').innerText = data.drinks[0].strGlass
  }else if(data.drinks[0].strIngredient5 != null && data.drinks[0].strMeasure5 === null){
      document.querySelector("#five").innerText = data.drinks[0].strIngredient5
      document.querySelector('#glass').innerText = data.drinks[0].strGlass
  }else{
      document.querySelector('#glass').innerText = data.drinks[0].strGlass
  }
})
.catch(err => {
    console.log(`error ${err}`)
});
}
//https://github.com/public-apis/public-apis