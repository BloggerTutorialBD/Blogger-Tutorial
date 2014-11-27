    var showpostthumbnails_gal  = true;
    var showpostsummary_gal  	= true;
	var random_posts       		= false;
	var numchars_gal			= 150;
	var numposts_gal			= 10;
function showgalleryposts(json) {

	document.write('<div class="slider-wrap">');
	document.write('<div id="main-photo-slider" class="csw"><div class="panelContainer">'); 
	   var numPosts = json.feed.openSearch$totalResults.$t;
    var indexPosts = new Array();
	document.write('<ul>');
    for (var i = 0; i < numPosts; ++i) {
        indexPosts[i] = i;
    }
	if (random_posts == true){
    indexPosts.sort(function() {return 0.5 - Math.random()});
	}
    if (numposts_gal > numPosts) {
        numposts_gal = numPosts;
    }
    for (i = 0; i < numposts_gal; ++i) {
        var entry_gal = json.feed.entry[indexPosts[i]];
		var posttitle_gal =  entry_gal.title.$t;
        for (var k = 0; k <  entry_gal.link.length; k++) {
            if ( entry_gal.link[k].rel == 'alternate') {
                posturl_gal =  entry_gal.link[k].href;
                break;
            }
        }
		if("content"in entry_gal){
			var postcontent_gal=entry_gal.content.$t;
		}

           s = postcontent_gal;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                var thumburl_gal = d;
            }
			else var thumburl_gal = 'http://i1133.photobucket.com/albums/m596/abu-farhan/Images_no_image.gif';		
 		var _no=i+1;
		document.write('<div class="panel" title="'+posttitle_gal+'">');
		document.write('<div class="wrapper">');			
		document.write('<a href="'+ posturl_gal + '"><img src="'+thumburl_gal+'" alt="temp"   width="420px" height="270px"/></a>');
		document.write('<div class="photo-meta-data"><span>'+posttitle_gal+'</span><br>');
		var re = /<\S[^>]*>/g; 
		postcontent_gal = postcontent_gal.replace(re, "");
		if (showpostsummary_gal == true) {
		      if (postcontent_gal.length < numchars_gal) {		          
		         document.write(postcontent_gal);
		         }
		      else {
		         postcontent_gal = postcontent_gal.substring(0, numchars_gal);
		         var quoteEnd_gal = postcontent_gal.lastIndexOf(" ");
		         postcontent_gal = postcontent_gal.substring(0,quoteEnd_gal);
		         document.write(postcontent_gal + '...');
		         }
		}
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
		}
		document.write('</div>');
		document.write('</div>');
		for (var i = 0; i < numposts_gal; i++) {
		if (random_posts == true){
		var random_int  = Math.floor(Math.random()*json.feed.entry.length);
		var entry_gal = json.feed.entry[random_int];
		}
		else{
		var entry_gal = json.feed.entry[i];
		}

		if("content"in entry_gal){
			var postcontent_gal=entry_gal.content.$t;
		}

           s = postcontent_gal;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                var thumburl_gal = d;
            }
			else var thumburl_gal = 'http://i1133.photobucket.com/albums/m596/abu-farhan/Images_no_image.gif';		
 <!-- Note this caption is before the image, all others it is after -->
 		var _no=i+1;
		if (_no==1){
		document.write('<a href="#'+_no+'" class="cross-link active-thumb"><img src="'+thumburl_gal+'" class="nav-thumb" alt="temp-thumb" width="60px" height="40px" /></a>');
		document.write('<div id="movers-row">');
		}
		else{
		document.write('<div><a href="#'+_no+'" class="cross-link"><img src="'+thumburl_gal+'" class="nav-thumb" alt="temp-thumb" width="60px" height="40px"/></a></div>');
		}
		}
		document.write('</div>');
		document.write('</div>');
		document.write('</div>');
}
