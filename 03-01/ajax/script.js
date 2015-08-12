// Using JQuery - find the update tag, and insert the contents of data.txt
$('#update').load('data.txt');
// Now - we update the div with the class 'classname'
// $('.classname').load('data.txt');
// Here we are only updating the FIRST instance of 'classname'
//$('.classname:first').load('data.txt');
// Here we are updating only the even numbered instances
$('.classname:even').load('data.txt');