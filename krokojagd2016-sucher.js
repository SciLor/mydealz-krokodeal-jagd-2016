//Für die Seite: https://www.mydealz.de/xmas-game/trade
//Es muss in die auftauchende Textbox eine Userliste eingetragen werden, ein User pro Zeile. Diese werden dann untersucht)
//Start der Suche per "Detail"-Button In der Console tauchen dann unter Warning (Firefox) die Treffer bei den Usern auf.

$('form div.space--t-4 button').eq(1).parent().parent().parent().append('<br/><button id="detail" class="mc-form-button mc-form-button--primary btn width--ctrl-s">Detail</button>');
$('#detail').parent().append('<br><br><textarea id="detailList" class="mc-form-button--primary"></textarea>')

$('#detail').click(function(){
	var search = [
		{
			"name":"bearded",
			"level":2
		},
		{   //Golden ones
			"name":"bearded",
			"level":3
		}, {
			"name":"candle",
			"level":3
		}, {
			"name":"candycane",
			"level":3
		}, {
			"name":"ginger",
			"level":3
		}, {
			"name":"jumper",
			"level":3
		}, {
			"name":"ornamental",
			"level":3
		}, {
			"name":"red_nose",
			"level":3
		}, {
			"name":"silentnight",
			"level":3
		}
	];
	var lines = $('#detailList').val().split('\n');
	lines = lines.sort(function() {
		return Math.round( Math.random() ) - 0.5;
	});
	$.each(lines, function(){
		$.ajaxSetup({
			async: false
		});
		var searchUrl = "https://www.mydealz.de/search/xmas-game-trading-partner-search?q=" + this;
		$.getJSON(searchUrl).done(function(data) {
			$.each(data.data.suggestions, function(c, partner) {
				partner = partner.model;
				var token = $('input[name=_token]').val();
				var postData = $.param({ 
					"_token": token,
					"user_id": partner.user_id,
					"profile_image_url": partner.profileImageUrl,
					"username": partner.username
				});
				//console.log(partner.username);
				$.post("https://www.mydealz.de/mascotcards/other-user-collection", postData, function(data, status) {
					//console.log(JSON.stringify(data));
					var list = data.data.clientModel.other_user_mascotcards;
					$.each(list, function(i, listVal) {
						$.each(search, function(j, searchVal) {
							if (listVal.name == searchVal.name && listVal.level == searchVal.level && listVal.count > 1) {
								 console.warn("Found " + listVal.name + "(" + listVal.level + ")" + " @" + partner.username);
							}
						});
					});
				});
			});
		});
		$.ajaxSetup({
			async: true
		});
	});
	console.warn("All done!");
});