<script id='GTM-P2C3FL_cattdllodash'>
(function gtm_cattdlLodash(w, d, dl) {
    'use strict';
    if ( w && dl && !dl.some(function(a){return /lodash_/i.test(a && a.event || '');}) ) try {
        w.CATTDL = w.CATTDL || {}
        var s = d.createElement('script'); s.async = true; s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.0/lodash.min.js'
        var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
        s.onload = s.onreadystatechange = function gtm_lodashOnLoad(){
            var rdyState = s.readyState;
            if (!rdyState || /complete|loaded/i.test(s.readyState)) {
                w.CATTDL._ = w._.noConflict();
                dl.push({'event': 'lodash'});
                dl.push({'event': 'Trigger'});
                s.onload = null;
                s.onreadystatechange = null;
            }
        }
    } catch(e) {
        var msg = 'GTM CATTDL lodash: '+e; console && ((console.error)?console.error(msg):console.log(msg));
    }
    return dl && w.CATTDL;
}(window, window.document, window.dataLayer));
</script>