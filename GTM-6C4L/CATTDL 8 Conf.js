<script id='GTM-6C4L_cattdlConf'>
  (function gtm_cattdlConf(dl, cdl){
    'use strict';
    if (cdl && !dl.some(function(a){return /CATTDL Conf/i.test(a && a.event || '');}) ) try {

    } catch(e) {
      cdl.error('GTM CATTDL LP: '+e);
    } finally {
      var timeStart = (cdl.CATTParams?cdl.CATTParams.timestart:0) || 0;
      var stampEpoch = +new Date();
      dl.push({'event': 'CATTDL Conf', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl;
  }(window.dataLayer, window.CATTDL));
</script>