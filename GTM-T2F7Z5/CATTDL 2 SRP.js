<script id='GTM-T2F7Z5_cattdlSRP'>
  (function gtm_cattdlSRP(jQ, dl, cdl) {
    'use strict';
    if (jQ && cdl && !dl.some(function(a){return /CATTDL SRP/i.test(a && a.event || '');}) ) try {
      var cdpm = cdl.CATTParams;
      var ld = window.CATTDL._;
      var jQSummary = jQ('div.search-summary');

      ld && ld.assign && ld.assign (cdpm, {
          deptdate   : cdpm.deptdate || +new Date(ld(jQSummary.find('div.dateDuration div.searchSummaryContent').text()).chain().trim().words(/[^(]+/g).first().value()) || ""
        , duration   : cdpm.duration || ld(jQSummary.find('div.dateDuration div.searchSummaryContent').text()).chain().trim().words(/\(\d+/g).words(/\d+/g).first().value() || ''
        , sortoption : cdpm.sortoption || jQ('span.sortButton select option[selected]').text() || ""
      });

    } catch(e) {
      cdl.error('GTM CATTDL SRP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'CATTDL SRP', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
    }
    return jQ && cdl;
  }(window.jQuery, window.dataLayer_T2F7Z5, window.CATTDL));
</script>