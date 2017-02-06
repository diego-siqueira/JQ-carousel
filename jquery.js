$(function(){
	
	//set VAR for place imgs
	let imgs = $('#carousel ul');
	
	//Array of images
	let imgLinks=[
					  "img/slide1.jpg",
					  "img/slide2.jpg",
					  "img/slide3.jpg",
					  "img/slide4.jpg"
					  ];
	
	//set var for image number
	let number=0;
	
	//Fill <li> and imgs
	for (let imgLink of imgLinks){
		number++;
		let liImage = `<li><img src="${imgLink}" alt="slide${number}"></li>`;
		imgs.append(liImage);
	}
	
	
	/* //AJAX request works but not allowed to download imgs
	let imgLinks=[
					  "https://www.nasa.gov/sites/default/files/bwhi1apicaaamlo.jpg_large.jpg",
					  "https://www.nasa.gov/sites/default/files/images/142481main_image_feature_504_ys_full.jpg",
					  "https://www.nasa.gov/sites/default/files/thumbnails/image/14797031062_4cbe0f218f_o.jpg",
					  "https://www.nasa.gov/sites/default/files/thumbnails/image/iss030e110900_lrg.jpg"
					  ];
	
	
	for (let imgLink of imgLinks){
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				let liImage = `<li><img src="${this.responseText}" alt="slide"></li>`;
				imgs.append(liImage);
			}
		};
		xhttp.open("GET", imgLink, true);
		xhttp.send();
	} */
	 
	
	//Set Active for first image
	$('#carousel ul li').first().addClass('active');
	
	//Set initial VARs
	let imgActive = $('li.active');
	let nextGO = $('li.active').next();
	let prevGO = $('li.active').prev();
	
	
	//function for NEXT and PREV
	let buttonsGO = function(direction){
			
			//If is the last image and click for next
			if(direction === nextGO &&$('#carousel ul li').last().hasClass('active')){
				//Action goes to the first image
				direction = $('#carousel ul li').first();
			//If is the first image and click for prev
			}else if(direction === prevGO && $('#carousel ul li').first().hasClass('active')){
				//Action goes to the last image
				direction = $('#carousel ul li').last();
			}
		
			
			//set the OLD active
			let oldImg = $('li.old');
			
			//reset OLD image
			oldImg.show().removeClass();
			
			//get VAR for actual image Active
			imgActive = $('li.active');
			
			//Add class ACTIVING for next image to change z-index
			direction.addClass('activing');
			
			//Fade out image ACTIVE
			imgActive.fadeOut(500, function(){
				
				//Add class ACTIVE for the NEW IMG
				direction.removeClass().addClass('active');
				
				//Remove class of OLD ACTIVE and add OLD
				$(this).removeClass().addClass('old');
				
				//reset VAR of Active image for buttons
				nextGO = $('li.active').next();
				prevGO = $('li.active').prev();
				
							
			});
			
	}
	
	
	//buttons Click actions
	$('span.bnext').click(function(){
													timeSet("hold");
													buttonsGO(nextGO);
													});
													
	$('span.bbefore').click(function(){ 
														timeSet("hold");
														buttonsGO(prevGO);
														});
	
	
	
		let autoPlay;
		let waitPlay;
	//set function to timer of auto play
	var timeSet = function(statusTime){
		
		//if there is no click --> auto play
		if(statusTime === "play"){
			//Clear old timer
			clearTimeout(waitPlay);
			//Play every 3 secs
			autoPlay = setInterval(function(){ 
				buttonsGO(nextGO);
			}, 3500);
		}else{
			//Clear old timer
			clearInterval(autoPlay);
			//wait 8 secs and go back to auto play
			waitPlay = setTimeout(function(){ 
				timeSet("play");
			}, 5000);
		}
	}
	
	timeSet("play");
	
	/* FIRST CODE
	$('span.bnext').click(function(){
		
		
		//define the OLD active
		let oldImg = $('li.old');
		
		//reset OLD image
		oldImg.show().removeClass();
		
		
		if(imgs.last().hasClass('active')){
			console.log("urtimo");
			
			//Define image ACTIVE
			let imgActive = $('#carousel ul li.active');
			
			//Add class ACTIVING for FIRST image to change z-index
			imgs.first().addClass('activing');
			
			//Fade out image ACTIVE
			imgActive.fadeOut(500, function(){
				
				//Add class ACTIVE for the IMG under
				imgs.first().removeClass().addClass('active');
				
				//Remove class of OLD ACTIVE and add OLD
				$(this).removeClass().addClass('old');
				
			});
			
		}else{
			
			//Define image ACTIVE
			let imgActive = $('#carousel ul li.active');
			
			//Add class ACTIVING for next image to change z-index
			imgActive.next().addClass('activing');
			
			//Fade out image ACTIVE
			imgActive.fadeOut(500, function(){
				
				//Add class ACTIVE for the IMG under
				imgActive.next().removeClass().addClass('active');
				
				//Remove class of OLD ACTIVE and add OLD
				$(this).removeClass().addClass('old');
				
			});
			
		}
	}); */
	
});




          