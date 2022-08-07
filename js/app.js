$(document).ready(function(){
	// console.log('i am working');

	// Start Info Section
	$(window).scroll(function(){

		let getscrollpoint = $(this).scrollTop();

		if(getscrollpoint >= 220){

			$(".infotexts").addClass("fromlefts");
			$(".infopics").addClass("fromrights");

		}else{

			$(".infotexts").removeClass("fromlefts");
			$(".infopics").removeClass("fromrights");
		}
	});
	// End Info Section

	// Start ADV Section
	$("#videos").click(function(){

		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc + "?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});

	});
	// End ADV Section


	// Start Premises Section

	$("#lightslider").lightSlider({
		 // auto:true,
		 item:4,
         loop:true,
         slideMove:1,
         speed:600
	}).play();
	// End Primises Section


	// Start Pricing Section

	$(window).scroll(function(){

		let getscroll = $(this).scrollTop();

		// console.log(getscroll);

		if(getscroll >= 2450){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights");

		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights");
		}
	});
	// End Pricing Section

	// Start Join Us Section
	$("#accordion").accordion();
	// End Join Us Section

	// Start Footer Section
	$("#getyear").text(new Date().getUTCFullYear());
	// End Footer Section

	// Start Progress
	$(window).scroll(function(){
		var getprogress = $("#progresses");
		var getprogressvalue = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		// By jQuery
		// var getscrollheight = $(document).height();  
		// var getclientheight = $(window).height();
		// var calcheight = getscrollheight-getclientheight;
		// var getfinalheight = Math.round(getscrolltop * 100 / calcheight);

		// By Javascript
		var getscrollheight = document.documentElement.scrollHeight;
		var getclientheight = document.documentElement.clientHeight;
		var calcheight = getscrollheight-getclientheight;
		var getfinalheight = Math.round(getscrolltop * 100 / calcheight);


		getprogressvalue.text(`${getfinalheight}%`);
		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}% , #eee ${getfinalheight}%)`
		});
	});
	// End Progress
});