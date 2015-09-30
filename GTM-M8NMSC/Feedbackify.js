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
    if (dl && cdl) try {
      var cdpm = cdl.CATTParams || {};
      var pooltest = cdl.twdc(/test=feedbackify/) || !((cdpm && cdpm.utmaguid || 1)%2);
      if (pooltest) {
        window.fby = cdl._.union(window.fby, []);
        window.fby.push(['showTab', {id: '9953', position: 'right', color: '#FFA500'}]);
        fbdl = cdl.insertJS({
            'name': 'feedbackify'
          , 'src': 'https://cdn.feedbackify.com/f.js'
          , 'dataLayer' : window.dataLayer_M8NMSC
        });
        window._gaq && window._gaq.push(function gtm_FeedbackifyControlTest() {
          if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
            'index': 45,
            'name':'FeedbackifyTest',
            'value':'PoolTest',
            'scope': 1
          };
          var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
          tracker._setCustomVar(45, 'FeedbackifyTest', 'PoolTest', 1);
          tracker._trackEvent('Feedbackify', 'test', 'PoolTest', 1, true);
        });
      } else {
        window._gaq && window._gaq.push(function gtm_FeedbackifyControlTest() {
          if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
            'index': 45,
            'name':'FeedbackifyTest',
            'value':'PoolControl',
            'scope': 1
          };
          var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
          tracker._setCustomVar(45, 'FeedbackifyTest', 'PoolControl', 1);
          tracker._trackEvent('Feedbackify', 'test', 'PoolControl', 1, true);
        });
      }
    } catch(e) {
      cdl.error && cdl.error('GTM Feedbackify: '+e);
    }
    return dl && cdl && fbdl;
  }(window.CATTDL, window.dataLayer_M8NMSC));
</script>
