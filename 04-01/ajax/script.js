// Placing the entire retrieval and display inside of a keyup event handler
$('#search').keyup(function() {
    $.getJSON('data.json', function(data) {
        console.log(data);
        var output = "<ul class='searchresults'>";
        $.each(data, function(key, val) {
            output += '<li>';
            output += '<h2>' + val.name + '</h2>';
            output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '" />';
            output += '<p>' + val.bio + '</p>';


            output += '</li>';
        });
        output += '</ul>';
        $('#update').html(output);
    });
});