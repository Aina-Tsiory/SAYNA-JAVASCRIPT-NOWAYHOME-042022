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