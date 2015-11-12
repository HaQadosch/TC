<script id='GTM-5KMS_cattdllodash'>
    (function gtm_cattdlLodash(w, d, dl, req, undefined) {
        'use strict';
        if ( w && dl && !dl.some(function(a){return /lodash_/i.test(a && a.event || '');}) ) try {
            var lodashSRC = 'https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.0/lodash.min';
            w.CATTDL = w.CATTDL || {};
            var stampLodash = function stampLodash(stampEpoch){
                w.CATTDL._ = w._.noConflict();
                dl.push({'event': 'lodash', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - dl[0]['gtm.start']});
            };

            if (req === undefined) {
                var s = d.createElement('script'); s.async = true; s.src = lodashSRC+'.js';
                var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
                s.onload = s.onreadystatechange = function gtm_lodashOnLoad(){
                    var rdyState = s.readyState;
                    if (!rdyState || /complete|loaded/i.test(s.readyState)) {
                        stampLodash(+new Date());
                        s.onload = null;
                        s.onreadystatechange = null;
                    }
                };
            } else {
                req.config({
                    "paths": {"lodash": lodashSRC}
                });
                window.require(['lodash'], function (ld){ stampLodash(+new Date()); });
            }
        } catch(e) {
            var msg = 'GTM CATTDL lodash: '+e;
            window.console && ((window.console.error)?window.console.error(msg):window.console.log(msg));
        }
        return dl && w.CATTDL;
    }(window, document, window.dataLayer, window.requirejs));
</script>