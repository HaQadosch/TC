<script id='GTM-K83N5Q_NetSoc'>
(function gtm3rd_NetSocietySmartPixelDL(cdl, dl) {
	'use strict'
	if (cdl && dl && !dl.some(function(a){return /netsocietysmartpixel/i.test(a && a.event || '')}) ) try{
		var cdpm = cdl.CATTParams;
		cdl.DL_netsocietysmartpixel = {
			destination 		: cdpm.destination || '',
			departureairport 	: cdpm.departureairportselected || '',
			departuredate 		: (cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') || '',
			duration 			: parseInt(cdpm.duration) || 0,
			bookingdate 		: ((new Date()).toISOString() || '').replace(/(\d\d\d\d)-(\d\d)-(\d\d).*/, '$1$2$3') || '',
			resort 				: cdpm.accomname || cdpm.accoms && cdpm.accoms[0] && cdpm.accoms[0].name || '',
			children 			: cdpm.paxchild || '0',
			accomcode 			: cdpm.accomguid || cdpm.accoms && cdpm.accoms[0] && cdpm.accoms[0].id || '',
			value 				: cdpm.bookingvalue || '0'
		}
		var nsdl = cdl.DL_netsocietysmartpixel
		var data = escape("destination="+nsdl.destination+
			";departureairport="+nsdl.departureairport+
			";departuredate="+nsdl.departuredate+
			";duration="+nsdl.duration+
			";bookingdate="+nsdl.bookingdate+
			";resort="+nsdl.resort+
			";children="+nsdl.children+
			";accomCode="+nsdl.accomcode)
		nsdl.pixel = {
			src: '//googleads.g.doubleclick.net/pagead/viewthroughconversion/994652885/?value='+nsdl.value+'&label=Q3DaCJvm_gQQ1eWk2gM&guid=ON&script=0&data='+data || '',
			status: 'not fired'
		}
	} catch(e) {
		cdl.error("GTM UK TC DL_netsocietysmartpixel: "+e)
	} finally {
		dl.push({'event': 'DL_netsocietysmartpixel'})
	}
	return cdl && cdl.DL_netsocietysmartpixel
}(window.CATTDL, window.dataLayer_K83N5Q));

(function gtm3rd_NetSocietySmartPixel(jQ, cdl, nsdl) {
	'use strict';
	if (jQ && cdl && nsdl && nsdl.pixel && (/search|accom/i.test(cdl.CATTParams && cdl.CATTParams.pageid || ''))) try {
		var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="netsocietySmartPixel">').attr('src', nsdl.pixel.src);
			img.appendTo('body');
		nsdl.pixel.status = 'fired'
	} catch(e) {
		cdl.error('GTM UK TC NetSocietySmartPixel: '+e)
	}
	return jQ && cdl && nsdl
}(window.CATTDL?window.CATTDL.jQ:!1, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_netsocietysmartpixel))
</script>
