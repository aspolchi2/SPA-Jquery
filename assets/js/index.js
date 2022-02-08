import { header } from "./header.js";

header()


$(".skills").click(function (e) {
  $(".frame").addClass("frame2");
  $(".main__header").addClass("header2")
  $(".text").addClass("text2")
  
  e.preventDefault();
  
});

$(".profile").click(function (e) { 
  $(".frame").removeClass("frame2");
  $(".main__header").removeClass("header2");
  $(".text").removeClass("text2")
  e.preventDefault();
  
});