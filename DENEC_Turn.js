/*Turn SRP Accom Booking

try{
    (function(e,t,n){var r=e.getElementsByTagName(t)[0],e=e.createElement(t);e.async=!0;e.src=n;r.parentNode.insertBefore(e,r)})(document,"script","//d.turn.com/r/dft/id/L21rdC80MzQvcGlkLzI4NDE4MzQzL3QvMA");if (CATTParams.Destination) $("body").append(unescape("%3Cimg%20height%3D%221%22%20width%3D%221%22%20src%3D%22http%3A//d.turn.com/r/dd/id/L21rdC80MzQvY2lkLzI4MTE3ODg0L3QvMg/kv/destctry%3D"+CATTParams.Destination.split(",").pop()+"%22%20/%3E"))
} catch (e){if (typeof console != "undefined") console.log("DE NEC Turn FlexTag: "+e)}

*/

//<script id='gtm_turn'>
(function gtm_TurnDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_turn = {
            destination : cdpm.destination || '',
            id : 'L21rdC80MzQvcGlkLzI4NDE4MzQzL3QvMA',
            script : {
                src : '//d.turn.com/r/dft/id/L21rdC80MzQvcGlkLzI4NDE4MzQzL3QvMA',
                status : 'not fired'
            },
            img : {
                src : '//d.turn.com/r/dd/id/L21rdC80MzQvY2lkLzI4MTE3ODg0L3QvMg/kv/destctry=_d_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Flextag DL: '+e);
    } finally {
        edl.push({'event':'DL Flextag'});
    }
    return cdl && edl && cdl.DL_turn;
}(window.CATTDL, window.externaldataLayer))

(function gtm_turn(jQ, edl, cdl, ftdl){
    'use strict';
    if (jQ && edl && cdl && ftdl) try {
        jQ.getScript && jQ.getScript(ftdl.script && ftdl.script.src || '', function gtm_turnFlectagGetScript(){
            ftdl.script && (ftdl.script.status = 'fired');
        });
        var src = ftdl.img && ftdl.img.src.replace(/_d_/i, ftdl.destination || '') || '';
        jQ().append && jQ('body').append(jQ('<img>', {
            src : src,
            style : 'border-style:none;',
            alt : '',
            id : 'turnFlextag',
            width : 1,
            height : 1
        }));
        ftdl.img = {
            src : src,
            status : 'fired'
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Flextag: '+e);
    } finally {
        edl.push({'event':'Flextag'});
    }
    return jQ && edl && cdl && ftdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turn))
//</script>


// suedafrika Page http://www.neckermann-reisen.de/mp/suedafrika
//<script id='gtm_turnSuedafrika'>
(function gtm_TurnSuedafrikaDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_turnsuedafrika = {
            img : {
                src : '//r.turn.com/r/beacon?b2=gkg8dgz17EzSmgiNlJLrXZdA8zfy0dxG9F4fUTzEUsJPPEys-Sgom6xjSZtvCGw_Rfvi_nVVTiQOkxGmjgpg4g&cid=',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Suedafrika DL: '+e);
    } finally {
        edl.push({'event':'DL Suedafrika'});
    }
    return cdl && edl && cdl.DL_turnsuedafrika;
}(window.CATTDL, window.externaldataLayer))

(function gtm_turnSuedafrika(jQ, edl, cdl, sadl){
    'use strict';
    if (jQ && edl && cdl && sadl) try {
        jQ().append && jQ('body').append(jQ('<img>', {
            src : sadl.img && sadl.img.src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'turnFlextag',
            width : 1,
            height : 1
        }));
        sadl.img.status = 'fired';
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Suedafrika: '+e);
    } finally {
        edl.push({'event':'Suedafrika'});
    }
    return jQ && edl && cdl && sadl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turnsuedafrika))
//</script>


// Turn Suedafrika Conf r.turn.com/r/beacon?b2=Ww3Pm4lPJA9blEGfyZin_h-tCdfHCUVaqE8VAsUjbSZPPEys-Sgom6xjSZtvCGw_RhA6glI2EuI5CRDl2Hcibg&cid={{CATTBookingRef}}

//<script id='gtm_turnSuedafrika'>
(function gtm_TurnSuedafrikaDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_turnsuedafrika = {
            bookingref : cdpm.bookingref || '',
            img : {
                src : '//r.turn.com/r/beacon?b2=Ww3Pm4lPJA9blEGfyZin_h-tCdfHCUVaqE8VAsUjbSZPPEys-Sgom6xjSZtvCGw_RhA6glI2EuI5CRDl2Hcibg&cid=_r_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Suedafrika DL: '+e);
    } finally {
        edl.push({'event':'DL Suedafrika'});
    }
    return cdl && edl && cdl.DL_turnsuedafrika;
}(window.CATTDL, window.externaldataLayer))

(function gtm_turnSuedafrika(jQ, edl, cdl, sadl){
    'use strict';
    if (jQ && edl && cdl && sadl) try {
        var src = sadl.img && sadl.img.src.replace(/_r_/, sadl.bookingref || '') || '';
        jQ().append && jQ('body').append(jQ('<img>', {
            src : src,
            style : 'border-style:none;',
            alt : '',
            id : 'turnFlextag',
            width : 1,
            height : 1
        }));
        sadl.img = {
            src : src,
            status : 'fired'
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Suedafrika: '+e);
    } finally {
        edl.push({'event':'Suedafrika'});
    }
    return jQ && edl && cdl && sadl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turnsuedafrika))
//</script>

/*
Malta: Confirmation Page
Start: Now
Expires 30.06.2015

<!-- Do Not Remove - Turn Tracking Beacon Code - Do Not Remove -->
<!-- Advertiser Name : DE_Malta -->
<!-- Beacon Name : NEC_TCR_Conversion-Malta -->
<!-- If Beacon is placed on a Transaction or Lead Generation based page, please populate the turn_client_track_id with your order/confirmation ID -->
<script type="text/javascript">
  turn_client_track_id = "";
</script>
<script type="text/javascript" src="https://r.turn.com/server/beacon_call.js?b2=kIrBTmuhFNTc4rUFl-i7nKy9zGFgqw3BgXZ4n4mQ2b9tTa_t9GVvwkOLuAI86-tSJBR-_HbijhtCsvIMrB7HMA">
</script>
<noscript>
  <img border="0" src="https://r.turn.com/r/beacon?b2=kIrBTmuhFNTc4rUFl-i7nKy9zGFgqw3BgXZ4n4mQ2b9tTa_t9GVvwkOLuAI86-tSJBR-_HbijhtCsvIMrB7HMA&cid=">
</noscript>
<!-- End Turn Tracking Beacon Code Do Not Remove -->
*/

//<script id='gtm_turnMalta'>
(function gtm_TurnMaltaDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';
        cdl.DL_turnmalta = {
            cid : cdpm.bookingref || '',
            start: '2015 04 16',
            end: '2015 07 01',
            img : {
                src : 'https://r.turn.com/r/beacon?b2=kIrBTmuhFNTc4rUFl-i7nKy9zGFgqw3BgXZ4n4mQ2b9tTa_t9GVvwkOLuAI86-tSJBR-_HbijhtCsvIMrB7HMA&cid=_cid_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Malta DL: '+e);
    } finally {
        edl.push({'event':'DL MaltaTurn'});
    }
    return cdl && edl && cdl.DL_turnmalta;
}(window.CATTDL, window.externaldataLayer));

(function gtm_turnMalta(jQ, edl, cdl, ftdl){
    'use strict';
    if (jQ && edl && cdl && ftdl) try {
        var datenow = +Date.now();
        var src = ftdl.img && ftdl.img.src.replace(/_cid_/i, ftdl.cid || '') || '';
        if ((datenow > +new Date(ftdl.start || '')) && (datenow < +new Date(ftdl.end)) && jQ().append) {
            jQ('body').append(jQ('<img>', {
                src : src,
                style : 'border-style:none;',
                alt : '',
                id : 'turnMalta',
                width : 1,
                height : 1
            }));
            ftdl.img = {
                src : src,
                status : 'fired'
            };
        }
    } catch(e) {
        cdl.error && cdl.error('GTM Malta Turn: '+e);
    } finally {
        edl.push({'event':'MaltaTurn'});
    }
    return jQ && edl && cdl && ftdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turnmalta));
//</script>

/*
Party mit Julian: Confirmation Page
Start: 11.05.2015
Expires 15.07.2015

<!-- Do Not Remove - Turn Tracking Beacon Code - Do Not Remove -->
<!-- Advertiser Name : DE_ThomasCookIntern -->
<!-- Beacon Name : NEC_Conversion_PartyMitJulian -->
<!-- If Beacon is placed on a Transaction or Lead Generation based page, please populate the turn_client_track_id with your order/confirmation ID -->
<script type="text/javascript">
  turn_client_track_id = "";
</script>
<script type="text/javascript" src="https://r.turn.com/server/beacon_call.js?b2=IoVpRH5GJ0w9BVblTrRLzQuhYftZDjiD9OrZx1gYGDEUP7mbRZvVUW43MBksoQ9ANV3VAu5Jfxgofd3GtI3NwQ">
</script>
<noscript>
  <img border="0" src="https://r.turn.com/r/beacon?b2=IoVpRH5GJ0w9BVblTrRLzQuhYftZDjiD9OrZx1gYGDEUP7mbRZvVUW43MBksoQ9ANV3VAu5Jfxgofd3GtI3NwQ&cid=">
</noscript>
<!-- End Turn Tracking Beacon Code Do Not Remove -->

*/

//<script id='gtm_turnJulian'>
(function gtm_TurnJulianDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';
        cdl.DL_turnjulian = {
            cid : cdpm.bookingref || '',
            start: '2015 05 11',
            end: '2015 07 16',
            img : {
                src : 'https://r.turn.com/r/beacon?b2=IoVpRH5GJ0w9BVblTrRLzQuhYftZDjiD9OrZx1gYGDEUP7mbRZvVUW43MBksoQ9ANV3VAu5Jfxgofd3GtI3NwQ&cid=_cid_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Julian DL: '+e);
    } finally {
        edl.push({'event':'DL JulianTurn'});
    }
    return cdl && edl && cdl.DL_turnjulian;
}(window.CATTDL, window.externaldataLayer));

(function gtm_turnJulian(jQ, edl, cdl, ftdl){
    'use strict';
    if (jQ && edl && cdl && ftdl) try {
        var datenow = +Date.now();
        var src = ftdl.img && ftdl.img.src.replace(/_cid_/i, ftdl.cid || '') || '';
       if ((datenow > +new Date(ftdl.start || '')) && (datenow < +new Date(ftdl.end)) && jQ().append) {
            jQ('body').append(jQ('<img>', {
                src : src,
                style : 'border-style:none;',
                alt : '',
                id : 'turnJulian',
                width : 1,
                height : 1
            }));
            ftdl.img = {
                src : src,
                status : 'fired'
            };
       }
    } catch(e) {
        cdl.error && cdl.error('GTM Julian Turn: '+e);
    } finally {
        edl.push({'event':'JulianTurn'});
    }
    return jQ && edl && cdl && ftdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turnjulian));
//</script>
