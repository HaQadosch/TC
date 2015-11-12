<script id='GTM-TZ9GH9_evtSocial'>
(function gtm_evtSocial(jQ, cdl, uadl, w){
    'use strict';
    if (cdl && uadl) 
        try 
    {
        var cdpm = cdl.CATTParams || [];
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdomid = cdom && cdomid || '';
        var wgD = (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname) || {}); 
        var lobholidaytypepageid = cdpm && cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || cdpm.domevents && cdpm.domevents.data && cdpm.domevents.data.productId || 'accomguid')        
           

        var cdurl = cdpm.urlparams || {};
        w.ga(trackerName+'send', 'event'
            , 'SocialLinks'
            , ((/[^_]+/.exec(cdomid) || []).pop() || "")
            , ((/[_](.+)/.exec(cdomid) || []).pop() || "")
            , 1
            , { 'page'        : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension51': cdpm.gaguid || 'empty'
                ,'dimension55': 'event'
                ,'dimension65': cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                ,'nonInteraction': 1});

    } catch(e) {
        cdl.error('GTM UATC Events Social Links: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>