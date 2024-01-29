let biler = document.getElementById("biler");
let overskrift = document.getElementById("overskrift");
let bilIndex = 0;
let logoer = document.getElementById("salg");
let kvittering = document.getElementById("kvittot");
let bilerBilde = document.getElementById("bilerBilde");

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
    document.getElementById("carsL"),
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
let bilPrisTall;
let bilIndexEl;

let nrBil = [
    document.getElementById("cayman"),
    document.getElementById("spyder"),
    document.getElementById("gt3"),
    document.getElementById("carrera"),
    document.getElementById("stradale"),
    document.getElementById("laferrai"),
    document.getElementById("f40"),
    document.getElementById("monza"),
    document.getElementById("gemera"),
    document.getElementById("jesko"),
    document.getElementById("cc80"),
    document.getElementById("agera"),
    document.getElementById("regera"),
    document.getElementById("huracan"),
    document.getElementById("urus"),
    document.getElementById("aventador"),
    document.getElementById("countash"),
]

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
        bilPrisTall = valgtBil[2];
        bilIndexEl = parseInt(valgtBil[3]);

        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;

        for (let i = 0; i < nrBil.length; i++) {
            if (nrBil[i]) {
                if (i === bilIndexEl) {
                    bilerBilde.style.display = "block";
                    nrBil.forEach(function(bilElement) {
                        bilElement.style.display = "none";
                    });
                    nrBil[i].style.display = "block";
                }
            }
        } // viser bilen
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
        bilPrisTall = valgtBil[2];
        bilIndexEl = parseInt(valgtBil[3]);
    
        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;

        for (let i = 0; i < nrBil.length; i++) {
            if (nrBil[i]) {
                if (i === bilIndexEl) {
                    bilerBilde.style.display = "block";
                    nrBil.forEach(function(bilElement) {
                        bilElement.style.display = "none";
                    });
                    nrBil[i].style.display = "block";
                }
            }
        } // viser bilen
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
        bilPrisTall = valgtBil[2];
        bilIndexEl = parseInt(valgtBil[3]);
    
        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;
 
        for (let i = 0; i < nrBil.length; i++) {
            if (nrBil[i]) {
                if (i === bilIndexEl) {
                    bilerBilde.style.display = "block";
                    nrBil.forEach(function(bilElement) {
                        bilElement.style.display = "none";
                    });
                    nrBil[i].style.display = "block";
                }
            }
        } // viser bilen
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
        bilPrisTall = valgtBil[2];
        bilIndexEl = parseInt(valgtBil[3]);
    
        bilPrisPrint[bilIndex].textContent = "Pris: " + bilPris;

        for (let i = 0; i < nrBil.length; i++) {
            if (nrBil[i]) {
                if (i === bilIndexEl) {
                    bilerBilde.style.display = "block";
                    nrBil.forEach(function(bilElement) {
                        bilElement.style.display = "none";
                    });
                    nrBil[i].style.display = "block";
                }
            }
        } // viser bilen
    })

    bilFarge[bilIndex].addEventListener("change",function(){
        bilFargeEl = bilFarge[bilIndex].value;
 
    })
}

let topp = document.getElementById("topp");
let ordere = document.getElementById("ordere")
let bKnapper = document.getElementById("bunnKnapper");
let ferdig = document.getElementById("ferdigBunn");
let utsjekk = document.getElementById("utsjekk");
let ordrenummer = document.getElementById("ordrenummer");

function start() {
    biler.style.display = "flex";
    overskrift.style.display = "block";

    bilEl[bilIndex].style.display = "none";
    kvittering.style.display = "none";
    topp.style.display = "none";
    ordere.style.display = "none";
    ferdig.style.display = "none";
    utsjekk.style.display = "none";
    bilerBilde.style.display = "none";

    let resetValg = bilNavn[bilIndex];
    resetValg.selectedIndex = 0;

}


let kjopInfo = {
    ordrenr: "",
    merke: "",
    modell: "",
    farge: "",
    pris: "",
    prisTall: ""
};


let handlekurv = document.getElementById("ting");
const ordreData = sessionStorage.getItem("Kjopt");
let varer = parseInt(ordreData);

let bestillinger = document.getElementById("bestillinger");
let totalprisPrint = document.getElementById("totalpris");
let totalpris = 0;
let prisTall = 0;

if (ordreData === null) {
    varer = 0;
    topp.textContent = "Handlekurven er tom";
    bKnapper.style.display = "none";
    bestillinger.style.display = "none";
    totalprisPrint.style.display = "none";

}



handlekurv.innerHTML = varer;

if (varer === 0){
    handlekurv.innerHTML = "";
}


function kjopt(){
    varer++;
    const Bestillinger = varer;
    sessionStorage.setItem("Kjopt", JSON.stringify(Bestillinger));

    handlekurv.innerHTML = varer;

}

let fargeBoks = document.getElementById("fargeS");
let bestilling = [bilNavnEl,bilFargeEl,bilPris];
let ordre = 0;
let velgTall;

let nummer = document.getElementById("kvittering");

function random(){
    velgTall = "#" + Math.floor(Math.random() * 99999);
}



function bestill() {

    if(!bilNavnEl){
        alert("Velg modell");
        return;
    }

    if(!bilFargeEl){
        alert("Velg farge");
        return;
    }

    if(bilNavnEl === "ikke valgt"){
        alert("Velg modell");
        return;
    }

    
    random();

    kvittering.style.display = "block";
    bilEl[bilIndex].style.display = "none";
    bilerBilde.style.display = "none";

    nummer.innerHTML = velgTall;

    kjopInfo.merke = bilMerke;
    kjopInfo.modell = bilNavnEl;
    kjopInfo.farge = bilFargeEl;
    kjopInfo.pris = bilPris;
    kjopInfo.ordrenr = velgTall;
    kjopInfo.prisTall = bilPrisTall;

    fargeBoks.style.color = bilFargeEl;

    document.getElementById("merkeS").textContent = "Merke: " + kjopInfo.merke;
    document.getElementById("modellS").textContent = "Modell: " + kjopInfo.modell;
    document.getElementById("fargeS").textContent = "Farge: " + kjopInfo.farge;
    document.getElementById("prisS").textContent = "Pris: " + kjopInfo.pris;

    console.log(kjopInfo)

    kjopt();

    const ordreBestilling = kjopInfo;
    sessionStorage.setItem(varer, JSON.stringify(ordreBestilling));

    const alleBestillinger = JSON.parse(sessionStorage.getItem(varer));
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

    prisTall = parseInt(alleBestillinger.prisTall);
    totalpris += prisTall;

}


function kurv() {
    kvittering.style.display = "none";
    topp.style.display = "block";
    ordere.style.display = "block";
    bilEl[bilIndex].style.display = "none";
    biler.style.display = "none";
    overskrift.style.display = "none";
    utsjekk.style.display = "none"
    bilerBilde.style.display = "none";


    if(varer === 0){
        bKnapper.style.display = "none";
        topp.textContent = "Handlekurven er tom";
        totalprisPrint.style.display = "none";
    }
    else{
        bKnapper.style.display = "flex";
        totalprisPrint.style.display = "block";
        topp.textContent = "Totalt: " + varer;
    }
    

    topp.style.display = "block";
    bestillinger.style.display = "flex";

    totalprisPrint.innerHTML = "Totalsum: " + (totalpris / 1000000) + " mil kr";
}

function slettLocalStorage(){
    varer = 0;
    sessionStorage.clear();
    handlekurv.innerHTML = "";
    topp.textContent = "Handlekurven er tom";
    bKnapper.style.display = "none";
    bestillinger.style.display = "none";
    totalprisPrint.style.display = "none";
    totalpris = 0;
    prisTall = 0;

    while (bestillinger.firstChild) {
        bestillinger.removeChild(bestillinger.firstChild);
    } // fjerner alle divene
    

    
    sessionStorage.setItem("Kjopt", JSON.stringify(0));


}

for (let i = 1; i < varer + 1; i++) {
    const alleBestillinger = JSON.parse(sessionStorage.getItem(i));
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

    prisTall = parseInt(alleBestillinger.prisTall)
    totalpris += prisTall;

}



let prisSum = document.getElementById("prisSum");

function kjop() {
    topp.style.display = "none";
    ordere.style.display = "none";

    utsjekk.style.display = "block";

    prisSum.innerHTML = "Pris: " + (totalpris/1000000) + " Mil kr";
}

let bestillingEl = {
    ordrenrEL: "",
    totalsum: "",
    navn: "",
    nummer: "",
    adresse: "",
    antall: "",
    info: ""
}



let navn = document.getElementById("navn");
let nummerEl = document.getElementById("nummer");
let adresse = document.getElementById("adresse"); 

const ordreTall = localStorage.getItem("ordreTall");
let bestillingTall = parseInt(ordreTall);



let alleOrdere = {}

function betal() {
    if (ordreTall === null) {
        bestillingTall = 0;
        localStorage.setItem("ordreTall", 0)
    }

    if(!navn.value){
        alert("Skriv inn navn");
        return;
    }

    if(!nummerEl.value){
        alert("Skriv inn nummer");
        return;
    }

    if(!adresse.value){
        alert("Skriv inn adresse");
        return;
    }

    bestillingTall++;

    utsjekk.style.display = "none";

    random();

    bestillingEl.ordrenrEL = velgTall;
    bestillingEl.totalsum = totalpris;
    bestillingEl.navn = navn.value;
    bestillingEl.nummer = nummerEl.value;
    bestillingEl.adresse = adresse.value;
    bestillingEl.antall = varer;
    bestillingEl.info = alleOrdere;

    

    for (let i = 1; i < varer + 1; i++) {
        const alleBestillingerEl = JSON.parse(sessionStorage.getItem(i));
    
        alleOrdere[i] = alleBestillingerEl;
    }

    //lager objektet som lagres i localStorage

    localStorage.setItem(bestillingTall, JSON.stringify(bestillingEl));
    localStorage.setItem("ordreTall", JSON.stringify(bestillingTall));

    slettLocalStorage();

    ferdig.style.display = "flex";
    ordrenummer.innerHTML = "Ordrenummer " + velgTall;
}