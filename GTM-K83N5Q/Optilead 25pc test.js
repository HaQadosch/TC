<script id='GTM-K83N5Q_optilead'>
(function gtm_OptileadDL(cdl, dl) {
    'use strict'
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || ''
        cdl.DL_optilead = {
            poolTest : location.pathname === '/' && (/optileadtest/i.test(window.document.URL) || !((cdpm && cdpm.utmaguid || 1)%4)) || 0,
            script: {
                status: 'not fired',
                src: '//analytics.optilead.co.uk/webscrape/tc.js'
            }
        }
    } catch (e) {
        cdl.error('GTM Optilead: ' + e)
    } finally {
        dl.push({'event': 'DL Optilead'});
    }
    return cdl && dl && cdl.DL_optilead
}(window.CATTDL, window.dataLayer_K83N5Q));

(function gtm_Optilead(jQ, cdl, oldl) {
    'use strict';
    if (jQ && cdl && oldl && oldl.poolTest) try {
        jQ.ajaxSetup({cache: true});
        oldl.script && oldl.script.src && jQ.when(jQ.getScript(oldl.script.src)).done(function gtm_sub2Script() {
            oldl.script.status = 'fired'
        })
        location.pathname === '/' && window._gaq && window._gaq.push(function gtm_OptileadControlTest() {
            if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
                'index': 45,
                'name':'OptileadTest',
                'value':'PoolTest',
                'scope': 1
            }
            var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
            tracker._setCustomVar(45, 'OptileadTest', 'PoolTest', 1);
            tracker._trackEvent('Optilead', 'test', 'PoolTest', 1, true)
        })
    } catch (e) {
        cdl.error('GTM Optilead: ' + e)
    }
    if (location.pathname === '/' && !oldl.poolTest) window._gaq && window._gaq.push(function gtm_OptileadControlTest() {
        if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {'index': 45,'name':'OptileadTest','value':'PoolControl','scope': 1}
        var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
        tracker._setCustomVar(45, 'OptileadTest', 'PoolControl', 1);
        tracker._trackEvent('Optilead', 'test', 'PoolControl', 1, true)
    })
    return jQ && cdl && oldl
}(window.CATTDL?window.CATTDL.jQ:!1, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_optilead))
</script>
