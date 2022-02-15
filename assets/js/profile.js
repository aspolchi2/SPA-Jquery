import { user, country, aboutMe, foto } from "./user.js"


//funcion para cambiar el hash a profile
function profileHash() {
    $('.profile').click(function (e) {
        location.hash = '/profile'
        e.preventDefault();

    });
}
profileHash()




const imgProfile = new foto('./assets/img/aboutPage.jpg')
const countryME = new country("Argentina", "Buenos Aires", "Bahía Blanca")

//funcion para agregar elementos y sacar clases 
export function profile() {
    $('#app').remove();
    $('.main').append(`<section id = "app"></section>`);
    $('#app').append(`<h1 class = "title">ABOUT ME</h1>`);
    $('#app').append(`<div class ="flex"> <ul class = "unorderList"></ul></div>`);
    $('.flex').append(`<img src = ${imgProfile.src} class="img" </img>`)
    $(".frame").removeClass("frame2");
    $(".main__header").removeClass("header2");
    $(".text").removeClass("text2");
    $('#app').fadeIn("slow", function() {
        
      });

//funcion para hacer crear elementos de la lista 
    function list() {
        for (const entry of aboutMe) {
            $(".unorderList").append(`<li class ="itemList">${entry}</li>`)

        }
    }



    list()

}
export function profileAnimation (){
    $('.frame').css( { position: "absolute",
        bottom: "-30px",
        left: "30px",
        height: "20vh",
        border: "1px solid rgba(89, 89, 89, 0.563)",
        borderRadius: "10px",
        transition: "all 1s ease",
        backgroundColor: "rgb(0, 169, 160)"
});
}
