<script id="Attribution_Conf_59MJR4">
  (function gtm_attribution(dl, cdl){
    'use strict';
    var cdpm;
    if (dl && cdl) try {
      var attr = !window.sessionStorage?0:window.sessionStorage.getItem('gtm_attribution');
      cdpm = cdl.CATTParams || {};
      var timeStart = cdpm.timestart || 0;

      if (attr) {

        var stampEpoch = +new Date();
        dl.push({'event': attr, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
        window.sessionStorage.removeItem('gtm_attribution');
      }
    } catch(e) {
      cdl.error('GTM Attr: '+e);
    }
    return cdl && dl && cdpm && cdpm.attribution;
  }(window.dataLayer_59MJR4, window.CATTDL));
</script>
