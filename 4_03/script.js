$('#search').keyup(function() {
	var searchField = $('#search').val(); 
	var myExp = new RegExp()
    $.each(data,function(key, val) {
	output += '<li>' ;
	output += '<h2>' + val.name + '</h2>';
	output += '<img src= "images/' + val.shortname +'tn.jpg" alt="' + val.name +'" />';
	output += '<p>' + val.bio + '</p>';
	output += '<li>' ;
});
  output += '</ul>';
  $('#update').prepend(output);
});



