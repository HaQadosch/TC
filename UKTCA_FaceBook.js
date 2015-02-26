Homepage (http://www.thomascookairlines.com/Search.aspx) - PageID = Search

<script id='gtm_fb'>
(function gtm_facebookDL(cdl, dl) {
    'use strict';
    if (dl && cdl) try {
        cdl.DL_facebook = {
            pixelid     : '904443146233456',
            track       : 'PixelInitialized',
            script  : {
                status  : 'not fired',
                url     : '//connect.facebook.net/en_US/fbds.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_facebook: ", e);
    } finally {
        dl.push({event: 'facebookDL'});
    }
    return cdl && cdl.DL_facebook;
}(window.CATTDL, window.dataLayer));// {'value':window.CATTDL.CATTParams.bookingvalue || '0','currency':'GBP'}

(function gtm_facebook(jQ, cdl, fbdl, dl){
    'use strict';
    if (jQ && cdl && fbdl && dl) try {
        jQ.ajaxSetup({cache: true});
        window._fbq = window._fbq || (window._fbq = []);
        if (!window._fbq.loaded) {
            jQ.when(jQ.getScript && jQ.getScript(fbdl.script && fbdl.script.url || '')).then(function gtm_facebookScript(){
                fbdl.script.status = 'fired';
                window._fbq && (window._fbq.loaded = true);
            });
        }
        window._fbq && window._fbq.push(['addPixelId', fbdl.pixelid || '']);
    } catch(e) {
        cdl.error('GTM Facebook: ', e);
    } finally {
        dl.push({'event':'facebook'});
        window._fbq = window._fbq || [];
        window._fbq.push(['track', fbdl.track || '', {}]);
    }
    return jQ && cdl && fbdl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_facebook, window.dataLayer))
</script>



Confirmation page (https://www.thomascookairlines.com/Confirmation.aspx) - PageID = Itinerary

<!-- Facebook Conversion Code for TC Airlines booking conversion -->
<script id='gtm_fbConv'>
(function gtm_facebookDL(cdl, dl) {
    'use strict';
    if (dl && cdl) try {
        var cdpm = cdl.CATTParams;
        var jQPrice = $('.price').first().text().replace(/^./, '') || "0";

        cdl.DL_facebook = {
            pixelid     : '904443146233456',
            track       : '6018701921536',
            price       : cdpm.bookingvalue || jQPrice || '0',
            script  : {
                status  : 'not fired',
                url     : '//connect.facebook.net/en_US/fbds.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_facebook: ", e);
    } finally {
        dl.push({event: 'facebookDL'});
    }
    return cdl && cdl.DL_facebook;
}(window.CATTDL, window.dataLayer));

(function gtm_facebook(jQ, cdl, fbdl, dl){
    'use strict';
    if (jQ && cdl && fbdl && dl) try {
        jQ.ajaxSetup({cache: true});
        window._fbq = window._fbq || (window._fbq = []);
        if (!window._fbq.loaded) {
            jQ.when(jQ.getScript && jQ.getScript(fbdl.script && fbdl.script.url || '')).then(function gtm_facebookScript(){
                fbdl.script.status = 'fired';
                window._fbq && (window._fbq.loaded = true);
            });
        }
        window._fbq && window._fbq.push(['addPixelId', fbdl.pixelid || '']);
    } catch(e) {
        cdl.error('GTM Facebook: ', e);
    } finally {
        dl.push({'event':'facebook'});
        window._fbq = window._fbq || [];
        window._fbq.push(['track', fbdl.track || '', {'value':(fbdl.price || '0'),'currency':'GBP'}]);
    }
    return jQ && cdl && fbdl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_facebook, window.dataLayer))
</script>
