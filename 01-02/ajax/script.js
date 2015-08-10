// try doing it 100 times
for (var i = 0; i < 100; i++) {
    var request = new XMLHttpRequest();
    // create the request - synchronously - thus the false
    request.open("GET", "data.txt", false);
    // send the request
    request.send();
    // did it succeed?
    if (request.status == 200) {
        // log the results
        console.log(request);
        // also, send it to the page
        // shouldn't really write this way...
        document.writeln(request.responseText);
    }
}
