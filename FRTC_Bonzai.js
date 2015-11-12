/*
HTTP :

<iframe src="http://banners.affility.com/mastertags/9419.html?action=vente&pid=9419&type=32924&orderid=??&price=??"  width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="border:none;"></iframe>

HTTPS :

<iframe src="https://tracker.affility.com/mastertags/9419.html?action=vente&pid=9419&type=32924&orderid=??&price=??"  width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="border:none;"></iframe>

On va partir sur aggregators :

Utm_medium=aggregators

Utm_source=bonzai

Utm_campaign=id de la base, remonté par Bonzai

cdl.CATTParams['attribution'] = {
    gclid             : vL[0] || '',
    utm_medium         : vL[1] || '',
    utm_campaign     : vL[2] || '',
    utm_content     : vL[3] || '',
    utm_source         : vL[4] || '',
    landing         : new Date(vL[5] || '') || '',
    date              : vL[5] || ''
}

*/
function gtm_attrBonzai(){
    return CATTDL && CATTDL.CATTParams && CATTDL.CATTParams.attribution && /aggregators/i.test(CATTDL.CATTParams.attribution.utm_medium || '') && /bonzai/i.test(CATTDL.CATTParams.attribution.utm_source || '') && 'yes' || 'no'
}


<script id='gtm_Bonzai'>
(function gtm_BonzaiDL(cdl, dl) {
    'use strict'
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || ''
        cdl.DL_bonzai = {
            iFrame: {
                status: 'not fired',
                src: 'https://tracker.affility.com/mastertags/9419.html?action=vente&pid=9419&type=32924&orderid='+(cdpm.bookingref || '')+'&price='+(cdpm.totalprice || 0)
            }
        }
    } catch (e) {
        cdl.error('GTM Bonzai: ' + e)
    } finally {
        dl.push({'event': 'DL Bonzai'});
    }
    return cdl && dl && cdl.DL_bonzai
}(window.CATTDL, window.externaldataLayer));

(function gtm_Bonzai(jQ, cdl, bzdl) {
    'use strict';
    if (jQ && cdl && bzdl && bzdl.iFrame) try {
        jQ('<iframe></iframe>').attr({
            id:'Bonzai',
            frameborder: '0',
            scrolling: 'no',
            width:'1',
            height:'1',
            style:'visibility:hidden;display:none',
            src : bzdl.iFrame.src || ''
        }).appendTo('body');
        bzdl.iFrame.status = 'fired'
    } catch (e) {
        cdl.error('GTM Bonzai: ' + e)
    }
    return jQ && cdl && bzdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_bonzai))
</script>
