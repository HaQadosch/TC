/*
var k_url = '//assets.kampyle.com/clients/1710010/k_config.js';
var k_head = document.getElementsByTagName('head')[0],
k_script = document.createElement('script');
k_script.setAttribute('src', k_url);
k_script.setAttribute('charset', 'utf-8');
k_head.insertBefore(k_script, k_head.firstChild);
*/

<script id='gtm_kampyle'>
(function gtm_kampyleDL(cdl, dl) {
    'use strict';
    if (cdl && dl) try {
        cdl.DL_kampyle = {
            script: {
                src: '//assets.kampyle.com/clients/1710010/k_config.js',
                status: 'not fired'
            }
        };
        dl.push({event: 'DL_kampyle'})
    } catch(e) {
        cdl.error("GTM DL_kampyle: "+e)
    }
    return cdl.DL_kampyle
}(window.CATTDL, window.dataLayer));

(function gtm_kampyle(jQ, cdl, kpdl){
    'use strict';
    if (jQ && cdl && kpdl) try {
        if (kpdl.script && kpdl.script.src) {
           jQ.ajaxSetup({cache: true});
           jQ.getScript && jQ.getScript(kpdl.script.src, function gtm_kampyleScript(){
               kpdl.script.status = 'fired'
            })
        }
    } catch(e) {
        cdl.error && cdl.error('GTM kampyle: '+e)
    }
    return jQ && cdl && kpdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kampyle))
</script>

