/*
 * <img src="https://www.kayak.com/s/pixeltracking/<partnercode>?price=<total>&currency=<currency>&linkid=<clickId>"/>
 *
 */

<script id='gtm_kayak'>
(function gtm_kayakDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_kayak = {
            type : 'pixeltracking',
            partnercode : '',
            price : cdpm.bookingvalue || '',
            currency : cdpm.searches && cdpm.searches.currency || cdpm.currency || 'GBP',
            linkid : cdpm.attribution && cdpm.attribution.utm_content || '',
            img : {
                src : '//www.kayak.com/s/pixeltracking/_pc_?price=_p_&currency=_c_&linkid=_l_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Kayak DL: '+e);
    } finally {
        dl.push({'event':'DL Kayak'});
    }
    return cdl && dl && cdl.DL_kayak;
}(window.CATTDL, window.dataLayer));

(function gtm_kayak(jQ, dl, cdl, kkdl){
    'use strict';
    if (jQ && dl && cdl && kkdl) try {
        var src = kkdl.img && kkdl.img.src
            .replace(/_pc_/, kkdl.partnercode || '')
            .replace(/_p_/, kkdl.price || '')
            .replace(/_c_/, kkdl.currency || '')
            .replace(/_l_/, kkdl.linkid || '');
        jQ().append && jQ('body').append(jQ('<img>', {
            src : kkdl.img && kkdl.img.src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'KayakPixel',
            width : 1,
            height : 1
        }));
        kkdl.img = {
            status : 'fired',
            src : src
        }
    } catch(e) {
        cdl.error && cdl.error('GTM Kayak: '+e);
    } finally {
        dl.push({'event':'kayak'});
    }
    return jQ && dl && cdl && kkdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kayak))
</script>
