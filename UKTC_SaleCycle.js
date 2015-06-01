/*
 * SaleCycle v1
 */
//<script id='gtm_salecycle'>
(function gtm_SalecycleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        cdl.DL_salecycle = {
            script         : {
                status  : 'not fired',
                url     : '//d16fk4ms6rqz1v.cloudfront.net/capture/thomascook.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_salecycle: "+e);
    } finally {
        dl.push({event: 'Salecycle'});
    }
    return cdl && dl && cdl.DL_salecycle;
}(window.CATTDL, window.externalDataLayer));

(function gtm_Salecycle(jQ, cdl, scdl){
    'use strict';
    if (jQ && cdl && scdl) try {
        if (scdl.script) {
            jQ.ajaxSetup({cache: true});
            jQ.getScript && jQ.getScript(scdl.script.url, function gtm_salecyleScript(){
                scdl.script.status = 'fired';
             });
        }
    } catch(e) {
        cdl.error('GTM Salecyle: '+e);
    }
    return jQ && cdl && scdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_salecycle));
//</script>


/*
 * SaleCycle v2
 */
//<script id='gtm_salecycle'>
(function gtm_SalecycleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams;

        cdl.DL_salecycle = {
            poolTest : /salecycletest/i.test(window.document.URL) || !((cdpm && cdpm.utmaguid || 1)%2) || 0,
            script         : {
                status  : 'not fired',
                url     : '//d16fk4ms6rqz1v.cloudfront.net/capture/thomascook2.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_salecycle: "+e);
    } finally {
        dl.push({event: 'Salecycle'});
    }
    return cdl.DL_salecycle;
}(window.CATTDL, window.externalLayer));

(function gtm_Salecycle(jQ, cdl, scdl){
    'use strict';
    if (jQ && cdl && scdl) try {
        if (scdl.script) {
            jQ.ajaxSetup({cache: true});
            jQ.getScript && jQ.getScript(scdl.script.url, function gtm_salecyleScript(){
                scdl.script.status = 'fired';
             });
             window._gaq && window._gaq.push(function gtm_salecycleControlTest() {
                 if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
                     'index': 45,
                     'name':'SaleCycleTest',
                     'value':'PoolTest',
                     'scope': 1
                 };
                 var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
                 tracker._setCustomVar(45, 'SaleCycleTest', 'PoolTest', 1);
                 tracker._trackEvent('SaleCycle', 'test', 'PoolTest', 1, true);
             });
        }
    } catch(e) {
        cdl.error('GTM Salecyle: '+e);
    }
    if (!scdl.poolTest) window._gaq && window._gaq.push(function gtm_salecycleControlTest() {
        if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {'index': 45,'name':'SaleCycleTest','value':'PoolControl','scope': 1};
        var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
        tracker._setCustomVar(45, 'SaleCycleTest', 'PoolControl', 1);
        tracker._trackEvent('SaleCycle', 'Control', 'PoolControl', 1, true);
    });
    return jQ && cdl && scdl && scdl.poolTest;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_salecycle));
//</script>
