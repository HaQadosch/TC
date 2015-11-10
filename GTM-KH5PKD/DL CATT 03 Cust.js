<script id='GTM-KH5PKD_cattdlCust'>
  (function gtm_cattdlCust(jQ, dl, cdl) {
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var cdpm;
    var ld = cdl._;
    if (cdl && dl) //!dl.some(function(a){return /CATTDL Cust/i.test(a && a.event || '');}) ) 
    try {
      cdpm = cdl.CATTParams;
      var newPM = {};
      var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');
      newPM['cruiseshipid'] = (/ship_id=(\d+)/.exec(jQ('div.vendor-fleet a').attr('href') || '') || ['']).pop() 
        || '';
      var cruisedetails = jQ('div#tab_booking form');
      newPM['cruiselinecode'] = cruisedetails.find('input[id*="vendor_code"]').attr('value') || '';
      newPM['cruiselineid'] = cruisedetails.find('input[id*="vendor_id"]').attr('value') || '';

      ld.assign(cdl.CATTParams, ck_cdpm);
      ld.extend(cdl.CATTParams, newPM);
    } catch(e) {
      cdl.error('GTM UK TC Cruise CATTDL Cust: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'CATTDL Cust', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl;
  }(window.jQuery, window.dataLayer_KH5PKD, window.CATTDL));
</script>