console.log("Скрипт странички с картами успешно загружен")

const img = document.getElementById("map1");
let imgSize = 1;
const players = document.getElementById("players");
const political = document.getElementById("political");
const resources = document.getElementById("resources");
const ethnic = document.getElementById("ethnic");
const climate = document.getElementById("climate");
const stran = document.getElementById("stran");

img.addEventListener("click",() => {
    if (imgSize == 1) {
        img.style.width = "200%"
        img.style.height = "200%"
        imgSize += 1
    } else {
        img.style.width = "100%"
        img.style.height = "100%"
        imgSize -= 1

    }
    
});


igroki.addEventListener("click",() => {
    img.src ="maps/players.jpg"
})

stran.addEventListener("click",() => {
    img.src ="maps/stran.png"
})

polit.addEventListener("click",() => {
    img.src ="maps/political.png"
})

resources.addEventListener("click",() => {
    img.src ="maps/resources.png"
})

ethic.addEventListener("click",() => {
    img.src ="maps/ethnic.png"
})

climate.addEventListener("click",() => {
    img.src="maps/climate.png"
})
