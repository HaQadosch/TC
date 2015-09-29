<script id='GTM-TZ9GH9_uatcBook'>
(function gtm_uatcBook(jQ, cdl, uadl, w, d, dl) {
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
        var uaprod = uadl.webanalytics.addproduct || {};
        var uapurch = uadl.webanalytics.purchase || {};

        if(!w.ga || w.ga.length < 1) {w.ga=w.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date};

        var userId = (cdpm.user && cdpm.user.id) || '';

        w.ga && w.ga(function gtm_getTracker(){
                var trc = w.ga.getByName(uadl.name);
                if (!trc) { trc = w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name}) }

                w.ga(function gtm_gaTrack(){
                    trc = w.ga.getByName(uadl.name)
                    if (userId) { trc.set('&uid', userId) };
                    for (var setOption in uadl.set) {trc.set(setOption, uadl.set[setOption])};
                        
                    if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
                    if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
                    cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
                    uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'})

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
                    var prodDimMet = {
                            'id'        : uaprod.id,
                            'name'      : uaprod.name,
                            'category'  : uaprod.category,
                            'brand'     : uaprod.brand,
                            'variant'   : uaprod.variant,
                            'price'     : uaprod.price,
                            'quantity'  : uaprod.quantity
                    };      
                    if (jQ){
                        jQ.each(uawa && uawa.proddimensions || [], function gtm_prodDimension(pkDim, pvDim){
                            jQ.each(pvDim, function pvalDimension(_, val){val && (prodDimMet[pkDim]=val)})
                        })
                        jQ.each(uawa && uawa.prodmetrics || [], function gtm_prodMetrics(pkMet, pvMet){
                            jQ.each(pvMet, function pvalMetrics(_, val){val && (prodDimMet[pkMet]=val)})
                        })  
                    };
      
                    w.ga(trackerName+'send','pageview', sendSet);                       
                    
                    var eventsendSet = {};
                    jQ.extend(eventsendSet, sendSet);
                    delete eventsendSet.dimension12;
                    eventsendSet.dimension55 = 'event';
                    eventsendSet.nonInteraction = 1;

                    if (cdpm.pageid === 'booking') {
                        var sendSetPurchase = {};
                        jQ.extend(sendSetPurchase, sendSet);
                        sendSetPurchase.dimension12 = 'purchase';
                        sendSetPurchase.dimension55 = 'event';
                        sendSetPurchase.nonInteraction = 1;

                        w.ga(trackerName+'ec:addProduct', prodDimMet);
                        w.ga(trackerName+'ec:setAction','purchase', {
                            'id'            : uapurch.id,
                            'affiliation'   : uapurch.affiliation,
                            'revenue'       : uapurch.revenue,
                            'tax'           : uapurch.tax,
                            'shipping'      : uapurch.shipping,
                            'coupon'        : uapurch.coupon
                        });
                       w.ga(trackerName+'send','event', 'ECPurchase', uaprod.id
                                    ,  ''+uaprod.position
                                    , 1
                                    , sendSetPurchase);
                    };

                    if (ux) {window.ECEOP.pageview = []};            

                    for (evt in uawa.events) {
                        var gevt = uawa.events[evt]
                        if (gevt.action) (w.ga(trackerName+'send','event', gevt.category, gevt.action,  gevt.label, gevt.value
                            , eventsendSet));
                    };
                })
        })                
        var cntTZ9GH9 = 0; window.dataLayer_TZ9GH9.forEach(function(e){if(e.event === 'UATC Book'){cntTZ9GH9 = cntTZ9GH9 + 1}})
        dl.push({'event': 'UATC Book', 'counter': cntTZ9GH9});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATC Book', 'counter': cntTZ9GH9});     
    } catch(e) {
        cdl.error('GTM UK TC UATC Book: '+e);
    } finally {     
        var counter = 0;
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.forEach(function(e){if(e.event === 'UATC Book'){counter = e.counter || 0}});         
        window.dataLayer_M8NMSC && window.dataLayer_M8NMSC.push({'event' : 'uapageview'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || 'home')+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '/'), 'counter': counter});
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>