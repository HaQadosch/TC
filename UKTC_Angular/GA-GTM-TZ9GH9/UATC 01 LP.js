<script id='gtm_uatcLP'>
(function gtm_uatcLP(jQ, cdl, uadl, w){
    'use strict';
    if (cdl && uadl) try{
        var trackerName = (uadl.name+".") || ""
        var cdpm = cdl.CATTParams;
        var uawa = uadl.webanalytics || {};
        var cdurl = cdpm.urlparams || {};

        if (!window.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name);
      if (trc) {
        console.info('trc', trc) 
        trc.plugins_ && console.info('plugins', trc.plugins_.keys) || console.info('no plugins') 
        console.info('clientID', trc.get('clientId'))
      } else {
        console.info('no trc') 
        w.ga('create', uadl.profileid, uadl.cookiedomain, {
          'name': uadl.name
        }) 
        trc = ga.getByName(uadl.name) 
        console.info('trc', trc) 
        console.info('clientID', trc.get('clientId')) 
        for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
      }
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
            sendSet['dimension52'] = window.userId || '';
            w.ga(trackerName+'send','pageview', sendSet);  

            for (evt in uawa.events) {
                var gevt = uawa.events[evt]
                var timestamp = +new Date(window.Date && window.Date.now() || 0);
                if (gevt.action) {trc.send('event'
                                            , gevt.category, gevt.action,  gevt.label, gevt.value
                                            , { 'dimension51': cdpm.gaguid || ''
                                                ,'dimension55': 'event'
                                                ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(timestamp)+' '+cdl.gatime(timestamp) || ''
                                                ,'dimension75': ''+(timestamp || 0)}
                                            , {'nonInteraction': gevt.noninteraction})};
            };

            if (ux) {window.ECEOP.pageview = []};

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
                            ,'dimension52' : window.userId || ''
                            ,'dimension54' : jQ(this).attr('id') && jQ(this).attr('id').toString() || ''
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
                            ,'dimension52' : window.userId || ''
                            ,'dimension54' : jQ(this).attr('id') && jQ(this).attr('id').toString() || ''
                            ,'dimension55': 'event'
                            ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                            ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        }
                        , {'nonInteraction': true, 'location': uawa.location});
                });
            };
            if(!/gtm_uabound/i.test(jQ('#idRemoveAccount').attr('class'))){
                jQ('#idRemoveAccount').addClass('gtm_uabound'); 
                jQ('#idRemoveAccount').on('click',function(e){ 
                    w.ga(trackerName+'send','event'
                        , 'MyAccount Deactivate'
                        , window.userId
                        , cdurl.fullurl || document.URL || location.href || ''
                        , 1
                        , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                            ,'dimension51': cdpm.gaguid || ''
                            ,'dimension52' : window.userId || ''
                            ,'dimension54' : jQ(this).attr('id') && jQ(this).attr('id').toString() || ''
                            ,'dimension55': 'event'
                            ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                            ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        }
                        , {'nonInteraction': true, 'location': uawa.location});
                });
            };          
        });
        dataLayer.push({'event': 'UATC LP'});
        window.gatcDL && gatcDL.push({'event': 'UATC LP'});
        
    } catch(e) {
        cdl.error('GTM UK TC UATC LP: '+e)
    } finally {
        window.externalLayer && externalLayer.push({'event' : 'uapageview'+'|'+'home'+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '')});
    }
    return  
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>
