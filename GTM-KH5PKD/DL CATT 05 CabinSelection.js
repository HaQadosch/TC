<script id='GTM-KH5PKD_cattdlcabinselection'>
    (function gtm_cattdlcabinselection(jQ, dl, cdl){
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var ld = cdl._;
        if (jQ && cdl && dl) // !dl.some(function(a){return /CATTDL CabinSelection/i.test(a && a.event || '');}) ) 
        try {
            var keeps = {};
            var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');
            var newPM = {};

            //var cruisedetails = jQ('div#tab_booking form');
            var uaProd = JSON.parse(cdl.ckget('gtm_uaprod')) || {};
            newPM['cruiseshipid'] = uaProd.id || '';
            newPM['cruiselineid'] = uaProd.brandcode || '';

            ld.assign(cdl.CATTParams, ck_cdpm, keeps, newPM);
            ld.assign(ck_cdpm, keeps);
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), null, '/', '.thomascook.com');

        } catch(e) {
            cdl.error('GTM  UK TC Cruise CATTDL CabinSelection: '+e);
        } finally {
            var stampEpoch = +new Date();
          dl.push({'event': 'CATTDL CabinSelection', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
        }
        return jQ && jQ.extend && cdl;
    }(window.jQuery, window.dataLayer_KH5PKD, window.CATTDL));
</script>