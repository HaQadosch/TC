<script>
(function gtm_uatcAccom(jQ, cdl, uadl, w, dl) {
    'use strict';
    if (jQ && cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaprod = uadl.webanalytics.addproduct || {}


        if (!w.ga || w.ga.length < 1)  { 
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        };

        w.ga && w.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (trc) {
                //console.info('trc', trc)
                trc.plugins_ && console.info('plugins', trc.plugins_.keys) || console.info('no plugins') 
                //console.info('clientID', trc.get('clientId'))
            } else {
                //console.info('no trc')
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
                //console.info('trc', trc)
                //console.info('clientID', trc.get('clientId'))
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

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
        
        /*
        w.ga(function() {
            cdl.CATTParams.gaguid = ((ga.getByName('CATTUATC').get('clientId') || ['.']).split('.') || '')[0] || cdl.CATTParams.gaguid || ''
        });
        w.ga(trackerName+'set', 'dimension51', cdl.CATTParams.gaguid);*/

        var myaccuserid = '';
        jQuery.when(jQuery.ajax('/api/users')).done(function(a, b, x){ myaccuserid = (x.responseJSON && x.responseJSON.id) || ''});
        if (window.userId || myaccuserid) {sendSet['dimension52'] = window.userId || myaccuserid};
        var timestamp = +new Date(window.Date && window.Date.now() || 0);

        if (/\/srv-search\/search/.test(document.referrer)) {   
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
                trc.send('event', 'ECProductListClick', uaprod.id,  ''+uaprod.position, 1, {'nonInteraction': true});
                dl.push({'event': 'UATCECDL Accom EC'})
        };

        sendSet['page'] = uawa.page;
        trc.send('pageview', sendSet);

        (function gtm_uatcAccomAddProductListView(){
            w.ga(trackerName+'ec:addProduct', {
                'id'        : uaprod.id || '',
                'name'      : uaprod.name || '',
                'category'  : uaprod.category || '',
                'brand'     : uaprod.brand || '',
                'variant'   : uaprod.variant || ''
            });

            w.ga(trackerName+'ec:setAction', 'detail');
            trc.send('event', 'ECProductView', uaprod.id, ''+uaprod.position, 1, {'nonInteraction': true});
            dl.push({'event': 'UATCECaddProduct'});
        }());

        if (ux) {window.ECEOP.pageview = []};

        for (evt in uawa.events) {
            var gevt = uawa.events[evt]
            var timestamp = +new Date(window.Date && window.Date.now() || 0);
            if (gevt.action) {w.ga(trackerName+'send','event'
                                        , gevt.category, gevt.action,  gevt.label, gevt.value
                                        , { 'page': gevt.page || location.pathname+(location.search || '') || '',
                                            'dimension51': cdl.CATTParams && cdl.CATTParams.gaguid || 'empty',
                                            'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(timestamp)+' '+cdl.gatime(timestamp) || '',
                                            'dimension75': ''+(timestamp || 0)}
                                        , {'nonInteraction': gevt.noninteraction})};
        };        

        jQ('button.btn.btn-block.btn-default.src-accomHighlights-videoButton').on('click',function(e){
            var cdl = window.CATTDL || {};
            var cdpm = cdl && cdl.CATTParams    
            var trc = ga.getByName(cdl.DL_uatc && cdl.DL_uatc.name);
            trc.send('event'
                        , 'Videoclicks'
                        , 'Hotelvideo'
                        , (cdpm.lob || '')+'|'+(cdpm.holidaytype || '')+'|'+(cdpm.pageid || '')+'|'+(cdpm.accomguid || 'accomguid')
                        , {'nonInteraction': true});
        });
    }); 
        dataLayer.push({'event': 'UATC 3 Accom'})
    } catch(e) {
        cdl.error('GTM UK TC UATC Accom: '+e); 
    } finally {
        dataLayer.push({'event': 'UATCECaddProduct'})
    }
    return jQ && cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, window.dataLayer))
</script>
