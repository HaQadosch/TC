<script id='gtm_cattdllodash'>
(function gtm_cattdlLodash(w, dl) {
    'use strict';
    if ( w && dl && !dl.some(function(a){return /lodash_/i.test(a && a.event || '');}) ) try {
        w.CATTDL = w.CATTDL || {}
        if (window.requirejs) {
            window.requirejs.config({
                "paths": {
                  "lodash": "https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.0/lodash.min"
                }
            });
            window.require(['lodash'], function (ld){
                w.CATTDL._ = w._.noConflict();
                dl.push({'event': 'lodash'});
            })
        } else {
            window.jQuery && window.jQuery.getScript && window.jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.0/lodash.min.js', function gtm_lodash(){
                w.CATTDL._ = w._.noConflict();
                dl.push({'event': 'lodash'});
            })
        }
    } catch(e) {
        var msg = 'GTM CATTDL lodash: '+e;
        console && ((console.error)?console.error(msg):console.log(msg));
    }
    return dl && w.CATTDL;
}(window, window.dataLayer));
</script>


    Profile ID:  NQ264DI7OP 
tB8B^0u83/9yqhA
