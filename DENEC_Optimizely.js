try{
    window['optimizely'] = window['optimizely'] || [];
    // Tracking of the conversion value for Optimizely
    window['optimizely'].push(['trackEvent', 'purchase_complete', {'revenue': parseInt(window.CATTParams.BookingValue*100)}]);
}catch(e){console && console.log && console.log("DE NEC Optimizely Revenue Tag 1: " + e)}

<script id='gtm_optimizelyRevenue'>
(function gtm_optimizelyRevenueDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_optimizelyrevenue = {
            revenue : parseInt((cdpm.bookingvalue || 0)*100),
            event : 'purchase_complete'
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Optimizely Revenue DL: '+e);
    } finally {
        edl.push({'event':'DL OptiRevenue'});
    }
    return cdl && edl && cdl.DL_optimizelyrevenue;
}(window.CATTDL, window.externaldataLayer));

(function gtm_optimizelyRevenue(jQ, edl, cdl, redl){
    'use strict';
    if (jQ && edl && cdl && redl) try {
        window.optimizely = window.optimizely || [];
        window.optimizely.push(['trackEvent', 'purchase_complete', {'revenue': redl.revenue || 0}]);
    } catch(e) {
        cdl.error && cdl.error('GTM Optimizely Revenue: '+e);
    } finally {
        edl.push({'event':'OptiRevenue'});
    }
    return jQ && edl && cdl && redl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_optimizelyrevenue))
</script>


try{
    window['optimizely'] = window['optimizely'] || [];
    // Activating Universal Analytics
    window['optimizely'].push(['activateUniversalAnalytics']);
}catch(e){console && console.log && console.log("DE NEC Optimizely UA Tag 1: " + e)}

<script id='gtm_optimizelyUA'>
(function gtm_optimizelyUADL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_optimizelyua = {
            event : 'activateUniversalAnalytics'
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Optimizely UA DL: '+e);
    } finally {
        edl.push({'event':'DL OptiUA'});
    }
    return cdl && edl && cdl.DL_optimizelyua;
}(window.CATTDL, window.externaldataLayer));

(function gtm_optimizelyUA(jQ, edl, cdl, uadl){
    'use strict';
    if (jQ && edl && cdl && uadl) try {
        window.optimizely = window.optimizely || [];
        window.optimizely.push(['activateUniversalAnalytics']);
    } catch(e) {
        cdl.error && cdl.error('GTM Optimizely UA: '+e);
    } finally {
        edl.push({'event':'OptiUA'});
    }
    return jQ && edl && cdl && uadl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_optimizelyua))
</script>
