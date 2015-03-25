try{
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-29069538-4');
  ga('send', 'pageview');
} catch(e){if (typeof console != "undefined") console.log("DE NEC UATC: "+e)}

<script id='gtm_uatcPerf'>
(function gtm_uatcPerfDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_uatcPerf = {
            uaid : 'UA-29069538-4',
            send : 'pageview'
        };
    } catch(e) {
        cdl.error('GTM UATC Perf DL: '+ e);
    } finally {
        dl.push({'event':'uatcPerfDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_uatcPerf;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_uatcPerf(dl, cdl, uadl){
    'use strict';
    if (dl && cdl && uadl) try {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        window.ga && window.ga('create', uadl.uaid || '') &&  window.ga('send', uadl.send || '');

    } catch(e) {
        cdl.error('GTM UATC Perf:'+ e);
    } finally {
        dl.push({'event':'uatcPerf'});
    }
    return dl && cdl && uadl;
}(window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatcPerf))
</script>
