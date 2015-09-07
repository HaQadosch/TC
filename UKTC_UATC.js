//<script id='gtm_uatcHP'>
(function gtm_uatcHP(jQ, cdl, uadl, w) {
    'use strict';
    if (jQ && cdl && uadl) try {
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var cdpm = cdl.CATTParams || {};

        w = (function gtm_uatcscript(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return w;})(w,document,'script','//www.google-analytics.com/analytics.js','ga') || w;

        window.setTimeout(function gtm_uatcpostTimeout(){
            try {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name, 'allowLinker' : uadl.allowLinker});
                w.ga(trackerName+'require', 'displayfeatures');
                w.ga(trackerName+'require', 'linker');
                w.ga(trackerName+'linker:autoLink', uadl.autolink);
                var trc = w.ga && w.ga.getByName && w.ga.getByName(uadl.name || '') || '';

                for (var setOption in uadl.set) {w.ga(trackerName+'set', setOption, uadl.set[setOption]);}
                cdl.CATTParams.gaguid =  trc.get && /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || '';
                uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa);

                var ux = window.ECEOP || '';
                if (ux){
                    jQ.each(ux && ux.pageview || [], function ux_keyDimension(kDim, vDim){
                        jQ.each(vDim, function uxvalDimension(_, val){val && w.ga(trackerName+'set', 'dimension'+vDim.dimension, val);});
                    });
                }
                if (jQ){
                    jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
                        jQ.each(vDim, function valDimension(_, val){val && w.ga(trackerName+'set', kDim, val);});
                    });
                    jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
                        jQ.each(vMet, function valMetrics(_, val){val && w.ga(trackerName+'set', kMet, val);});
                    });
                }
                w.ga(trackerName+'send', 'pageview');
                if (ux) {window.ECEOP.pageview = [];}

                for (var evt in uawa.events) {
                    var gevt = uawa.events[evt];
                    var timestamp = +new Date(window.Date && window.Date.now() || 0);
                    if (gevt.action) {
                        trc.send('event', gevt.category, gevt.action,  gevt.label, gevt.value, {
                            'page': gevt.page || location.pathname+(location.search || '') || '',
                            'dimension51': cdpm.gaguid || 'empty',
                            'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(timestamp)+' '+cdl.gatime(timestamp) || '',
                            'dimension75': ''+(timestamp || 0)
                        },
                        {'nonInteraction': gevt.noninteraction});
                    }
                }
            } catch(ee) {
                cdl.error('GTM UATC HP PostTimeOut: '+ee);
            }
        }, 1000);
    } catch(e) {
        cdl.error('GTM UK TC UATC LP: '+e);
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window));
//</script>
