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
						//console.log(ctpm[ctpmval])
						cdpm[ctpmval.toLowerCase()] = ctpm[ctpmval]
						//delete cdpm[cdpmkeys[i]]
					}
				};		

		cdpm['deptairport'] = ctpm.DepartureAirportSelected && ctpm.DepartureAirportSelected.toLowerCase()
		cdpm['sessionid'] = ctpm.SessId || '';

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
