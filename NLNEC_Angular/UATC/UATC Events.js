<script>
(function gtm_uatcevents(jQ, cdl, uadl, w){
		'use strict';
	if (cdl && uadl) try {

		var cdpm = cdl.CATTParams || [];
		var trackerName = (uadl.name+".") || "";
		var uawa = uadl.webanalytics || {};
		var cdom = cdpm.domevents;
		var wgetData = (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname) || {});	
	
		if (cdom && cdom.id) {
			if (/gplus|tweet|facebook/i.test(cdom.id)) try {
				w.ga(trackerName+'send', 'event'
					, 'SocialLinks'
					, ((/[^_]+/.exec(cdom.id) || []).pop() || "")
					, ((/[_](.+)/.exec(cdom.id) || []).pop() || "")
					, {'nonInteraction': false, 'page': uawa.page});
			} catch(e) {
				cdl.error('GTM UATC Events Social Links: '+e)
			} else if (/payment-promo_entry_box/i.test(cdom.id)) try {
				if (cdom.data && typeof cdom.data == 'string') setTimeout(function gtm_promoCodeEvt(){
						w.ga(trackerName+'send', 'event'
						, 'PromoCodes'
						, cdom.data && typeof cdom.data == 'string' && cdom.data || ''
/*						, (wgetData.error)?(wgetData.response && wgetData.response.error && wgetData.response.error.description || ''):((/invalid/i.test(cdom.rawEvent.currentTarget.className))?'PromoCode invalid':'PromoCode Valid')
*/						, /invalid/i.test(cdom.rawEvent.currentTarget.className)?'PromoCode invalid':'PromoCode Valid'
						, parseInt(wgetData.promotion && wgetData.promotion.promoDiscount) || 0
						, {'nonInteraction': false, 'page': uawa.page});
				}, 500)
			} catch(e) {
				cdl.error('GTM UATC Events PromoCodes: '+e)
			} else if (/checkout-print-page/i.test(cdom.id)) try {
					w.ga(trackerName+'send', 'event'
					, 'PrintBookingConfirmation'
					, cdpm.bookingref || ''
					, cdpm.airlineref || ''
					, {'nonInteraction': false, 'page': uawa.page});
			} catch(e) {
				cdl.error('GTM UATC Events PrintBookingConfirmation: '+e)
			} else if (/payment-submit/i.test(cdom.id)) try {
					w.ga(trackerName+'send', 'event'
					, 'PaymentSubmitButton'
					, cdpm.lob || ''
					, cdpm.holidaytype || ''
					, {'nonInteraction': false, 'page': uawa.page});
			} catch(e) {
				cdl.error('GTM UATC Events PaymentSubmitButton: '+e)
			} else if (/accom-hotelVideo/i.test(cdom.id)) try {
				var cdpm = window.CATTDL && CATTDL.CATTParams
					w.ga(trackerName+'send', 'event'
					, 'Videoclicks'
					, 'Hotelvideo'
					, cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || 'accomguid')
					, {'nonInteraction': true});
			} catch(e) {
				cdl.error('GTM UATC Events PaymentSubmitButton: '+e)
			}
		};
	} catch(e) {
		cdl.error('GTM UATC Events: '+e)
	}
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>
