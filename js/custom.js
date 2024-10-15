
  jQuery(document).ready(function( $ ) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

    var swiper = new Swiper('.main_slider', {
        loop:true,
        autoplay:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      });


      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
         loop: true,
        loopedSlides: 4
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4
      });
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;


      // Not in use at bottom
    
    var swiper = new Swiper('.awards_slider', {
      loop: true,
    //   slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
          // when window width is >= 320px
          320: {
          slidesPerView: 1,
          spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
          slidesPerView: 2,
          spaceBetween: 20
          },
          768: {
          slidesPerView: 3,
          spaceBetween: 20
          },
          // when window width is >= 640px
          992: {
          slidesPerView: 4,
          spaceBetween: 20
          }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });

    var swiper = new Swiper('.news_slider', {
        loop: true,
      //   slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      });

      var swiper = new Swiper('.blog_slider', {
        loop: true,
      //   slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      });

      


        document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth > 992) {

	document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

		everyitem.addEventListener('mouseover', function(e){

			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
			}

		});
		everyitem.addEventListener('mouseleave', function(e){
			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
			}


		})
	});

}
// end if innerWidth
});



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

/*$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 300;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    

    $('.morelesstext').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="btn btn-primary morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });*/
	
	
	// Increase/descrease font size
	$('#increasetext').click(function() {
		curSize = parseInt($('#contentInDe').css('font-size')) + 2;
		if (curSize <= 32)
			$('#contentInDe').css('font-size', curSize);
	});

	$('#resettext').click(function() {
		if (curSize != 14)
			$('#contentInDe').css('font-size', 14);
	});

	$('#decreasetext').click(function() {
		curSize = parseInt($('#contentInDe').css('font-size')) - 2;
		if (curSize >= 14)
			$('#contentInDe').css('font-size', curSize);
	});


//For Programme page read more

$(document).on('click','#myBtn',function(){
	
console.log($(this).prev());
if($(this).prev().hasClass('min-height')){
 $(this).prev().addClass('max-height');
 $(this).prev().removeClass('min-height');
 
}else{
$(this).prev().removeClass('max-height');
$(this).prev().addClass('min-height');
}
});

$(function(){
   $(".changetextbtn").click(function () {
	  $(this).text(function(i, text){
		  return text === "Read More" ? "Read Less" : "Read More";
	  })
   });
})

if ($('.min-height').is(":empty")){
    $('.min-height').hide();
}

//var mydiv=document.getElementById('id1');
//if(!mydiv.hasChildNodes()){mydiv.style.display='none'}

//Read More end for programme page


  