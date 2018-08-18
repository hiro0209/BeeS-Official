$(function() {
	$.ajax({
		url: "json/update.json",
		dataType: "json"
	}).done(function(data) {
		for(let i = 0; i < data.length && i < 5; i++) {
			$("#update_list").append("<li class='date' id='" + data[i].id + "'>" + data[i].date + "</li><li class='data'>" + data[i].name + "</li>\n");
		}
	});
});