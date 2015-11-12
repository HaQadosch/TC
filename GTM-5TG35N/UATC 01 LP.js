<script id='gtm_uatcLP'>
(function gtm_uatcLP(jQ, cdl, uadl, w, dl){
    'use strict';
    if (cdl && uadl) try{
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};
        var cdpm = cdl.CATTParams || {};

        if (!window.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (trc) {
                trc.plugins_ && console.info('plugins', trc.plugins_.keys) || console.info('no plugins') 
            } else {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
                for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            }
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
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

            var eventsendSet = {};
            jQ.extend(eventsendSet, sendSet);
            delete eventsendSet.dimension12;
            eventsendSet.dimension57 = 'event';
            eventsendSet.nonInteraction = true;

            for (var evt in uawa.events) {
                var gevt = uawa.events[evt]
                if (gevt.action) {w.ga(trackerName+'send','event', gevt.category, gevt.action,  gevt.label, gevt.value
                    , eventsendSet
                )};
            };
            dl.push({'event': 'UATC LP'});
            window.gatcDL && gatcDL.push({'event': 'UATC LP'});
        })
    } catch(e) {
        cdl.error('GTM BE PEG UATC LP: '+e)
    } finally {
        window.externalLayer && externalLayer.push({'event' : 'uapageview'+'|'+'home'+'|'+(location.pathname || '')})
    }
    return  
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, window.dataLayer))
</script>