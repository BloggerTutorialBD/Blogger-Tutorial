window.addEvent('domready', function(){
	  var totIncrement		= 0;
	  var increment			= 212;
	  var maxRightIncrement	= increment*(-6);
	  var fx = new Fx.Style('slider-list', 'margin-left', {
				duration: 1000,
				transition: Fx.Transitions.Back.easeInOut,
				wait: true
	   });
	
	   //-------------------------------------
	  // EVENTS for the button "previous"
	  $('previous').addEvents({
 'click' : function(event){
		  if(totIncrement<0){
					totIncrement = totIncrement+increment;
					fx.stop()
					fx.start(totIncrement);
				}
			}			  	
});
	
//-------------------------------------
	  // EVENTS for the button "next"
	  $('next').addEvents({
 'click' : function(event){
			 if(totIncrement>maxRightIncrement){
				 totIncrement = totIncrement-increment;
		    	fx.stop()
				fx.start(totIncrement);
			}
 }		  		
})

	
});