import { user, country, aboutMe, foto } from "./user.js"

function profileHash() {
    $('.profile').click(function (e) {
        location.hash = '/profile'
        console.log(location.hash);
        e.preventDefault();

    });
}
profileHash()




const imgProfile = new foto('./assets/img/aboutPage.jpg')
const countryME = new country("Argentina", "Buenos Aires", "Bahía Blanca")


export function profile(){ 
    $('#app').remove();
    $('.main').append(`<section id = "app"></section>`);
    $('#app').append(`<h1 class = "title">ABOUT ME</h1>`);
    $('#app').append(`<div class ="flex"> <ul class = "unorderList"></ul></div>`);
    $('.flex').append(`<img src = ${imgProfile.src} class="img" </img>`)

    $('.profile').click(function (e) { 
        $(".frame").removeClass("frame2");
        $(".main__header").removeClass("header2");
        $(".text").removeClass("text2")
    
        e.preventDefault();
        
    });



        ;

    function list() {
        for (const entry of aboutMe) {
            $(".unorderList").append(`<li class ="itemList">${entry}</li>`)

        }
    }



    list()

}
