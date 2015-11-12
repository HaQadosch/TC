<script id='GTM-MSD88R_uatcLP'>
(function gtm_uatcLP(jQ, cdl, uadl, w){
    'use strict';
    if (cdl && uadl) try{
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};
        var cdpm = cdl.CATTParams || {};
        var cdurl = {};
        var ld = cdl._;
        cdurl.pathname = location.pathname || '/';
        cdurl.paramstring = location.searches || '';

        if( !w.ga || ld(w.ga).isEmpty() ) {w.ga=w.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date};

        var userId = (cdpm.user && cdpm.user.id) || '';

        w.ga && !ld(w.ga).isEmpty() && w.ga(function gtm_getTracker(){
                var tracker = w.ga.getByName(uadl.name);
                if (!tracker) { w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name}) };

                w.ga(function gtm_gaTrack(){
                        var trc = ga.getByName(uadl.name)
                        for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
                        if (userId) { trc.set('&uid', userId) };

                        if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
                        cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || '';
                        cdl.CATTParams.gaclientid =  trc.get('clientId')  || cdl.CATTParams.gaclientid || '';
                        uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa);

                        var sendSet = {};
                        var ux = window.ECEOP || '';
                        if (ux){
                            jQ.each(ux && ux.pageview || [], function ux_keyDimension(kDim, vDim){
                                jQ.each(vDim, function uxvalDimension(_, val){val && (sendSet['dimension'+vDim.dimension]=val)})
                            })
                        };            
                        if (jQ){
                            jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                                jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                            })
                            jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                                jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                            })  
                        }
                        sendSet['page'] = uawa.page;            
                        w.ga(trackerName+'send','pageview', sendSet);

                        for (var evt in uawa.events) {
                            var gevt = uawa.events[evt]
                            var timestamp = +new Date(window.Date && window.Date.now() || 0);
                            if (gevt.action) {trc.send('event'
                                                        , gevt.category, gevt.action,  gevt.label, gevt.value
                                                        , { 'page': gevt.page || location.pathname+(location.search || '') || ''
                                                            ,'dimension51': cdpm.gaguid || 'empty'
                                                            ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(timestamp)+' '+cdl.gatime(timestamp) || ''
                                                            ,'dimension75': ''+(timestamp || 0)
                                                            ,'nonInteraction': gevt.noninteraction})};
                        };

                        if (ux) {window.ECEOP.pageview = []};

                    window.dataLayer_MSD88R.push({'event':'UATC LP'})
                })
        })
    } catch(e) {
        cdl.error('GTM UK TC UATC LP: '+e)
    } 
    return jQ && cdl && uadl
}(!window.CATTDL?!1:window.CATTDL.jQ, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>