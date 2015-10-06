<script id='GTM-T2F7Z5_UATC2Quote'>
  (function gtm_uatcQuote(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl && !dl.some(function(a){return /UATC2 Quote/i.test(a && a.event || '');}) ) try {
      var cdpm = cdl.CATTParams;
      var ld = cdl._;
      var trackerName = (uadl.name2+".") || "";
      var uawa = uadl.webanalytics || {};
      var uaProd = uawa.addproduct || {};

      w.ga('create', uadl.profileid2, uadl.cookiedomain, {'name': uadl.name2});
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
      }

      sendSet = {
        'page': uawa.page,
        'hitCallback': function gtm_uatcCustAddProduct(){
          w.ga(trackerName+'ec:addProduct', uaProd);
          w.ga(trackerName+'ec:setAction','checkout', {'step': 1, 'label': 'quote'});
          w.ga(trackerName+'send', 'event', 'ECProductView', uaProd.id, "1");
        }
      };
      w.ga(trackerName+'send', 'pageview', sendSet);

      cdl.ckset('gtm_uaprod', JSON.stringify(uaProd));

    } catch(e) {
      cdl.error('GTM UK directholidays UATC2 Quote: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATC2 Quote', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer_T2F7Z5));
</script>
