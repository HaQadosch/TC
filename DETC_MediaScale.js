// Home
try{
    $('body').append('<img src="http://ad3.adfarm1.adition.com/tagging?network=250&tag[tccat.HP_tcde]&type=src" width=1 height=1 style="display: none">');
} catch (e){if (typeof console != "undefined") console.log("DE TC Mediascale HOME: " + e)}

//<script id='gtm_mediascale'>
(function gtm_mediascaleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        cdl.DL_mediascale = {
            network : 250,
            img : {
                src : 'https://ad3.adfarm1.adition.com/tagging?network=250&tag[tccat.HP_tcde]&type=src',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale DL: '+e);
    } finally {
        dl.push({'event':'DL mediascale'});
    }
    return cdl && dl && cdl.DL_mediascale;
}(window.CATTDL, window.dataLayer));

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
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_mediascale));
//</script>

// Search to Pay
try{
    $('body').append('<img src="http://ad3.adfarm1.adition.com/tagging?network=250&tag[tccat.PS_tcde]&tag[tcPS_tcde.Strecke]=search&tag[tcPSDest_tcde.Destination]=' + window.CATTParams.ResortSearched + '&tag[tcPS_tcde.Country]=' + window.CATTParams.Destination + '&tag[tcPS_tcde.Hotel]=' + window.CATTParams.AccomCode + '&tag[tcPS_tcde.Anreisedatum]=' + window.CATTParams.DeptDate + '&tag[tcPS_tcde.ZahlE]=' + window.CATTParams.PaxAdult + '&tag[tcPS_tcde.ZahlK]=' + window.CATTParams.PaxChild + '&type=src" width=1 height=1 style="display: none;">');
} catch (e){if (typeof console != "undefined") console.log("DE TC Mediascale SEARCH: " + e)}

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
                src : 'https://ad3.adfarm1.adition.com/tagging?network=250&tag[tccat.PS_tcde]&tag[tcPS_tcde.Strecke]=search&tag[tcPSDest_tcde.Destination]=_d_&tag[tcPS_tcde.Country]=_c_&tag[tcPS_tcde.Hotel]=_h_&tag[tcPS_tcde.Anreisedatum]=_a_&tag[tcPS_tcde.ZahlE]=_ze_&tag[tcPS_tcde.ZahlK]=_zk_&type=src',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale DL: '+e);
    } finally {
        dl.push({'event':'DL mediascale'});
    }
    return cdl && dl && cdl.DL_mediascale;
}(window.CATTDL, window.dataLayer));

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
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_mediascale));
//</script>

// Booking
try{
    $('body').append('<img src="http://ad3.adfarm1.adition.com/tagging?network=250&tag[tccat.WK_tcde]&tag[tcWK_tcde.Strecke]=search&tag[tcPSDest_tcde.Destination]=' + window.CATTParams.ResortSearched + '&tag[tcWK_tcde.Country]=' + window.CATTParams.Destination + '&tag[tcWK_tcde.Hotel]=' + window.CATTParams.AccomCode + '&tag[tcWK_tcde.Anreisedatum]=' + window.CATTParams.DeptDate + '&tag[tcWK_tcde.ZahlE]=' + window.CATTParams.PaxAdult + '&tag[tcWK_tcde.ZahlK]=' + window.CATTParams.PaxChild + '&type=src" width=1 height=1 style="display: none;">');
    $('body').append('<iframe allowtransparency="true" scrolling="no" frameborder="0" border="0" width="1" height="1" marginwidth="0" marginheight="0" background-color="transparent" src="https://ad3.adfarm1.adition.com/track?tid=1199&sid=14993&type=html&orderid=' + window.CATTParams.BookingRef + '&descr=' + window.CATTParams.Destination + '&total=' + window.CATTParams.BookingValue + '&parm3=' + window.CATTParams.LOB + '"></iframe>');
} catch (e){if (typeof console != "undefined") console.log("DE TC Mediascale ORDER: " + e)}

//<script id='gtm_mediascale'>
(function gtm_mediascaleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_mediascale = {
            network : 250,
            WK_tcde : '',
            Strecke : 'order',
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
                src : 'https://ad3.adfarm1.adition.com/tagging?network=250&tag[tccat.WK_tcde]&tag[tcWK_tcde.Strecke]=search&tag[tcPSDest_tcde.Destination]=_d_&tag[tcWK_tcde.Country]=_c_&tag[tcWK_tcde.Hotel]=_h_&tag[tcWK_tcde.Anreisedatum]=_a_&tag[tcWK_tcde.ZahlE]=_ze_&tag[tcWK_tcde.ZahlK]=_zk_&type=src',
                status : 'not fired'
            },
            iframe : {
                src : 'https://ad3.adfarm1.adition.com/track?tid=1199&sid=14993&type=html&orderid=_o_&descr=_d_&total=_t_&parm3=_p_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale DL: '+e);
    } finally {
        dl.push({'event':'DL mediascale'});
    }
    return cdl && dl && cdl.DL_mediascale;
}(window.CATTDL, window.dataLayer));

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
        src = msdl.iframe && msdl.iframe.src
            .replace(/_o_/, msdl.orderid || '')
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
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_mediascale));
//</script>
