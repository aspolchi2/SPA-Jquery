import { header } from "./header.js";


header()


const PROFILE = fetch('../profile.json')
  .then(response => response.json())
  .then(data => console.log(data));

let profileArray = []
profileArray.push(PROFILE)
console.log(profileArray);