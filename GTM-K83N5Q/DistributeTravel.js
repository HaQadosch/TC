<script id='GTM-K83N5Q_distributeTravel'>
(function gtm3rd_DistTravelDL(w, cdl, dl) {
	'use strict'
	if (cdl && dl && !dl.some(function(a){return /DistributeTravel/i.test(a && a.event || '')}) ) try{
		var cdpm = cdl.CATTParams;
		cdl.DL_distributetravel = {
			trackingid 	: '2000006',
			userid 		: cdpm.utmaguid || '',
			search 		: cdpm.accomname || '',
			destination : cdpm.destination || '',
			depdate 	: cdpm.deptdate || '',
			depairport 	: cdpm.departureairportselected || '',
			orderid 	: cdpm.bookingref || '',
			salesvalue 	: cdpm.bookingvalue || '',
			currency 	: 'GBP',
			script: {
				src: '//track.dtrck.net/dtrckTracker.js',
				status: 'not fired'
			}
		}
	} catch(e) {
		cdl.error("GTM UK TC DL_DistributeTravel: "+e)
	} finally {
		dl.push({event: 'DL_DistributeTravel'})
	}
	return cdl && cdl.DL_distributetravel
}(window, window.CATTDL, window.dataLayer_K83N5Q));

(function gtm3rd_DistTravelScript(jQ, cdl, dtdl) {
	'use strict';
	if (jQ && cdl && dtdl) try {
		jQ.ajaxSetup({cache: true});
	 	jQ.getScript && jQ.getScript(dtdl.script.src, function gtm_DistTravelScript(){
			window.Distribute = new dtrckTracker(dtdl.trackingid);
			window.Distribute.trackIncomingClick();
			if (/accom|cust|pax|pay/i.test(cdl.CATTParams && cdl.CATTParams.pageid || '')) {
				window.Distribute.addCustomParameter(new dtrckCustomParameter('userID', dtdl.userid));
				window.Distribute.addCustomParameter(new dtrckCustomParameter('search_destination', dtdl.search));
				window.Distribute.logCustomParameters();
			}
			dtdl.script && (dtdl.script.status = 'fired')
	 	})
	} catch(e) {
		cdl.error('GTM UK TC DistTravel: '+e)
	}
	return jQ && cdl && dtdl || !1
}(window.CATTDL?window.CATTDL.jQ:!1, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_distributetravel))
</script>
