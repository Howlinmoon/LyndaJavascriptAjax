// Placing the entire retrieval and display inside of a keyup event handler
$('#search').keyup(function() {
    var searchField = $('#search').val();
    console.log(searchField);
    $.getJSON('data.json', function(data) {
        console.log(data);
        // A very simplistic regexp
        var myExp = new RegExp(searchField, "i");
        var output = "<ul class='searchresults'>";
        $.each(data, function(key, val) {
            
            if ((val.name.search(myExp) != -1) ||
                (val.bio.search(myExp) != -1)) {
            
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '" />';
                output += '<p>' + val.bio + '</p>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    });
});