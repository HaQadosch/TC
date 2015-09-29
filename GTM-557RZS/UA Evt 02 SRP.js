<script id='GTM-557RZS_evtSRP'>
(function gtm_evtSRP(jQ, cdl, uadl, w){
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

        //SRP more flights
        if (/srp-item-moreFlightDates/.test(cdom.id)){
            try {
                var evtcategory = 'SRP More Flights';
                var evtaction = cdom && cdom.data && (cdom.data.id+'|'+(cdom.data.hotel && cdom.data.hotel.value)+'|'+cdom.data.brandCode);
                var evtlabel = cdpm && cdpm.lob+'|'+cdpm.holidaytype;
                var evtvalue = 1;
                var evtnoninteraction = false;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 02 SRP - More Flights: '+e)}
        };
        //SRP Sort Options
        if (/srp-sort-results/.test(cdom.id)){
            try {
                var htmlval = $('[analytics-id="srp-sort-results"] option').filter(':selected').attr('label')
                    || $(cdom && cdom.rawEvent && cdom.rawEvent.originalEvent.path).find('[analytics-id="srp-sort-results"] option').filter(':selected').attr('label') 
                    || "";
                var evtcategory = 'SRP SortOption';
                var evtaction = cdom && cdom.data && cdom.data.val || htmlval || "";
                var evtlabel = cdpm && cdpm.lob+'|'+cdpm.holidaytype;
                var evtvalue = 1;
                var evtnoninteraction = false;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 02 SRP - More Flights: '+e)}
        };
        //SRP Image Carousel
        if (/srp-item-showCarousel/.test(cdom.id)){
            try {
                var evtcategory = 'SRP Image Carousel';
                var evtaction = cdom && cdom.data && (cdom.data.id+'|'+(cdom.data.hotel && cdom.data.hotel.value)+'|'+cdom.data.brandCode);
                var evtlabel = cdpm && cdpm.lob+'|'+cdpm.holidaytype;
                var evtvalue = 1;
                var evtnoninteraction = false;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 02 SRP - Show Carousel: '+e)}
        };
    } catch(e) {
        cdl.error('GTM Evt 02 SRP: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>