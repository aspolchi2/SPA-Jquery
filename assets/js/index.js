import { profile } from "./profile.js";
import { skills } from "./skills.js";
import { user, country, aboutMe, foto } from "./user.js"
const ME = new user("Agustín", "Somoza Polchi")



$(".text").text(`${ME.name}, ${ME.lastName}`);

$(window).on("hashchange", function () {
    let locationSlice = location.hash.slice(1)
    console.log(locationSlice)
    switch (locationSlice) {
        case '/profile':
            profile()        
            break;
        case '/skills':
            skills();
            
            break;
        default:
            
            break;
    }
    
});


