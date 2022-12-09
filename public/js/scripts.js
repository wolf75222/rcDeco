window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');  

    for( var i = 0; i < reveals.length; i++ ) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if  ( revealtop < windowheight - revealpoint ) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }


    }
}



var nE = document.getElementById('erreur-nom');
var pE = document.getElementById('erreur-prenom');
var eE = document.getElementById('erreur-email');
var tE = document.getElementById('erreur-tel');
var mE = document.getElementById('erreur-message');
var bs = document.getElementById('bouton-submit');

function valideN() {
    var nom = document.getElementById('floatingNom').value;
    if (nom == 0) {
        nE.innerHTML = 'Veuillez spécifier votre nom.';
        return false;
    }
    if (!nom.match(/^[a-zA-Z]+$/)) {
        nE.innerHTML = 'Veuillez spécifier un nom valide.';
        return false;
    }
    else {
        nE.innerHTML = '<i class="bi bi-check-circle"></i>';
        return true;
    }

}

function valideP() {
    var prenom = document.getElementById('floatingPrenom').value;
    if (prenom == 0) {
        pE.innerHTML = 'Veuillez spécifier votre prénom.';
        return false;
    }
    if (!prenom.match(/^[a-zA-Z]+$/)) {
        pE.innerHTML = 'Veuillez spécifier un prénom valide.';
        return false;
    }
    else {
        pE.innerHTML = '<i class="bi bi-check-circle"></i>';
        return true;
    }

}

function valideT() {
    var tel = document.getElementById('floatingTel').value;
    if (tel == 0) {
        tE.innerHTML = 'Veuillez spécifier votre numéro de téléphone.';
        return false;
    }
    if (!tel.match(/^[0-9]+$/) || tel < 6) {
        tE.innerHTML = 'Veuillez spécifier un numéro de téléphone valide.';
        return false;
    }
    else {
        tE.innerHTML = '<i class="bi bi-check-circle"></i>';
        return true;
    }
}



function valideE() {
    var email = document.getElementById('floatingEmail').value;
    if (email == 0) {
        eE.innerHTML = 'Veuillez spécifier votre adresse email.';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/)) {
        eE.innerHTML = 'Veuillez spécifier une adresse email valide.';
        return false;
    }
    else {
        eE.innerHTML = '<i class="bi bi-check-circle"></i>';
        return true;
    }

}

function valideM() {
    var message = document.getElementById('floatingMessage').value;
    if (message == 0) {
        mE.innerHTML = 'Veuillez spécifier votre message.';
        return false;
    }
    else {
        mE.innerHTML = '<i class="bi bi-check-circle"></i>';
        return true;
    }

}

async function valide(event) {
    if (!valideN() || !valideP() || !valideE() || !valideM()) {
        bs.innerHTML = '<i class="bi bi-send-slash"></i> Envoyer';
        /* Pour bloquer l'envoie */
        event.preventDefault();
    }
    else {
        bs.innerHTML = '<i class="bi bi-send"></i> Envoyer';
        info();
        event.preventDefault();
        await sleep(2000);
        event.target.submit();
        
    }
}

function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }  

function info() {
    swal(
        "À vous de jouer !",
        "Veuillez envoyer un mail via la page qui vient de s'ouvrir.",
        "success"
    );
}
