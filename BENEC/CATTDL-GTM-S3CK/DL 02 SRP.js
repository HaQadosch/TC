<script>
(function gtm_cattdlSRP(jQ, dl, cdl) {
	'use strict'
	if (jQ && jQ.extend && cdl) try {
		var cdpm = cdl.CATTParams || {};
		var ctpm = window.CATTParams || {};
		var newPM = {}

		cdpm.errors = {}
		var errorPM = {};
		errorPM['errorcode'] = (/(^\d+)/.exec(ctpm.ErrorCode) || '') || [].pop() || '';
		errorPM['errormsg'] = ctpm.ErrorCode || '';
		jQ.extend(cdl.CATTParams.errors, errorPM);
		
		var refreshparams = [
			"AccomCode"
			, "AccomName"
			, "AccomGEOLocation"
			, "AccomResort"
			, "AppServer"
			, "BoardBasis"
			, "Brochure"
			, "DeptDate"
			, "Destination"
			, "DestinationISOCode"
			, "Duration"
			, "PaxAdult"
			, "PaxChild"
			, "PaxInfant"
			, "PaxTotal"
			, "Region"
			, "RegionGEOLocation"
			, "RetDate"			
			, "Rooms"
			, "SearchApp"
			, "SearchResultsPageNbr"
			, "SearchResultsPages"
			, "SearchResultsPerPage"
			, "SearchResultsTotal"
			, "SessId"
			, "TourOperator"
			, "PageType"
			, "SiteLanguage"
			, "siteType"
		];

		var ctpmkeys = Object.keys(ctpm);
		for (var i in ctpmkeys){
					var ctpmval = ctpmkeys[i] || ''
					var reg = new RegExp(ctpmval, 'i');
					if (ctpmval && reg.test(refreshparams.join('|'))) { 
						cdpm[ctpmval.toLowerCase()] = ctpm[ctpmval]
					}
				};		

		cdpm['deptairport'] = ctpm.DepartureAirportSelected && ctpm.DepartureAirportSelected.toLowerCase() || 'Alles';
		cdpm['destination'] = ctpm.Destination || 'Alles';
		cdpm['sessionid'] = ctpm.SessId || '';

		var rooms = []
		jQuery('div.qsm_partycomposition_room_container').each(function(e){

		     if(jQuery(this).attr('style')!=='display:none'){
		         rooms.push(jQuery(this).attr('id'))
		     }
		});
		cdpm['rooms'] = ctpm.Rooms || rooms.length || 0;

		var srpresults = []
		jQuery('ul#ListerContainer').children().each(function(e){
			var res = jQuery(this)
			var accomdeptdate = (/\d+\/\d+\/\d+/.exec(res.find('span[class="departure-date"]').text()) || []).pop()
			var accomlink = (jQuery(this).find('[class="booking-button"]').find('a').attr('href') || '').toLowerCase();
			var accomlinkprm = {}; accomlink.split(/\?|&|#/g).slice(1).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) accomlinkprm[cur[1]]=cur[2]})

			srpresults.push({
					accomcode 		: accomlinkprm.codeto || ''
					,accomname 		: jQuery(this).find('div[class="header-border"]').find('[id*=QsmSelect]').attr('title') || ''
					,destination 	: (jQuery(this).find('p[class="lro"]').text() || '').trim()
					,deptdate 		: +(new Date(accomlinkprm.date && accomlinkprm.date.replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3')) || new Date(accomdeptdate.replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1'))) || 0
					,deptairport 	: res.find('span[class="airport"]').find('span[class="location"]').text() || ''
					,deptairporcode	: (accomlinkprm.depairport || '').toUpperCase()
					,duration 		: +(accomlinkprm.duration || (/\d+/.exec(jQuery(this).find('span[class="duration"]').text()) || []).pop() || 0)
					,pagenumber		: +(accomlinkprm.pagenumber || 1)
					,position 		: +(accomlinkprm.startindex || 0)
					,pricepp		: +(res.find('span[class*="current-price"]').find('strong[class="amount"]').text() || 0)
					,rooms 			: +(accomlinkprm.nrofrooms || 1)
					,seasoncode		: accomlinkprm.seasoncode || ''
					,touroperator 	: accomlinkprm.brandcode || ''
					,oldpricepp		: +((/\d+/.exec((jQuery(this).find('span[class="old-price"]').text() || '').replace('.','')) || []).pop() 
											|| res.find('span[class*="current-price"]').find('strong[class="amount"]').text() || 0)
			})
		});
		//jQuery('ul#ListerContainer').children().eq(1)

		var duration = '';
		jQuery('select#QsmChangeSelect_DurationNights').children().each(function(e){
		    if(jQuery(this).attr('selected')) {
		        duration = jQuery(this).attr('title')
		    } 
		});
		cdpm['duration'] = (duration.replace('(en)','') || '').trim()

		window.CATTDL.CATTParams = cdpm;
	} catch(e) {
		cdl.error('GTM CATTDL LP: '+e)
	} finally {
		dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
		dl.push({'event': 'CATTDL SRP'})
		window.gatcDL && gatcDL.push({'event': 'CATTDL LP'})
	}
	return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
