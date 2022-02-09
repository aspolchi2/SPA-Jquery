import { user, country } from "./user.js"


const ME = new user("Agustín", "Somoza Polchi")
const countryME = new country("Argentina", "Buenos Aires", "Bahía Blanca")

$(".text").text(`${ME.name}, ${ME.lastName}`);

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

skills()
profile()





