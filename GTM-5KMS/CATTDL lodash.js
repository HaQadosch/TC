<script id='GTM-5KMS_cattdllodash'>
(function gtm_cattdlLodash(w, dl, req) {
    'use strict';
    if ( w && dl && req && !dl.some(function(a){return /lodash_/i.test(a && a.event || '');}) ) try {
        w.CATTDL = w.CATTDL || {};
        req.config({
            "paths": {
              "lodash": "https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.0/lodash.min"
            }
        });
        window.require(['lodash'], function (ld){
            w.CATTDL._ = w._.noConflict();
            dl.push({'event': 'lodash'});
        });
    } catch(e) {
        var msg = 'GTM CATTDL lodash: '+e;
        window.console && ((window.console.error)?window.console.error(msg):window.console.log(msg));
    }
    return dl && w.CATTDL;
}(window, window.dataLayer, window.requirejs));
</script>