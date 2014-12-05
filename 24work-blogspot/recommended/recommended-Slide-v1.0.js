$(function(){
   $('#recslide').show();
   var recslide_gone_in=false;
   var bts_scroll_lock=false;
   $(window).scroll(function()
      {
	if(bts_scroll_lock)return;
        if(recslide_gone_in==false)$('#recslide .expand').hide();
        if(document.getElementById("recslide_place_holder")){
           var distanceTop=$('#recslide_place_holder').offset().top-$(window).height();
	} 
	else {
	    var distanceTop = $(document).height() - $(window).height();
	}
	if($(window).scrollTop()>=distanceTop)
	{
		if(recslide_gone_in==false)
		{
		   $('#recslide').animate({'right':'0px','bottom':'0px'},300)
	        }
	        else $('#recslide').animate({'bottom':'-80px','right':'0px'},300)
         }
        else $('#recslide').stop(true).animate({'right':'-430px','bottom':'0px'},300)});
        $('#recslide .help').bind('click', function () 
        {
	 try{
		location.href='http://24work.blogspot.com';
	      }
	catch(err){}});
	$('#recslide .close').bind('click',function()
	{bts_scroll_lock=true;$('#recslide').stop(true).animate({'bottom':'-80px'},300);bts_scroll_lock=false;recslide_gone_in=true;$('#recslide .expand').show();$('#recslide .close').hide()});$('#recslide .expand').bind('click',function(){$('#recslide .expand').hide();$('#recslide').stop(true).animate({'bottom':'0px'},300);recslide_gone_in=false;$('#recslide .close').show()})});
var recslideprocessJson=function(json,status){
if(json.feed.entry)var randomNum=Math.ceil(Math.random()*json.feed.openSearch$totalResults.$t);$.ajax({url:'/feeds/posts/summary',data:{'max-results':'2','alt':'json-in-script','start-index':randomNum},success:recslideprocessRecommendation,dataType:'jsonp',cache:true})};$.ajax({url:'/feeds/posts/summary',data:{'max-results':'1','alt':'json-in-script'},success:recslideprocessJson,dataType:'jsonp',cache:true});
var recslideprocessRecommendation=function(json,status){
try{
if(json.feed.entry){
for(var i=0;i<json.feed.entry.length;i++){
var entry=json.feed.entry[i];var url='';
for(var k=0;k<entry.link.length;k++){
if(entry.link[k].rel=='alternate'){url=entry.link[k].href;break}};
var title=entry.title.$t;
if(location.href.indexOf(url)==-1)
{
try{var thumbUrl='';thumbUrl=entry.media$thumbnail.url;$('#recslide_image').html('<img src="'+thumbUrl+'"  class="image" title="'+title+'" />')}
catch(errr){}
var link=$('<a>');
link.attr('title',title);link.text(title);link.attr('href',url);
$('#recslide_title').empty();
link.appendTo($('#recslide_title'));
$('#share_box').empty();
$('#share_box').html('<table border="0" ><tr><td><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+url+'" data-text="'+title+'">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></td><td><iframe src="//www.facebook.com/plugins/like.php?href='+url+'&amp;send=false&amp;layout=button_count&amp;width=80&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font=verdana&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:80px; height:21px;" allowTransparency="true"></iframe></td></tr></table>');
return
}}}}
catch(error){$('#recslide_title').html('<p>Sorry! Some error occurred while fetching the Blog Feed.</p>')}
};