<script id='GTM-KMVZTD_cattdlConfirmation_imp'>
(function gtm_cattdlConfirmation_imp(w, dl, cdl) {
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    if (cdl) try {
      var ld = cdl._;
      var cdpm = cdl.CATTParams || {};

      if (w.tagManageribe) {
        var key = '';
        ld.assign(cdpm, ld.transform(w.tagManageribe[0], function gtm_lowerCasetagManagerIBE(r, n, k){
          key = k.toLowerCase();
          if (n) {
            if (/lob|holidaytype/i.test(key)) {n = n.toLowerCase() || 'generic'; }
            else if (/destination|boardbasis/i.test(key)) { n = n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || ""; }
            else if (/LineOfBusiness/i.test(key)) {n = n.replace(/[^_]+_([^_]+)_?.*/, '$1').toLowerCase() || "generic"; key = 'holidaytype'; }
            else if (/typeoffers/i.test(key)) {n = n.toLowerCase() || "generic"; key = 'lob'; }
            else if (/pageid/i.test(key)) {n = n.toLowerCase() || "generic"; }
            else if (/errorcode/i.test(key)) {n = ld.trunc(n || '', 267).replace(/-/, '') || ""; r.errors = n;  }
            else if (/nbrstars|srchstars/i.test(key)) { r.starrating = n || ''; }
            else if (/srchcitydeparture/i.test(key)) { r.departureairport = n; }
            else if (/srchboardbasis/i.test(key)) { r.boardbasis = n; }
            else if (/srchmaxbudget/i.test(key)) { r.budget = n; }
            else if (/srchduration/i.test(key)) { r.duration = n; }
            else if (/ReturnDate/i.test(key)) { n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
            else if (/EndDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
            else if (/price/i.test(key)) {key = 'bookingvalue'; n = (''+n).replace(/\D*(\d+\.?\d?\d?).*/, '$1') || '0'; }
            else if (/DepartureDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1')) || '0'; key = 'deptdate'; }
            r[key] = typeof n === 'string'?ld.trim(n):n;
          }
        }));
      }

      window.CATTDL.CATTParams = cdpm;

    } catch(e) {
        cdl.error('GTM CATTDL Confirmation Imp: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'CATTDL Confirmation Imp', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl;
}(window, window.dataLayer, window.CATTDL));
</script>