// DL CATT
//<script>
(function gtm_dlpackage(dl, cdl, jQ){
    'use strict';
    if (dl && cdl && jQ) try {
        var cdpm = cdl.CATTParams || '';
        var newPM = {};

        newPM.accomname = cdpm && cdpm.accomname || jQ('.basketPriceLine > span.Header').text() || "";
        newPM.bookingref = cdpm && cdpm.bookingref || "";
        newPM.bookingvalue = cdpm && cdpm.bookingvalue || (/[^£]+/.exec(jQ('td.price').eq(0).text()) || []).pop() || 0;
        newPM.cardtype = cdpm.cardtype || jQ('#payHoliday .clearfix:eq(0) div') && (jQ('#payHoliday .clearfix:eq(0) div').text() || '').replace(/\scredit\scard$/i, '') || "" ;
        newPM.deptairport = cdpm && cdpm.departureairportselected || "";
        newPM.deptdate = cdpm && cdpm.retdate && +new Date(cdpm.deptdate.replace(/(\d+)\/(\d+)\/(\d+)/g, '$3-$2-$1')) || +new Date(jQ('table.CheckoutBasketTable span').eq(0).text()) || 0;
        newPM.destination = jQ('.basketDetail.flightDetail:eq(1) > span:eq(0)').text() || "";
        newPM.destairport =  cdpm && cdpm.destinationairportselected || jQ('.basketDetail.flightDetail:eq(1) > span:eq(0)').text() || "";
        newPM.paxadult = cdpm && cdpm.paxadult || "";
        newPM.paxchild = cdpm && cdpm.paxchild || "";
        newPM.paxtotal = cdpm && cdpm.paxinfant || "";
        newPM.returndate = cdpm && cdpm.retdate && +new Date(cdpm.retdate.replace(/(\d+)\/(\d+)\/(\d+)/g, '$3-$2-$1')) || +new Date(jQ('table.CheckoutBasketTable span').eq(1).text()) || 0;
        newPM.rooms = cdpm && cdpm.rooms || '0';
        newPM.starrating = cdpm && cdpm.starrating || '0';

        jQ.extend(cdl.CATTParams, newPM);
        dl.push({'event': 'DL Package'});
    } catch(e) {
        cdl.error && cdl.error('GTM DL Package: '+e);
    }
    return dl && cdl && jQ;
}(window.dataLayer, window.CATTDL, window.jQuery));

//</script>

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
