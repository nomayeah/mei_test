const observer = new IntersectionObserver((entries) => {

  for(const e of entries) {
    if(e.isIntersecting == true) {
      document.getElementsByClassName('ft-contentList__naviArea')[0].dataset.naviarea = true;

      let top = $('.ft-contentList__listArea ul li:nth-of-type(1)').position().top + $('.ft-contentList__title').height() + $('.ft-contentList__tabIcon').height() + $('.ft-contentList__subTitle').height();
      $('.ft-contentList__naviArea').css('padding-top', top + 'px');

      let wH = $(window).height() / 2;

      $(window).on('scroll', function() {
        let target1 = $('.ft-contentList__discription:nth-of-type(1)').offset().top - wH,
            target2 = $('.ft-contentList__discription:nth-of-type(2)').offset().top - wH,
            target3 = $('.ft-contentList__discription:nth-of-type(3)').offset().top - wH,
            target4 = $('.ft-contentList__discription:nth-of-type(4)').offset().top - wH,
            target5 = $('.ft-contentList__discription:nth-of-type(5)').offset().top - wH,
            target6 = $('.ft-contentList__discription:nth-of-type(6)').offset().top - wH,
            target7 = $('.ft-contentList__discription:nth-of-type(7)').offset().top - wH,
            target8 = $('.ft-contentList__discription:nth-of-type(8)').offset().top - wH,
            scr = $(window).scrollTop(),
            pos = $('.ft-contentList').position().top;
            console.log(target1, target2, target3, target4, target5, target6, target7,target8, scr, pos);
        if (scr > pos) {
          $('.ft-contentList__naviArea').addClass('js-active');
          if ( scr > target8 ) {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(8)').addClass('js-active');
            console.log('8');
          } else if ( scr > target7 ) {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(7)').addClass('js-active');
          } else if ( scr > target6 ) {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(6)').addClass('js-active');
          } else if ( scr > target5 ) {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(5)').addClass('js-active');
          } else if ( scr > target4 ) {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(4)').addClass('js-active');
          } else if ( scr > target3 ) {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(3)').addClass('js-active');
          } else if ( scr > target2 ) {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(2)').addClass('js-active');
          } else {
            $('.ft-contentList__naviArea li').removeClass('js-active');
            $('.ft-contentList__naviArea li:nth-of-type(1)').addClass('js-active');
          }
        } else {
          $('.ft-contentList__naviArea').removeClass('js-active');
        }
      });
    } else {
      document.getElementsByClassName('ft-contentList__naviArea')[0].dataset.naviarea = false;
      $(window).off('scroll');
    }
  }
});


observer.observe(document.querySelector('.ft-contentList__listArea'));