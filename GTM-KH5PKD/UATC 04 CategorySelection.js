<script id='GTM-KH5PKD_UATCCategorySelection'>
  (function gtm_uatcCategorySelection(jQ, cdl, uadl, w, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if (cdl && uadl && dl) // !dl.some(function(a){return /UATC Quote/i.test(a && a.event || '');}) ) 
    try {
      cdpm = cdl.CATTParams;
      timeStart = cdpm.timestart || 0;
      var trackerName = (uadl.name+".") || "";
      var uawa = uadl.webanalytics || {};
      var uaProd = uawa.addproduct || {};

      w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name});
      w.ga(trackerName+'set', 'location', uawa.location);
      for (var setOption in uadl.set) w.ga(trackerName+'set', setOption, uadl.set[setOption]);
      w.ga(trackerName+'require', 'displayfeatures');
      w.ga(trackerName+'require', 'ec', 'ec.js');

      var sendSet = {}
      if (jQ){
        jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
          jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val);});
        });
        jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
          jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val);});
        });
      };
      sendSet['page'] = uawa.page || location.href || '';

      w.ga(trackerName+'send', 'pageview', sendSet);

      var eventsendSet = {};
      jQ.extend(eventsendSet, sendSet);
      delete eventsendSet.dimension12;
      eventsendSet.dimension55 = 'event';
      eventsendSet.nonInteraction = 1;

      if(uaProd.id){
        w.ga(trackerName+'ec:addProduct', uaProd);
        w.ga(trackerName+'ec:setAction','checkout', {'step': 2, 'label': 'categoryselection'});
        w.ga(trackerName+'send', 'event', 'ECProductView', uaProd.id, ''+(uaProd.position||0), 1, eventsendSet);
      };

      for (var evt in uawa.events) {
        var gevt = uawa.events[evt];
        if (gevt.action) w.ga(trackerName+'send', 'event', gevt.category, gevt.action,  gevt.label, gevt.value, eventsendSet);
      }

    } catch(e) {
      cdl.error('GTM UK TC Cruise UATC CategorySelection: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATC CategorySelection', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, window.dataLayer_KH5PKD));
</script>