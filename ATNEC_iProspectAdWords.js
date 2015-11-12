/*
<!-- Google Code for MCC NEC.AT Booking Conversion Page -->
<script type="text/javascript">
var google_conversion_id = 996232563;
var google_conversion_language = "en";
var google_conversion_format = "2";
var google_conversion_color = "ffffff";
var google_conversion_label = "2teMCM3zoQkQ85qF2wM";
var google_conversion_value = 1.00;
var google_conversion_currency = "EUR";
var google_remarketing_only = false;

</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/996232563/?value=1.00&amp;currency_code=EUR&amp;label=2teMCM3zoQkQ85qF2wM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

*/

//<script id='gtm_iProspectAdWords'>
(function gtm_iProspectAdWordsDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_iprospectadwords = {
            google_conversion_id : 996232563,
            google_conversion_language : "en",
            google_conversion_format : "2",
            google_conversion_color : "ffffff",
            google_conversion_label : "2teMCM3zoQkQ85qF2wM",
            google_conversion_value : cdpm.bookingvalue || 1.00,
            google_conversion_currency : "EUR",
            google_remarketing_only : false,
            img : {
                src : '//www.googleadservices.com/pagead/conversion/996232563/?value=_v_&amp;currency_code=EUR&amp;label=2teMCM3zoQkQ85qF2wM&amp;guid=ON&amp;script=0',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM iProspectAdWords DL: '+e);
    } finally {
        dl.push({'event':'DL iProspectAdWords'});
    }
    return cdl && dl && cdl.DL_iprospectadwords;
}(window.CATTDL, window.dataLayer));

(function gtm_iProspectAdWords(jQ, dl, cdl, awdl){
    'use strict';
    if (jQ && dl && cdl && awdl) try {
        var src = (awdl.img && awdl.img.src || '').replace(/_v_/, awdl.google_conversion_value || '');
        jQ().append && jQ('body').append(jQ('<img>', {
            src : src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'iProspectAdWordsPixel',
            width : 1,
            height : 1
        }));
        awdl.img = {
            status : 'fired',
            src : src
        };
    } catch(e) {
        cdl.error && cdl.error('GTM iProspectAdWords: '+e);
    } finally {
        dl.push({'event':'iProspectAdWords'});
    }
    return jQ && dl && cdl && awdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iprospectadwords));
//</script>

