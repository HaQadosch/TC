<script id='GTM-TZ9GH9_uatcLP'>
(function gtm_uatcLP(jQ, cdl, uadl, w){
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
        var uaImp = uadl.webanalytics.addimpression || [];

        if(!w.ga || w.ga.length < 1) {w.ga=w.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date};

        var userId = (cdpm.user && cdpm.user.id) || '';

        w.ga && w.ga(function gtm_getTracker(){
                var tracker = w.ga.getByName(uadl.name);
                if (!tracker) { tracker = w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name}) }

                w.ga(function gtm_useTracker(){
                    var trc = w.ga.getByName(uadl.name)
                    if (userId) { trc.set('&uid', userId) };
                    for (var setOption in uadl.set) {trc.set(setOption, uadl.set[setOption])};

                    if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures');
                    cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || '';
                    cdl.CATTParams.gaclientid =  trc.get('clientId')  || cdl.CATTParams.gaclientid || '';
                    uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'});

                    var sendSet = {};
                    sendSet['page'] = uawa.page;
                    
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
                    sendSet['dimension52'] = window.userId || '';
                    trc.send('pageview', sendSet);

                    var eventsendSet = {};
                    jQ.extend(eventsendSet, sendSet);
                    delete eventsendSet.dimension12;
                    eventsendSet.dimension55 = 'event';
                    eventsendSet.noninteraction = 1;

                    for (var evt in uawa.events) {
                        var gevt = uawa.events[evt]
                        if (gevt.action) (trc.send('event', gevt.category, gevt.action,  gevt.label, gevt.value
                            , eventsendSet));
                    };

                    if (ux) {window.ECEOP.pageview = []};
                })
        })

        dataLayer.push({'event': 'UATC LP'});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATC LP'});
        
    } catch(e) {
        cdl.error('GTM UK TC UATC LP: '+e)
    } finally {
        window.dataLayer_M8NMSC && dataLayer_M8NMSC.push({'event' : 'uapageview'+'|'+'home'+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '')});
    }
    return cdpm || "";
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>