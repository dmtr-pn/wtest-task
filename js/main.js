$(document).ready(() => { 

    $(window).scroll(() => {
        let scroll = $(window).scrollTop();

        if (scroll > 425){
            $(".nvbr").addClass("nvbr__bg");
        }else{
            $(".nvbr").removeClass("nvbr__bg");
        }
    })

    $('#to-top').click(() => {
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});