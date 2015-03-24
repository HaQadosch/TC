<script>
(function gtm_cattdlAccom(jQ, dl, cdl) {
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
			, "SessId"
			, "TourOperator"
			, "PageContext"
			, "PageType"
			, "SearchResultsPageNbr"
			, "SearchResultsPages"
			, "SearchResultsPerPage"
			, "SearchResultsTop3"
			, "SearchResultsTotal"
			, "SiteLanguage"
			, "StarRating"			
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

		cdpm['roomcodes'] = ctpm.RoomType && ctpm.RoomType.split('|') || [];
		cdpm['sessionid'] = ctpm.SessId || '';
		cdpm['pricetotal'] = (/\d+/.exec((jQuery('p.price.big-font') && jQuery('p.price.big-font').eq(0)).text() || '') || []).pop()
		cdpm['pricepp'] = (/\d+/.exec((jQuery('p.price.big-font') && jQuery('p.price.big-font').eq(1)).text() || '') || []).pop()

		window.CATTDL.CATTParams = cdpm;
	} catch(e) {
		cdl.error('GTM CATTDL LP: '+e)
	} finally {
		dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
		dl.push({'event': 'CATTDL Accom'})
		window.gatcDL && gatcDL.push({'event': 'CATTDL LP'})
	}
	return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
