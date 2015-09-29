<script id='GTM-P2C3FL_evtMyAccountResetPW'>
(function gtm_evtMyAccountResetPW(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
        var uawa = uadl.webanalytics || {};
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
                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && w.Date && cdl.gadate(w.Date.now())+' '+cdl.gatime(w.Date.now()) || ''
                ,'dimension75'  : ''+(w.Date && w.Date.now() || 0)
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
        }
            var evtcategory = 'MyAccount ResetPassword';
            var evtaction = w.userId;
            var evtlabel = cdurl.fullurl || d.URL || location.href || '';
            var evtvalue = 1;
            var evtnoninteraction = 0;
            UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);

    dl.push({'event': 'UA Evt MyAccount Reset Password'});
    window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UA Evt MyAccount Reset Password'});

    } catch(e) {
        cdl.error('GTM UK TC UA Evt MyAccount Reset Password: '+e)
    } 
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>