const animTitre = document.querySelector(".box");
const uppercase = document.querySelector(".de-gauche1")

window.addEventListener("scroll", () => {

    if (window.scrollY > 1 && window.scrollY < 500) {
        animTitre.classList.add("titre-final");
    } else {
        animTitre.classList.remove("titre-final");
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 700 && window.scrollY < 1000) {
        uppercase.classList.add("de-gauche1-final");
    } else {
        uppercase.classList.remove("de-gauche1-final");
    }

    if (document.scrollY > 200) {
        $(this).css('background-attachment', 'scroll')
    }

})

let audio = document.querySelector('.audio-ppl');
let positionplay = 0;

$(document).ready(function() {
    $('.play').on('click', function() {
        if (positionplay == 0) {
            positionplay = 1;
            audio.play();
            $('.pause').css('display', 'block')
            $('.play').css('display', 'none')
        }
        $('.pause').on('click', function() {
            if (positionplay == 1) {
                positionplay = 0;
                audio.pause();
                $('.pause').css('display', 'none')
                $('.play').css('display', 'block')
            }
            $('.avant').on('click', function() {
                audio.currentTime = 0;
            })
            $('.arriere').on('click', function() {
                audio.currentTime = 0;
            })
        })
    })
})



function validation() {
    let newLetter = document.querySelector("#form-newsletter");
    var nom = document.querySelector("#nom");
    var mail = document.querySelector("#mail");
    var ok = document.querySelector("#subscribeNews").checked;

    newLetter.addEventListener("submit", function(e) {

        if (nom.value = "") {
            let erreurNom = document.getElementById("erreurNom");
            alert("veuillez remplir le champ nom !");
            e.preventDefault;
            return
        } else {
            alert("Votre insciption à été confirmée... ")
        }

    })
};

// $(document).ready(function() {
//     let nom = document.querySelector("#nom");
//     let mail = document.querySelector("#mail");
//     let ok = document.querySelector("#subscribeNews").checked;
//     $('#new-validation').on('click', function() {
//         if (nom == '') {
//             alert('veuillez remplir le champs non');
//         }
//         if (mail == '') {
//             alert('veuillez remplir le champs adresse e-mail');
//         }
//         if (ok) {
//             alert('veuillez d\'abord accepter les conditions en cochant la case!');
//         } else {
//             alert('Votre inscription à la newsletter et confirmé :) !!!');
//         }

//     })
// })

$(document).ready(function() {
    $(".button1").mouseover(function() {
        $(this).css("background-color", "#b11313");
        $(this).css("color", "white");
        $(this).css("border", "solid 2px white");
        $(this).css("padding", "13px 18px");
    })
    $(".button1").mouseout(function() {
        $(this).css("background-color", "white");
        $(this).css("color", "#b11313");
        $(this).css("border", "none");
        $(this).css("padding", "15px 20px");
    })
    $('#coeur').on('click', function() {
        $('#coeur1').css('display', 'inline-block');
        $('#coeur').css('display', 'none')
    })
    $('#coeur1').on('click', function() {
        $('#coeur').css('display', 'inline-block');
        $('#coeur1').css('display', 'none')
    })
    $('.logors').mouseover(function() {
        $(this).css('color', 'white');
    })
    $('.logors').mouseout(function() {
        $(this).css('color', 'black');
    })

})