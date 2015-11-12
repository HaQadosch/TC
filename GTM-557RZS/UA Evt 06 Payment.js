<script id='GTM-557RZS_evtPayment'>
(function gtm_evtPayment(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) 
        try 
    {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdomid = cdom && cdomid || '';
        var cdurl = cdpm.urlparams || {};
        var wgD = window.getPageData(cdurl.pathname) || {};

        function UAevent(category,action,label,value,noninteraction) {
            w.ga(uatrc+'send', 'event'
            , category
            , action
            , label
            , 1
            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension30'  : cdpm.gaguid || 'empty'
                ,'dimension115' : cdurl && (cdurl.pathname || location.pathname || '')+(cdurl.paramstring || location.search || '')
                ,'dimension119'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'nonInteraction': noninteraction});
        };

        //Payment Submit
        if (/payment-submit/.test(cdom.id)){
            try {
                var evtcategory = 'PaymentSubmitButton';
                var evtaction = cdpm.lob || '';
                var evtlabel = cdpm.holidaytype || '';
                var evtvalue = 1;
                var evtnoninteraction = false;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 06 Payment - Payment Submit: '+e)}
        };

    } catch(e) {
        cdl.error('GTM Evt 06 Payment: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>