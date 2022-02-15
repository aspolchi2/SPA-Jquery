import { profile, profileAnimation } from "./profile.js";
import { skills, skillsAnimate } from "./skills.js";
import { user, country, aboutMe, foto } from "./user.js"
import { portfolio, animateProfile } from "./portfolio.js";
const mySelf = new user("Agustín", "Somoza Polchi")




const router = () => {
    const path = location.hash.slice(1);
    switch (path) {
        case '/profile':
            profile()
            writeName()
            profileAnimation()
            break;
        case '/skills':
            skills()
            writeName()
            skillsAnimate()
            break;
        case '/portfolio':
            portfolio()
            animateProfile()
            break;
        default:
            profile()
            break;
    }
}
function writeName (){
$(".text").text(`${mySelf.name}, ${mySelf.lastName}`);
}


$(window).on('load', function () {
    router()
    writeName()
})
$(window).on("hashchange", function () {

    router()

});




