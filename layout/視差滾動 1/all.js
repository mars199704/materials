$(document).ready(function () {

  let showSkill = false

  $('.scrollTop').click(function (e) { 
    e.preventDefault();
    let target = $(this).attr('href')
    let targetPosition = $(target).offset().top
    $('html, body').animate({scrollTop: targetPosition}, 1000)
  });

  $(window).scroll(function () { 
    let scrollPosition = $(window).scrollTop()
    let windowHeight = $(window).height()

    $('.scrollTop').each(function(){
      let target = $(this).attr('href')
      let targetPosition = $(target).offset().top
      let targetHeight = $(target).outerHeight();

      if(targetPosition - 1 <= scrollPosition && (targetPosition + targetHeight) > scrollPosition){
        $('.scrollTop').removeClass('active');
        $(this).addClass('active');
      }else{
        $(this).removeClass('active');
      }
    })

    // progress bar
    let skillTop = $('#skills').position().top
    if((scrollPosition + windowHeight / 2) >= skillTop && !showSkill ){
      $('#skills .progress-bar').each(function(){
        showSkill = true
        let length = $(this).data('progress')
        console.log('length', length)
        $(this).css('width', length + '%')
      })
    }

    // animate
    $('.animate').each(function(){
      let thisPosition = $(this).offset().top
      if(windowHeight + scrollPosition >= thisPosition){
        $('.animate').addClass('fadeIn');
      }
    })

    // background scroll
    $('#profiles').css('background-position-y', scrollPosition / 2 + 'px')
  });
});