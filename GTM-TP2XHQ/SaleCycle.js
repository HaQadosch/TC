<script id="GTM-TP2XHQ_salecycle">
    (function gtm_salecycle(cdl, dl){
        'use strict';
        var cdpm = cdl && cdl.CATTParams || '';
        if (cdl && dl) try {
            if (cdl.insertJS) cdl.insertJS({
                  'name'     : 'salecycle'
                , 'src'      : 'https://d16fk4ms6rqz1v.cloudfront.net/capture/directholidays.js'
                , 'dataLayer': window.dataLayer_TP2XHQ
            });
        } catch(e) {
            cdl.error('GTM salecycle: '+e);
        } finally {
            var stampEpoch = +new Date();
            dl.push({'event': 'GTM salecycle', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
        }
        return cdl;
    }(window.CATTDL, window.dataLayer_TP2XHQ));
</script>