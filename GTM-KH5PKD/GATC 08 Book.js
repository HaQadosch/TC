<script id='GTM-KH5PKD_GATCBook'>
  (function gtm_gatcBook(dl, jQ, cdl, gadl, w, d){
    'use strict';
    var timeStart = dl
    .filter(function dlFilter(evt) {return evt['gtm.start'] || !1; })
    .map(function dlMap(evt) {return evt['gtm.start']; })
    .pop() || 0;
    var stampEpoch = +new Date();
    var cdpm = {};
    if (cdl && gadl && !dl.some(function(a){return /GATC Conf/i.test(a && a.event || '');}) ) try {
      cdpm = cdl.CATTParams || {};
      var tn = gadl.trackername+'.' || '';
      var gawa = gadl.webanalytics || {};
      w._gaq = w._gaq || [];
      var wgp = function gtm_wgp(arr){ return w._gaq.push(arr); };
      var gatrans = gawa.addtrans;
      var gaitem = gawa.additem;

      wgp([tn+'_setAccount', gadl.profileid]);
      wgp([tn+'_setDomainName', gadl.cookiedomain]);
      wgp([tn+'_setAllowLinker', gadl.allowlinker]);
      if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]); });
      if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]); });

      var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
      wgp([tn+'_trackPageview', fullVP]);

      var evt = '';
      for (evt in gawa.events) {
        var gevt = gawa.events[evt];
        if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
      }

      (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = 'https://stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)}());

      w._gaq.push([tn+'_addTrans', gatrans.transactionid, gatrans.affiliation, gatrans.totalprice, gatrans.tax, gatrans.shipping, gatrans.city, gatrans.state, gatrans.country]);

      w._gaq.push([tn+'_addItem',
                   gaitem.transactionid,
                   gaitem.productsku,
                   gaitem.productname,
                   gaitem.productcategory,
                   gaitem.unitprice,
                   gaitem.quantity
                  ]);
      w._gaq.push([tn+'_trackTrans']);

    } catch(e) {
      cdl.error('GTM UK TC Cruise GATC Book: '+e);
    } finally {
      stampEpoch = +new Date();
      dl.push({'event': 'GATC Book', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl && gadl;
  }(window.dataLayer_KH5PKD, window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
</script>