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
    if (dl && cdl && cdl.twdc(/test=feedbackify/) && /\/search|\/packages|\/customize|\/pax|\/pay/i.test(document.location.pathname)) try {
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
