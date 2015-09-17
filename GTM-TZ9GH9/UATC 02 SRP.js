<script id='GTM-TZ9GH9_uatcSRP'>
(function gtm_uatcSRP(jQ, cdl, uadl, w, d, dl){
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
                var trc = w.ga.getByName(uadl.name);
                if (!trc) { trc = w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name}) }
            
                w.ga(function gtm_useTracker(){
                    trc = w.ga.getByName(uadl.name)
                    if (userId) { trc.set('&uid', userId) };
                    for (var setOption in uadl.set) {trc.set(setOption, uadl.set[setOption])};

                    if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) {trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures')};
                    if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) {trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js')};
                    cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || '';
                    uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'});

                    var sendSet = {};
                    sendSet['page'] = uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || ''));
                    
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
                    };

                    w.ga(trackerName+'send','pageview', sendSet);

                    var eventsendSet = {};
                    jQ.extend(eventsendSet, sendSet);
                    delete eventsendSet.dimension12;
                    eventsendSet.dimension55 = 'event';

                    var accoms = [];
                    (function gtm_uatcSRPAddImpressions(){
                        var curUAImp = {}
                        if (uawa.nbrimpressions && uawa.addimpression && uawa.addimpression.length){
                                for (var i = 0; i < uawa.nbrimpressions; i++){
                                    curUAImp = uaImp[i] || {}
                                    w.ga(trackerName+'ec:addImpression', {
                                              'id':             curUAImp.id || '',
                                              'name':           curUAImp.name || '',
                                              'category':       curUAImp.category || '',
                                              'brand':          curUAImp.brand || '',
                                              'variant':        curUAImp.variant || '',
                                              'list':           curUAImp.list || '',
                                              'position':       curUAImp.position || '',
                                              'dimension27':    curUAImp.dimension27 || ''
                                    })
                                }               
                                for (i = 0; i < uawa.nbrimpressions; accoms.push((uaImp[i++].id) || ""));
                                w.ga(trackerName+'send','event', 'viewAddImpression', (uaImp[0].list || "")
                                    ,  (accoms && accoms.toString() || "")
                                    , 1
                                    , eventsendSet
                                    , {'nonInteraction': true});
                            
                            };
                    }());
                    for (var evt in uawa.events) {
                        var gevt = uawa.events[evt]
                        if (gevt.action) (w.ga(trackerName+'send','event', gevt.category, gevt.action,  gevt.label, gevt.value
                            , eventsendSet
                            , {'nonInteraction': gevt.noninteraction}));
                    };

                    if (ux) {window.ECEOP.pageview = []};
                })
        })

        var cntTZ9GH9 = 0; if (window.dataLayer_TZ9GH9) {window.dataLayer_TZ9GH9.forEach(function(e){if(e.event === 'UATC SRP'){cntTZ9GH9 = cntTZ9GH9 + 1}})};
        dl.push({'event': 'UATC SRP', 'counter': cntTZ9GH9});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATC SRP', 'counter': cntTZ9GH9});
    } catch(e) {
        cdl.error('GTM UK TC UATC SRP: '+e)
    } finally {
        var counter = 0;
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.forEach(function(e){if(e.event === 'UATC SRP'){counter = e.counter || 0}});
        window.dataLayer_M8NMSC && dataLayer_M8NMSC.push({'event' : 'uapageview'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || 'home')+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '/'), 'counter': counter});
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>