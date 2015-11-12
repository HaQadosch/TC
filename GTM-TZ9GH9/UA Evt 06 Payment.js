<script id='GTM-TZ9GH9_evtPayment'>
(function gtm_evtPayment(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) 
        try 
    {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdomid = cdom && cdom.id || '';
        var cdurl = cdpm.urlparams || {};
        var wgD = window.getPageData(cdurl.pathname);

        function UAevent(category,action,label,value,noninteraction) {
            w.ga(uatrc+'send', 'event'
            , category
            , action
            , label
            , 1
            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension51'  : cdpm.gaguid || 'empty'
                ,'dimension55'  : 'event'
                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                ,'dimension118' : (cdurl && cdurl.pathname || location.pathname || '')
                ,'dimension119' : (cdurl && cdurl.paramstring || location.search || '') 
                ,'nonInteraction': noninteraction
            });
        };
        function GAevent(category,action,label,value,noninteraction) {
            w._gaq.push([gatrc+'_trackEvent'
            , category
            , action
            , label
            , value  
            , {'noninteraction': noninteraction}]); 
        };
        //Payment Submit
        if (/payment-submit/.test(cdom.id)){
            try {
                var evtcategory = 'PaymentSubmitButton';
                var evtaction = cdpm.lob || '';
                var evtlabel = cdpm.holidaytype || '';
                var evtvalue = 1;
                var evtnoninteraction = 0;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 06 Payment - Payment Submit: '+e)}
        };
        //Payment Promo Code
        if (/payment-promo/.test(cdom.id)){
            try {
            if (cdom.data && typeof cdom.data == 'string') setTimeout(function gtm_promoCodeEvt(){
                var evtcategory = 'PromoCodes';
                var evtaction = cdom.data && typeof cdom.data == 'string' && cdom.data || '';
                var evtlabel = (wgD && wgD.errorCode === 500)?'PromoCode invalid':(/invalid/i.test(cdom.rawEvent.currentTarget.className)?'PromoCode invalid':'PromoCode Valid');
                var evtvalue = parseInt(wgD.promotion && wgD.promotion.promoDiscount) || 0;
                var evtnoninteraction = 0;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            }, 500)

            } catch(e) {cdl.info('GTM Evt 06 Payment - Payment Promo Code: '+e)}
        };

    } catch(e) {
        cdl.error('GTM Evt 06 Payment: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>