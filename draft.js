<script id='gtm_Trivago'>
(function gtm_TrivagoDL(cdl, dl) {
    'use strict'
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams

        cdl.DL_trivago = {
            partnerid    : 91,
            hotel         : (cdpm.accomcode || '').replace(/(\w+)\|(.*)/g, '$2_$1'),
            arrival     : +new Date(cdpm.deptdate && cdpm.deptdate.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1') ||  0) || 0,
            departure     : +new Date(cdpm.retdate && cdpm.retdate.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1') || 0) || 0,
            price         : cdpm.bookingvalue || 0,
            currency     : cdpm.currency || 'GBP',
            pixel         : {
                src     : 'https://secde.trivago.com/page_check.php?pagetype=track&ref=_partnerid_&hotel=_hotel_&arrival=_arrival_&departure=_departure_&volume=_price_&currency=_currency_',
                status     : 'not fired'
            }
        }
    } catch(e){
        cdl.error("GTM Trivago: "+e)
    } finally {
        dl.push({event: 'DL Trivago'});
    }
    return cdl && dl && cdl.DL_trivago
}(window.CATTDL, window.dataLayer));

(function gtm_Trivago(jQ, cdl, tgdl) {
    'use strict';
    if (jQ && cdl && tgdl) try {
        var img = jQ([])
        var src = tgdl.pixel && tgdl.pixel.src.replace(/_partnerid_/, tgdl.partnerid).replace(/_hotel_/, tgdl.hotel).replace(/_arrival_/, tgdl.arrival).replace(/_departure_/, tgdl.departure).replace(/_price_/, tgdl.price).replace(/_currency_/, tgdl.currency) || ''
        if (src) {
            img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="TrivagoPixel">');
            img.attr('src', src);
            img.appendTo('body');
            tgdl.pixel.src = src;
            tgdl.pixel.status = 'fired'
        }
    } catch(e) {
        cdl.error('GTM Trivago: '+e)
    }
    return jQ && cdl && tgdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_trivago))
</script>
