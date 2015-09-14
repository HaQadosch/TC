<script id='GTM-KH4KVH_cattdlpaxpay'>
    (function gtm_cattdlPaxPay(jQ, dl, cdl){
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var ld = cdl._;
        if (jQ && cdl && !dl.some(function(a){return /CATTDL PaxPay/i.test(a && a.event || '');}) ) try {
            var keeps = {};
            var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');

            var jqpax = jQ('div.PassengerDetails');
            jqpax.find('input[name="pax_inputs_fields:leadPaxPanel:firstname"]').on('blur', function(e){
                var fn = jQ(e.currentTarget).val() || '';
                keeps.firstname = fn;
                ld.assign(cdl.CATTParams, ck_cdpm, keeps);
                cdl.ckset('gtm_cdpm', JSON.stringify(keeps), null, '/', '.thomascook.com');
            });

            jqpax.find('input[name="pax_inputs_fields:leadPaxPanel:surname"]').on('blur', function(e){
                var ln = jQ(e.currentTarget).val() || '';
                keeps.lastname = ln;
                ld.assign(cdl.CATTParams, ck_cdpm, keeps);
                cdl.ckset('gtm_cdpm', JSON.stringify(keeps), null, '/', '.thomascook.com');
            });

            ld.assign(cdl.CATTParams, ck_cdpm, keeps);
            ld.assign(ck_cdpm, keeps);
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), null, '/', '.thomascook.com');

        } catch(e) {
            cdl.error('GTM CATTDL PaxPay: '+e);
        } finally {
            var stampEpoch = +new Date();
          dl.push({'event': 'CATTDL PaxPay', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
        }
        return jQ && jQ.extend && cdl;
    }(window.jQuery, window.dataLayer, window.CATTDL));
</script>