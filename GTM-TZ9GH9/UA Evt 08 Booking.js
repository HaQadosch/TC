<script id='GTM-TZ9GH9_evtBooking'>
(function gtm_evtBooking(jQ, cdl, uadl, w){
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
                ,'nonInteraction': noninteraction});
        };
        function GAevent(category,action,label,value,noninteraction) {
            w._gaq.push([gatrc+'_trackEvent'
            , category
            , action
            , label
            , value  
            , {'noninteraction': noninteraction}]); 
        };
        //Holiday Essentials
        if (/confirmation-holiday_extras_link/.test(cdom.id)){
            try {
                var evtcategory = 'HolidayExtrasLink';
                var evtaction = cdpm.bookingref || '';
                var evtlabel = cdpm.airlineref || '';
                var evtvalue = 1;
                var evtnoninteraction = 0;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 08 Booking - Holiday Essentials: '+e)}
        };
        //Print Booking Conf
        if (/checkout-print-page/.test(cdom.id)){
            try {
                var evtcategory = 'PrintBookingConfirmation';
                var evtaction = cdpm.bookingref || '';
                var evtlabel = cdpm.airlineref || '';
                var evtvalue = 1;
                var evtnoninteraction = 0;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 08 Booking -Print Confirmation: '+e)}
        };

    } catch(e) {
        cdl.error('GTM Evt 08 Booking: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>