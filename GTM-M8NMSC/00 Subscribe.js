<script id='GTM-M8NMSC_subscribe'>
(function gtm_externalCore(jQ, w, edl) {
	'use strict';
	if (jQ && edl) try{
		if ($.subscribe) {
			$.subscribe('PageView', function gtm_PageView(d) {
					if (/test=test/i.test(document.cookie)) console.info('GTM Ext PageView updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
					edl.push({'event': 'PageView_'+(d && d.page || window.location.pathname)});
			});
		} else console.log('GTM Ext $.subscribe undefined');
	} catch(e) {
		var msg = 'GTM Ext Core: '+e;
		console && ((console.error)?console.error(msg):console.log(msg))
	} finally {
		edl.push({'event': 'subscribe'});
	}
	return jQ && edl && w.CATTDL			
}(window.jQuery, window, window.dataLayer_M8NMSC))
</script>