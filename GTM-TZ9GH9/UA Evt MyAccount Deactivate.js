<script id='GTM-TZ9GH9_evtMyAccountDeactivate'>
(function gtm_uaEvtMyAccount(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || "";
        var cdpm = cdl.CATTParams;
        var uawa = uadl.webanalytics || {};
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || location.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || location.search || '';
        var lochref = cdurl && cdurl.fullurl || location.href || '';
        var lochost = location.hostname || location.host || '';        

        if(!/gtm_uabound/i.test(jQ('#idRemoveAccount').attr('class'))){
            jQ('#idRemoveAccount').addClass('gtm_uabound'); 
            jQ('#idRemoveAccount').on('click',function(e){ 
                w.ga(trackerName+'send','event'
                    , 'MyAccount Deactivate'
                    , w.userId
                    , cdurl.fullurl || d.URL || location.href || ''
                    , 1
                    , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51': cdpm.gaguid || ''
                        ,'dimension52' : w.userId || ''
                        ,'dimension54' : jQ(this).attr('id') && jQ(this).attr('id').toString() || ''
                        ,'dimension55': 'event'
                        ,'dimension65': cdl.gadate && cdl.gatime && w.Date && cdl.gadate(w.Date.now())+' '+cdl.gatime(w.Date.now()) || ''
                        ,'dimension75': ''+(w.Date && w.Date.now() || 0)
                    }
                    , {'nonInteraction': 1, 'location': uawa.location});
            });
        };
    } catch(e) {
        cdl.error('GTM UK TC UA Evt My Account Deactivate: '+e)
    } 
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>