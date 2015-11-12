<script id='GTM-T2F7Z5_UATC2SRP'>
  (function gtm_uatcSRP(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl && !dl.some(function(a){return /UATC2 SRP/i.test(a && a.event || '');}) ) try {
      var cdpm = cdl.CATTParams;
      var ld = cdl._;
      var trackerName = (uadl.name2+".") || "";
      var uawa = uadl.webanalytics || {};
      var uaImp = uawa.addimpression || {};

      w.ga('create', uadl.profileid2, uadl.cookiedomain, {'name': uadl.name2});
      w.ga(trackerName+'set', 'location', uawa.location);
      for (var setOption in uadl.set) w.ga(trackerName+'set', setOption, uadl.set[setOption]);
      w.ga(trackerName+'require', 'displayfeatures');
      w.ga(trackerName+'require', 'ec', 'ec.js');

      var sendSet = {};
      if (jQ){
        jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
          jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val);});
        });
        jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
          jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val);});
        });
      }

      sendSet.page = uawa.page;
      w.ga(trackerName+'send', 'pageview', sendSet);

      uaImp.map(function lduaImp(imp, index){
        w.ga(trackerName+'ec:addImpression', imp);
        w.ga(trackerName+'ec:setAction', 'view', {'list': imp.list});
        w.ga(trackerName+'send', 'event', 'viewAddImpression',  imp.list,  (index+1)+'/'+uawa.nbrimpressions, 1, {'nonInteraction': true, 'location': uawa.location});
        window.sessionStorage && window.sessionStorage.setItem('cattdl_'+imp.id, JSON.stringify(imp));
      });

    } catch(e) {
      cdl.error('GTM UK directholidays UATC2 SRP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATC2 SRP', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer_T2F7Z5));
</script>
