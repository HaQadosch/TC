try {
    if (!window.mstag) window.mstag = {loadTag : function(){},time : (new Date()).getTime()};
        (function() {
            var ba = document.createElement('script');
            ba.id = "mstag_tops";
            ba.type = 'text/javascript';
            ba.async = true;
            ba.src = '//flex.atdmt.com/mstag/site/565e6173-da8b-43cf-949e-311a1cc0c860/mstag.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ba, s);
        })();
    window.mstag.loadTag("analytics", {dedup:"1",domainId:"2149921",type:"1",revenue:"",actionid:"112034"})
} catch (e){if (typeof console != "undefined") console.log("NEC DE Conf NetSociety Bing Conversion tag: "+e)}

<script id='gtm_Bing'>
(function gtm_BingDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_bing = {
            id   : '565e6173-da8b-43cf-949e-311a1cc0c860',
            analytics : {
                dedup:"1",
                domainId:"2149921",
                type:"1",
                revenue:"",
                actionid:"112034"
            },
            script  : {
                status  : 'not fired',
                src :   '//flex.atdmt.com/mstag/site/_id_/mstag.js'
            }
        };
    } catch(e){
        cdl.error('GTM Bing DL: '+e);
    }
    return cdl && jQ && cdl.DL_bing;
}(window.CATTDL, window.jQuery));

(function gtm_Bing(cdl, jQ, bgdl) {
    'use strict';
    if (cdl && jQ && bgdl) try {
        if (!window.mstag) window.mstag = {loadTag : function(){},time : (new Date()).getTime(), _write:function (s){ jQ.getScript((/src=\'([^\']*)\'/i.exec(s) || '').pop()) }}; // Yes, this is a monkeypatch
        var ba = document.createElement('script');
            ba.id = "mstag_tops";
            ba.src = bgdl.script && bgdl.script.src.replace(/_id_/, bgdl.id || '') || '';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ba, s);

        window.mstag && window.mstag.loadTag && window.mstag.loadTag("analytics", bgdl.analytics);
        bgdl.script = {
            status: 'fired',
            src: ba.src
        };
    } catch(e) {
        cdl.error('GTM Bing: '+e);
    }
    return cdl && jQ && bgdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_bing))
</script>
