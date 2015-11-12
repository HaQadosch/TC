<script id='GTM-TZ9GH9_evtdebugEvent'>
(function gtm_evtdebugEvent(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) 
        try 
    {
        var cdpm = cdl.CATTParams || [];
        var wgD = window.getPageData(location.pathname);
        var uawa = uadl.webanalytics || {};

        function getCookie(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;}
        function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear())};
        function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'))};

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName('CATTUATC')
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName('CATTUATC')
            };
            var uatrc = (uadl.name+".") || 'CATTUATC.' || ".";
            var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || 'CATTGATC.' || ".";

            function UAevent(category,action,label,value,noninteraction) {
                w.ga(uatrc+'send', 'event'
                , category
                , action
                , label
                , 1
                , { 'page'              : uawa.page || location.pathname+location.search || ''
                    ,'dimension1'       : cdpm.deptairport || ''
                    ,'dimension2'       : cdpm.destination || ''
                    ,'dimension5'       : gadate && gadate(cdpm.deptdate || 0)
                    ,'dimension10'      : cdpm.lob || ''
                    ,'dimension11'      : cdpm.holidaytype || ''
                    ,'dimension12'      : cdpm.pageid || ''
                    ,'dimension14'      : cdpm.sessionid || ''
                    ,'dimension16'      : cdpm.accomcode || ''
                    ,'dimension17'      : cdpm.accomname || ''
                    ,'dimension22'      : cdpm.destairport || ''
                    ,'dimension51'      : cdpm.gaguid || (getCookie('_ga') || '...').split('.').splice(2).join('.') || ''
                    ,'dimension55'      : 'event'
                    ,'dimension58'      : cdpm.accomguid || ''
                    ,'dimension65'      : gadate && gatime && window.Date && gadate(window.Date.now())+' '+gatime(window.Date.now()) || ''
                    ,'dimension75'      : ''+(window.Date && window.Date.now() || 0)
                    ,'dimension80'      : cdpm.tc_basket_id || JSON.parse(getCookie('tc_basket_id')) || ''
                    ,'dimension118'     : location.pathname || ''
                    ,'dimension119'     : location.search || ''
                    ,'nonInteraction'   : noninteraction
                });
            };
            // function GAevent(category,action,label,value,noninteraction) {
            //     w._gaq.push([gatrc+'_trackEvent'
            //     , category
            //     , action
            //     , label
            //     , value  
            //     , {'noninteraction': noninteraction}]); 
            // };

            var evtcategory = 'Checkout Debug Events';
            var evtaction = {{id}}+'|'+{{element}};
            var evtlabel = {{status}};
            var evtvalue = 1;
            var evtnoninteraction = 1;
            UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            // GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
        });
    } catch(e) {
        cdl.error('GTM Evt Checkout Debug Event: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>