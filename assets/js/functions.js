export function addClass() {
    

$(".skills").click(function (e) {
    $(".frame").addClass("frame2");
    $(".main__header").addClass("header2")
    $(".text").addClass("text2")
    
    e.preventDefault();
    
  });
}
 
export function removeClass(){
  $(".profile").click(function (e) { 
    $(".frame").removeClass("frame2");
    $(".main__header").removeClass("header2");
    $(".text").removeClass("text2")
    e.preventDefault();
    
  });
}