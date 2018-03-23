$(function() {

	const MIN_PASSWORD_LEN = 2;
	
	function random_number(){var d=(new Date())%42;while(--d>0)Math.random();return Math.random();}
	
	function enthropy(s){let a=99999,b=0;for(var i=0,n=s.length;i<n;i++){let t=s.charCodeAt(i);if(t<a)a=t;if(t>b)b=t;}if(Math.abs(b-a)<2)return 0;let r=1.3*Math.log(Math.abs(b-a)*s.length);return r*r;}
	
	function gpassword(c='0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz-*_+=)(',l=12) {var r = '';for (var i = 0, n = c.length; i < l; ++i) {r+=c.charAt(Math.floor(random_number()*n));}return r;}
	
	function updatebar(s){let t=enthropy(s),v=Math.max(0,Math.min(100,Math.floor(t)));$('#pbar').attr({style:`width:${v}%`});}
	
	$('#smallerbutton').click(function(){let passwordchars=$('#passwordchars').val();let passwordlength=Math.max(MIN_PASSWORD_LEN,Math.floor(+$('#passwordlength').val()-1));
		$('#passwordlength').val(passwordlength);let s=gpassword(passwordchars,passwordlength);$('#passwordoutput').text(s);updatebar(s);});
	
	$('#biggerbutton').click(function(){let passwordchars=$('#passwordchars').val();let passwordlength=Math.floor(+$('#passwordlength').val()+1);$('#passwordlength').val(passwordlength);let s=gpassword(passwordchars,passwordlength);
		$('#passwordoutput').text(s);updatebar(s);});
	
	$('#generatebutton').click(function(){let passwordchars=$('#passwordchars').val();let passwordlength=Math.floor(+$('#passwordlength').val());$('#passwordlength').val(passwordlength);let s=gpassword(passwordchars,passwordlength);
		$('#passwordoutput').text(s);updatebar(s);});
	
	$("#generatebutton").trigger("click");
  	
  	$('#passwordchars').bind('input propertychange', function() {let c=$('#passwordchars').val(),l=Math.floor($('#passwordlength').val());let s=gpassword(c,l);$('#passwordoutput').text(s);updatebar(s);});
  	
  	$('#passwordlength').bind('input propertychange', function() {let c=$('#passwordchars').val(),l=Math.floor($('#passwordlength').val());let s=gpassword(c,l);$('#passwordoutput').text(s);updatebar(s);});
  	
});
