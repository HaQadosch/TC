/*
http://www.thomascookairlines.be/en/offers.jsp (no CATT Params)
http://www.thomascookairlines.be/nl/promoties.jsp  (no CATT Params)
http://www.thomascookairlines.be/fr/promotions.jsp (no CATT Params)

<script type='text/javascript'>
var axel = Math.random()+"";
var a = axel * 10000000000000;
document.write('<img src="https://pubads.g.doubleclick.net/activity;xsp=56528;ord='+ a +'?" width=1 height=1 border=0/>');
</script>
<noscript>
<img src="https://pubads.g.doubleclick.net/activity;xsp=56528;ord=1?" width=1 height=1 border=0/>
</noscript>

<img src="http://ad.himediadx.com/seg?add=2740618,189006,189009,189010&t=2" width="1" height="1" />
<!-- End of Segment Pixel -->

 */


//<script id='gtm_HFD'>
(function gtm_hfdDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        cdl.DL_hfd = {
            imghimediadx : {
                src : 'https://secure.adnxs.com/seg?add=2740618,189006,189009,189010&t=2',
                status : 'not fired'
            },
            imgdoubleclick : {
                src : 'https://pubads.g.doubleclick.net/activity;xsp=56528;ord=1?',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM HFD DL: '+e);
    } finally {
        dl.push({'event':'DL HFD'});
    }
    return cdl && dl && cdl.DL_kayak;
}(window.CATTDL, window.dataLayer));

(function gtm_kayak(jQ, dl, cdl, hfdl){
    'use strict';
    if (jQ && dl && cdl && hfdl) try {
        jQ().append && jQ('body').append(jQ('<img>', {
            src : hfdl.imghimediadx && hfdl.imghimediadx.src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'HFDHimediaPixel',
            width : 1,
            height : 1
        }));
        hfdl.imghimediadx && (hfdl.imghimediadx.status = 'fired');
        jQ().append && jQ('body').append(jQ('<img>', {
            src : hfdl.imgdoubleclick && hfdl.imgdoubleclick.src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'HFDDoubleClickPixel',
            width : 1,
            height : 1
        }));
        hfdl.imgdoubleclick && (hfdl.imgdoubleclick.status = 'fired');
    } catch(e) {
        cdl.error && cdl.error('GTM hfdl: '+e);
    } finally {
        dl.push({'event':'hfdl'});
    }
    return jQ && dl && cdl && hfdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_hfd));
//</script>

.+(/en/offers.jsp|/nl/promoties.jsp|/fr/promotions.jsp).*
