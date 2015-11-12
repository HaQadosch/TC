try{
    var k_url = '//assets.kampyle.com/clients/4110186/d/k_config.js';
                var k_head = document.getElementsByTagName('head')[0],
k_script = document.createElement('script');
k_script.setAttribute('src', k_url);
k_script.setAttribute('type', 'text/javascript');
k_script.setAttribute('charset', 'utf-8');
k_head.insertBefore(k_script, k_head.firstChild);
} catch(e){if (typeof console != "undefined") console.log("DE NEC Kampyle: "+e)}

<script id='gtm_kampyle'>
(function gtm_kampyleDL(edl, cdl, cdpm){
    'use strict';
    if (edl && cdl && cdpm) try {
        cdl.DL_kampyle = {
            script : {
                src : '//assets.kampyle.com/clients/4110186/d/k_config.js',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM Kampyle DL: '+ e);
    } finally {
        edl.push({'event':'KampyleDL'});
    }
    return edl && cdl && cdpm && cdl.DL_kampyle;
}(window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_kampyle(edl, cdl, kpdl){
    'use strict';
    if (edl && cdl && kpdl) try {
        if (kpdl.script.src) {
            var k_head = document.getElementsByTagName('head')[0],
            k_script = document.createElement('script');
            k_script.setAttribute('src', kpdl.script.src);
            k_script.setAttribute('id', 'gtm_kampyle');
            k_script.setAttribute('charset', 'utf-8');
            k_head.insertBefore(k_script, k_head.firstChild);
            kpdl.script.status = 'fired';
        }
    } catch(e) {
        cdl.error('GTM Kampyle:'+ e);
    } finally {
        edl.push({'event':'kampyle'});
    }
    return edl && cdl && kpdl;
}(window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kampyle))
</script>
