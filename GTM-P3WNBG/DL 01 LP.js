<script>
(function gtm_cattdlLP(jQ, dl, cdl) {
	'use strict'
	if (jQ && jQ.extend && cdl) try {
		var cdpm = cdl.CATTParams
		var newPM = {}
		var wgetData = window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname) || {}

		cdpm.errors = {}
		var errorPM = {};
		errorPM['errorcode'] = wgetData.errorCode || "";
		errorPM['errormsg'] = (wgetData.message || []).join(' ');

		jQ.extend(cdl.CATTParams.errors, errorPM);
		window.CATTDL.CATTParams = cdpm;
	} catch(e) {
		cdl.error('GTM CATTDL LP: '+e)
	} finally {
		dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
		gatcDL.push({'event': 'CATTDL LP'})
	}
	return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
