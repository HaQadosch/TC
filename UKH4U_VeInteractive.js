// all pages <script src="//config1.veinteractive.com/tags/C3AE0379/B578/49B9/AD8B/4E3869DDB1CE/tag.js" type="text/javascript" async></script>
// Conf pages <img src="//drs2.veinteractive.com/DataReceiverService.asmx/Pixel?journeycode=C3AE0379-B578-49B9-AD8B-4E3869DDB1CE" width="1" height="1"/>

//<script id='gtm_veinteractive'>
(function gtm_veinteractiveDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_veinteractive = {
            script : {
                src : '//config1.veinteractive.com/tags/C3AE0379/B578/49B9/AD8B/4E3869DDB1CE/tag.js',
                status : 'not fired'
            },
            pixel : {
                src : '//drs2.veinteractive.com/DataReceiverService.asmx/Pixel?journeycode=C3AE0379-B578-49B9-AD8B-4E3869DDB1CE',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM veinteractive DL: '+ e);
    } finally {
        dl.push({'event':'veinteractiveDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_veinteractive;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_veinteractive(jQ, dl, cdl, vedl){
    'use strict';
    if (jQ && dl && cdl && vedl) try {
        if (/booking/i.test(cdl.CATTParams && cdl.CATTParams.pageid || '')) {
            jQ().append && jQ('body').append(jQ('<img>', {
                src : vedl.pixel && vedl.pixel.src || '',
                style : 'border-style:none;',
                alt : '',
                id : 'veinteractivePixel',
                width : 1,
                height : 1
            }));
        };
        jQ.getScript && jQ.getScript(vedl.script && vedl.script.src || '', function gtm_veinteractiveScript(){
             try {
                 vedl.script && (vedl.script.status = 'fired');
             } catch(ee) {
                 cdl.error('GTM veinteractiveScript: '+ ee);
             }
         });
    } catch(e) {
        cdl.error('GTM veinteractive:'+ e);
    } finally {
        dl.push({'event':'veinteractive'});
    }
    return jQ && dl && cdl && vedl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_veinteractive))
</script>
