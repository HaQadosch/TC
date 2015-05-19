// Home
try{
    $('body').append('<img src="http://ad3.adfarm1.adition.com/tagging?network=250&tag[necde.Strecke]=home&type=src" width=1 height=1 style="display: none">');
} catch (e){if (typeof console != "undefined") console.log("DE NEC Mediascale HOME: " + e)}
//<script id='gtm_mediascale'>
(function gtm_mediascaleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        cdl.DL_mediascale = {
            network : 250,
            img : {
                src : 'https://ad3.adfarm1.adition.com/tagging?network=250&tag[necde.Strecke]=home&type=src',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale DL: '+e);
    } finally {
        dl.push({'event':'DL mediascale'});
    }
    return cdl && dl && cdl.DL_mediascale;
}(window.CATTDL, window.externaldataLayer));

(function gtm_mediascale(jQ, dl, cdl, msdl){
    'use strict';
    if (jQ && dl && cdl && msdl) try {
        var src = msdl.img && msdl.img.src || '';
        jQ().append && jQ('body').append(jQ('<img>', {
            src : src || '',
            style : 'display: none;border-style:none;',
            alt : '',
            id : 'mediascalePixel',
            width : 1,
            height : 1
        }));
        msdl.img = {
            status : 'fired',
            src : src
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale: '+e);
    } finally {
        dl.push({'event':'mediascale'});
    }
    return jQ && dl && cdl && msdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_mediascale));
//</script>

// Search to Pay
try{
    $('body').append('<img src="http://ad3.adfarm1.adition.com/tagging?network=250&tag[necde.Strecke]=search&tag[necde.Destination]=' + window.CATTParams.ResortSearched + '&tag[necde.Country]=' + window.CATTParams.Destination + '&tag[necde.Hotel]=' + window.CATTParams.AccomCode + '&tag[necde.Anreisedatum]=' + window.CATTParams.DeptDate + '&type=src" width=1 height=1 style="display: none;">');
} catch (e){if (typeof console != "undefined") console.log("DE NEC Mediascale SEARCH: " + e)}

//<script id='gtm_mediascale'>
(function gtm_mediascaleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_mediascale = {
            network : 250,
            PS_tcde : '',
            Strecke : 'search',
            Destination : cdpm.resortsearched || '',
            Country : cdpm.destination || '',
            Hotel : cdpm.accomcode || '',
            Anreisedatum : cdpm.deptdate || '',
            ZahlE : cdpm.paxadult || '',
            ZahlK : cdpm.paxchild || '',
            orderid : cdpm.bookingref || '',
            descr : cdpm.destination || '',
            total : cdpm.bookingvalue || '',
            parm3 : cdpm.lob || '',
            tid : '1199',
            sid :'14993',
            img : {
                src : 'https://ad3.adfarm1.adition.com/tagging?network=250&tag[necde.Strecke]=search&tag[necde.Destination]=_d_&tag[necde.Country]=_c_&tag[necde.Hotel]=_h_&tag[necde.Anreisedatum]=_a_&tag[necde.ZahlE]=_ze_&tag[necde.ZahlK]=_zk_&type=src',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale DL: '+e);
    } finally {
        dl.push({'event':'DL mediascale'});
    }
    return cdl && dl && cdl.DL_mediascale;
}(window.CATTDL, window.externaldataLayer));

(function gtm_mediascale(jQ, dl, cdl, msdl){
    'use strict';
    if (jQ && dl && cdl && msdl) try {
        var src = msdl.img && msdl.img.src
            .replace(/_d_/, msdl.Destination || '')
            .replace(/_c_/, msdl.Country || '')
            .replace(/_h_/, msdl.Hotel || '')
            .replace(/_a_/, msdl.Anreisedatum || '')
            .replace(/_ze_/, msdl.ZahlE || '')
            .replace(/_zk_/, msdl.ZahlK || '');
        jQ().append && jQ('body').append(jQ('<img>', {
            src : src || '',
            style : 'display: none;border-style:none;',
            alt : '',
            id : 'mediascalePixel',
            width : 1,
            height : 1
        }));
        msdl.img = {
            status : 'fired',
            src : src
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale: '+e);
    } finally {
        dl.push({'event':'mediascale'});
    }
    return jQ && dl && cdl && msdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_mediascale));
//</script>

// Booking
try{
    var mediaScaleSrc = "https://ad3.adfarm1.adition.com/track?tid=1199&sid=19547&type=html&orderid="+CATTParams.BookingRef+"&itemno="+CATTParams.AccomCode+"&descr="+CATTParams.AccomResort+"&quantity=1&price=0.00&total="+CATTParams.BookingValue+"&parm3="+CATTParams.HolidayType;
    $('body').append('<iframe allowtransparency="true" scrolling="no" frameborder="0" border="0" width="1" height="1" marginwidth="0" marginheight="0" background-color="transparent" src='+mediaScaleSrc+'></iframe>')
} catch(e){console && console.log && console.log("DE NEC Conf MediaScale: "+e)}
try{
    $('body').append('<img src="https://ad3.adfarm1.adition.com/tagging?network=250&tag[necde.Strecke]=order&type=src" width=1 height=1 style="display: none">');
} catch (e){if (typeof console != "undefined") console.log("DE NEC Mediascale ORDER: " + e)}
//<script id='gtm_mediascale'>
(function gtm_mediascaleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_mediascale = {
            itemno : cdpm.accomcode || '',
            orderid : cdpm.bookingref || '',
            descr : cdpm.accomresort || '',
            total : cdpm.bookingvalue || '',
            parm3 : cdpm.holidaytype || '',
            tid : '1199',
            sid :'19547',
            img : {
                src : 'https://ad3.adfarm1.adition.com/tagging?network=250&tag[necde.Strecke]=order&type=src',
                status : 'not fired'
            },
            iframe : {
                src : 'https://ad3.adfarm1.adition.com/track?tid=1199&sid=19547&type=html&orderid=_o_&itemno=_i_&descr=_d_&&quantity=1&price=0.00total=_t_&parm3=_p_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale DL: '+e);
    } finally {
        dl.push({'event':'DL mediascale'});
    }
    return cdl && dl && cdl.DL_mediascale;
}(window.CATTDL, window.externaldataLayer));

(function gtm_mediascale(jQ, dl, cdl, msdl){
    'use strict';
    if (jQ && dl && cdl && msdl) try {
            jQ().append && jQ('body').append(jQ('<img>', {
                src : msdl.img && msdl.img.src || '',
                style : 'display: none;border-style:none;',
                alt : '',
                id : 'mediascalePixel',
                width : 1,
                height : 1
            }));
            msdl.img.status = 'fired';
        var src = msdl.iframe && msdl.iframe.src
            .replace(/_o_/, msdl.orderid || '')
            .replace(/_i_/, msdl.itemno || '')
            .replace(/_d_/, msdl.descr || '')
            .replace(/_t_/, msdl.total || '')
            .replace(/_p_/, msdl.parm3 || '');
        jQ().append && jQ('body').append(jQ('<iframe>', {
            allowtransparency:'true',
            scrolling:'no',
            frameborder:'0',
            border:'0',
            marginwidth:'0',
            marginheight:'0',
            'background-color':'transparent',
            src : src || '',
            alt : '',
            id : 'mediascaleiframe',
            width : 1,
            height : 1
        }));
        msdl.iframe = {
            status : 'fired',
            src : src
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale: '+e);
    } finally {
        dl.push({'event':'mediascale'});
    }
    return jQ && dl && cdl && msdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_mediascale));
//</script>
