<script id='GTM-TZ9GH9_evtAccomCalendar'>
(function gtm_evtAccomCalendar(jQ, cdl, uadl, w){
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
        var lobholidaytypepageid = cdpm && cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || 'accomguid')        
        var cdurl = cdpm.urlparams || {};

        function UAevent(category,action,label,value,noninteraction,dims) {
            w.ga(uatrc+'send', 'event'
            , category
            , action
            , label
            , 1
            , dims        
            , {'nonInteraction': noninteraction});
        };
        function GAevent(category,action,label,value,noninteraction) {
            w._gaq.push([gatrc+'_trackEvent'
            , category
            , action
            , label
            , value  
            , {'noninteraction': noninteraction}]); 
        }; 
        var evtaction = cdom.data || '';
        var evtlabel = lobholidaytypepageid || '';
        var evtvalue = 1;
        var evtnoninteraction = false;
        var evtcategory = '';

        if (/accom-flight-(changeMonth|nextMonth|previousMonth)/.test(cdom.id)) { evtcategory = 'Accom_Change_Month'}
        else if (/accom-flight-changeDestination/.test(cdom.id)) { evtcategory = 'Accom_Change_DeptAirport' }
        else if (/accom-flight-changeDuration/.test(cdom.id)) { evtcategory = 'Accom_Change_Duration' }

        setTimeout(function CallGA(){
            var alldates = jQ('div.body.calendar-body.animate-show #CalendarBody div.Event.hasEvent').length || 0;
            var altdates = jQ('div.body.calendar-body.animate-show #CalendarBody div.Event.unavailableRoom').length || 0;
            var seldate = jQ('div.body.calendar-body.animate-show #CalendarBody span.icon.airplaneE').length || 0;
            // var depairport = jQ('[analytics-id*=accom-flight-changeDestination] option[selected="selected"]').attr('label') || '';
            // var depmonth = jQ('[analytics-id*=accom-flight-changeMonth] option[selected="selected"]').attr('label') || '';
            // var duration = jQ('[analytics-id*=accom-flight-changeDuration] option[selected="selected"]').attr('label') || '';
            var options = { 
                    'page'           : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    , 'dimension1'   : cdpm.deptairport || ''
                    , 'dimension2'   : cdpm.destination || ''
                    , 'dimension10'  : cdpm.lob || ''
                    , 'dimension11'  : cdpm.holidaytype || ''
                    , 'dimension12'  : cdpm.pageid || ''
                    , 'dimension16'  : cdpm.accomcode || ''
                    , 'dimension20'  : cdpm.touroperator || ''
                    , 'dimension22'  : cdpm.destairport || ''
                    , 'dimension51'  : cdpm.gaguid || 'empty'
                    , 'dimension55'  : 'event'
                    , 'dimension58'  : cdpm.accomguid || ''
                    , 'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    , 'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                    , 'dimension118' : (cdurl && cdurl.pathname || location.pathname || '')
                    , 'dimension119' : (cdurl && cdurl.paramstring || location.search || '')
                    , 'metric15'     : 1
                    , 'metric51'     : alldates || 0
                    , 'metric52'     : altdates || 0
                    , 'metric53'     : seldate || 0
            };

            if (evtcategory == 'Accom_Change_DeptAirport') {options.dimension1 = evtaction};
            if (evtcategory) {
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction,options);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            }
        
        }(),1000);

    } catch(e) {
        cdl.error('GTM Evt 03 Accom Calender: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>