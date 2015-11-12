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

        function UAevent(category,action,label,value,dims) {
            w.ga(uatrc+'send', 'event'
                , category
                , action
                , label
                , 1
                , dims
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
        var evtaction = cdom.data || '';
        var evtlabel = lobholidaytypepageid || '';
        var evtvalue = 1;
        var evtnoninteraction = 0;
        var evtcategory = '';

        if (/accom-flight-(changeMonth|nextMonth|previousMonth)/.test(cdom.id)) { evtcategory = 'Accom_Change_Month'}
        else if (/accom-flight-changeDestination/.test(cdom.id)) { evtcategory = 'Accom_Change_DeptAirport' }
        else if (/accom-flight-changeDuration/.test(cdom.id)) { evtcategory = 'Accom_Change_Duration' }

        setTimeout(function CallGA(){
            var options = { 
                    'page'              : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    ,'dimension1'       : cdpm.deptairport || ''
                    ,'dimension2'       : cdpm.destination || ''
                    ,'dimension5'       : cdl.gadate && cdl.gadate(cdpm.deptdate || 0)
                    ,'dimension10'      : cdpm.lob || ''
                    ,'dimension11'      : cdpm.holidaytype || ''
                    ,'dimension12'      : cdpm.pageid || ''
                    ,'dimension14'      : cdpm.sessionid || ''
                    ,'dimension16'      : cdpm.accomcode || ''
                    ,'dimension17'      : cdpm.accomname || ''
                    ,'dimension22'       : cdpm.destairport || ''
                    ,'dimension51'      : cdpm.gaguid || 'empty'
                    ,'dimension55'      : 'event'
                    ,'dimension58'     : cdpm.accomguid || ''
                    ,'dimension65'     : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    ,'dimension75'     : ''+(window.Date && window.Date.now() || 0)
                    ,'dimension118'    : (cdurl && cdurl.pathname || location.pathname || '')
                    ,'dimension119'    : (cdurl && cdurl.paramstring || location.search || '')
                    ,'metric15'        : 1
                    ,'noninteraction'   : evtnoninteraction
            };

            if (evtcategory == 'Accom_Change_DeptAirport') {options.dimension1 = evtaction};
            if (evtcategory) {
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,options);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            }
        
        }(),200);

    } catch(e) {
        cdl.error('GTM Evt 03 Accom Calender: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>