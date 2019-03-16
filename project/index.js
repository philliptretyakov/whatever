

$('.line').hover(show);

function show() {
    $('.modal').toggle();
    // $('.modal-el').html(this.innerText);

    let imgSrc = $(this).data('img');
    let img = $(`<img src=${imgSrc}>`);
    
    $('.modal-el').html(img);

    let randomNumber = Math.random()*0.02;
    $('feTurbulence').attr('baseFrequency', randomNumber);

    console.log(this.innerText);



}