//<script id='gtm_CrazyEgg'>
(function gtm_CrazyEggDL(cdl, edl) {
    'use strict';
    if (cdl && edl) try {
        cdl.DL_crazyegg = {
            account : '0012/5391',
            script: {
                status: 'not fired',
                src: 'https://dnn506yrbagrg.cloudfront.net/pages/scripts/0013/9168.js?'+Math.floor(new Date().getTime()/3600000)
            }
        };
    } catch (e) {
        cdl.error('GTM CrazyEgg DL: ' + e);
    } finally {
        edl.push({'event': 'DL CrazyEgg'});
    }
    return cdl && edl && cdl.DL_crazyegg;
}(window.CATTDL, window.externaldataLayer));

(function gtm_CrazyEgg(jQ, cdl, cedl) {
    'use strict';
    if (jQ && cdl && cedl) try {
        cedl.script && cedl.script.src && jQ.when(jQ.getScript(cedl.script.src)).done(function gtm_CrazyEggScript() {
            cedl.script.status = 'fired';
        });
    } catch (e) {
        cdl.error('GTM CrazyEgg: ' + e);
    }
    return jQ && cdl && cedl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_crazyegg));
</script>

try{
    setTimeout(
        function(){
            var c=document.createElement("script");
            var d=document.getElementsByTagName('script')[0];
            c.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0013/9168.js?"+Math.floor(new Date().getTime()/3600000);
            c.async=true;
            c.type="text/javascript";
            d.parentNode.insertBefore(c,d)
        },
        1
    );
} catch (e){if (typeof console != "undefined") console.log("DE NEC CrazyEgg: "+e)}
