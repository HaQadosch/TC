/*
http://www.thomascook.fr/index.php?id=2281
*/

<script id='gtm_Piximedia'>
(function gtm_piximediaDL(cdl, dl) {
    'use strict'
    if (cdl && dl) try {
        cdl.DL_piximedia = {
            script: {
                status: 'not fired',
                src: 'http://54.77.223.207/assets/js/script.js'
            }
        }
    } catch (e) {
        cdl.error('GTM Piximedia: ' + e)
    } finally {
        dl.push({'event': 'DL Piximedia'});
    }
    return cdl && dl && cdl.DL_piximedia
}(window.CATTDL, window.externaldataLayer));

(function gtm_piximedia(cdl, pmdl) {
    'use strict';
    if (cdl && pmdl && pmdl.script) try {
        (function gtm_callPiximediaScript() {
            var a = document.createElement('script'); a.src = pmdl.script && pmdl.script.src || ''
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(a, s)
        }())
        pmdl.script.status = 'fired'
    } catch (e) {
        cdl.error('GTM piximedia: ' + e)
    }
    return cdl && pmdl
}(window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_piximedia))
</script>
