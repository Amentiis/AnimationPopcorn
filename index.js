///////////////////////
//    Nom Joueur    //
/////////////////////
    //initilisation
    const inputJoueur1 = document.getElementById("inputJoueur1");
    const inputJoueur2 = document.getElementById("inputJoueur2");
    const inputJoueur3 = document.getElementById("inputJoueur3");
    const inputJoueur4 = document.getElementById("inputJoueur4");
    const Joueur1 = document.getElementById("Joueur1");
    const Joueur2 = document.getElementById("Joueur2");
    const Joueur3 = document.getElementById("Joueur3");
    const Joueur4 = document.getElementById("Joueur4");

       // Change l'intérieur des balises pour mettre les noms des joueurs écrit dans les inputs
    inputJoueur1.addEventListener('input', function(event) {
        Joueur1.innerHTML = event.target.value; 
});
    inputJoueur2.addEventListener('input', function(event) {
        Joueur2.innerHTML = event.target.value; 
});
    inputJoueur3.addEventListener('input', function(event) {
        Joueur3.innerHTML = event.target.value; 
});
    inputJoueur4.addEventListener('input', function(event) {
        Joueur4.innerHTML = event.target.value; 
});


///////////////////////
//   Point Joueur   //
/////////////////////
    //initilisation
    const inputPoint1 = document.getElementById("inputPoint1");
    const inputPoint2 = document.getElementById("inputPoint2");
    const inputPoint3 = document.getElementById("inputPoint3");
    const inputPoint4 = document.getElementById("inputPoint4");
    const pointJoueur1 = document.getElementById("pointJoueur1");
    const pointJoueur2 = document.getElementById("pointJoueur2");
    const pointJoueur3 = document.getElementById("pointJoueur3");
    const pointJoueur4 = document.getElementById("pointJoueur4");

       // Change l'intérieur des balises pour mettre les noms des joueurs écrit dans les inputs
    inputPoint1.addEventListener('input', function(event) {
        pointJoueur1.innerHTML = event.target.value; 
});
    inputPoint2.addEventListener('input', function(event) {
        pointJoueur2.innerHTML = event.target.value; 
});
    inputPoint3.addEventListener('input', function(event) {
        pointJoueur3.innerHTML = event.target.value; 
});
    inputPoint4.addEventListener('input', function(event) {
        pointJoueur4.innerHTML = event.target.value; 
});

///////////////////////
//      REFRESH     //
/////////////////////

const buttonlancer= document.getElementById("lancer");
const buttonreset = document.getElementById("reset");
const buttounfermer = document.getElementById("fermer")
const containerclassement = document.getElementById("container_classement");
const redcontainer = document.getElementById("red_container");
const red = document.getElementById("red");
const info = document.getElementById("info");


buttonlancer.addEventListener("click", lancer);
buttonreset.addEventListener("click", reset);
buttounfermer.addEventListener("click", fermer);
function lancer() {
    containerclassement.classList.add("block");
    redcontainer.classList.add("block");
    containerclassement.classList.remove("close");
    redcontainer.classList.remove("close");
    red.classList.remove("close2");
    buttounfermer.setAttribute("disabled","")
    info.innerText = "ne peut être utilisé pendant lancement";
    setTimeout(enablebtnfermer, 5000); 
   

};

function reset() {
    inputPoint1.value = ""
    inputPoint2.value = ""
    inputPoint3.value = ""
    inputPoint4.value = ""
    inputJoueur1.value = ""
    inputJoueur2.value = ""
    inputJoueur3.value = ""
    inputJoueur4.value = ""
    Joueur1.innerHTML = "";
    Joueur2.innerHTML = "";
    Joueur3.innerHTML = "";
    Joueur4.innerHTML = "";
    pointJoueur1.innerHTML = ""; 
    pointJoueur2.innerHTML = ""; 
    pointJoueur3.innerHTML = ""; 
    pointJoueur4.innerHTML = ""; 
    containerclassement.classList.remove("block");
    redcontainer.classList.remove("block");
    containerclassement.classList.remove("close");
    redcontainer.classList.remove("close");
    red.classList.remove("close2");
    buttonlancer.removeAttribute("disabled","")
    buttounfermer.addAttribute("disabled","")
};


function fermer(){
    containerclassement.classList.add("close");
    redcontainer.classList.add("close");
    red.classList.add("close2");
    buttonlancer.setAttribute("disabled","")
    buttounfermer.setAttribute("disabled","")
    setTimeout(anim, 3000); 
    info.classList.remove("none");
    setTimeout(enablebtnlancer, 3000);

}

function enablebtnlancer(){
    buttonlancer.removeAttribute("disabled","")
}

function enablebtnfermer(){
    buttounfermer.removeAttribute("disabled","")
    info.classList.add("none");
    info.innerText = "ne peut être utilisé avant lancement";
}

function anim(){
    containerclassement.classList.remove("block");
    redcontainer.classList.remove("block");
    
    
}

function minreset(){
    containerclassement.classList.remove("block");
    redcontainer.classList.remove("block");
}
    
   
    

