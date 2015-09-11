<script id='GTM-KMVZTD_UATCAccom'>
  (function gtm_uatcAccom(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl && !dl.some(function(a){return /UATC Accom/i.test(a && a.event || '');}) ) try {
      var cdpm = cdl.CATTParams
      var ld = cdl._
      var trackerName = (uadl.name+".") || ""
      var uawa = uadl.webanalytics || {}
      var uaImp = uawa.addimpression || {}

      w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
      w.ga(trackerName+'set', 'location', uawa.location);
      for (var setOption in uadl.set) w.ga(trackerName+'set', setOption, uadl.set[setOption]);
      w.ga(trackerName+'require', 'displayfeatures');

      var sendSet = {};
      if (jQ){
        jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
          jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
        })
        jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
          jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
        })
      };

      sendSet['page'] = uawa.page;
      w.ga(trackerName+'send', 'pageview', sendSet);

    } catch(e) {
      cdl.error('GTM FR TC MultiTO UATC Accom: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATC Accom', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']})
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>