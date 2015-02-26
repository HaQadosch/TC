/*
var k_url = '//assets.kampyle.com/clients/4313641/d/k_config.js';
              var k_head = document.getElementsByTagName('head')[0],
k_script = document.createElement('script');
k_script.setAttribute('src', k_url);
k_script.setAttribute('type', 'text/javascript');
k_script.setAttribute('charset', 'utf-8');
k_head.insertBefore(k_script, k_head.firstChild);
*/

<script id='gtm_kampyle'>
(function gtm_KampyleDL(cdl, dl) {
    'use strict'
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || ''
        cdl.DL_kampyle = {
            client : '4313641',
            poolTest : /kampyletest/i.test(window.document.URL) || !((cdpm && cdpm.utmaguid || 1)%2),
            script: {
                status: 'not fired',
                src: '//assets.kampyle.com/clients/4313641/d/k_config.js'
            }
        }
    } catch (e) {
        cdl.error('GTM Kampyle DL: ' + e)
    } finally {
        dl.push({'event': 'DL Kampyle'});
    }
    return cdl && dl && cdl.DL_kampyle;
}(window.CATTDL, window.externalLayer));

(function gtm_Kampyle(jQ, cdl, kpdl) {
    'use strict';
    if (jQ && cdl && kpdl && kpdl.poolTest ) try {
        jQ.ajaxSetup({cache: true});
        kpdl.script && kpdl.script.src && jQ.when(jQ.getScript(kpdl.script.src)).done(function gtm_kampyleScript() {
            kpdl.script.status = 'fired'
        })
        window._gaq && window._gaq.push(function gtm_KampyleControlTest() {
            if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
                'index': 45,
                'name':'KampyleTest',
                'value':'PoolTest',
                'scope': 1
            }
            var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
            tracker._setCustomVar(45, 'KampyleTest', 'PoolTest', 1);
            tracker._trackEvent('Kampyle', 'test', 'PoolTest', 1, true)
        })
    } catch (e) {
        cdl.error('GTM Kampyle: ' + e)
    }
    if (!kpdl.poolTest) window._gaq && window._gaq.push(function gtm_OptileadControlTest() {
        if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {'index': 45,'name':'OptileadTest','value':'PoolControl','scope': 1}
        var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
        tracker._setCustomVar(45, 'KampyleTest', 'PoolControl', 1);
        tracker._trackEvent('Kampyle', 'test', 'PoolControl', 1, true)
    })
    return jQ && cdl && kpdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kampyle))
</script>
