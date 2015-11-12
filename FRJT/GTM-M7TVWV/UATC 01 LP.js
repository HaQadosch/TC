<script id='gtm_uatcLP'>
(function gtm_uatcLP(jQ, cdl, uadl, w) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};
        var cdpm = cdl.CATTParams || {};

        if (!window.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
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

            if (/circuits-et-croisieres/i.test(location.pathname)) {
                $('a.devis.blc-left.open-contact-form').on('click', function(){    
                        w.ga(trackerName+'send','event', 'quote'
                                    , 'package|circuits'
                                    ,  'demande'
                                    , 1
                                    , { 'dimension51'   : cdpm.gaguid || 'empty'
                                        ,'dimension53'  : 'event'
                                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                        ,'dimension118' : location.pathname || ''
                                        ,'dimension119' : location.search || ''
                                    }                      
                                    , {nonInteraction : false})
                });

                $('button[type="submit"]').on('click', function(){
                    if (($('div.errors').text()).length > 0) {
                        w.ga(trackerName+'send','event', 'quote'
                                    , 'package|circuits'
                                    ,  'envoi'
                                    , 1
                                    , { 'dimension51'   : cdpm.gaguid || 'empty'
                                        ,'dimension53'  : 'event'
                                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                        ,'dimension118' : location.pathname || ''
                                        ,'dimension119' : location.search || ''
                                    }                      
                                    , {nonInteraction : false})
                    }
                });
            }
        })
        dataLayer.push({'event': 'UATC LP'})
    } catch(e) {
        cdl.error('GTM FR JT UATC LP: '+e)
    }
    return  
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>
