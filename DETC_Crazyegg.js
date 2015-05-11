//<script id='gtm_CrazyEgg'>
(function gtm_CrazyEggDL(cdl, edl) {
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';
        cdl.DL_crazyegg = {
            account : '0012/5391',
            script: {
                status: 'not fired',
                src: 'https://dnn506yrbagrg.cloudfront.net/pages/scripts/0012/5391.js?'+Math.floor(new Date().getTime()/3600000)
            }
        };
    } catch (e) {
        cdl.error('GTM CrazyEgg DL: ' + e);
    } finally {
        edl.push({'event': 'DL CrazyEgg'});
    }
    return cdl && edl && cdl.DL_crazyegg;
}(window.CATTDL, window.externaldataLayer || window.dataLayer));

(function gtm_CrazyEgg(jQ, cdl, cedl) {
    'use strict';
    if (jQ && cdl && cedl) try {
        cedl.script && cedl.script.src && jQ.when(jQ.getScript(cedl.script.src)).done(function gtm_CrazyEggScript() {
            cedl.script.status = 'fired';
        });
    } catch (e) {
        cdl.error('GTM CrazyEgg: ' + e);
    }
    return jQ && cdl && cedl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_crazyegg))
</script>
