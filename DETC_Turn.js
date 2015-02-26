Tracking Beacon:

<!-- Do Not Remove - Turn Tracking Beacon Code - Do Not Remove -->
<!-- Advertiser Name : DE_Iberostar -->
<!-- Beacon Name : IBS_Conversion -->
<!-- If Beacon is placed on a Transaction or Lead Generation based page, please populate the turn_client_track_id with your order/confirmation ID -->
<script type="text/javascript">
  turn_client_track_id = "";
</script>
<script type="text/javascript" src="https://r.turn.com/server/beacon_call.js?b2=rFCDImdXAbJKjsZ1_hY3yEWi81g4llzS2Lm8iK9vZzB23dIZ2C0Y2UdgVZrPZRNUUqh5DJwWthbHTBz0crVlcg">
</script>
<noscript>
  <img border="0" src="https://r.turn.com/r/beacon?b2=rFCDImdXAbJKjsZ1_hY3yEWi81g4llzS2Lm8iK9vZzB23dIZ2C0Y2UdgVZrPZRNUUqh5DJwWthbHTBz0crVlcg&cid=">
</noscript>
<!-- End Turn Tracking Beacon Code Do Not Remove -->


<script id='gtm_Turn'>
(function gtm_TurnDL(cdl, dl) {
    'use strict';
    if (cdl && dl) try {
        cdl.DL_turn = {
            b2 : 'rFCDImdXAbJKjsZ1_hY3yEWi81g4llzS2Lm8iK9vZzB23dIZ2C0Y2UdgVZrPZRNUUqh5DJwWthbHTBz0crVlcg',
            cid : '',
            img: {
                src: '//r.turn.com/r/beacon?b2=rFCDImdXAbJKjsZ1_hY3yEWi81g4llzS2Lm8iK9vZzB23dIZ2C0Y2UdgVZrPZRNUUqh5DJwWthbHTBz0crVlcg&cid=',
                status: 'not fired'
            }
        };
        dl.push({event: 'DL_turn'})
    } catch(e) {
        cdl.error("GTM DL_turn: "+e)
    }
    return cdl.DL_turn
}(window.CATTDL, window.dataLayer));

(function gtm_TurnPixel(jQ, cdl, tndl){
    'use strict';
    if (jQ && cdl && tndl) try{
        if (tndl.img && tndl.img.src) {
            var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="gtm_turnPixel">').attr('src', tndl.img.src);
            img.appendTo('body');
            tndl.img.status = 'fired';
        }
    } catch(e) {
        cdl.error && cdl.error('GTM Turn: '+e)
    }
    return jQ && cdl && tndl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turn))
</script>
