//<script id='gtm_HotelsCombined'>
(function gtm_HotelsCombinedDL(cdl, dl) {
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams;

        cdl.DL_HotelsCombined = {
            providercode         : 'H4U',
            bookingid             : cdpm.bookingref || '',
            checkin             : cdpm.deptdate && cdpm.deptdate.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3-$2-$1') || 'yyyy-mm-dd',
            checkout             : cdpm.retdate && cdpm.retdate.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3-$2-$1') ||  'yyyy-mm-dd',
            bookingvalue         : cdpm.bookingvalue || '',
            partnercommission     : (cdpm.bookingvalue || '')*0.1275 || '',
            currency             : cdpm.currency || 'GBP',
            conversionid         : cdpm.attribution && cdpm.attribution.utm_source || '',
            firstname             : cdpm.firstname || '',
            lastname             : cdpm.lastname || '',
            email                 : cdpm.email || '',
            script                 : {
                status  : 'not fired',
                url     : '//secure.hotelcdn.com/ConversionBooking.ashx?ProviderCode=_pc_&BookingID=_bid_&CheckIn=_ci_&CheckOut=_co_&BookingValue=_bv_&PartnerCommission=_partco_&Currency=_cur_&ConversionID=_cid_&Email=_e_&FirstName=_fn_&LastName=_ln_'
            }
        };
    } catch(e){
        cdl.error("GTM HotelsCombined: "+e);
    } finally {
        dl.push({event: 'DL HotelsCombined'});
    }
    return cdl && dl && cdl.DL_HotelsCombined;
}(window.CATTDL, window.dataLayer));

(function gtm_HotelsCombined(jQ, cdl, hcdl) {
    'use strict';
    if (jQ && cdl && hcdl) try {
        var src = (hcdl.script.url || '')
            .replace(/_pc_/, hcdl.providercode)
            .replace(/_bid_/, hcdl.bookingid)
            .replace(/_ci_/, hcdl.checkin)
            .replace(/_co_/, hcdl.checkout)
            .replace(/_bv_/, hcdl.bookingvalue)
            .replace(/_partco_/, hcdl.partnercommission)
            .replace(/_cur_/, hcdl.currency)
            .replace(/_cid_/, hcdl.conversionid)
            .replace(/_e_/, hcdl.email)
            .replace(/_fn_/, hcdl.firstname)
            .replace(/_ln_/, hcdl.lastname);
        if (src) {
            jQ.ajaxSetup({cache: true});
             jQ.getScript && jQ.getScript(src, function gtm_HotelsCombinedScript(){
                hcdl.script.status = 'fired';
                hcdl.script.url = src;
             });
             (function gtm_GatcHotelsCombinedEvent(src){
                try {
                    _gaq.push(function() {
                        var tracker = _gat._getTrackerByName('CATTGATC') || '';
                        tracker && tracker._trackEvent('HotelsCombined_URL', src, (document.URL || '')+"&AppServer="+(cdl.CATTParams && cdl.CATTParams.appserver || ''), 1, {'nonInteraction': true})
                    })
                } catch(e) {

                }
                return
            }(src))
        }
    } catch(e) {
        cdl.error('GTM HotelsCombined: '+e)
    }
    return jQ && cdl && hcdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_HotelsCombined))
//</script>



//<script id='gtm_HotelsCombined'>
(function gtm_HotelsCombinedDL(cdl, dl) {
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams;

        cdl.DL_hotelscombined = {
            providercode         : 'H4U',
            bookingid             : cdpm.bookingref || '',
            checkin             : cdpm.deptdate && cdpm.deptdate.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3-$2-$1') || 'yyyy-mm-dd',
            checkout             : cdpm.retdate && cdpm.retdate.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3-$2-$1') ||  'yyyy-mm-dd',
            bookingvalue         : cdpm.bookingvalue || '',
            partnercommission     : (cdpm.bookingvalue || '')*0.1275 || '',
            currency             : cdpm.currency || 'GBP',
            conversionid         : cdpm.attribution && cdpm.attribution.utm_source || '',
            firstname             : cdpm.firstname || '',
            lastname             : cdpm.lastname || '',
            email                 : cdpm.email || '',
            img                 : {
                status  : 'not fired',
                src     : '//secure.hotelcdn.com/ConversionBooking.ashx?ProviderCode=_pc_&BookingID=_bid_&CheckIn=_ci_&CheckOut=_co_&BookingValue=_bv_&PartnerCommission=_partco_&Currency=_cur_&ConversionID=_cid_&Email=_e_&FirstName=_fn_&LastName=_ln_'
            }
        };
    } catch(e){
        cdl.error("GTM HotelsCombined: "+e);
    } finally {
        dl.push({event: 'DL HotelsCombined'});
    }
    return cdl && dl && cdl.DL_hotelscombined;
}(window.CATTDL, window.dataLayer));

(function gtm_hotelscombined(jQ, dl, cdl, hcdl){
    'use strict';
    if (jQ && dl && cdl && hcdl) try {
        var src = hcdl.img && hcdl.img.src
           .replace(/_pc_/, hcdl.providercode)
           .replace(/_bid_/, hcdl.bookingid)
           .replace(/_ci_/, hcdl.checkin)
           .replace(/_co_/, hcdl.checkout)
           .replace(/_bv_/, hcdl.bookingvalue)
           .replace(/_partco_/, hcdl.partnercommission)
           .replace(/_cur_/, hcdl.currency)
           .replace(/_cid_/, hcdl.conversionid)
           .replace(/_e_/, hcdl.email)
           .replace(/_fn_/, hcdl.firstname)
           .replace(/_ln_/, hcdl.lastname) || '';
        if (src) {
            jQ().append && jQ('body').append(jQ('<img>', {
                src : src || '',
                style : 'border-style:none;',
                alt : '',
                id : 'hotelscombinedPixel',
                width : 1,
                height : 1
            }));
            hcdl.img = {
                status : 'fired',
                src : src
            };
            (function gtm_GatcHotelsCombinedEvent(src){
                try {
                    window._gaq && window._gaq.push && window._gaq.push(function() {
                        var tracker = window._gat && window._gat._getTrackerByName('CATTGATC') || '';
                        tracker && tracker._trackEvent('HotelsCombined_URL', src, (document.URL || '')+"&AppServer="+(cdl.CATTParams && cdl.CATTParams.appserver || ''), 1, {'nonInteraction': true});
                    });
                } catch(ee) {
                    cdl.error('GTM gtm_GatcHotelsCombinedEvent: '+ee);
                }
                return src;
            }(src));
        }

    } catch(e) {
        cdl.error && cdl.error('GTM hotelscombined: '+e);
    } finally {
        dl.push({'event':'hotelscombined'});
    }
    return jQ && dl && cdl && hcdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_hotelscombined));
//</script>
