<script id='GTM-557RZS_uatcSecure'>
(function gtm_uatcSecure(jQ, cdl, uadl, w, d, dl){
    'use strict'
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};
        var uaprod = uadl.webanalytics.addproduct || {};
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || '';

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (trc) {
                console.info('clientID', trc.get('clientId'))
            } else {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension30 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })  
            }
            sendSet['dimension31'] = window.userId || '';
            sendSet['page'] = uawa.page;
            w.ga(trackerName+'send','pageview', sendSet);

            (function gtm_uatcCustAddProduct(){
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'      : uaprod.name,
                    'category'  : uaprod.category,
                    'brand'     : uaprod.brand,
                    'variant'   : uaprod.variant,
                    'price'     : uaprod.price,
                    'quantity'  : uaprod.quantity                   
                });
                w.ga(trackerName+'ec:setAction','checkout', {'step': 5, 'label': 'secure'})
                w.ga(trackerName+'send','event', 'ECProductView', uaprod.id,  ''+uaprod.position, 1, {'nonInteraction': true});
            }());

            for (evt in uawa.events) {
                var gevt = uawa.events[evt]
                var timestamp = +new Date(window.Date && window.Date.now() || 0);
                if (gevt.action) {w.ga(trackerName+'send','event'
                                            , gevt.category, gevt.action,  gevt.label, gevt.value
                                            , { 'dimension30': cdpm.gaguid || 'empty'
                                                ,'dimension115': (locpathname || '')                                            
                                                ,'dimension119': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(timestamp)+' '+cdl.gatime(timestamp) || ''
                                                ,'nonInteraction': gevt.noninteraction
                                            }
                )};
            };
        })
    } catch(e) {
        cdl.error('GTM NL NEC UATC Secure: '+e); 
    } finally {     
        window.dataLayer && dataLayer.push({'event' : 'UATC Secure'})
        window.dataLayer_557RZS && dataLayer_557RZS.push({'event' : 'UATC Secure'})
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>