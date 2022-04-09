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
let index = Math.ceil(Math.random() * 10)

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

fetch(url)
.then(res => res.json()) //parse respnse as JSON
.then(data => {
//     index = Math.ceil(Math.random() * data.drinks.length)
    console.log(data.drinks.length)
    console.log(data.drinks[index])
   document.querySelector('.name').innerText = data.drinks[index].strDrink
   document.querySelector('img').src = data.drinks[index].strDrinkThumb
   document.querySelector('#instructions').innerText = data.drinks[index].strInstructions
   document.querySelector('#one').innerText = data.drinks[index].strMeasure1 + " " + data.drinks[index].strIngredient1
   document.querySelector('#two').innerText = data.drinks[index].strMeasure2 + " " + data.drinks[index].strIngredient2
   document.querySelector('#three').innerText = data.drinks[index].strMeasure3 + " " + data.drinks[index].strIngredient3
   if(data.drinks[index].strMeasure4 != null && data.drinks[index].strIngredient4 != null){
     document.querySelector('#four').innerText = data.drinks[index].strMeasure4 + " " + data.drinks[index].strIngredient4
     document.querySelector('#glass').innerText = data.drinks[index].strGlass
   }else if(data.drinks[index].strMeasure4 != null && data.drinks[index].strIngredient4 === null){
       document.querySelector('#four').innerText = data.drinks[index].strMeasure4
       document.querySelector('#glass').innerText = data.drinks[index].strGlass
   }else if(data.drinks[index].strIngredient4 != null && data.drinks[index].strMeasure4 === null){
       document.querySelector("#four").innerText = data.drinks[index].strIngredient4
       document.querySelector('#glass').innerText = data.drinks[index].strGlass
   }else{
       document.querySelector('#glass').innerText = data.drinks[index].strGlass
   }
   if(data.drinks[index].strMeasure5 != null && data.drinks[index].strIngredient5 != null){
    document.querySelector('#five').innerText = data.drinks[index].strMeasure5 + " " + data.drinks[index].strIngredient5
    document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }else if(data.drinks[index].strMeasure5 != null && data.drinks[index].strIngredient5 === null){
      document.querySelector('#five').innerText = data.drinks[index].strMeasure5
      document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }else if(data.drinks[index].strIngredient5 != null && data.drinks[index].strMeasure5 === null){
      document.querySelector("#five").innerText = data.drinks[index].strIngredient5
      document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }else{
      document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }
     if(data.drinks[index].strMeasure6 != null && data.drinks[index].strIngredient6 != null){
    document.querySelector('#six').innerText = data.drinks[index].strMeasure6 + " " + data.drinks[index].strIngredient6
    document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }else if(data.drinks[index].strMeasure6 != null && data.drinks[index].strIngredient6 === null){
      document.querySelector('#six').innerText = data.drinks[index].strMeasure6
      document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }else if(data.drinks[index].strIngredient6 != null && data.drinks[index].strMeasure6 === null){
      document.querySelector("#six").innerText = data.drinks[index].strIngredient6
      document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }else{
      document.querySelector('#glass').innerText = data.drinks[index].strGlass
  }
})
.catch(err => {
    console.log(`error ${err}`)
});
}
//https://github.com/public-apis/public-apis
