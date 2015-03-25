<script id='gtm_turn'>
(function gtm_TurnDL(cdl, edl, path) {
    'use strict';
    if (cdl && edl) try {
        cdl.DL_turn = {
            dest: cdl.CATTParams && cdl.CATTParams.destination && cdl.CATTParams.destination.split(/,/g).pop() || '',
            cat: {
                "/holidays-abroad/summer-2014/":'11',
                "/lp/1z6-deals/":'12',
                "/lp/city-breaks/":'13',
                "/hotels/hotel-deals":'14',
                "/flights/":'15',
                "/holidays/flight-hotel/":'16',
                "/holidays/ski-holidays/":'17',
                "/cruise/":'18',
                "/holiday-extras/":'19',
                "/destinations/":'20'
            }[path] || '',
            imgDest: {
                src: '//d.turn.com/r/dd/id/L21rdC80MzQvY2lkLzI4MTE3ODg0L3QvMg/kv/destctry=_dest_',
                status: 'not fired'
            },
            script: {
                src: '//d.turn.com/r/dft/id/L21rdC80MzQvcGlkLzI4NDE4MzQzL3QvMA',
                status: 'not fired'
            },
            imgCat: {
                src: 'http://d.turn.com/r/dd/id/L21rdC80MzQvY2lkLzI4MTE3ODg0L3QvMg/cat/_cat_',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error("GTM Ext UK TC DL_turn: ", e);
    } finally {
        edl.push({'event': 'DL_turn'});
    }
    return cdl && edl && cdl.DL_turn;
}(window.CATTDL, window.externalLayer, window.location.pathname));

(function gtm_TurnPixel(jQ, cdl, tndl){
    'use strict';
    if (jQ && cdl && tndl) try{
        var img = '';
        var src = '';
        if (tndl.dest) {
            src = (tndl.imgDest.src || '').replace(/_dest_/, (tndl.dest || ''));
            if (src) {
                img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="turnDestPixel">').attr('src', src);
                img.appendTo('body');
                jQ.extend && jQ.extend(tndl.imgDest, {status: 'fired', src: src});
            }
        }
        if (tndl.cat) {
            src = (tndl.imgCat.src || '').replace(/_cat_/, (tndl.cat || ''));
            if (src) {
                img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="turnCastPixel">').attr('src', src);
                img.appendTo('body');
                jQ.extend && jQ.extend(tndl.imgCat, {status: 'fired', src: src});
            }
        }
        jQ.ajaxSetup({cache: true});
         jQ.getScript && jQ.getScript(tndl.script.src, function gtm_turnScript(){
            tndl.script && (tndl.script.status = 'fired');
         });
    } catch(e){
        cdl.error && cdl.error('GTM Ext UK TC Turn: ', e);
    }
    return jQ && cdl && tndl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turn))
</script>
