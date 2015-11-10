<script id='GTM-KH5PKD_UATCSRP'>
  (function gtm_uatcSRP(jQ, cdl, uadl, w, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if (cdl && uadl && dl) //!dl.some(function(a){return /UATC SRP/i.test(a && a.event || '');}) ) 
    try {
      cdpm = cdl.CATTParams;
      timeStart = cdpm.timestart || 0;
      var trackerName = (uadl.name+".") || "";
      var uawa = uadl.webanalytics || {};
      var uaImp = uawa.addimpression || {};

      w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name});
      w.ga(trackerName+'set', 'location', uawa.location);
      for (var setOption in uadl.set) w.ga(trackerName+'set', setOption, uadl.set[setOption]);
      w.ga(trackerName+'require', 'displayfeatures');
      w.ga(trackerName+'require', 'ec', 'ec.js');

      var sendSet = {};
      if (jQ){
        jQ.each(uawa.dimensions, function gtm_keyDimension(kDim, vDim){
          jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val);});
        });
        jQ.each(uawa.metrics, function gtm_keyMetrics(kMet, vMet){
          jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val);});
        });
      }

      for (var evt in uawa.events) {
        var gevt = uawa.events[evt];
        if (gevt.action) w.ga(trackerName+'send', 'event', gevt.category, gevt.action,  gevt.label, gevt.value, {'nonInteraction': gevt.noninteraction, 'page': uawa.page, 'useBeacon': true});
      }

      sendSet.page = uawa.page;
      sendSet.useBeacon = true;
      w.ga(trackerName+'send', 'pageview', sendSet);

      //clear items in sessionStorage
      Object.keys(sessionStorage)
        .filter(function(k) { return /gtm_srpitems_/.test(k); })
        .forEach(function(k) {
          sessionStorage.removeItem(k);
      });
      var accoms = [];
      var cnt = 0;
      uaImp.map(function lduaImp(imp, index){
        w.ga(trackerName+'ec:addImpression', imp);
        w.ga(trackerName+'ec:setAction', 'view', {'list': imp.list});
        window.sessionStorage && window.sessionStorage.setItem('gtm_srpitems_'+imp.id, JSON.stringify(imp));
        accoms.push((imp.id) || "");
        cnt++;
        if(cnt===5){
          w.ga(trackerName+'send', 'event', 'viewAddImpression',  uaImp[0].list, (accoms && accoms.toString() || ""), 1, {'nonInteraction': true, 'location': uawa.location});
          cnt=0;accoms=[];
        }
      });

    } catch(e) {
      cdl.error('GTM UK TC Cruise UATC SRP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATC SRP', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, window.dataLayer_KH5PKD));
</script>
