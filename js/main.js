"use strict";
// PROYECTO COMPLETO JS y JQUERY


$(document).ready(function () {
    if(window.location.href.indexOf('index') > -1){
    // Slider 
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1250
      });
    }

    // Posts

if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia: ' + moment().format("DD MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscemalesuada enim in quam volutpat fermentum. Vivamus volutpat pellentesque condimentum. Nam dictum sapien dolor, ultricies posuere nibh dignissim at. Pellentesque magna dui, finibus sit amet nisi eu, ornare tincidunt nisl. Ut odio elit, volutpat ut venenatis quis, blandit vitae nisl. Sed rutrum elementum mauris eu auctor. Etiam at eros in metus fringilla pharetra ac at ipsum. In vel lectus odio. Ut purus erat, malesuada vel nunc faucibus, imperdiet iaculis elit. Nullam non sem in tortor maximus euismod. Phasellus tincidunt, nunc vitae egestas pellentesque, sapien eros viverra eros, vel venenatis arcu mi quis tellus. In bibendum tempor urna ac suscipit. Nunc ornare metus libero, vel finibus lorem sagittis varius. Suspendisse potenti. Cras vulputate vel magna a tempus. Ut tempor orci et congue viverra. In porttitor libero sem, sed consequat ligula cursus eu. Nunc semper, tellus a feugiat malesuada, tellus enim ultricies augue, sit amet congue tortor enim et lacus. Integer viverra dictum lectus posuere porta. Donec pulvinar non diam non vestibulum. Pellentesque egestas suscipit neque et egestas. Proin pretium magna non nisl hendrerit, non rhoncus dui convallis. Sed iaculis in tortor sed volutpat. Aenean erat lorem, ultrices quis pretium eu, faucibus nec tortor. Sed consequat pretium ultricies. Sed ipsum libero, efficitur vitae velit vitae, pulvinar auctor massa. Nullam porttitor eget neque eget iaculis. Praesent vitae vestibulum dolor. Morbi ut ultrices nibh. Fusce consequat pellentesque mauris, ut vestibulum nibh faucibus vitae."
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia: ' + moment().format("DD MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscemalesuada enim in quam volutpat fermentum. Vivamus volutpat pellentesque condimentum. Nam dictum sapien dolor, ultricies posuere nibh dignissim at. Pellentesque magna dui, finibus sit amet nisi eu, ornare tincidunt nisl. Ut odio elit, volutpat ut venenatis quis, blandit vitae nisl. Sed rutrum elementum mauris eu auctor. Etiam at eros in metus fringilla pharetra ac at ipsum. In vel lectus odio. Ut purus erat, malesuada vel nunc faucibus, imperdiet iaculis elit. Nullam non sem in tortor maximus euismod. Phasellus tincidunt, nunc vitae egestas pellentesque, sapien eros viverra eros, vel venenatis arcu mi quis tellus. In bibendum tempor urna ac suscipit. Nunc ornare metus libero, vel finibus lorem sagittis varius. Suspendisse potenti. Cras vulputate vel magna a tempus. Ut tempor orci et congue viverra. In porttitor libero sem, sed consequat ligula cursus eu. Nunc semper, tellus a feugiat malesuada, tellus enim ultricies augue, sit amet congue tortor enim et lacus. Integer viverra dictum lectus posuere porta. Donec pulvinar non diam non vestibulum. Pellentesque egestas suscipit neque et egestas. Proin pretium magna non nisl hendrerit, non rhoncus dui convallis. Sed iaculis in tortor sed volutpat. Aenean erat lorem, ultrices quis pretium eu, faucibus nec tortor. Sed consequat pretium ultricies. Sed ipsum libero, efficitur vitae velit vitae, pulvinar auctor massa. Nullam porttitor eget neque eget iaculis. Praesent vitae vestibulum dolor. Morbi ut ultrices nibh. Fusce consequat pellentesque mauris, ut vestibulum nibh faucibus vitae."
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia: ' + moment().format("DD MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscemalesuada enim in quam volutpat fermentum. Vivamus volutpat pellentesque condimentum. Nam dictum sapien dolor, ultricies posuere nibh dignissim at. Pellentesque magna dui, finibus sit amet nisi eu, ornare tincidunt nisl. Ut odio elit, volutpat ut venenatis quis, blandit vitae nisl. Sed rutrum elementum mauris eu auctor. Etiam at eros in metus fringilla pharetra ac at ipsum. In vel lectus odio. Ut purus erat, malesuada vel nunc faucibus, imperdiet iaculis elit. Nullam non sem in tortor maximus euismod. Phasellus tincidunt, nunc vitae egestas pellentesque, sapien eros viverra eros, vel venenatis arcu mi quis tellus. In bibendum tempor urna ac suscipit. Nunc ornare metus libero, vel finibus lorem sagittis varius. Suspendisse potenti. Cras vulputate vel magna a tempus. Ut tempor orci et congue viverra. In porttitor libero sem, sed consequat ligula cursus eu. Nunc semper, tellus a feugiat malesuada, tellus enim ultricies augue, sit amet congue tortor enim et lacus. Integer viverra dictum lectus posuere porta. Donec pulvinar non diam non vestibulum. Pellentesque egestas suscipit neque et egestas. Proin pretium magna non nisl hendrerit, non rhoncus dui convallis. Sed iaculis in tortor sed volutpat. Aenean erat lorem, ultrices quis pretium eu, faucibus nec tortor. Sed consequat pretium ultricies. Sed ipsum libero, efficitur vitae velit vitae, pulvinar auctor massa. Nullam porttitor eget neque eget iaculis. Praesent vitae vestibulum dolor. Morbi ut ultrices nibh. Fusce consequat pellentesque mauris, ut vestibulum nibh faucibus vitae."
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia: ' + moment().format("DD MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscemalesuada enim in quam volutpat fermentum. Vivamus volutpat pellentesque condimentum. Nam dictum sapien dolor, ultricies posuere nibh dignissim at. Pellentesque magna dui, finibus sit amet nisi eu, ornare tincidunt nisl. Ut odio elit, volutpat ut venenatis quis, blandit vitae nisl. Sed rutrum elementum mauris eu auctor. Etiam at eros in metus fringilla pharetra ac at ipsum. In vel lectus odio. Ut purus erat, malesuada vel nunc faucibus, imperdiet iaculis elit. Nullam non sem in tortor maximus euismod. Phasellus tincidunt, nunc vitae egestas pellentesque, sapien eros viverra eros, vel venenatis arcu mi quis tellus. In bibendum tempor urna ac suscipit. Nunc ornare metus libero, vel finibus lorem sagittis varius. Suspendisse potenti. Cras vulputate vel magna a tempus. Ut tempor orci et congue viverra. In porttitor libero sem, sed consequat ligula cursus eu. Nunc semper, tellus a feugiat malesuada, tellus enim ultricies augue, sit amet congue tortor enim et lacus. Integer viverra dictum lectus posuere porta. Donec pulvinar non diam non vestibulum. Pellentesque egestas suscipit neque et egestas. Proin pretium magna non nisl hendrerit, non rhoncus dui convallis. Sed iaculis in tortor sed volutpat. Aenean erat lorem, ultrices quis pretium eu, faucibus nec tortor. Sed consequat pretium ultricies. Sed ipsum libero, efficitur vitae velit vitae, pulvinar auctor massa. Nullam porttitor eget neque eget iaculis. Praesent vitae vestibulum dolor. Morbi ut ultrices nibh. Fusce consequat pellentesque mauris, ut vestibulum nibh faucibus vitae."
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia: ' + moment().format("DD MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fuscemalesuada enim in quam volutpat fermentum. Vivamus volutpat pellentesque condimentum. Nam dictum sapien dolor, ultricies posuere nibh dignissim at. Pellentesque magna dui, finibus sit amet nisi eu, ornare tincidunt nisl. Ut odio elit, volutpat ut venenatis quis, blandit vitae nisl. Sed rutrum elementum mauris eu auctor. Etiam at eros in metus fringilla pharetra ac at ipsum. In vel lectus odio. Ut purus erat, malesuada vel nunc faucibus, imperdiet iaculis elit. Nullam non sem in tortor maximus euismod. Phasellus tincidunt, nunc vitae egestas pellentesque, sapien eros viverra eros, vel venenatis arcu mi quis tellus. In bibendum tempor urna ac suscipit. Nunc ornare metus libero, vel finibus lorem sagittis varius. Suspendisse potenti. Cras vulputate vel magna a tempus. Ut tempor orci et congue viverra. In porttitor libero sem, sed consequat ligula cursus eu. Nunc semper, tellus a feugiat malesuada, tellus enim ultricies augue, sit amet congue tortor enim et lacus. Integer viverra dictum lectus posuere porta. Donec pulvinar non diam non vestibulum. Pellentesque egestas suscipit neque et egestas. Proin pretium magna non nisl hendrerit, non rhoncus dui convallis. Sed iaculis in tortor sed volutpat. Aenean erat lorem, ultrices quis pretium eu, faucibus nec tortor. Sed consequat pretium ultricies. Sed ipsum libero, efficitur vitae velit vitae, pulvinar auctor massa. Nullam porttitor eget neque eget iaculis. Praesent vitae vestibulum dolor. Morbi ut ultrices nibh. Fusce consequat pellentesque mauris, ut vestibulum nibh faucibus vitae."
        },
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el dia: ' + moment().format("DD MMMM YYYY"),
            content: "Mi nombre es Daniel. Nam dictum sapien dolor, ultricies posuere nibh dignissim at. Pellentesque magna dui, finibus sit amet nisi eu, ornare tincidunt nisl. Ut odio elit, volutpat ut venenatis quis, blandit vitae nisl. Sed rutrum elementum mauris eu auctor. Etiam at eros in metus fringilla pharetra ac at ipsum. In vel lectus odio. Ut purus erat, malesuada vel nunc faucibus, imperdiet iaculis elit. Nullam non sem in tortor maximus euismod. Phasellus tincidunt, nunc vitae egestas pellentesque, sapien eros viverra eros, vel venenatis arcu mi quis tellus. In bibendum tempor urna ac suscipit. Nunc ornare metus libero, vel finibus lorem sagittis varius. Suspendisse potenti. Cras vulputate vel magna a tempus. Ut tempor orci et congue viverra. In porttitor libero sem, sed consequat ligula cursus eu. Nunc semper, tellus a feugiat malesuada, tellus enim ultricies augue, sit amet congue tortor enim et lacus. Integer viverra dictum lectus posuere porta. Donec pulvinar non diam non vestibulum. Pellentesque egestas suscipit neque et egestas. Proin pretium magna non nisl hendrerit, non rhoncus dui convallis. Sed iaculis in tortor sed volutpat. Aenean erat lorem, ultrices quis pretium eu, faucibus nec tortor. Sed consequat pretium ultricies. Sed ipsum libero, efficitur vitae velit vitae, pulvinar auctor massa. Nullam porttitor eget neque eget iaculis. Praesent vitae vestibulum dolor. Morbi ut ultrices nibh. Fusce consequat pellentesque mauris, ut vestibulum nibh faucibus vitae."
        },
    ];
    posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
        </article>
        `;
    $("#posts").append(post);
    });
}

    //Cambiador de tema

    var theme = $("#theme")
    $("#to-green").click(function(){
        theme.attr("href", "../PROYECTO/css/green.css")
    });
    $("#to-red").click(function(){
        theme.attr("href", "../PROYECTO/css/red.css")
    });
    $("#to-blue").click(function(){
        theme.attr("href", "../PROYECTO/css/blue.css")
    });

    //Scroll arriba de la web
    var subir = $(".subir")
    subir.click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
$("#login form").submit(function(){
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name);
});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, "+ form_name + "</strong>");
    about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión</a>");
    $("#login").hide();
    $("#logout").click(function(){
        localStorage.clear();
        location.reload();
    });
}

//Acordeon ABOUT
//Esta condicion IF indica que si en la URL en la que nos estamos situando contiene la palabra "about" que ejecute el código

if(window.location.href.indexOf('about') > -1){
    $('#acordeon').accordion();
}

//Reloj
//Esta condicion IF indica que si en la URL en la que nos estamos situando contiene la palabra "reloj" que ejecute el código
if(window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $('#reloj').html(reloj);
    },1000)//1 seg = 1000ms
    
}

});



