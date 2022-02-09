import { user, country, aboutMe, foto } from "./user.js"

const imgProfile = new foto ('./assets/img/aboutPage.jpg')
const ME = new user("Agustín", "Somoza Polchi")
const countryME = new country("Argentina", "Buenos Aires", "Bahía Blanca")

$(".text").text(`${ME.name}, ${ME.lastName}`);
$('#app').append(`<h1 class = "title">ABOUT ME</h1>`);
$('#app').append(`<div class ="flex"> <ul class = "unorderList"></ul></div>`);
$('.flex').append(`<img src = ${imgProfile.src} class="img" </img>` )



function skills() {
  $(".skills").click(function (e) {
    $(".frame").addClass("frame2");
    $(".main__header").addClass("header2")
    $(".text").addClass("text2")
    e.preventDefault();


  });
}

function profile() {
  $(".profile").click(function (e) {
    $(".frame").removeClass("frame2");
    $(".main__header").removeClass("header2");
    $(".text").removeClass("text2")
  
    
    e.preventDefault();


  });
}
function list (){
 for (const entry of aboutMe) {
   $(".unorderList").append(`<li class ="itemList">${entry}</li>`)
   
 }
}




skills()
profile()
list()





