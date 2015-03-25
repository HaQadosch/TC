<script id='gtm_turnSuedafrika'>
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
</script>
