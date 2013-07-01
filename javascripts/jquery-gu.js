$j=jQuery.noConflict();
$j(document).ready(function(){
	$j('a').mousedown(function(event){
		var h = false;
		if(gu[this.href]) h = this.href;
		else if(gu[this.href.slice(0, -1)]) h = this.href.slice(0, -1);
		if(h)this.href=window.location.protocol + '//' + window.location.host + '/' + gu[h][0];
	}).click(function(event){
		var h = false;
		if(gu[this.href]) h = this.href;
		else if(gu[this.href.slice(0, -1)]) h = this.href.slice(0, -1);
		if(h && gu[h][1]){
			if(typeof(_gaq) != 'undefined') _gaq.push(['_trackPageview', gu[h][1]]);
			else if(typeof(pageTracker) != 'undefined') pageTracker._trackPageview(gu[h][1]);
			setTimeout('document.location = "' + this.href + '"', 100)
			return false;
		}
		else
		{
			return true;
		}
	});
});