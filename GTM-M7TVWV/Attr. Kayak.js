<script id='gtm_attrKayak'>
(function gtm_AttrKayakDL(cdl, jQ){
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_kayak = {
            emrid           : +new Date()+Math.random()*100000000000000000 || 0,
            emhost          : 'www.thomascook.fr',
            advid           : 'TTTHOMASCOOKFR',
            billing_advid   : 'TTTHOMASCOOKFR',
            billing_orderid : cdpm.bookingref|| '0',
            billing_address : 'NULL',
            billing_customerid : 'NULL',
            billing_sum     : cdpm.bookingvalue || '0',
            swoodooKlickId  : cdpm.attribution && cdpm.attribution.utm_content || '',
            pixel : {
                src         : 'https://www.econda-monitor.de/els/logging?v=1&emnc=1&emtn=1&emkd=3216&emrid=_emrid_&emhost=_emhost_&advid=_advid_&billing_advid=_billing_advid_&billing_orderid=_billing_orderid_&billing_address=NULL&billing_customerid=NULL&billing_sum=_billing_sum_&swoodooKlickId=_swoodooKlickId_',
                status      : 'not fired'
            }
        }
    } catch(e) {
        cdl.error('GTM Attr. Kayak DL: '+e)
    }
    return cdl && jQ && cdl.DL_kayak
}(window.CATTDL, window.jQuery));

(function gtm_attrKayak(cdl, jQ, akdl){
    'use strict';
    if (cdl && jQ && akdl) try {
        var src = akdl.pixel && akdl.pixel.src.replace(/_emrid_/, akdl.emrid || '').replace(/_emhost_/, akdl.emhost ||'').replace(/_advid_/, akdl.advid || '').replace(/_billing_advid_/, akdl.billing_advid || '').replace(/_billing_orderid_/, akdl.billing_orderid || '').replace(/_billing_sum_/, akdl.billing_sum || '').replace(/_swoodooKlickId_/, akdl.swoodooKlickId || '') || '';
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="kayak_pixel">').attr('src', src);
        img.appendTo('body');

        akdl.pixel = {
            status : 'fired',
            src: src
        }
    } catch(e) {
        cdl.error('GTM Attr. Kayak: '+e)
    }
    return cdl && jQ && akdl
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_kayak))
</script>
