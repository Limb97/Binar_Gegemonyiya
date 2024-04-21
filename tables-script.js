console.log("Скрипт странички с таблицами успешно загружен")

const img = document.getElementById("img");
const buildings = document.getElementById("buildings");
const fpvp = document.getElementById("fpVp");
const size = document.getElementById("size");
const hRE = document.getElementById("hRE");
const fp2 = document.getElementById("fp2");
const tech = document.getElementById("tech");
const perki_praviteley = document.getElementById("perki_praviteley");
const sovetniki = document.getElementById("sovetniki");
const prioritety_razvitia = document.getElementById("prioritety_razvitia");
const units = document.getElementById("units");
const weather = document.getElementById("weather");
const relig_dogmaty = document.getElementById("relig_dogmaty");
const resursy = document.getElementById("resursy");
const ivents = document.getElementById("ivents");
const perelom = document.getElementById("perelom");
const traditsii = document.getElementById("traditsii");
const innovatsii = document.getElementById("innovatsii");
// const mercenaries = document.getElementById("mercenaries");


innovatsii.addEventListener("click",() => {
    img.src ="tables/innovatsii.png"
    img.style.width = "85%"
    img.style.height = "85%"
});

traditsii.addEventListener("click",() => {
    img.src ="tables/traditsii.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

buildings.addEventListener("click",() => {
    img.src ="tables/Postroyki.png"
    img.style.width = "100%"
    img.style.height = "100%"
});

perelom.addEventListener("click", () => {
    img.src = "tables/perelom.jpg"
    img.style.width = "50%"
    img.style.height = "50%"
});

ivents.addEventListener("click", () => {
    img.src = "tables/ivents.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

resursy.addEventListener("click",() => {
    img.src ="tables/resursy.jpg"
    img.style.width = "25%"
    img.style.height = "25%"
});

fpvp.addEventListener("click",() => {
    img.src="tables/FP.jpg"
    img.style.width = "80%"
    img.style.height = "80%"
});

size.addEventListener("click",() => {
    img.src="tables/size.jpg"
    img.style.width = "40%"
    img.style.height = "40%"
});

tech.addEventListener("click",() => {
    img.src="tables/tech.png"
    img.style.width = "80%"
    img.style.height = "80%"
});

fp2.addEventListener("click",() => {
    img.src="tables/FP2.jpg"
    img.style.width = "80%"
    img.style.height = "80%"
});

perki_praviteley.addEventListener("click",() => {
    img.src="tables/perki_praviteley.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

sovetniki.addEventListener("click",() => {
    img.src="tables/sovetniki.png"
    img.style.width = "75%"
    img.style.height = "75%"
});

prioritety_razvitia.addEventListener("click",() => {
    img.src="tables/prioritety_razvitia.png"
    img.style.width = "40%"
    img.style.height = "40%"
});

weather.addEventListener("click",() => {
    img.src="tables/weather.jpg"
    img.style.width = "75%"
    img.style.height = "75%"
});

relig_dogmaty.addEventListener("click",() => {
    img.src = "tables/relig_dogmaty.png"
    img.style.width = "55%"
    img.style.height = "55%"
});

units.addEventListener("click",() => {
    img.src = "tables/units.png"
    img.style.width = "55%"
    img.style.height = "55%"
});
