<script id='GTM-TGBQS9_UATCConf'>
  (function gtm_uatcConf(jQ, cdl, uadl, w, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if (cdl && uadl && !dl.some(function(a){return /UATC Conf/i.test(a && a.event || '');}) ) try {
      cdpm = cdl.CATTParams;
      timeStart = cdpm.timestart || 0;
      var ld = cdl._;
      var trackerName = (uadl.name+".") || "";
      var uawa = uadl.webanalytics || {};
      var uaprod = uadl.webanalytics.addproduct || {};
      var uapurch = uadl.webanalytics.purchase || {};

      w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name});
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

      var prodDimMet = {
        'id'        : uaprod.id,
        'name'      : uaprod.name,
        'category'  : uaprod.category,
        'brand'     : uaprod.brand,
        'variant'   : uaprod.variant,
        'price'     : uaprod.price,
        'quantity'  : uaprod.quantity
      };
      sendSet.page = uawa.page;
      w.ga(trackerName+'send', 'pageview', sendSet);

      var sendSetPurchase = {};
      if (cdpm.pageid === 'booking') {
        sendSetPurchase = ld.assign({}, sendSet);
        sendSetPurchase.dimension12 = 'purchase';
        sendSetPurchase.dimension55 = 'event';

        w.ga(trackerName+'ec:addProduct', prodDimMet);
        w.ga(trackerName+'ec:setAction','purchase', {
          'id'            : uapurch.id,
          'affiliation'   : uapurch.affiliation,
          'revenue'       : uapurch.revenue,
          'tax'           : uapurch.tax,
          'shipping'      : uapurch.shipping,
          'coupon'        : uapurch.coupon
        });
        w.ga(trackerName+'send','event', 'ECPurchase', uaprod.id
             ,  ''+uaprod.position
             , 1
             , sendSetPurchase
             , {'nonInteraction': true});
      }

    } catch(e) {
      cdl.error('GTM UK multicom UATC Book: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATC Conf', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, window.dataLayer));
</script>
