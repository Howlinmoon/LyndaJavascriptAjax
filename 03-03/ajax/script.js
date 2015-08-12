// Use JQuery to read the JSON file
$.getJSON('data.json', function(data) {
    // inside the anonymous function - output what we read
    console.log(data);
    var output = "<ul>";
    $.each(data, function(key, val) {
        output += '<li>' + val.bio + '</li>';
    });
    output += '</ul>';
    // Now display it - in the JQuery equivalent of find element by Id and inner HTML
    // $('#update').html(output);
    // Unlike the previous line - this one appends - instead of replaces the content
    $('#update').append(output);
    // you can also use .prepend()
    // to insert the text BEFORE the existing
});
