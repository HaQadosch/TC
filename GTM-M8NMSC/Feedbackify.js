/**
<script type="text/javascript">
var fby = fby || [];
fby.push(['showTab', {id: '9953', position: 'right', color: '#FFA500'}]);
(function () {
    var f = document.createElement('script'); f.type = 'text/javascript'; f.async = true;
    f.src = '//cdn.feedbackify.com/f.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(f, s);
})();
</script>
 */

<script id='GTM-M8NMSC_Feedbackify'>
  (function gtm3rd_Feedbackify(cdl, dl){
    'use strict';
    var fbdl = {};
    if (dl && cdl && cdl.twdc(/test=feedbackify/)) try {
      window.fby = cdl._.union(window.fby, []);
      window.fby.push(['showTab', {id: '9953', position: 'right', color: '#FFA500'}]);
      fbdl = cdl.insertJS({
          'name': 'feedbackify'
        , 'src': 'https://cdn.feedbackify.com/f.js'
        , 'dataLayer' : window.dataLayer_M8NMSC
      });
    } catch(e) {
      cdl.error && cdl.error('GTM Feedbackify: '+e);
    }
    return dl && cdl && fbdl;
  }(window.CATTDL, window.dataLayer_M8NMSC));
</script>

<script id='GTM-M8NMSC_taggstar' class='taggJS'>
  (function gtm3rd_taggstarDL(cdl, dl){
    'use strict';
    var cdpm = cdl.CATTParams;
    var pooltest = 1 || /taggstartest/i.test(window.document.URL) || !((cdpm && cdpm.utmaguid || 1)%2);
    var tgdl = {};
    if (dl && cdl && /\/search|\/packages|\/customize|\/pax|\/pay|\/confirmation/i.test(document.location.pathname)) {
      if (pooltest) {
        try {
          var t = (+new Date || 0)/6e5|0 || 0;
          (function(w,d,s,t){var p=d.location.protocol,m=['on','set','get'],i=m.length,n=w.taggstar={_c:{},ts:t},api=function(m,p){n[m]=function(l,o){p=(n._c[m]||(n._c[m]={}));(p[l]||(p[l]=[])).push(o)}};while(i--)api(m[i]);})(window,document,'script',t);
          tgdl = cdl.insertJS({
            'name': 'taggstar'
            , 'src': 'https://realtime.taggstar.com/dynamic/site/{sitekey}/taggstar.js?{tstp}'
            , 'params' : {
              sitekey   : 'thomascookcom'
              , tstp    : t
            },
            'dataLayer' : window.dataLayer_M8NMSC
          });
          window._gaq && window._gaq.push(function gtm_TaggstarControlTest() {
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
        window._gaq && window._gaq.push(function gtm_TaggstarControlTest() {
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
