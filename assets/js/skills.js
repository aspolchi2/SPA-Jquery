//creando una "base de datos" para mis skills

const skillsList = [{
    'html':{
        desc:"Good knowledge of HTML sintax",
        url:"./assets/img/html.svg"
    },
    'css':{
        desc:'Long live CSS!',
        url:"./assets/img/css.svg"
    },
    'sass':{
        desc:'best preprocesor ever!',
        url:'./assets/img/sass.svg'
    },
    'js':{
        desc:"i'm lovin' it",
        url:'./assets/img/js.svg'
    },
    'git':{
        desc:'Make commit, not war',
        url:'./assets/img/git.svg'

    },
    'github':{
        desc:'github lover',
        url:'./assets/img/github.svg'
    }
}];

//for of para separar cada lenguaje 
function forSkill(){
for (const lang of skillsList) {
//For in para separar el contenido de cada lang
    for (const i in lang) {
        if (lang.hasOwnProperty.call(lang, i)) {
            const element = lang[i];
//creamos elementos por cada elemento dentro de lang
            $('.skillFlex').append(`<div class ="skillBox ">
            <div class="skillBox__img">
                <img src= ${element.url}></img>
            </div>
            <div class="skillBox__desc">
                <p>${element.desc}</p>
            </div>
            
            </div>`);
            
        }
    }
}
}




//funcion para cambiar el hash a skills
function skillsHash() {
    $(".skills").click(function (e) {
        location.hash = "/skills"
        e.preventDefault();
    });
}
skillsHash()





//funcion para agregar elementos o clases a skills
export function skills() {
    $('#app').remove();
    $('.main').append(`<section id = "app"></section>`);
    $(".frame").addClass("frame2");
    $(".main__header").addClass("header2")
    $(".text").addClass("text2")
    $('#app').append(`<div class="skillFlex"></div>`)
    forSkill()
    $('#app').fadeIn();
}