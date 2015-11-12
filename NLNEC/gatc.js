//PreCalcPrice_AvailError2
jQuery('.pricegrid-container').live('DOMNodeInserted', '.cp-warning', function() {
	window.preCalcPrice_AvailError2_errorMess = window.preCalcPrice_AvailError2_errorMess || false;
	if (jQuery('.cp-warning').length && jQuery('.cp-warning>strong:eq(0)').text().length && !window.preCalcPrice_AvailError2_errorMess && !/tracked/i.test(jQuery('.cp-warning').attr('class'))) {
		window.preCalcPrice_AvailError2_errorMess =  jQuery('.cp-warning') && jQuery('.cp-warning').text().length && jQuery('.cp-warning').text() || false;
		var dept;
		var mess = jQuery('.cp-warning').text().replace(/\s\s+/g, ' ');
		if(/dagen op/i.test(mess))
		{
			var messdate = mess.substr(mess.indexOf('dagen op')+8, (mess.indexOf('201')+4)-(mess.indexOf('dagen op')+8)).trim();
			var messdateArr = messdate.split(' ');
			var month = ('janfebmaaaprmeijunjulaugsepoktnovdec'.search(messdateArr[1].substr(0,3)) / 3) + 1;
			dept = [messdateArr[0], month, messdateArr[2]].join('-');
		}
		if (window.preCalcPrice_AvailError2_errorMess) {
			jQuery('.cp-warning').addClass('tracked');

			var adults = '',
				children = '',
				roomtype = '',
				boardtype = '';
			jQuery('.adults-options .small-select.passenger').each(function(index){
				if(index===0) adults += jQuery(this).val();
				else adults += '|' + jQuery(this).val();
			});
			jQuery('.children-options .small-select.passenger').each(function(index){
				if(index===0) children += jQuery(this).val();
				else children += '|' + jQuery(this).val();
			});
			jQuery('.room-type-options').each(function(index){
				var room = /voor deze reizigerscombinatie/i.test(jQuery(this).text()) ? 'notavail' : jQuery(this).find('.room-details-select').val().substr(jQuery(this).val().length-5).replace('__', '');
				if(index===0) roomtype += room;
				else roomtype += '|' + room;
			});
			jQuery('.board-type-options .room-details-select').each(function(index){
				var board = jQuery(this).val() || 'empty';
				if(index===0) boardtype += board;
				else boardtype += '|' + board;
			});

			var errorparam = 'PreCalcPrice_AvailError2';
			if(/Het geselecteerde kamertype/i.test(jQuery('.cp-warning').text()))
				errorparam = 'PreCalcPrice_AvailError3';
			window.ga(_stAnalyticsHelperUA.settings.accountPrefix + '.send', 'event', 'Booking errors', errorparam, (window.preCalcPrice_AvailError2_errorMess.slice(0, 100))+'|'+getCATT('Destination').replace(/\&amp;|\&/g, '-')+'|'+getCATT('AccomName').replace(/\&amp;|\&/g, '-')+'|'+holidayType+'|'+getCATT('Brochure')+'|'+getCATT('AccomCode'), {
				'nonInteraction': 1,
				'dimension2':  countryname,
				'dimension10':  getCATT('LOB'),
				'dimension11':  getCATT('HolidayType'),
				'dimension12':  getCATT('PageId'),
				'dimension15':  getCATT('StarRating'),
				'dimension16':  getCATT('AccomCode'),
				'dimension17':  accomname,
				'dimension18':  placename,
				'dimension51':  regionname,
				'dimension55':  BrochureNet,
				'dimension53':  AccomCodeNet,
				'dimension5': dept || '',
				'dimension54': dept ? dept.substr(dept.length-7) : '',

				'dimension1':	jQuery('#airportselect').val() || '',
				'dimension22':	jQuery('#arrivalairportselect').val() || '',
				'dimension9':	jQuery('#durationselect').val() || '',
				'dimension34':	adults || '',
				'dimension35':	children || '',
				'dimension63':	roomtype || '',
				'dimension7': 	boardtype || '',
				'dimension103':	jQuery('[id^="room_"]').length.toString() || ''
			});

		}
	}
});
