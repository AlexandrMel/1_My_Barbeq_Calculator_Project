// VARIABLE DECLARATION

var increment_meat = document.querySelector(".incr1")
var decrement_meat = document.querySelector(".incr2")
var number_meat = document.querySelector(".num_meat");
var increment_vegetarian = document.querySelector(".incr1vg");
var decrement_vegetarian = document.querySelector(".incr2vg");
var number_vegetarian = document.querySelector(".num_veget");
var increment_vegan = document.querySelector(".incr1vn");
var decrement_vegan = document.querySelector(".incr2vn");
var number_vegan = document.querySelector(".num_vegan");
var spatula = document.querySelector("#spatula");
var list = document.querySelector("#the_list");
var meat_idk = document.querySelector("#meat_id");
var sausage_idk = document.querySelector("#sausage_id");
var tofusteak_idk = document.querySelector("#tofusteak_id");
var cheese_idk = document.querySelector(".cheese_id");
var tofusausage_idk = document.querySelector("#tofusausage_id");
var salad_idk = document.querySelector("#salad_id");
var bread_idk = document.querySelector("#bread_id");
var corn_idk = document.querySelector("#corn_id");
var sauces_idk = document.querySelector("#sauces_id");
var potatoes_idk = document.querySelector("#potatoes_id");
var cutlery_idk = document.querySelector("#cutlery_id");
var n = 0;
var m = 0;
var l = 0;

// INCREMENTING AND DECREMENTING BUTTONS FOR NUMBER OF PEOPLE
increment_meat.addEventListener("click", function () {
  n++;
  number_meat.style.color = "red"
  number_meat.textContent = n;
});
decrement_meat.addEventListener("click", function () {
  if (n > 0) {
    n--;
  }
  number_meat.textContent = n;
});
increment_vegetarian.addEventListener("click", function () {
  m++;
  number_vegetarian.style.color = "darkgreen"
  number_vegetarian.textContent = m;
});
decrement_vegetarian.addEventListener("click", function () {
  if (m > 0) {
    m--;
  }
  number_vegetarian.textContent = m;
});
increment_vegan.addEventListener("click", function () {
  l++;
  number_vegan.style.color = "lightgreen"
  number_vegan.textContent = l;
});
decrement_vegan.addEventListener("click", function () {
  if (l > 0) {
    l--;
  }
  number_vegan.textContent = l;
});
// MAIN GROCERY LIST OBJECT
var GrillIngridients = {

  Fleisch: 350,
  Wurst: 2,
  GrillKartoffel: 2,
  Mais: 1,
  Salat: 0.25,
  Brot: 1,
  Saucen: 1,
  Besteck_und_Servietten: 2,
  Kase: 2,
  Tofuwurst: 2,
  Seitan_Tofusteak: 300
}
// THE WISE MAGIC SPATULA THAT CALCULATES EVERYTHING :D

spatula.addEventListener("click", function () {
  list.style.height = "38%";
  list.style.opacity = "1";
  meat_idk.innerHTML = n * GrillIngridients.Fleisch;
  sausage_idk.innerHTML = n * GrillIngridients.Wurst;
  potatoes_idk.innerHTML = (n + m + l) * GrillIngridients.GrillKartoffel;
  corn_idk.innerHTML = (n + m + l) * GrillIngridients.Mais;
  salad_idk.innerHTML = (n + m + l) * GrillIngridients.Salat;
  bread_idk.innerHTML = (n + m + l) * GrillIngridients.Brot;
  cutlery_idk.innerHTML = (n + m + l) * GrillIngridients.Besteck_und_Servietten;
  sauces_idk.innerHTML = (n + m + l) * GrillIngridients.Saucen;
  cheese_idk.innerHTML = (m * GrillIngridients.Kase);
  tofusausage_idk.innerHTML = (m + n) * GrillIngridients.Tofuwurst;
  tofusteak_idk.innerHTML = m * GrillIngridients.Seitan_Tofusteak;
})