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


<script id='gtm_Attribution'>
(function gtm_attribution(cdl) {
    'use strict';
    if (cdl) try {
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]');
        var paidChannels = /afflong|affdirect|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;
        var validLand = lands.filter(function validMedium(e){return e[0] || paidChannels.test(e[1])}).filter(function validTime(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]});

        if (validLand.length) {
            var vL = validLand.pop() || [];
            cdl.CATTParams['attribution'] = {
                gclid             : vL[0] || '',
                utm_medium         : vL[1] || '',
                utm_campaign     : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source         : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date              : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/afflong/i).test(m)) winningCampaign = 'affiliates';
            else if ((/affdirect/i).test(m)) winningCampaign = 'partners';
            else if ((/agg/i).test(m)) winningCampaign =  vL[4] || 'aggregator';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m)) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            window.dataLayer && dataLayer.push({'event': 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.jettours.com');
        }
    } catch (e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && cdl.CATTParams &&  cdl.CATTParams.attribution;
}(window.CATTDL))
</script>
