<script id='GTM-5733GJ_AttributionConf'>
(function gtm_attribution(dl, cdl, attr){
    'use strict';
    var cdpm;
    var timeStart = window.dataLayer
        .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
        .map(function dlMap(evt) {return evt['gtm.start']; })
        .pop() || 0;
    if (dl && cdl && attr) try {
        cdpm = cdl.CATTParams || {};
        var attribution = JSON.parse(attr);
        if (attribution && attribution.length) {
            var winningCampaign = '';
            var m = attribution._utm_medium;
            if ((/aff/i).test(m)) winningCampaign = 'aff';
            else if ((/met/i).test(m)) winningCampaign = 'met';
            else if ((/agg|part/i).test(m)) winningCampaign = 'agg';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m) || vL[0]) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            var stampEpoch = +new Date();
            dl.push({'event': 'Attribution_'+winningCampaign, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
            window.sessionStorage.removeItem('gtm_attribution');
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && dl && cdpm && cdpm.attribution;
}(window.dataLayer_5733GJ, window.CATTDL, !window.sessionStorage?0:window.sessionStorage.getItem('gtm_attribution')));
</script>
