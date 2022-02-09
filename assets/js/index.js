import { header } from "./header.js";
import {removeClass, addClass} from "./functions.js"
header()
removeClass()
addClass()




//router son mucho muy importante
const router = [
    {path: '/', action: 'profile'},
    {path: '/skills', action: 'skills'},
    {path: '/portfolio', action: 'portfolio'}
]

$(window).on('load', function(){
  router()
})
$(window).on('hashchange', function (e) 
{
router()
});