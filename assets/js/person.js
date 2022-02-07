

let item = await fetch('../profile.json')
let data = await item.json()


export function nombre(){
    return data.nombre
}

$(".main").append(`<h1> ${nombre()}</h1>`);

export { item, data}
