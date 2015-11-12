<script id='GTM-K83N5Q_CrazyEgg'>
(function gtm3rd_CrazyEggDL(cdl, dl) {
	'use strict'
	if (cdl && dl && !dl.some(function(a){return /CrazyEgg/i.test(a && a.event || '')}) ) try {
		var cdpm = cdl.CATTParams

		cdl.DL_crazyegg = {
			tstp 	: Math.floor((new Date).getTime()/36e5) || '0',
			script 	: {
				status  : 'not fired',
				url 	: '//dnn506yrbagrg.cloudfront.net/pages/scripts/0013/9168.js?_tstp_'
			}
		}
	} catch(e){
		cdl.error("GTM CrazyEgg: "+e)
	} finally {
		dl.push({event: 'DL CrazyEgg'});
	}
	return cdl && dl && cdl.DL_crazyegg
}(window.CATTDL, window.dataLayer_K83N5Q));

(function gtm3rd_CrazyEgg(jQ, cdl, cedl) {
	'use strict';
	if (jQ && cdl && cedl) try {
		var src = (cedl.script.url || '').replace(/_tstp_/, (cedl.tstp || '0'))
		if (src) {
			jQ.ajaxSetup({cache: true});
	 		jQ.getScript && jQ.getScript(src, function gtm_turnScript(){
				cedl.script.status = 'fired';
				cedl.script.url = src;
	 		})
		}
	} catch(e) {
		cdl.error('GTM CrazyEgg: '+e)
	}
	return jQ && cdl && cedl
}(window.CATTDL?window.CATTDL.jQ:!1, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_crazyegg))
</script>
