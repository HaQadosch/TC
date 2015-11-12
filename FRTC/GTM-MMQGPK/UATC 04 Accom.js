<script id='gtm_uatcAccom'>
(function gtm_uatcAccom(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaprod = uawa.addproduct || {}
        var cdpm = CATTDL.CATTParams || {}

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        w.ga && w.ga(function gtm_useTracker() {
            var trc = w.ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = w.ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdpm.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdpm.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdpm.gaguid || 'empty'}) || console.info('err', uawa)

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
            };
            if (cdpm.trailingsteps.replace(/.*accom\((\d)\).*$/g, '$1') === '1') {  
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'      : uaprod.name,
                    'category'  : uaprod.category,
                    'brand'     : uaprod.brand,
                    'variant'   : uaprod.variant,
                    'list'      : uaprod.list,
                    'position'  : uaprod.position
                });
                w.ga(trackerName+'ec:setAction', 'click', {'list': uaprod.list});
                w.ga(trackerName+'send','event', 'ECProductListClick', uaprod.id,  ''+uaprod.position, 1, {'nonInteraction': true});
                dl.push({'event': 'UATCEC productclick'})
            };
            sendSet['page'] = uawa.page;
            w.ga(trackerName+'send','pageview', sendSet);  
            if (ux) {window.ECEOP.pageview = []};
            
            var interactionCounter = 1;
            jQ('a.voir[id!=link-availibility]').on('click', function gtm_clickAddProduct(e){

                var onclk = jQ(e.target).attr('onclick') || '';
                onclk = onclk && onclk.split(/\('|'\)/g) || '';
                onclk = onclk && onclk.length > 2 && parseInt(onclk[1]) || ''

                var resa = w.tagManageribe && w.tagManageribe.length && w.tagManageribe[0] || ''
                resa = resa && resa.offerList && resa.offerList.length > onclk && resa.offerList || ''
                resa = (resa && resa.filter(function(e){return typeof e.orderDisplay !== 'undefined' && e.orderDisplay === onclk}) || ['']).pop()
    
                var variant = ((cdpm.boardbasis || "")+'|'+
                (resa && resa.offerDepartureAirport && resa.offerDepartureAirport.replace(/^([^;]+).*/, '$1') || '')+'|'+
                (resa && resa.offerDate || '')+'|'+
                (cdl.gadate && cdl.gadate(cdpm.retdate || 0) || "")+'|'+
                (cdpm.paxtotal || "0")+'|'+
                (cdpm.paxadult || cdpm.srchnbradults || "0")+'|'+
                (cdpm.paxchild || "0")+'|'+
                (cdpm.paxinfant || "0")+'|'+
                (resa && resa.offerBestPrice || "0")).toLowerCase()

                w.ga(trackerName+'ec:addProduct', {
                    'id': uaprod.id,
                    'name': uaprod.name,
                    'category': uaprod.category,
                    'brand': (resa && resa.offerTourOperator || '').toLowerCase(),
                    'variant': variant
                });
                w.ga(trackerName+'ec:setAction', 'detail');
                w.ga(trackerName+'send','event', 'ECProductView', uaprod.id, ''+(interactionCounter++));
                dl.push({'event': 'UATCEC productview'});
            });
        })
        dataLayer.push({'event': 'UATC Accom'})
    } catch(e) {
        cdl.error('GTM FR TC UATC Accom: '+e);
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>
