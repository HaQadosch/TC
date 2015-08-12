<script id='gtm_uatcAccom'>
(function gtm_uatcAccom(jQ, cdl, uadl, w, d, dl){
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
        var searchseo = ''; Object.getOwnPropertyNames(window.getPageData() || {}).forEach(function(val, idx, array) {if(/\/holidays\/.+\/.+/i.test(val) && window.getPageData(val)) {searchseo = val}});
        var wgdSrch = window.getPageData && window.getPageData('/search') || window.getPageData('searchresults-map') || window.getPageData(searchseo) || {};

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (trc) {
            } else {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'})

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
            
            sendSet['page'] = uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || ''));
            eventsendSet = {};
            jQ.extend(eventsendSet, sendSet);
            delete eventsendSet.dimension12;
            eventsendSet.dimension55 = 'event';

            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
            var uaprod = uadl.webanalytics.addproductlist || {};
            if (wgdSrch && params && params.previouspageid && (params.previouspageid === 'search' || params.previouspageid === 'searchmap' || params.previouspageid === 'searchseo')) { 
                /*w.sessionStorage.getItem('gtm_previouspageid') === 'search' && wgdSrch*/    
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
                w.ga(trackerName+'send','event', 'ECProductListClick', uaprod.id
                            ,  ''+uaprod.position
                            , 1
                            , eventsendSet
                            , {'nonInteraction': true});
                dl.push({'event': 'UATCEC productclick'})
            };
            w.ga(trackerName+'send','pageview', sendSet);     

            //function gtm_uatcAccomAddProductListView(){
            if(cdpm.pageid !== 'accomcalendar'){
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id || '',
                    'name'      : uaprod.name || '',
                    'category'  : uaprod.category || '',
                    'brand'     : uaprod.brand || '',
                    'variant'   : uaprod.variant || ''
                });

                w.ga(trackerName+'ec:setAction', 'detail');
                w.ga(trackerName+'send','event', 'ECProductView'
                        , uaprod.id || 'error'
                        ,  ''+(uaprod.position || 0)
                        , 1
                        , eventsendSet
                        , {'nonInteraction': true});
                dl.push({'event': 'UATCEC productview'});
            };
            for (evt in uawa.events) {
                var gevt = uawa.events[evt]
                if (gevt.action) (w.ga(trackerName+'send','event', gevt.category, gevt.action,  gevt.label, gevt.value
                    , eventsendSet
                    , {'nonInteraction': gevt.noninteraction}));
            };
            if (ux) {window.ECEOP.pageview = []};

            jQ('button.close').on('click',function(){
                var cdl = window.CATTDL || {};
                var cdpm = cdl && cdl.CATTParams || {};
                var trackerName = (cdl.DL_uatc && cdl.DL_uatc.name+".") || "";
                w.ga(trackerName+'send','event'
                    , 'Videoclosed'
                    , 'Hotelvideo'
                    , (cdpm.lob || '')+'|'+(cdpm.holidaytype || '')+'|'+(cdpm.pageid || '')+'|'+(cdpm.accomguid || 'accomguid')
                    , 1
                    , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51': cdpm.gaguid || 'empty'
                        ,'dimension55': 'event'
                        ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (locpathname || '')
                        ,'dimension119': (locsearch || '')                    
                    }
                    , {'noninteraction': true});
            });
            if(!/gtm_uabound/i.test(jQ('#sendResetPassword').attr('class'))){
                jQ('#sendResetPassword').addClass('gtm_uabound'); 
                jQ('#sendResetPassword').on('click',function(e){ 
                    w.ga(trackerName+'send','event'
                        , 'MyAccount ResetPassword'
                        , window.userId
                        , cdurl.fullurl || document.URL || location.href || ''
                        , 1
                        , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                            ,'dimension51': cdpm.gaguid || ''
                            ,'dimension52': window.userId || ''
                            ,'dimension54': jQ(this).attr('id') && jQ(this).attr('id').toString() || ''
                            ,'dimension55': 'event'
                            ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                            ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        }
                        , {'nonInteraction': true, 'location': uawa.location});
                });
            };
            if(!/gtm_uabound/i.test(jQ('button.btn.btn-default.active.alertActBtn').attr('class'))){
                jQ('button.btn.btn-default.active.alertActBtn').addClass('gtm_uabound'); 
                jQ('button.btn.btn-default.active.alertActBtn').on('click',function(e){ 
                    w.ga(trackerName+'send','event'
                        , 'MyAccount ResendActivationEmail'
                        , window.userId
                        , cdurl.fullurl || document.URL || location.href || ''
                        , 1
                        , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                            ,'dimension51': cdpm.gaguid || ''
                            ,'dimension52': window.userId || ''
                            ,'dimension54': jQ(this).attr('id') && jQ(this).attr('id').toString() || ''
                            ,'dimension55': 'event'
                            ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                            ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        }
                        , {'nonInteraction': true, 'location': uawa.location});
                });
            };
        });
        var cntTZ9GH9 = 0; window.cntTZ9GH9.forEach(function(e){if(e.event === 'UATC Accom'){cntTZ9GH9 = cntTZ9GH9 + 1}})
        dl.push({'event': 'UATC Accom', 'counter': cntTZ9GH9});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATC Accom', 'counter': cntTZ9GH9});

    } catch(e) {
        cdl.error('GTM UK TC UATC Accom: '+e);
    } finally {
        var counter = 0;
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.forEach(function(e){if(e.event === 'UATC Accom'){counter = e.counter || 0}});         
        window.externalLayer && externalLayer.push({'event' : 'uapageview'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || 'home')+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '/'), 'counter': counter});
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>
