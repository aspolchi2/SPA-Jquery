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
        url: "/porfolio.json",
        success: function (response) {
            for (const job of response) {

                for (const i in job) {
                    if (job.hasOwnProperty.call(job, i)) {
                        const element = job[i];
                        $('.portfolio_texto').append(`<a href = ${element.url} class = ${element.class} target="_blank"> ${element.name}</a> `);


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
}

const losTilosImg = './assets/img/lostilosmh.jpg'
const mussbagsImg = './assets/img/mussbags.jpg'
const porfolioImg = './assets/img/portfolio.svg' 

