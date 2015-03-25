// conf
try{
    $.getScript( "https://5187.xg4ken.com/media/getpx.php?cid=8ab2c9c7-99a1-462b-a06a-7569f0de6658", function( data, textStatus, jqxhr ) {
        var params = new Array();
        params[0]='id=8ab2c9c7-99a1-462b-a06a-7569f0de6658';
        params[1]='type=conv';
        params[2]='val=' + window.CATTParams.BookingValue;
        params[3]='orderId=' + window.CATTParams.BookingRef;
        params[4]='promoCode=';
        params[5]='valueCurrency=EUR';
        params[6]='GCID='; //For Live Tracking only
        params[7]='kw='; //For Live Tracking only
        params[8]='product='; //For Live Tracking only
        k_trackevent(params,'5187');
    });
} catch (e){if (typeof console != "undefined") console.log("DE NEC Kenshoo CONVERSION: " + e)}


<script id='gtm_Kenshoo'>
(function gtm_kenshooDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_kenshoo = {
            id : '8ab2c9c7-99a1-462b-a06a-7569f0de6658',
            type : 'conv',
            val : cdpm.bookingvalue || '',
            orderid : cdpm.bookingref || '',
            promocode : '',
            valuecurrency : 'EUR',
            GCID : '',
            kw : '',
            product : '',
            event : '5187',
            script : {
                src : 'https://5187.xg4ken.com/media/getpx.php?cid=_id_',
                status : 'not fired'
            }
        };
        var ksdl = cdl.DL_kenshoo || '';
        if (cdl.DL_kenshoo) cdl.DL_kenshoo.params = [
            'id='+(ksdl.id || ''),
            'type='+(ksdl.type || ''),
            'val='+(ksdl.val || ''),
            'orderId='+(ksdl.orderid || ''),
            'promoCode='+(ksdl.promocode || ''),
            'valueCurrency='+(ksdl.valuecurrency || ''),
            'GCID='+(ksdl.GCID || ''),
            'kw='+(ksdl.kw || ''),
            'product='+(ksdl.product || '')
            ];
    } catch(e) {
        cdl.error && cdl.error('GTM Kenshoo DL: '+e);
    } finally {
        edl.push({'event':'DL Kenshoo'});
    }
    return cdl && edl && cdl.DL_kenshoo;
}(window.CATTDL, window.externaldataLayer));

(function gtm_kenshoo(jQ, edl, cdl, ksdl){
    'use strict';
    if (jQ && edl && cdl && ksdl) try {
        var src = ksdl.script && ksdl.script.src.replace(/_id_/, ksdl.id || '') || '';
        jQ.getScript && jQ.getScript(src, function gtm_kenshoogetscript(){
            window.k_trackevent && window.k_trackevent(ksdl.params || [], ksdl.event || '');
            ksdl.script = {
                src : src,
                status : 'fired'
            };
        });
    } catch(e) {
        cdl.error && cdl.error('GTM Kenshoo: '+e);
    } finally {
        edl.push({'event':'Kenshoo'});
    }
    return jQ && edl && cdl && ksdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kenshoo))
</script>
