<script id='GTM-M8NMSC_taggstar' class='taggJS'>
  (function gtm3rd_taggstarDL(cdl, dl){
    'use strict';
    var cdpm = cdl.CATTParams;
    var pooltest = 1 || /taggstartest/i.test(window.document.URL) || !((cdpm && cdpm.utmaguid || 1)%2);
    var tgdl = {};
    if (dl && cdl && /\/search|\/packages\/|\/customize\/|\/pax\/|\/pay\/|\/confirmation\//i.test(document.location.pathname)) {
      if (pooltest) {
        try {
          var t = (+new Date || 0)/6e5|0 || 0;
          (function(w,d,s,t){var p=d.location.protocol,m=['on','set','get'],i=m.length,n=w.taggstar={_c:{},ts:t},api=function(m,p){n[m]=function(l,o){p=(n._c[m]||(n._c[m]={}));(p[l]||(p[l]=[])).push(o)}};while(i--)api(m[i]);})(window,document,'script',t);
          tgdl = cdl.insertJS({
            'name': 'taggstar'
            , 'src': 'https://realtime.taggstar.com/dynamic/site/{sitekey}/taggstar.js?{tstp}'
            , 'params' : {
              sitekey 	: 'thomascookcom'
              , tstp 		: t
            },
            'dataLayer' : window.dataLayer_M8NMSC
          });
          window._gaq && window._gaq.push(function gtm_OptileadControlTest() {
            if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
              'index': 38,
              'name':'TaggstarTest',
              'value':'PoolTest',
              'scope': 1
            };
            var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
            tracker._setCustomVar(38, 'TaggstarTest', 'PoolTest', 1);
            tracker._trackEvent('Taggstar', 'test', 'PoolTest', 1, true);
          });
        } catch(e) {
          cdl.error && cdl.error('GTM taggstar: '+e);
        }
      } else {
        window._gaq && window._gaq.push(function gtm_OptileadControlTest() {
          if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
            'index': 38,
            'name':'TaggstarTest',
            'value':'PoolControl',
            'scope': 1
          };
          var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
          tracker._setCustomVar(38, 'TaggstarTest', 'PoolControl', 1);
          tracker._trackEvent('Taggstar', 'test', 'PoolControl', 1, true);
        });
      }
    }
    return dl && cdl && tgdl;
  }(window.CATTDL, window.dataLayer_M8NMSC));
</script>