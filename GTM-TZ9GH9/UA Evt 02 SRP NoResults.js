<script id='GTM-TZ9GH9_evtSRPNoResults'>
(function gtm_evtSRPNoResults(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdurl = cdpm.urlparams || {};

        if(!w.ga || w.ga.llength < 1) { w.ga=w.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date; w.ga=w.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date };
       
        var wgD = window.getPageData('/search');
        var eventCat = 'SRP NoResults Change Selection';
        
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
                ,'dimension9'       : cdpm.duration || ''
                ,'dimension16'      : cdpm.accomcode || ''
                ,'dimension17'      : cdpm.accomname || ''
                ,'dimension34'      : ''+(cdpm.paxadult || '')
                ,'dimension35'      : ''+(cdpm.paxchild || '')
                ,'dimension36'      : ''+(cdpm.paxinfant || '')
                ,'dimension37'      : ''+(cdpm.paxtotal || '')
                ,'dimension51'      : cdpm.gaguid || 'empty'
                ,'dimension55'      : 'event'
                ,'dimension65'      : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'dimension75'      : ''+(window.Date && window.Date.now() || 0)
                ,'dimension118'     : (cdurl && cdurl.pathname || location.pathname || '')
                ,'dimension119'     : (cdurl && cdurl.paramstring || location.search || '') 
               ,'nonInteraction'    : noninteraction
            });
        };
        function GAevent(category,action,label,value,noninteraction) {
            w._gaq.push([gatrc+'_trackEvent'
            , category
            , action
            , label
            , value  
            , {'noninteraction': noninteraction}]); 
        }

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            };
            ;
            //SRP No Results change airport link
            if (/NoHolidays-change-airport/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Departure Airport';
                        var evtlabel = location.href || '';
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - NoResults Change DeptAirport: '+e)}
            }
            //SRP No Results change destination link
            if (/NoHolidays-change-destination/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Destination';
                        var evtlabel = location.href || '';
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - NoResults Change Destination: '+e)}
            }
            //SRP No Results change date link
            if (/NoHolidays-change-date/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Dates';
                        var evtlabel = location.href || '';
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - NoResults Change Dates: '+e)}
            }
        });

    dl.push({'event': 'UA Evt SRP NoResults'});
    window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UA Evt SRP NoResults'});

    } catch(e) {
        cdl.error('GTM UK TC UA Evt SRP NoResults: '+e)
    } 
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>