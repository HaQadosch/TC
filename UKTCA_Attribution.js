<script id='gtm_attr'>
(function gtm_attribtionLP(jQ, cdl){
    'use strict'
    if (jQ && cdl) try{
        var cdpm = cdl.CATTParams || ''
        var cdsr = cdpm && cdpm.searches || ''

        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdpm.utm_medium || cdsr.utm_medium || cdsr.gclid){
            var attribution = [
                cdsr.gclid || '',
                cdpm.utm_medium || cdsr.utm_medium || '',
                cdpm.utm_campaign || cdsr.utm_campaign || '',
                cdpm.utm_content || cdsr.utm_content || '',
                cdpm.utm_source || cdsr.utm_source || '',
                Date.now() || ''
            ]
            attrs.push(attribution)
        }
        cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.thomascookairlines.com')
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e)

    }
    return jQ && cdl && attrs
}(window.jQuery, window.CATTDL))
</script>
