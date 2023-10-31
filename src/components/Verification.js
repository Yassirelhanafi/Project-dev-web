export function checkAll() {
    return checkName() && checkFirstName() && checkAge() && checkAddress() && checktitle();
    }

    function checkName() {
    var name = document.getElementById("nom").value;
    var validName = /^[a-zA-Z]+$/;
    if (name !== name.toUpperCase()) {
    alert("Le nom doit être écrit en majuscule.");
    return false;
    } 
    else if (!validName.test(name)) {
        alert("Le nom ne doit pas contenir de chiffres ni de caractères spéciaux.");
        return false;
    }
    else {
    return true;
    }
    }

    function checkFirstName() {
    var firstName = document.getElementById("prenom").value;
    var validfirstName = /^[a-zA-Z]+$/;
    if (!firstName.charAt(0).match(/[A-Z]/)) {
    alert("Le prénom doit commencer par une majuscule.");
    return false;
    } 
    else if (!validfirstName.test(firstName)) {
        alert("Le prénom ne doit pas contenir de chiffres ni de caractères spéciaux.");
        return false;
    }
    else {
    return true;
    }
    }

    function checktitle() {
    var title= document.getElementById("title").value;
    var validtitle = /^[a-zA-Z]+$/;
    if (!validtitle.test(title)) {
        alert("Le titre de CV ne doit pas contenir de chiffres ni de caractères spéciaux.");
        return false;
    }
    else {
    return true;
    }
    }
    function checkAge() {
    var date = document.getElementById("date").value;
    var dateObj = new Date(date);
    var currentYear = new Date().getFullYear();
    var age = currentYear - dateObj.getFullYear();
    if (age < 18) {
    alert("Vous devez être âgé de plus de 18 ans pour soumettre ce formulaire.");
    return false;
    } else {
    return true;
    }
    }

    function checkAddress() {
    var address = document.getElementById("adresse").value;
    var regEx = /[^a-zA-Z0-9]/g;
    if (regEx.test(address)) {
    alert("L'adresse ne doit pas contenir de caractères spéciaux.");
    return false;
    } else {
    return true;
    }
    }
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cvForm');

    form.addEventListener('submit', function (e) {
            if (!checkAll()) {
            e.preventDefault();
        } else {
            // Toutes les conditions de vérification sont remplies, soumettre le formulaire.
            const formData = new FormData(form);
            const queryString = new URLSearchParams(formData).toString();
            window.location.href = "Untitled-.html?" + queryString;
        }
    });
});