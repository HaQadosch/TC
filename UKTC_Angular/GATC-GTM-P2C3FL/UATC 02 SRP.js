<script>
(function gtm_uatcSRP(jQ, cdl, uadl, w, dl, d){
    'use strict';
    if (jQ && cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaImp = uadl.webanalytics.addimpression || [];

        if (!window.ga || window.ga.length < 1)  { 
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        };

        w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
        for (var setOption in uadl.set) w.ga(trackerName+'set', setOption, uadl.set[setOption]);
        w.ga(trackerName+'require', 'displayfeatures');
        w.ga(trackerName+'require', 'ec', 'ec.js')

       var ux = window.ECEOP || '';
        if (ux){
            jQ.each(ux && ux.pageview || [], function ux_keyDimension(kDim, vDim){
            jQ.each(vDim, function uxvalDimension(_, val){val && w.ga(trackerName+'set', kDim, val)})
            })
        };
        if (jQ){
            jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
                jQ.each(vDim, function valDimension(_, val){val && w.ga(trackerName+'set', kDim, val)})
            })
            jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
                jQ.each(vMet, function valMetrics(_, val){val && w.ga(trackerName+'set', kMet, val)})
            })  
        };

        w.ga(function() {
            cdl.CATTParams.gaguid = ((ga.getByName('CATTUATC').get('clientId') || ['.']).split('.') || '')[0] || cdl.CATTParams.gaguid || ''
        });   
        w.ga(trackerName+'set', 'dimension51', cdl.CATTParams.gaguid);

        var myaccuserid = '';
        jQuery.when(jQuery.ajax('/api/users')).done(function(a, b, x){ myaccuserid = (x.responseJSON && x.responseJSON.id) || ''});
        if (window.userId || myaccuserid) {w.ga(trackerName+'set', 'dimension52', window.userId || myaccuserid || '')};

        var timestamp = +new Date(window.Date && window.Date.now() || 0);

        w.ga(trackerName+'send', 'pageview', {'page': uawa.page});

        (function gtm_uatcSRPAddImpressions(){
            if (uawa.nbrimpressions){
                for (var i = 0; i<uawa.nbrimpressions; i++){
                    w.ga(trackerName+'ec:addImpression', {
                              'id':             uaImp[i].id,
                              'name':           uaImp[i].name,
                              'category':       uaImp[i].category,
                              'brand':          uaImp[i].brand,
                              'variant':        uaImp[i].variant,
                              'list':           uaImp[i].list,
                              'position':       uaImp[i].position,
                              'dimension27':    uaImp[i].dimension27
                    })
                    if (i && !(i%3)) {
                        w.ga(trackerName+'ec:setAction', 'view', {'list': uaImp[i].list});
                        w.ga(trackerName+'send', 'event', 'viewAddImpression',  uaImp[i].list,  i+'/'+uawa.nbrimpressions, 1, {'nonInteraction': true, 'location': uawa.location})
                    }               
                }
                i = uawa.nbrimpressions-1;
                if (i%3) {
                    w.ga(trackerName+'ec:setAction', 'view', {'list': uaImp[i].list});
                    w.ga(trackerName+'send', 'event', 'viewAddImpression',  uaImp[i].list,  i+'/'+uawa.nbrimpressions, 1, {'nonInteraction': true, 'location': uawa.location});                         
                }                           
            }
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
      
        dl.push({'event': 'UATCECaddImpression'});
        
    } catch (e){cdl.error('GTM UK TC UATC SRP: '+e)}
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, window.dataLayer, window.document))
</script>
