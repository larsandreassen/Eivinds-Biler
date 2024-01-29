const ordreData = localStorage.getItem("ordreTall");
let varer = parseInt(ordreData);

if (ordreData === null) {
    varer = 0;
    localStorage.setItem("ordreTall",0)
}

let bestillinger = document.getElementById("bestillinger");
let antallEl = document.getElementById("antall");
let scrollebar = document.getElementById("")
let antall;

kjop();

function kjop(){
    for (let i = 1; i < varer + 1; i++) {
        const alleBestillinger = JSON.parse(localStorage.getItem(i));
        const nyDiv = document.createElement("div");
        bestillinger.appendChild(nyDiv);
    
        const ordreDiv = document.createElement("div");
        const navnDiv = document.createElement("div");
        const nummerDiv = document.createElement("div");
        const adresseDiv = document.createElement("div");
        const totalsumDiv = document.createElement("div");
        const antallDiv = document.createElement("div");
        const bilerDiv = document.createElement("div");
        
        nyDiv.appendChild(ordreDiv);
        nyDiv.appendChild(navnDiv);
        nyDiv.appendChild(nummerDiv);
        nyDiv.appendChild(adresseDiv);
        nyDiv.appendChild(totalsumDiv);
        nyDiv.appendChild(antallDiv);
        nyDiv.appendChild(bilerDiv);
    
        ordreDiv.innerHTML = alleBestillinger.ordrenrEL;
        navnDiv.innerHTML = "Navn: " + alleBestillinger.navn;
        nummerDiv.innerHTML = "Nummer: " + alleBestillinger.nummer;
        adresseDiv.innerHTML = "Adresse: " + alleBestillinger.adresse;
        totalsumDiv.innerHTML = "Totalsum: " + (alleBestillinger.totalsum/1000000) + " mil kr";
        antallDiv.innerHTML = "Antall biler: " + alleBestillinger.antall;
    
        nyDiv.classList.add("box");
        ordreDiv.classList.add("ordre");
        navnDiv.classList.add("text");
        nummerDiv.classList.add("text");
        adresseDiv.classList.add("text");
        totalsumDiv.classList.add("text");
        antallDiv.classList.add("text");
        bilerDiv.classList.add("alleBiler");

        navnDiv.setAttribute("id", "navn");
        
    
        antall = alleBestillinger.antall;
    
        for (let i = 1; i < antall + 1; i++) {
            const bilElDiv = document.createElement("div");
            bilerDiv.appendChild(bilElDiv);
    
            const bilOrdreDiv = document.createElement("div");
            const merkeDiv = document.createElement("div");
            const modellDiv = document.createElement("div");
            const fargeDiv = document.createElement("div");
            const prisDiv = document.createElement("div");
    
            bilElDiv.appendChild(bilOrdreDiv);
            bilElDiv.appendChild(merkeDiv);
            bilElDiv.appendChild(modellDiv);
            bilElDiv.appendChild(fargeDiv);
            bilElDiv.appendChild(prisDiv);
    
            bilOrdreDiv.innerHTML = alleBestillinger.info[i].ordrenr;
            merkeDiv.innerHTML = "Merke: " + alleBestillinger.info[i].merke;
            modellDiv.innerHTML = "Modell: " + alleBestillinger.info[i].modell;
            fargeDiv.innerHTML = "Farge: " + alleBestillinger.info[i].farge;
            prisDiv.innerHTML = "Pris: " + alleBestillinger.info[i].pris;
    
            fargeDiv.style.color = alleBestillinger.info[i].farge;
    
            bilElDiv.classList.add("bilBox");
            bilOrdreDiv.classList.add("text");
            merkeDiv.classList.add("LText");
            modellDiv.classList.add("LText");
            fargeDiv.classList.add("LText");
            prisDiv.classList.add("LText");

            if (antall > 3) {
                bilerDiv.style.overflowX = "scroll";
            }
            else{
                bilElDiv.style.marginBottom = "2.8vh";
            }
        }
    
        antallEl.innerHTML = "Antall bestillinger: " + varer;
    }
}

let tomKnapp = document.getElementById("tomKnapp")

if (varer === 0){
    tomKnapp.style.display = "none"
}


function tomBest() {
    varer = 0
    antallEl.innerHTML = "Ingen bestillinger";
    localStorage.clear();
    localStorage.setItem("ordreTall", 0);
    kjop();

    while (bestillinger.firstChild) {
        bestillinger.removeChild(bestillinger.firstChild);
    } // fjerner alle divene

    tomKnapp.style.display = "none"
}


const ordreSearch = document.getElementById("sokebar");
ordreSearch.addEventListener('keyup', event => {
    let currentValue = event.target.value.toLowerCase();
    let verdier = document.querySelectorAll('.ordre');
    verdier.forEach(verdi => {
        if (verdi.textContent.toLowerCase().includes(currentValue)) {
            verdi.parentNode.style.display = 'flex';
        } else {
            verdi.parentNode.style.display = 'none';
        }
    });
});
