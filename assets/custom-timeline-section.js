jQuery(function($){

    $(document).ready(function () {
      $('.timeline-item').on("click", function() {
            $(this).toggleClass('active');
            $(this).find('.time-line-desc').slideToggle();
        });
      });
  
});