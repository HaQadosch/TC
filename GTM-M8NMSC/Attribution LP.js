<script id='GTM-M8NMSC_attLP'>
(function gtm_attribtionLP(jQ, cdl) {
	'use strict';
	if (jQ && cdl) {
		try {
			var cdsr = cdl.CATTParams.searches;
			var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]');
			if (window.Array && window.Array.isArray && window.Array.isArray(attrs)) {
				if (attrs.every && attrs.every(function(elt){return window.Array.isArray(elt);}) )
					for (var i = 4; attrs.length > i; attrs.shift());
			} else {
				attrs = [];
			}

			if (cdsr.utm_medium || cdsr.gclid){
				attrs.push([
					cdsr.gclid || '',
					cdsr.utm_medium || '',
					cdsr.utm_campaign || '',
					cdsr.utm_content || '',
					cdsr.utm_source || '',
					Date.now() || ''
				]);
			}
			var domainName = cdl.twlh(/airtours/i)?'.airtours.co.uk':(cdl.twlh(/club18-30/i)?'.club18-30.com':(cdl.twlh(/directholidays/gi)?'.directholidays.co.uk':'.thomascook.com'));
			cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', domainName);
		} catch(e) {
			cdl.error('GTM Attribution LP: '+e);
		}
	}
	else {
		if (!jQ && window.console) window.console.log('GTM-P2C3FL_attribution: no jQ');
		if (!cdl && window.console) window.console.log('GTM-P2C3FL_attribution: no cdl');
	}
	return cdl;
}(window.jQ, window.CATTDL));
</script>
