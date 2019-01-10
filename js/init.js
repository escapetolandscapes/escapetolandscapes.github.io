function getSlidesToShow() {
	var width = window.innerWidth;
	var imgWidth = width/8;
	if(width > 1200) {
		imgWidth = width/8;
	} else if (width > 1024) {
		imgWidth = width/7;
	} else if (width > 901) {
		imgWidth = width/6;
	} else if (width > 768) {
		imgWidth = width/5;
	} else if (width > 600) {
		imgWidth = width/4;
	} else if (width > 450) {
		imgWidth = width/3.5;
	} else if (width > 375) {
		imgWidth = width/3;
	} else if (width > 360) {
		imgWidth = width/3;
	}
	return Math.min(Math.floor(width/imgWidth), 19);
};


$(document).ready(function(){
	for(var i = 1; i < 20; i++) {
		var div = document.createElement('div');
		var img = document.createElement('img');
		img.src = '/images/'+ i +'.jpg';
		div.appendChild(img);
		document.getElementById('slider').appendChild(div);
	}


	$('#slider').slick({
		slidesToShow: getSlidesToShow(),
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	document.querySelector('.follow-btn').style.opacity = 1;
});
