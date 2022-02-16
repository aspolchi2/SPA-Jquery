function porfolioHash() {
    $('.portfolio').click(function (e) {
        location.hash = '/portfolio'
        e.preventDefault();

    });
}
porfolioHash()


export function portfolio() {
    $('#app').empty();
    $('#app').append(`<div class="portfolio">
    <div class="portfolio_image"><img class="portfolioImg" src =""></img></div>
    <div class="portfolio_texto"></div>
</div>`);
    

    $.ajax({
        type: "GET",
        url: "./assets/json/porfolio.json",
        success: function (response) {
            //for of para iterar "response"
            for (const job of response) {
                //for in para iterar dentro de "response"
                for (const i in job) {
                    if (job.hasOwnProperty.call(job, i)) {
                        const element = job[i];
                        $('.portfolio_texto').append(`<a href = ${element.url} class = ${element.class} target="_blank"> ${element.name}</a> `);

                        // hover para cambiar el atributo "src" en la imagen
                        $(`.${element.class}`).hover(function () {
                            $('.portfolioImg').attr('src', `${element.img}`);
                            ;  // over
                        }, function () {
                            $('.portfolioImg').attr('src', '');
                            // out
                        }
                        );
                    }
                }
            }
        }
    });

    $.ajax({
        type: "GET",
        url: ".assets/json/redes.json",
        success: function (response) {
            
            $('.text').empty();
             for (const red of response) {
                for (const key in red) {
                    if (Object.hasOwnProperty.call(red, key)) {
                        const element = red[key];
                        $('.text').append(`<a href = ${element.url} target="_blank"><img src= ${element.img}></img></a>`);


                    }
                }

            }
        }
    }
    )
}
export function portfolioAnimate(){
    $('.frame').css({
        position: "absolute",
        left: "15px",
        bottom: "15px",
        borderRadius: "30%",
        border: "none",
        transition: "all 1s ease",
        backgroundColor: "transparent",
    })
    $('.text').css({
        position: "absolute",
        bottom: "0px",
        left: "15vw",
        fontWeight: "normal",
        fontSize: "2.5rem",
        transition: "all 1s ease",

    })
    
}