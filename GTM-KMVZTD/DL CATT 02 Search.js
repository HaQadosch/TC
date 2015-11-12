<script id='GTM-KMVZTD_cattdlSearch'>
  (function gtm_cattdlSearch(jQ, w, dl, cdl) {
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
            else if (/srchto/i.test(key)) { r.touroperator = n; }
            else if (/DeptDate/i.test(key)) { n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
            else if (/RetDate/i.test(key)) { n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
            else if (/EndDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'; }
            else if (/price/i.test(key)) {key = 'bookingvalue'; n = (''+n).replace(/\D*(\d+\.\d\d).*/, '$1') || '0'; }
            else if (/DepartureDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1')) || '0'; key = 'deptdate'; }
            r[key] = typeof n === 'string'?ld.trim(n):n;
          }
        }));
      }
      cdpm.utmaguid = cdpm.utmaguid || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop() || w.CATTDL.twdc(/_utma=/i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || "";
      cdpm.utmbguid = cdpm.utmbguid || cdpm.cookies.__utmb || w.CATTDL.twdc(/_utmb=/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i).pop() || "";
      cdpm.gaguid = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || w.CATTDL.twdc(/_ga=/i) && (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || "";
      cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);
      cdpm.codeagence = cdpm.codeagence || jQ && jQ('header div#header_top p.left').text().trim().replace(/CODE\ AGENCE\ :\ /, '') || '';

      window.CATTDL.CATTParams = cdpm;
    } catch(e) {
      cdl.error('GTM CATTDL Search: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'CATTDL Search', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl;
  }(window.jQuery, window, window.dataLayer, window.CATTDL));
</script>