

function skillsHash() {
    $(".skills").click(function (e) {
        location.hash = "/skills"
        e.preventDefault();
    });
}
skillsHash()





skills()
export function skills() {
    $('#app').remove();
    $('.main').append(`<section id = "app"></section>`);
    $(".frame").addClass("frame2");
    $(".main__header").addClass("header2")
    $(".text").addClass("text2")

}