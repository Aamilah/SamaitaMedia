wow = new WOW();
wow.init();
$(document).ready(function(e) {

$('#video-icon').on('click',function(e){
e.preventDefault();
$('.video-popup').css('display','flex');
$('.iframe-src').slideDown();
});
$('.video-popup').on('click',function(e){
var $target = e.target.nodeName;
var video_src = $(this).find('iframe').attr('src');
if($target != 'IFRAME'){
$('.video-popup').fadeOut();
$('.iframe-src').slideUp();
$('.video-popup iframe').attr('src'," ");
$('.video-popup iframe').attr('src',video_src);
}
});

$('.slider').bxSlider({
pager: false
});
});
    $(function() {
            $.scrollIt({
                easing: 'swing', // or 'linear'
                scrollTime: 600, // Animation time in milliseconds
                topOffset: -50 // Adjust to match the height of your navbar if necessary
            });
        });

        function handleScroll() {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                console.log('Scroll Position:', window.scrollY);
                if (window.scrollY > 50) {
                    console.log('Adding nav-scroll class');
                    navbar.classList.add('nav-scroll');
                } else {
                    console.log('Removing nav-scroll class');
                    navbar.classList.remove('nav-scroll');
                }
            } else {
                console.log('Navbar element not found');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check



var slider = tns({
  container: '.tiny-slider',
  items: 3,  // Shows 3 items at a time
  slideBy: 1, // Slide one item at a time
  autoplay: true, // Disable autoplay
  autoplayButtonOutput: false, // Prevents the autoplay stop button from being created

  controls: false, // Disable next/prev buttons
  nav: false, // Disable navigation dots
  speed: 400,
  loop: true,
  responsive: {
    640: {
      items: 1
    },
    900: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});


              