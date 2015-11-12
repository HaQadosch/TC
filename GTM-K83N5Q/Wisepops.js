<script id='GTM-K83N5Q_wisepop'>
(function gtm3rd_WisePopsDL(cdl, dl) {
	'use strict'
	if (cdl && dl && !dl.some(function(a){return /wisepop/i.test(a && a.event || '')}) ) try {
		cdl.DL_wisepops = {
			user_id : 6453,
			script: {
				src: '//wisepops.com/default/index/get-loader?user_id=6453',
				status: 'not fired'
			}
		};
	} catch(e) {
		cdl.error("GTM UK TC DL_wisepops: "+e)
	} finally {
    dl.push({event: 'DL_wisepops'})
  }
	return cdl && cdl.DL_wisepops
}(window.CATTDL, window.dataLayer_K83N5Q));

(function gtm3rd_wisepops(jQ, cdl, wpdl) {
	'use strict';
	if (jQ && cdl && wpdl) try {
		jQ.ajaxSetup({cache: true});
		jQ.when(jQ.getScript(wpdl.script.src)).done(function gtm_wisePopsScript(){
			wpdl.script.status = 'fired'
		});
	} catch(e) {
		cdl.error('GTM UK TC WisePops: '+e)
	}
  return jQ && cdl && wpdl
}(window.CATTDL?window.CATTDL.jQ:!1, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_wisepops))
</script>
