let titre = document.querySelector('titre');
let upperCase = document.querySelectorAll(".text-uppercase");
const TL1 = new TimelineMax({
    paused: false
})
$(document).ready(function() {
    TL1
        .from(titre, 2, {
            opacity: 0,
            x: -500
        })
        .from(upperCase, 4, {
            opacity: 0,
            x: -500
        });
})

function validation() {

    document.querySelector('.inscription').addEventListener('click', function(e) {
        alert("inscription effectuée !!! ")

    });
}

var rs = document.getElementsByClassName('media').querySelector(Image);