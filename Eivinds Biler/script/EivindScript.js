let biler = document.getElementById("biler");
let overskrift = document.getElementById("overskrift");
let bilIndex = 0;
let logoer = document.getElementById("salg");
let kvittering = document.getElementById("kvittot");

let bilEl = [
    document.getElementById("Porche"),
    document.getElementById("ferarri"),
    document.getElementById("Koenisegg"),
    document.getElementById("Lamborghini"),
];

let bilNavn = [
    document.getElementById("carsP"),
    document.getElementById("carsF"),
    document.getElementById("carsK"),
    document.getElementById("carsL")
];


let bilPrisPrint = [
    document.getElementById("prisP"),
    document.getElementById("prisF"),
    document.getElementById("prisK"),
    document.getElementById("prisL")
];

let valgtBil;
let bilPris;
let bilNavnEl;

let bilFarge = [
    document.getElementById("fargeP"),
    document.getElementById("fargeF"),
    document.getElementById("fargeK"),
    document.getElementById("fargeL"),
]
    
let bilFargeEl;
let bilMerke;



function porche() {
    bilIndex = 0;
    bilMerke = "Porche";

    biler.style.display = "none";
    overskrift.style.display = "none";

    bilEl[bilIndex].style.display = "block";

    bilNavn[bilIndex].addEventListener("change" , function(){
        valgtBil = bilNavn[bilIndex].value.split("-");
        bilNavnEl = valgtBil[0]
        bilPris = valgtBil[1];
        
    
        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;

    })

    bilFarge[bilIndex].addEventListener("change",function(){
        bilFargeEl = bilFarge[bilIndex].value;

    })
}

function ferarri() {
    bilIndex = 1
    bilMerke = "Ferarri";
    
    biler.style.display = "none";
    overskrift.style.display = "none";

    bilEl[bilIndex].style.display = "block";

    bilNavn[bilIndex].addEventListener("change" , function(){
        valgtBil = bilNavn[bilIndex].value.split("-");
        bilNavnEl = valgtBil[0]
        bilPris = valgtBil[1];
        
    
        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;

    })

    bilFarge[bilIndex].addEventListener("change",function(){
        bilFargeEl = bilFarge[bilIndex].value;

    })
}

function egg() {
    bilIndex = 2
    bilMerke = "Koenisegg";

    biler.style.display = "none";
    overskrift.style.display = "none";

    bilEl[bilIndex].style.display = "block";

    bilNavn[bilIndex].addEventListener("change" , function(){
        valgtBil = bilNavn[bilIndex].value.split("-");
        bilNavnEl = valgtBil[0]
        bilPris = valgtBil[1];
        
    
        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;
 
    })

    bilFarge[bilIndex].addEventListener("change",function(){
        bilFargeEl = bilFarge[bilIndex].value;

    })
}

function lambo() {
    bilIndex = 3
    bilMerke = "Lamborghini";

    biler.style.display = "none";
    overskrift.style.display = "none";

    bilEl[bilIndex].style.display = "block";

    bilNavn[bilIndex].addEventListener("change" , function(){
        valgtBil = bilNavn[bilIndex].value.split("-");
        bilNavnEl = valgtBil[0]
        bilPris = valgtBil[1];
        
    
        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;

    })

    bilFarge[bilIndex].addEventListener("change",function(){
        bilFargeEl = bilFarge[bilIndex].value;
 
    })
}

let topp = document.getElementById("topp");
let ordere = document.getElementById("ordere")
let bKnapper = document.getElementById("bunnKnapper");


function start() {
    biler.style.display = "flex";
    overskrift.style.display = "block";

    bilEl[bilIndex].style.display = "none";
    kvittering.style.display = "none";
    topp.style.display = "none";
    bKnapper.style.display = "none";
    ordere.style.display = "none";
    bestillinger.style.display = "none";

    let resetValg = bilNavn[bilIndex];
    resetValg.selectedIndex = 0;

}


let kjopInfo = {
    ordrenr: "",
    merke: "",
    modell: "",
    farge: "",
    pris: ""
};


let handlekurv = document.getElementById("ting");

let ordreData = localStorage.getItem("Kjopt");

handlekurv.innerHTML = ordreData;
let varer = parseInt(ordreData);


function kjopt(){
    varer++;
    const Bestillinger = varer;
    localStorage.setItem("Kjopt", JSON.stringify(Bestillinger));
    const ordreData = localStorage.getItem("Kjopt");

    handlekurv.innerHTML = ordreData;

    
}

let fargeBoks = document.getElementById("fargeS");
let bestilling = [bilNavnEl,bilFargeEl,bilPris];
let ordre = 0;
let velgTall;

let nummer = document.getElementById("kvittering");

function random(){
    velgTall = "#" + Math.floor(Math.random() * 99999999);
}

let bestillinger = document.getElementById("bestillinger");
let totalpris = 0;

function bestill() {

    if(!bilNavnEl){
        alert("Velg modell");
        return;
    }

    if(!bilFargeEl){
        alert("Velg farge");
        return;
    }


    
    random();

    kvittering.style.display = "block";
    bilEl[bilIndex].style.display = "none";

    nummer.innerHTML = velgTall;

    kjopInfo.merke = bilMerke;
    kjopInfo.modell = bilNavnEl;
    kjopInfo.farge = bilFargeEl;
    kjopInfo.pris = bilPris;
    kjopInfo.ordrenr = velgTall;

    fargeBoks.style.color = bilFargeEl;

    document.getElementById("merkeS").textContent = "Merke: " + kjopInfo.merke;
    document.getElementById("modellS").textContent = "Modell: " + kjopInfo.modell;
    document.getElementById("fargeS").textContent = "Farge: " + kjopInfo.farge;
    document.getElementById("prisS").textContent = "Pris: " + kjopInfo.pris;

    console.log(kjopInfo)

    kjopt();

    const ordreBestilling = kjopInfo;
    localStorage.setItem(varer, JSON.stringify(ordreBestilling));

    localStorage.setItem("totalsum", kjopInfo.pris)

    const alleBestillinger = JSON.parse(localStorage.getItem(varer));
    const nyDiv = document.createElement("div");
    nyDiv.classList.add("nyDiv");
    bestillinger.appendChild(nyDiv);

    const nrDiv = document.createElement("div");
    const merkeDiv = document.createElement("div");
    const modellDiv = document.createElement("div");
    const fargeDiv = document.createElement("div");
    const prisDiv = document.createElement("div");

    nyDiv.appendChild(nrDiv);
    nyDiv.appendChild(merkeDiv);
    nyDiv.appendChild(modellDiv);
    nyDiv.appendChild(fargeDiv);
    nyDiv.appendChild(prisDiv);

    nrDiv.classList.add("nrDiv");
    merkeDiv.classList.add("innholdDiv");
    modellDiv.classList.add("innholdDiv");
    fargeDiv.classList.add("innholdDiv");
    prisDiv.classList.add("innholdDiv");

    nrDiv.innerHTML = alleBestillinger.ordrenr;
    merkeDiv.innerHTML = "Merke: " + alleBestillinger.merke;
    modellDiv.innerHTML = "Modell: " + alleBestillinger.modell;
    fargeDiv.innerHTML = "Farge: " + alleBestillinger.farge;
    prisDiv.innerHTML = "Pris: " + alleBestillinger.pris;

    fargeDiv.style.color = alleBestillinger.farge;


}


function kurv() {
    kvittering.style.display = "none";
    topp.style.display = "block";
    ordere.style.display = "block";
    bilEl[bilIndex].style.display = "none";
    topp.style.display = "none";
    biler.style.display = "none";
    overskrift.style.display = "none";

    if(varer === 0){
        bKnapper.style.display = "none";
    }
    else{
        bKnapper.style.display = "flex";
    }
    

    topp.style.display = "block";
    topp.textContent = "Totale ordre: " + varer;
    bestillinger.style.display = "flex";
    
}

function slettLocalStorage(){
    varer = 0;
    localStorage.clear();
    handlekurv.innerHTML = "";
    topp.textContent = "Handlekurven er tom";
    bKnapper.style.display = "none";
    bestillinger.style.display = "none";
    totalpris = 0;

    while (bestillinger.firstChild) {
        bestillinger.removeChild(bestillinger.firstChild);
    } // fjerner alle divene
    

    
    localStorage.setItem("Kjopt", JSON.stringify(varer));


}

for (let i = 1; i < varer + 1; i++) {
    const alleBestillinger = JSON.parse(localStorage.getItem(i));
    const nyDiv = document.createElement("div");
    nyDiv.classList.add("nyDiv");
    bestillinger.appendChild(nyDiv);

    const nrDiv = document.createElement("div");
    const merkeDiv = document.createElement("div");
    const modellDiv = document.createElement("div");
    const fargeDiv = document.createElement("div");
    const prisDiv = document.createElement("div");

    nyDiv.appendChild(nrDiv);
    nyDiv.appendChild(merkeDiv);
    nyDiv.appendChild(modellDiv);
    nyDiv.appendChild(fargeDiv);
    nyDiv.appendChild(prisDiv);

    nrDiv.classList.add("nrDiv");
    merkeDiv.classList.add("innholdDiv");
    modellDiv.classList.add("innholdDiv");
    fargeDiv.classList.add("innholdDiv");
    prisDiv.classList.add("sumDiv");

    nrDiv.innerHTML = alleBestillinger.ordrenr;
    merkeDiv.innerHTML = "Merke: " + alleBestillinger.merke;
    modellDiv.innerHTML = "Modell: " + alleBestillinger.modell;
    fargeDiv.innerHTML = "Farge: " + alleBestillinger.farge;
    prisDiv.innerHTML = "Pris: " + alleBestillinger.pris;

    fargeDiv.style.color = alleBestillinger.farge;

}







