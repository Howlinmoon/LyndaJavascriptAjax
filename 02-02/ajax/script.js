var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
        // How to target the second block of tags
		var modify = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
		modify[2].innerHTML = request.responseText;
        
        for (var i = 0; i < modify.length; i++) {
            modify[i].innerHTML = "***  " + request.responseText + "  ***";
        }
        
        modify[2].innerHTML = request.responseText;

	}
    
}
request.send();
