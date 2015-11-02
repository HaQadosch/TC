<script id='GTM-K83N5Q_HelloBar'>
(function gtm3rd_hellobarDL(cdl, dl) {
	'use strict'
	if (cdl && dl && !dl.some(function(a){return /hellobar/i.test(a && a.event || '')}) ) try{
		cdl.DL_hellobar = {
			script: {
				src: '//www.hellobar.com/hellobar.js',
				status: 'not fired'
			}
		};
		dl.push({event: 'DL_hellobar'})
	} catch(e) {
		cdl.error("GTM UK TC DL_hellobar: "+e)
	}
	return cdl.DL_hellobar
}(window.CATTDL, window.dataLayer_K83N5Q));

(function gtm3rd_hellobar(jQ, cdl, hbdl) {
	'use strict';
	if (jQ && cdl && hbdl) try {
		jQ.ajaxSetup({cache: true});
		jQ.when(jQ.getScript(hbdl.script.src)).done(function gtm_hellobarScript(){
			new HelloBar(48872,119933);
			hbdl.script.status = 'fired'
		});
	} catch(e) {
		cdl.error('GTM UK TC HelloBar: '+e)
	}
  return jQ && cdl && hbdl
}(window.CATTDL?window.CATTDL.jQ:!1, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_hellobar))
</script>
