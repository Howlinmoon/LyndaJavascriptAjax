var request;
if (window.XMLHttpRequest) {
    console.log("Standard XMLHttpRequest supported");
    request = new XMLHttpRequest();
} else {
    console.log("Standard XMLHttpRequest is not supported (IE?)");
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
