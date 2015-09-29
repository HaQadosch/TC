<script id='GTM-TZ9GH9_evtAccom'>
(function gtm_evtAccom(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) 
        try 
    {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdomid = cdom && cdomid || '';
        var lobholidaytypepageid = cdpm && cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || cdpm.domevents && cdpm.domevents.data && cdpm.domevents.data.productId || 'accomguid')        
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

        //AccomAsk and Answer Navigation
        if (/accom-reviews/.test(cdom.id)){
            try {
                var evtcategory = 'AskandAnswer';
                var evtaction = 'Navigate'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - AskandAnswer Navigate: '+e)}
        };
        //AccomAsk and Answer Show
        if (/accom-askNAnswers-show/.test(cdom.id)){
            try {
                var evtcategory = 'AskandAnswer';
                var evtaction = /true/.test(cdpm.domevents && cdpm.domevents.id)?'Show':'Hide'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - AskandAnswer Show: '+e)}
        };
        //Customer Reviews
        if (/accom-reviews-customers/.test(cdom.id)){
            try {
                var evtcategory = 'Reviews';
                var evtaction = 'FromOurCustomers'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - Reviews: '+e)}
        };
        //Customer Reviews Navigate
        if (/accom-askNAnswers$/.test(cdom.id)){
            try {
                var evtcategory = 'Reviews';
                var evtaction = 'Navigate'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - Reviews: '+e)}
        };
        //Accom Facilities Navigate
        if (/accom-facilities/.test(cdom.id)){
            try {
                var evtcategory = 'AccomFacilities';
                var evtaction = 'Navigate'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - Facilities: '+e)}
        };
        //Accom Flights Navigate
        if (/^accom-flight$/.test(cdom.id)){
            try {
                var evtcategory = 'AccomFlight';
                var evtaction = 'Navigate'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - Flights: '+e)}
        };
        //Accom Rooms Navigate
        if (/accom-rooms/.test(cdom.id)){
            try {
                var evtcategory = 'AccomRooms';
                var evtaction = 'Navigate'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - Flights: '+e)}
        };
        //Accom Video
        if (/accom-hotelVideo/.test(cdom.id)){
            try {
                var evtcategory = 'Videoclicks';
                var evtaction = 'Hotelvideo'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - Video: '+e)}
        };
        //Accom Map
        if (/accom-hotelMap/.test(cdom.id)){
            try {
                var evtcategory = 'Accom Map';
                var evtaction = cdom && cdom.data && (cdom.data.productId+'|'+(cdom.data.hotelName && cdom.data.hotelName.value)+'|'+(cdom.data.tourOperator && cdom.data.tourOperator.name)+'|'+cdom.data.seasonCode);
                var evtlabel = cdpm && cdpm.lob+'|'+cdpm.holidaytype;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 03 Accom - Map: '+e)}
        };

    } catch(e) {
        cdl.error('GTM Evt 03 Accom: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>