// Language translations

document.getElementById("languageSwitcher").addEventListener("change", function(){

let lang=this.value;

document.querySelectorAll("[data-lang]").forEach(element=>{

let key=element.getAttribute("data-lang");

if(translations[lang][key]){
element.textContent = translations[lang][key];
}

});

});


// Soil crop prediction form
document.getElementById("soilForm").addEventListener("submit", function(e){

e.preventDefault()

let ph = document.getElementById("ph").value
let rainfall = document.getElementById("rainfall").value

let crop = ""
let fertilizer = ""

if(ph < 6){
crop = "Potato"
fertilizer = "Use Lime + NPK fertilizer"
}

else if(ph >=6 && ph <=7){
crop = "Rice"
fertilizer = "Use Urea and Organic Compost"
}

else{
crop = "Wheat"
fertilizer = "Use Phosphate rich fertilizer"
}

document.getElementById("cropResult").innerHTML = crop
document.getElementById("fertilizerResult").innerHTML = fertilizer

})