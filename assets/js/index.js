import { profile } from "./profile.js";
import { skills } from "./skills.js";
import { user, country, aboutMe, foto } from "./user.js"
const mySelf = new user("Agustín", "Somoza Polchi")

$(window).on('load', function () {
   profile()
    
});



$(".text").text(`${mySelf.name}, ${mySelf.lastName}`);

$(window).on("hashchange", function () {
    let locationSlice = location.hash.slice(1)
    switch (locationSlice) {
        case '/profile':
            profile()        
            break;
        case '/skills':
            skills();
            
            break;
        default:
            profile()
            break;
    }
    
});

