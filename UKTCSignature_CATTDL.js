// Attribution

//<scriptid='gtm_attribution'>
(function gtm_attribution(cdl, dl) {
    'use strict';
    if (cdl && dl) try {
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]');
        var paidChannels = /afflong|met|part|affdirect|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5];});

        if (validLand.length) {
            var vL = validLand.pop() || [];
            cdl.CATTParams.attribution = {
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
            if ((/afflong/i).test(m)) winningCampaign = 'afflong';
            else if ((/met/i).test(m)) winningCampaign = 'affmeta';
            else if ((/affdirect|part/i).test(m)) winningCampaign = 'affdirect';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m)) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            dl.push({event: 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', /tcsignature/i.test(window.location.hostname)?'.tcsignature.com':'.thomascook.com');
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && dl && cdl.CATTParams.attribution;
}(window.CATTDL, window.dataLayer));
//</script>


