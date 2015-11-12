<script id='GTM-TZ9GH9_evtSRP'>
(function gtm_evtSRP(jQ, cdl, uadl, w){
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
            var UAoptions = [
                    {'page'              : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''}
                    ,{'dimension1'       : cdpm.deptairport || ''}
                    ,{'dimension2'       : cdpm.destination || ''}
                    ,{'dimension5'       : cdl.gadate && cdl.gadate(cdpm.deptdate || 0)}
                    ,{'dimension10'      : cdpm.lob || ''}
                    ,{'dimension11'      : cdpm.holidaytype || ''}
                    ,{'dimension12'      : cdpm.pageid || ''}
                    ,{'dimension14'      : cdpm.sessionid || ''}
                    ,{'dimension16'      : cdpm.accomcode || cdom.data && cdom.data.hotel && cdom.data.hotel.code || ''}
                    ,{'dimension17'      : cdpm.accomname || cdom.data && cdom.data.hotel && cdom.data.hotel.value || ''}
                    ,{'dimension51'      : cdpm.gaguid || 'empty'}
                    ,{'dimension55'      : 'event'}
                    ,{'dimension58'      : cdpm.accomguid || cdom.data && cdom.data.id || ''}
                    ,{'dimension65'      : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''}
                    ,{'dimension75'      : ''+(window.Date && window.Date.now() || 0)}
                    ,{'dimension118'     : (cdurl && cdurl.pathname || location.pathname || '')}
                    ,{'dimension119'     : (cdurl && cdurl.paramstring || location.search || '')}
                    ,{'nonInteraction'   : noninteraction}
            ];
            var options = {}; UAoptions.filter(function(e){ return e[Object.keys(e)] }).forEach(function(e){var dim = Object.keys(e); options[dim]=e[dim] }) ;

            w.ga(uatrc+'send', 'event'
            , category
            , action
            , label
            , 1
            , options
            );
        };
        function GAevent(category,action,label,value,noninteraction) {
            w._gaq.push([gatrc+'_trackEvent'
            , category
            , action
            , label
            , value  
            , {'noninteraction': noninteraction}]); 
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
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
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
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
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
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 02 SRP - Show Carousel: '+e)}
        };
        //SRP What's Included
        if (/show-whatsIncluded/.test(cdom.id)){
            try {
                var evtcategory = 'SRP What is Included';
                var included = []; for (var i = 0; i < (cdom && cdom.data && cdom.data.included && cdom.data.included.length || 0); included.push(cdom.data.included[i++].description));
                var evtaction = included.join('|') || '';
                var evtlabel = cdpm && cdpm.lob+'|'+cdpm.holidaytype;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 02 SRP - What is Included: '+e)}
        };
    } catch(e) {
        cdl.error('GTM Evt 02 SRP: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>