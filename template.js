<script id='gtm_blah'>
(function gtm_blahDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_blah = {
            var1 : cdpm.val1 || '',
            var2 : cdpm.val2 || ''
        };
    } catch(e) {
        cdl.error('GTM blah: ', e);
    } finally {
        dl.push({'event':'blahDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_blah;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_blah(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        jQ.getScript && jQ.getScript('url.js', function gtm_blahScript(){
            try {
                window._blah && (window._blah.var1 = true);
            } catch(ee) {
                cdl.error('GTM blahScript: ', ee);
            }
        });
    } catch(e) {
        cdl.error('GTM Blah:', e);
    } finally {
        dl.push({'event':'Blah'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_blah))
</script>
