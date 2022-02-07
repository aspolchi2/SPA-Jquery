import { header } from "./header.js";

let item = await fetch('../profile.json')
let data = await item.json()



header()


const PROFILE = fetch('../profile.json')
  .then(response => response.json())
  .then(data => {
    const NAME = data.name
  });


