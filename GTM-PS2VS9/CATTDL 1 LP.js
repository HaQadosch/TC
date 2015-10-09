<script id='GTM-PS2VS9_cattdlLP'>
  (function gtm_cattdlLP(w, d, dl) {
    'use strict';
    var cdpm = {};
    var cons = window.console;
    var timeStart = window.dataLayer
        .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
        .map(function dlMap(evt) {return evt['gtm.start']; })
        .pop() || 0;
    if ( w && dl && !dl.some(function(a){return /CATTDL /i.test(a && a.event || '');}) ) try {
      var cdpm = CATTDL.CATTParams;
    } catch(e) {
      var msg = 'GTM CATTDL LP: '+e;
      cons && ((cons.error)?cons.error(msg):cons.log(msg));
    } finally {
      stampEpoch = +new Date();
      dl.push({'event': 'CATTDL '+(cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return dl && w.CATTDL;
  }(window, window.document, window.dataLayer));
</script>
