<script id='GTM-KH4KVH_UATCPaxPay'>
  (function gtm_uatcPaxPay(jQ, cdl, uadl, w, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if (cdl && uadl && !dl.some(function(a){return /UATC PaxPay/i.test(a && a.event || '');}) ) try {
      var trackerName = (uadl.name+".") || "";
      cdpm = cdl.CATTParams;
      timeStart = cdpm.timestart || 0;
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
          jQ.each(vDim, function valDimension(_, val){val && w.ga(trackerName+'set', kDim, val);});
        });
        jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
          jQ.each(vMet, function valMetrics(_, val){val && w.ga(trackerName+'set', kMet, val);});
        });
      }

      for (var evt in uawa.events) {
        var gevt = uawa.events[evt];
        if (gevt.action) w.ga(trackerName+'send', 'event', gevt.category, gevt.action,  gevt.label, gevt.value, {'nonInteraction': gevt.noninteraction, 'page': uawa.page, 'useBeacon': true});
      }

      sendSet = {
        'useBeacon' : true,
        'page': uawa.page,
        'hitCallback': function gtm_uatcPaxPayAddProduct(){
          w.ga(trackerName+'ec:addProduct', uaProd);
          w.ga(trackerName+'ec:setAction','checkout', {'step': 2, 'label': 'paxpay'});
          w.ga(trackerName+'send', 'event', 'ECProductView', uaProd.id, "1");
        }
      };
      w.ga(trackerName+'send', 'pageview', sendSet);

    } catch(e) {
      cdl.error('GTM UK multicom UATC PaxPay: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATC PaxPay', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, window.dataLayer));
</script>
