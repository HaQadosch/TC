/*
* Tracking of the conversion value for Optimizely
try{
    window['optimizely'] = window['optimizely'] || [];
    window['optimizely'].push(['trackEvent', 'purchase_complete', {'revenue': parseInt(window.CATTParams.BookingValue*100)}]);
}catch(e){console && console.log && console.log("DE TC Optimizely Revenue Tag 1: " + e)}

*/
//<script id='gtm_optimizelyRevenue'>
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
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_optimizelyrevenue));
//</script>

