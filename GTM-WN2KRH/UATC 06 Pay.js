<script id='GTM-WN2KRH_uatcPay'>
  (function gtm_uatcPay(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
      var trackerName = (uadl.name+".") || ""
      var uawa = uadl.webanalytics || {}
      var uaprod = uadl.webanalytics.addproduct || {}

      if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      window.ga && window.ga(function gtm_useTracker() {
        var trc = ga.getByName(uadl.name)
        if (!trc) {
          w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
          trc = ga.getByName(uadl.name)
        }
        for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
        trc.set('location', uawa.location);
        if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
        if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
        cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
        uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

        var sendSet = {};
        if (jQ){
          jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
            jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
          })
          jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
            jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
          })
        }

        sendSet['page'] = uawa.page;
        w.ga(trackerName+'send','pageview', sendSet);

        (function gtm_uatcPayAddProduct(){
          w.ga(trackerName+'ec:addProduct', {
            'id'        : uaprod.id,
            'name'      : uaprod.name,
            'category'  : uaprod.category,
            'brand'     : uaprod.brand,
            'variant'   : uaprod.variant,
            'price'     : uaprod.price,
            'quantity'  : uaprod.quantity
          });
          w.ga(trackerName+'ec:setAction','checkout', {'step': 2, 'label': 'pay'})
        }());

        w.ga(trackerName+'send','event', 'ECProductView', uaprod.id, "1");

        $('a#validPayment.button').on('click', function(e){
          var cdl = CATTDL || {};
          var cdpm = cdl.CATTParams || {};
          var trackerName = (uadl.name+".") || ""
          var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
          var cardtype = /card/i.test(params.paymentoption)?params.cardtype:'na';
          w.ga(trackerName+'send','event', 'confirm payment'
               , (cdpm.lob || 'lob')+'|'+(cdpm.holidaytype || 'holidaytype')
               ,  params.paymentoption || ''
               , 1
               , { 'dimension39': cardtype
                  ,'dimension51': cdpm.gaguid || 'empty'
                  ,'dimension53': 'event'
                  ,'dimension65': cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                  ,'dimension75': ''+(window.Date && window.Date.now() || 0)}
               , {'nonInteraction': true});
        })
      })
      dl.push({'event': 'UATC Pay'});
    } catch(e) {
      cdl.error('GTM FR JT UATC Pay: '+e);
    }
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>
