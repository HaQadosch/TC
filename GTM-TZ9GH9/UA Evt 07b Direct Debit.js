<script id='GTM-TZ9GH9_evtDirectDebit'>
(function gtm_evtDirectDebit(jQ, cdl, uadl, w){
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
            , { 'page'              : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension1'       : cdpm.deptairport || ''
                ,'dimension2'       : cdpm.destination || ''
                ,'dimension5'       : cdl.gadate && cdl.gadate(cdpm.deptdate || 0)
                ,'dimension10'      : cdpm.lob || ''
                ,'dimension11'      : cdpm.holidaytype || ''
                ,'dimension12'      : cdpm.pageid || ''
                ,'dimension14'      : cdpm.sessionid || ''
                ,'dimension16'      : cdpm.accomcode || ''
                ,'dimension17'      : cdpm.accomname || ''
                ,'dimension22'      : cdpm.destairport || ''
                ,'dimension51'      : cdpm.gaguid || 'empty'
                ,'dimension55'      : 'event'
                ,'dimension58'      : cdpm.accomguid || ''
                ,'dimension65'      : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'dimension75'      : ''+(window.Date && window.Date.now() || 0)
                ,'dimension80'      : cdpm.tc_basket_id || ''
                ,'dimension118'     : (cdurl && cdurl.pathname || location.pathname || '')
                ,'dimension119'     : (cdurl && cdurl.paramstring || location.search || '') 
                ,'nonInteraction'   : noninteraction
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
        //Continue Direct Debit
        if (/directDebit-continue/.test(cdom.id)){
            try {
                var evtcategory = 'DirectDebit';
                var evtaction = 'DirectDebit Continue'
                var evtlabel = cdpm.sessionid || '';
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 07b Direct Debit - Continue: '+e)}
        };
        //Cancel Direct Debit
        if (/directDebit-cancel/.test(cdom.id)){
            try {
                var evtcategory = 'DirectDebit';
                var evtaction = 'DirectDebit Cancel';
                var evtlabel = cdpm.sessionid || '';
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            } catch(e) {cdl.info('GTM Evt 07b Direct Debit - Cancel: '+e)}
        };

    } catch(e) {
        cdl.error('GTM Evt 07b Direct Debit: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>