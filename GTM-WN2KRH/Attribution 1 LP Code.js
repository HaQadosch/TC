<script id='gtm_attr'>
(function gtm_attribtionLP(jQ, cdl) {
    'use strict';
    if (jQ && cdl) try {
        var cdsr = cdl.CATTParams && cdl.CATTParams.searches || '';
        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]');
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdsr.utm_medium || cdsr.gclid){
            attrs && attrs.push([
               cdsr.gclid || '',
               cdsr.utm_medium || '',
               cdsr.utm_campaign || '',
               cdsr.utm_content || '',
               cdsr.utm_source || '',
               Date.now() || ''
           ]);
        }

         cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.jettours.com');
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e);
    }
    return jQ && cdl;
}(window.jQuery, window.CATTDL))
</script>
