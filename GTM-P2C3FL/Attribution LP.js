<script id='GTM-P2C3FL_attribution'>
(function gtm_attribtionLP(jQ, cdl) {
	'use strict'
	if (jQ && cdl) try {
		var cdsr = cdl.CATTParams.searches
        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdsr.utm_medium || cdsr.gclid){
	        attrs.push([
        		cdsr.gclid || '',
        		cdsr.utm_medium || '',
        		cdsr.utm_campaign || '',
        		cdsr.utm_content || '',
				cdsr.utm_source || '',
				Date.now() || ''
        	])
        }
		var domainName = cdl.twlh(/airtours/i)?'.airtours.co.uk':(cdl.twlh(/club18-30/i)?'.club18-30.com':(cdl.twlh(/directholidays/gi)?'.directholidays.co.uk':'.thomascook.com'))
 		cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', domainName)
	} catch(e) {
		cdl.error('GTM Attribution LP: '+e)
	}
	return cdl
}(!window.CATTDL?!1:window.CATTDL.jQ, window.CATTDL))
</script>
