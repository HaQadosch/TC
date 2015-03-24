<script>
(function gtm_cattdlLP(jQ, dl, cdl) {
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
		window.CATTDL.CATTParams = cdpm;
	} catch(e) {
		cdl.error('GTM CATTDL LP: '+e)
	} finally {
		dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
		dl.push({'event': 'CATTDL LP'})
		window.gatcDL && gatcDL.push({'event': 'CATTDL LP'})
	}
	return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
