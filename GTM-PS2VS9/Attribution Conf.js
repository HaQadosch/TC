<script id='GTM-PS2VS9_AttributionConf'>
(function gtm_attribution(dl, cdl){
    'use strict';
    var cdpm;
    var timeStart = window.dataLayer
        .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
        .map(function dlMap(evt) {return evt['gtm.start']; })
        .pop() || 0;
    if (dl && cdl) try {
        cdpm = cdl.CATTParams || {};
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]');
        var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]});

        if (validLand.length) {
            var vL = validLand.pop() || [];
            cdpm.attribution = {
                gclid           : vL[0] || '',
                utm_medium      : vL[1] || '',
                utm_campaign    : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source      : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date            : vL[5] || ''
            };
            var winningCampaign = '';
            var m = vL[1];
            if ((/aff/i).test(m)) winningCampaign = 'aff';
            else if ((/met/i).test(m)) winningCampaign = 'met';
            else if ((/agg|part/i).test(m)) winningCampaign = 'agg';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m) || vL[0]) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            var stampEpoch = +new Date();
            dl.push({'event': 'Attribution_'+winningCampaign, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
            if (window.sessionStorage) window.sessionStorage.setItem('gtm_attribution', JSON.stringify(cdpm.attribution || []));
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.condor.com');
        } else dl.push({event: 'No Attribution'});
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && dl && cdpm && cdpm.attribution;
}(window.dataLayer, window.CATTDL));
</script>
