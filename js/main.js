// full height page carousell
$(document).ready(function () {
  innerheight = window.innerHeight;
  $(".carousel").css("height", innerheight + "px");
  console.log(innerheight);
});

$(document).ready(function () {
  $(".btn_menu").on("click", function () {
    $(".menu_mobile").toggleClass("menu_mobile_off");
  });
});


$(document).ready(function () {
  $('body').on('click','.menu_mobile .navigation .item',function(){
    $(".menu_mobile").toggleClass("menu_mobile_off");
   
  });
});

if (window.innerWidth <= 650) {
  $(".header").addClass("header_on");
}

$(window).resize(function () {
  if (window.innerWidth <= 650) {
    $(".header").addClass("header_on");
  } else {
    $(".header").removeClass("header_on");
  }
});

function selected(element, cb) {
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

var images_carousel = $(".images img");
img1 = $(".img1");
img2 = $(".img2");
img3 = $(".img3");
img4 = $(".img4");
img5 = $(".img5");
img6 = $(".img6");
img7 = $(".img7");

state_carousel = 0;

function carousel() {
  if (state_carousel == 0) {
    images_carousel.removeClass("active");
    img1.addClass("active");
    state_carousel = 1;
  } else if (state_carousel == 1) {
    images_carousel.removeClass("active");
    img2.addClass("active");
    state_carousel = 2;
  } else if (state_carousel == 2) {
    images_carousel.removeClass("active");
    img3.addClass("active");
    state_carousel = 3;
  } else if (state_carousel == 3) {
    images_carousel.removeClass("active");
    img4.addClass("active");
    state_carousel = 4;
  } else if (state_carousel == 4) {
    images_carousel.removeClass("active");
    img5.addClass("active");
    state_carousel = 5;
  } else if (state_carousel == 5) {
    images_carousel.removeClass("active");
    img6.addClass("active");
    state_carousel = 6;
  } else if (state_carousel == 6) {
    images_carousel.removeClass("active");
    img7.addClass("active");
    state_carousel = 0;
  }
}

setInterval(carousel, 13000);

// donate percentage

// OWL

function owl_causes() {
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

  $("body").on("click", ".btn_owl_causes_contain_left", function () {
    owl_causes_contain.trigger("prev.owl.carousel");
  });

  $("body").on("click", ".btn_owl_causes_contain_right", function () {
    owl_causes_contain.trigger("next.owl.carousel");
  });
} //end owl

$(document).ready(function () {
  owl_causes();
});

function owl_testimonies() {
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

  $("body").on("click", ".btn_owl_testimonie_contain_left", function () {
    owl_testimonie.trigger("prev.owl.carousel");
  });

  $("body").click("click", ".btn_owl_testimonie_contain_right", function () {
    owl_testimonie.trigger("next.owl.carousel");
  });
}

$(document).ready(function () {
  owl_testimonies();
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

function home_writer() {
  var typewrite = document.getElementById("typewrite");

  var typewriter = new Typewriter(typewrite, {
    loop: true,
    deleteSpeed: 1,
  });

  typewriter
    .typeString("Keep the Pregnant Woman Healthy to have a Healthy Baby")
    .pauseFor(8000)
    .deleteAll()
    .typeString("Keep the Child Healthy to Raise a Healthy Generation")
    .pauseFor(8000)
    .deleteAll()
    .start();
}

$(document).ready(function () {
  home_writer();
});

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

    $(".shape_logo").addClass("shape_logo_off");
    // console.log("scroll to bottom");
  } else if (window.pageYOffset <= 100) {
    scroll_indice.removeClass("off_object");

    // go_top.fadeOut("slow");

    if (window.innerWidth <= 650) {
      $(".header").addClass("header_on");
    } else {
      $(".header").removeClass("header_on");
    }

    $(".shape_logo").removeClass("shape_logo_off");
    // $(".mob_menu_btn").removeClass("mob_menu_btn_scrol");
    // console.log("scroll to top");
  }
});

$("#drop_pages").on("click", function () {
  $("#drop_menu").toggle();
});

// navigation script

function laoding_princ(elt, cb) {
  window.scrollTo(0,0);
  $("#loading_container").load(elt, cb);
 
  console.log(elt);
}

function laoding_work(elt, cb) {
  $(".work_load_container").load(elt, cb);
  console.log(elt);
}

// Main navigation systeme

$(document).ready(function () {
  $(".go_home").on("click", function () {
    laoding_princ("assets/home.html", function () {
      home_writer();
      innerheight = window.innerHeight;
      $(".carousel").css("height", innerheight + "px");
      setInterval(carousel, 13000);
      owl_causes();
      owl_testimonies();
    });
  });



  $("body").on('click','.go_about',function(){

    laoding_princ("assets/about.html", function () {
  
    });

  });
  $("body").on('click','.go_team',function(){

    laoding_princ("assets/team.html", function () {
  
    });

  });
  $("body").on('click','.go_contact',function(){

    laoding_princ("assets/contact.html", function () {
  
    });

  });
  $("body").on('click','.go_causes',function(){

    laoding_princ("assets/causes.html", function () {
  
    });

  });


  $("body").on('click','.become_volunteer',function(){

    laoding_princ("assets/volunteer.html", function () {
      owl_testimonies();
    });

  });
  $("body").on('click','.news',function(){

    laoding_princ("assets/news.html", function () {
     
    });

  });
  $("body").on('click','.cause_box .donate',function(){

    laoding_princ("assets/cause_detail.html", function () {
      owl_causes();
    });

  });

  // $("#btn_skill").on("click", function () {
  //   laoding_princ("assets/experience.html", function () {
  //     circleSvg();
  //   });
  // });

  // $("#btn_work").on("click", function () {
  //   laoding_princ("assets/work.html");
  // });
  // $("#btn_school").on("click", function () {
  //   laoding_princ("assets/education.html");
  // });
  // $("#btn_contact").on("click", function () {
  //   laoding_princ("assets/contact.html");
  // });
});




// GALERIE MEDIA SCRIPTS
$(document).ready(function () {
  $(".action_viewer").on("click", function () {
    $(this).toggleClass("action_viewer_pause");
  });
});

state_gal = 0;
screen_img = $(".screen_img");

screen_img.on("click", function () {
  $(".view_screen img").attr("src", $(this).attr("src"));

  setTimeout(function () {
    $(".view_screen").toggleClass("active_view_screen");
  }, 200);
});

$(".view_screen").on("click", function () {
  $(".view_screen").toggleClass("active_view_screen");
});



$(document).ready(function () {
  
  $('body').on('click','.img_to_view',function(){
    $('.view_gal_container').toggleClass('view_gal_container_Active');
       $('#display_image').attr('src',$(this).attr('src'));
  });

  $('body').on('click','img',function(){
    $('.view_gal_container').toggleClass('view_gal_container_Active');
       $('#display_image').attr('src',$(this).attr('src'));
  });

  $('body').on('click','.view_gal_container',function(){
    $(this).toggleClass('view_gal_container_Active')
  });


  


});