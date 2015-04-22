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
Voyage: Confirmation Page
Start: 01.05.2015
Expires 30.07.2015

<!-- Do Not Remove - Turn Tracking Beacon Code - Do Not Remove -->
<!-- Advertiser Name : DE_MaxxHotelsandResorts -->
<!-- Beacon Name : DE_Voyage_Conversion -->
<!-- If Beacon is placed on a Transaction or Lead Generation based page, please populate the turn_client_track_id with your order/confirmation ID -->
<script type="text/javascript">
  turn_client_track_id = "";
</script>
<script type="text/javascript" src="https://r.turn.com/server/beacon_call.js?b2=IENUZLDBL0ldrrpnsCEn_IsYSsJq_1d_yREvpcYDEbuzFI-axSZFz4I5TzLsDO8nDRBY0sBRjAvSj7zTz6F_8Q">
</script>
<noscript>
  <img border="0" src="https://r.turn.com/r/beacon?b2=IENUZLDBL0ldrrpnsCEn_IsYSsJq_1d_yREvpcYDEbuzFI-axSZFz4I5TzLsDO8nDRBY0sBRjAvSj7zTz6F_8Q&cid=">
</noscript>
<!-- End Turn Tracking Beacon Code Do Not Remove -->

*/

//<script id='gtm_turnVoyage'>
(function gtm_TurnVoyageDL(cdl, edl){
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';
        cdl.DL_turnvoyage = {
            cid : cdpm.bookingref || '',
            start: '2015 05 01',
            end: '2015 07 31',
            img : {
                src : 'https://r.turn.com/r/beacon?b2=IENUZLDBL0ldrrpnsCEn_IsYSsJq_1d_yREvpcYDEbuzFI-axSZFz4I5TzLsDO8nDRBY0sBRjAvSj7zTz6F_8Q&cid=_cid_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Turn Voyage DL: '+e);
    } finally {
        edl.push({'event':'DL VoyageTurn'});
    }
    return cdl && edl && cdl.DL_turnvoyage;
}(window.CATTDL, window.externaldataLayer));

(function gtm_turnVoyage(jQ, edl, cdl, ftdl){
    'use strict';
    if (jQ && edl && cdl && ftdl) try {
        var datenow = +Date.now();
        var src = ftdl.img && ftdl.img.src.replace(/_cid_/i, ftdl.cid || '') || '';
       if ((datenow > +new Date(ftdl.start || '')) && (datenow < +new Date(ftdl.end)) && jQ().append) {
            jQ('body').append(jQ('<img>', {
                src : src,
                style : 'border-style:none;',
                alt : '',
                id : 'turnVoyage',
                width : 1,
                height : 1
            }));
            ftdl.img = {
                src : src,
                status : 'fired'
            };
       }
    } catch(e) {
        cdl.error && cdl.error('GTM Voyage Turn: '+e);
    } finally {
        edl.push({'event':'VoyageTurn'});
    }
    return jQ && edl && cdl && ftdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turnvoyage));
//</script>
