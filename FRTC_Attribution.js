<script id='gtm_attr'>
(function gtm_attribtionLP(jQ, cdl) {
    'use strict'
    if (jQ && cdl) try {
        var cdsr = cdl.CATTParams && cdl.CATTParams.searches || ''
        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdsr.utm_medium || cdsr.gclid){
            var attribution = [
                cdsr.gclid || '',
                cdsr.utm_medium || '',
                cdsr.utm_campaign || '',
                cdsr.utm_content || '',
                cdsr.utm_source || '',
                Date.now() || ''
            ]
            attrs.push(attribution)
        }
         cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.thomascook.fr')
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e)
    }
    return jQ && cdl
}(window.jQuery, window.CATTDL))
</script>

// utm_medium=test&utm_source=test&utm_campaign=test

<script id='gtm_Attribution'>
(function gtm_attribution(dl, cdl){
    'use strict';
    if (dl && cdl) try {
        var cdpm = cdl.CATTParams || {}
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        var paidChannels = /afflong|affdirect|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]})

        if (validLand.length) {
            var vL = validLand.pop() || []
            cdpm['attribution'] = {
                gclid           : vL[0] || '',
                utm_medium      : vL[1] || '',
                utm_campaign    : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source      : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date            : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/aff/i).test(m)) winningCampaign = 'aff';
            else if ((/met/i).test(m)) winningCampaign = 'met';
            else if ((/agg|part/i).test(m)) winningCampaign = 'agg';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m) || vL[0]) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            dl.push({event: 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.thomascook.fr')
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && dl && cdpm && cdpm.attribution
}(window.dataLayer, window.CATTDL))
</script>

