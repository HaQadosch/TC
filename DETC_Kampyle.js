/*
var k_url = '//assets.kampyle.com/clients/1146582/d/k_config.js';
              var k_head = document.getElementsByTagName('head')[0],
k_script = document.createElement('script');
k_script.setAttribute('src', k_url);
k_script.setAttribute('type', 'text/javascript');
k_script.setAttribute('charset', 'utf-8');
k_head.insertBefore(k_script, k_head.firstChild);

UK TC Angular - 3rd Parties GTM-M8NMSC
UK TC Frog V1 3rd Parties  GTM-K83N5Q
TC UK Package 3rd Party  GTM-TQZ8NH
TC UK Multicom  GTM-KH4KVH
TC UK Multicom CheckOut GTM-TGBQS9

*/

//<script id='gtm_kampyle'>
(function gtm_KampyleDL(cdl, edl) {
    'use strict';
    if (cdl && edl) try {
        var cdpm = cdl.CATTParams || '';
        cdl.DL_kampyle = {
            client : '1146582',
            script: {
                status: 'not fired',
                src: 'https://assets.kampyle.com/clients/1146582/k_config.js'
            }
        };
    } catch (e) {
        cdl.error('GTM Kampyle DL: ' + e);
    } finally {
        edl.push({'event': 'DL Kampyle'});
    }
    return cdl && edl && cdl.DL_kampyle;
}(window.CATTDL, window.externaldataLayer || window.dataLayer));

(function gtm_Kampyle(jQ, cdl, kpdl) {
    'use strict';
    if (jQ && cdl && kpdl) try {
        kpdl.script && kpdl.script.src && jQ.when(jQ.getScript(kpdl.script.src)).done(function gtm_kampyleScript() {
            kpdl.script.status = 'fired';
        });
    } catch (e) {
        cdl.error('GTM Kampyle: ' + e);
    }
    return jQ && cdl && kpdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kampyle))
</script>

<script id='gtm_kampyle'>
setTimeout(function() {
    (function gtm_KampyleDL(cdl, edl) {
        'use strict';
        if (cdl && edl) try {
            var cdpm = cdl.CATTParams || '';
            cdl.DL_kampyle = {
                client : '4313641',
                poolTest : /kampyletest/i.test(window.document.URL),
                script: {
                    status: 'not fired',
                    src: '//assets.kampyle.com/clients/4313641/d/k_config.js'
                }
            };
        } catch (e) {
            cdl.error('GTM Kampyle DL: ' + e);
        } finally {
            edl.push({'event': 'DL Kampyle'});
        }
        return cdl && edl && cdl.DL_kampyle;
    }(window.CATTDL, window.externalLayer || window.externalDataLayer || window.dataLayer));

    (function gtm_Kampyle(jQ, cdl, kpdl) {
        'use strict';
        if (jQ && cdl && kpdl && kpdl.poolTest ) try {
            kpdl.script && kpdl.script.src && jQ.when(jQ.getScript(kpdl.script.src)).done(function gtm_kampyleScript() {
                kpdl.script.status = 'fired';
            });
        } catch (e) {
            cdl.error('GTM Kampyle: ' + e);
        }
        return jQ && cdl && kpdl;
    }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kampyle))
}, 3000)
</script>
