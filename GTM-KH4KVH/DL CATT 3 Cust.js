<script id='GTM-KH4KVH_cattdlExtras'>
  (function gtm_cattdlCust(dl, cdl) {
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var cdpm;
    var ld = cdl._;
    if (cdl && !dl.some(function(a){return /CATTDL Cust/i.test(a && a.event || '');}) ) try {
      cdpm = cdl.CATTParams;
      var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');

      ld.assign(cdl.CATTParams, ck_cdpm);
    } catch(e) {
      cdl.error('GTM CATTDL Cust: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'CATTDL Cust', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl;
  }(window.dataLayer, window.CATTDL));
</script>