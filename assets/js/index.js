import { profile } from "./profile.js";
import { skills } from "./skills.js";
import { user, country, aboutMe, foto } from "./user.js"
const mySelf = new user("Agustín", "Somoza Polchi")



const router = () => {
    const path = location.hash.slice(1);
    switch (path) {
        case '/profile':
            profile()
            break;
        case '/skills':
            skills()
            break;
        default:
            profile()
            break;
    }
}

$(".text").text(`${mySelf.name}, ${mySelf.lastName}`);


$(window).on('load', function () {
    router()
})
$(window).on("hashchange", function () {
    
    router()

});



