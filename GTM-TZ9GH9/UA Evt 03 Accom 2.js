<script id='GTM-TZ9GH9_evtAccom2'>
setTimeout(function gtm_evtAccom2(jQ, cdl, uadl, w){
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

        var alldates = jQ('div.body.calendar-body.animate-show #CalendarBody div.Event.hasEvent').length || 0;
        var altdates = jQ('div.body.calendar-body.animate-show #CalendarBody div.Event.unavailableRoom').length || 0;
        var seldate = jQ('div.body.calendar-body.animate-show #CalendarBody span.icon.airplaneE').length || 0;

        var evtcategory = 'Accom_Impression_Calendar';
        var evtaction = 'page view'
        var evtlabel = lobholidaytypepageid;
        var evtvalue = 1;
        var evtnoninteraction = true;

        w.ga(uatrc+'send', 'event'
        , evtcategory
        , evtaction
        , evtlabel
        , 1
        , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
            ,'dimension51'  : cdpm.gaguid || 'empty'
            ,'dimension55'  : 'event'
            ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
            ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
            ,'dimension118' : (cdurl && cdurl.pathname || location.pathname || '')
            ,'dimension119' : (cdurl && cdurl.paramstring || location.search || '')
            ,'metric51'     : alldates || 0
            ,'metric52'     : altdates || 0
            ,'metric53'     : seldate || 0
        }                
        , {'nonInteraction': evtnoninteraction});


    } catch(e) {
        cdl.error('GTM Evt 03 Accom Test: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window),2000)
</script>