//<script id='gtm_blah'>
(function gtm_blahDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_blah = {
            var1 : cdpm.val1 || '',
            var2 : cdpm.val2 || ''
        };
    } catch(e) {
        cdl.error('GTM blah: '+ e);
    } finally {
        dl.push({'event':'blahDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_blah;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_blah(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        jQ.getScript && jQ.getScript('url.js', function gtm_blahScript(){
            try {
                window._blah && (window._blah.var1 = true);
            } catch(ee) {
                cdl.error('GTM blahScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM Blah:'+ e);
    } finally {
        dl.push({'event':'Blah'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_blah));
//</script>


//<script id='gtm_xx'>
(function gtm_xxDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_xx = {
            type : 'pixeltracking',
            partnercode : 'HOTELS4UDOTCOM',
            price : cdpm.bookingvalue || '',
            currency : cdpm.searches && cdpm.searches.currency || cdpm.currency || 'GBP',
            linkid : cdpm.attribution && cdpm.attribution.utm_content || '',
            img : {
                src : '//www.kayak.com/s/pixeltracking/_pc_?price=_p_&currency=_c_&linkid=_l_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM xx DL: '+e);
    } finally {
        dl.push({'event':'DL xx'});
    }
    return cdl && dl && cdl.DL_xx;
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
            id : 'xxPixel',
            width : 1,
            height : 1
        }));
        kkdl.img = {
            status : 'fired',
            src : src
        }
    } catch(e) {
        cdl.error && cdl.error('GTM xx: '+e);
    } finally {
        dl.push({'event':'xx'});
    }
    return jQ && dl && cdl && kkdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_xx))
//</script>
