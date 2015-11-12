<script id='GTM-557RZS_evtBooking'>
(function gtm_evtBooking(jQ, cdl, uadl, w){
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

        //Print Booking Conf
        if (/checkout-print-page/.test(cdom.id)){
            try {
                var evtcategory = 'PrintBookingConfirmation';
                var evtaction = cdpm.bookingref || '';
                var evtlabel = cdpm.airlineref || '';
                var evtvalue = 1;
                var evtnoninteraction = false;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 08 Booking - Print Confirmation: '+e)}
        };

    } catch(e) {
        cdl.error('GTM Evt 08 Booking: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>