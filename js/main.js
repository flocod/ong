// full height page carousell
$(document).ready(function () {
  innerheight =window.innerHeight;
  $(".carousel").css("height", innerheight + "px");
  console.log(innerheight);
});


$(document).ready(function () {
  $('.btn_menu').on('click',function(){
    $('.menu_mobile').toggleClass('menu_mobile_off')
  });
});


if(window.innerWidth<=650){
  $(".header").addClass("header_on");
}

$( window ).resize(function() {
  if(window.innerWidth <= 650){
    $(".header").addClass("header_on");
  }else{
    $(".header").removeClass("header_on");
  }
});



function selected(element,cb) {
  $("body").on("click", element, function () {
    $(element).removeClass("active");
    $(this).addClass("active");
    
  });
}

$(document).ready(function () {
  selected(".nav li");
  selected(".navigation .item");
  selected(".btn_control");
  selected(".menu_actu .menu_item");

  $("body").on("click", ".swicht_lang", function () {
    $(".lang_list").toggle();
  });
  $("body").on("click", ".lang_list", function () {
    temp_text = $(".swicht_lang .text").text();
    $(".swicht_lang .text").text($(".lang_list").text());

    $(".lang_list").text(temp_text);
  });
});


var images_carousel=$('.images img');
    img1=$('.img1');
    img2=$('.img2');
    img3=$('.img3');
    img4=$('.img4');
    img5=$('.img5');
    img6=$('.img6');
    img7=$('.img7');

    state_carousel=0;

function carousel (){

if(state_carousel==0){
    images_carousel.removeClass('active');
    img1.addClass('active');
    state_carousel=1;
}else if(state_carousel==1){
    images_carousel.removeClass('active');
    img2.addClass('active');
    state_carousel=2;
}else if(state_carousel==2){
  images_carousel.removeClass('active');
  img3.addClass('active');
  state_carousel=3;
}else if(state_carousel==3){
  images_carousel.removeClass('active');
  img4.addClass('active');
  state_carousel=4;
}else if(state_carousel==4){
  images_carousel.removeClass('active');
  img5.addClass('active');
  state_carousel=5;
}else if(state_carousel==5){
  images_carousel.removeClass('active');
  img6.addClass('active');
  state_carousel=6;
}else if(state_carousel==6){
  images_carousel.removeClass('active');
  img7.addClass('active');
  state_carousel=0;
}
}

setInterval(carousel,13000);



// donate percentage


// OWL 
$(document).ready(function () {  
  owl_causes_contain = $(".owl_causes");
  owl_causes_contain.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
     
      463: {
        items: 2,
        center: true,
      },
      800: {
        items: 3,
        center: true,
      },
    

    },
  });

  $(".btn_owl_causes_contain_left").click(function () {
    owl_causes_contain.trigger("prev.owl.carousel");
  });

  $(".btn_owl_causes_contain_right").click(function () {
    owl_causes_contain.trigger("next.owl.carousel");
  });

});


$(document).ready(function () {  
  owl_testimonie = $(".owl_testimonie");
  owl_testimonie.owlCarousel({
    items: 1,
    loop: true,
    center: false,
    nav: false,
    autoplay: true,
    margin: 20,
    responsive: {
      503: {
        items: 2,
        center: true,
      },
      642: {
        items: 3,
        center: true,
      },
    },
  });

  $(".btn_owl_testimonie_contain_left").click(function () {
    owl_testimonie.trigger("prev.owl.carousel");
  });

  $(".btn_owl_testimonie_contain_right").click(function () {
    owl_testimonie.trigger("next.owl.carousel");
  });

});





// type writer

var typewrite = document.getElementById('typewrite');

var typewriter = new Typewriter(typewrite, {
    loop: true,
    deleteSpeed:1,
});

typewriter.typeString('Keep the Pregnant Woman Healthy to have a Healthy Baby')
    .pauseFor(8000)
    .deleteAll()
    .typeString('Keep the Child Healthy to Raise a Healthy Generation')
    .pauseFor(8000)
    .deleteAll()
    .start();



    $(window).on("scroll", function () {
      scroll_indice = $(".scroll_indice");
      header = $(".header");
    // go_top=$(".go_top");
      if (window.pageYOffset >= 100) {
        scroll_indice.addClass("off_object");
        // go_top.fadeIn("slow");
        // go_top.css("display","flex");
        // $(".mob_menu_btn").addClass("mob_menu_btn_scrol");
    
        
    
        header.addClass("header_on");


        $('.shape_logo').addClass('shape_logo_off');
        // console.log("scroll to bottom");
      } else if (window.pageYOffset <= 100) {
        scroll_indice.removeClass("off_object");
        
        // go_top.fadeOut("slow");

        if(window.innerWidth <= 650){
          $(".header").addClass("header_on");
        }else{
          $(".header").removeClass("header_on");
        }
    
    
        $('.shape_logo').removeClass('shape_logo_off');
        // $(".mob_menu_btn").removeClass("mob_menu_btn_scrol");
         // console.log("scroll to top");
      }
    });

    $('#drop_pages').on('click',function(){

      $('#drop_menu').toggle();

    });