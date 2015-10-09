<script>
(function(dtl){
	'use strict'
	if (dtl) try{
		var s = {}; (unescape(document.location.search).split(/\?|&/g).slice(1)).forEach(function(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) s[cur[1]]=cur[2]})
		var pps = s.personen && s.personen.split(/;/) || !1
		var pp = pps && (pps.filter(function(i){return !!i}) || []).length || 0
		var pa = pps && (pps.filter(function(i){return !!i && i > 17}) || []).length || 0
		var pc = pps && (pps.filter(function(i){return !!i && i < 18}) || []).length || 0
		dtl.push({
		    'transactionId': s.Buchungs_ID || "empty_"+Math.random(),
		    'transactionAffiliation': '',
		    'transactionTotal': s.preis && s.preis.split(/;/).pop() || 0,
		    'transactionTax': 0,
		    'transactionShipping': 0,
		    'transactionProducts': [{
		        'sku': 'Destination|DestinationAirportSelected|'+(s.IFF || '')+'|TourOperator',
		        'name': 'AccomName|'+(s.IFF || 'AccomCode')+'|'+(s.abflughafen || '')+'|'+pp+'|'+pa+'|'+pc+'|DeptDate|Duration|PaymentOption',
		        'category': 'LOB|HolidayType',
		        'price': 0,
		        'quantity': 1
		    }]
		})
	} catch(e){console && console.error('GTM Transaction: '+e)}
	dtl.push({'event': 'Transaction'})
	return dtl;
}(!window.dataLayer?!1:window.dataLayer))
</script>
