<script id='GTM-KH5PKD_GATCSRP'>
  (function gtm_gatcLP(dl, jQ, cdl, gadl, w, d) {
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var cdpm;
    if (cdl && gadl && dl) //!dl.some(function(a){return /GATC SRP/i.test(a && a.event || '');}) ) 
    try {
      var tn = gadl.trackername+'.' || '';
      cdpm = cdl.CATTParams || '';
      var gawa = gadl.webanalytics || {};
      w._gaq = w._gaq || [];
      var wgp = function gtm_wgp(arr){return w._gaq.push(arr); };

      wgp([tn+'_setAccount', gadl.profileid]);
      wgp([tn+'_setDomainName', gadl.cookiedomain]);
      wgp([tn+'_setAllowLinker', gadl.allowlinker]);
      if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]);});
      if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]);});

      var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
      if (cdpm.pageid === 'home') wgp([tn+'_trackPageview']); else wgp([tn+'_trackPageview', fullVP]);

      for (var evt in gawa.events) {
        var gevt = gawa.events[evt];
        if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
      }

      (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = 'https://stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);}());

    } catch(e) {
      cdl.error('GTM UK TC Cruise GATC SRP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'GATC SRP', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl && gadl;
  }(window.dataLayer_KH5PKD, window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
</script>