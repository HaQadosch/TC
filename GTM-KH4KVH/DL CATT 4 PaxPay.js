<script id='GTM-KH4KVH_cattdlpaxpay'>
    (function gtm_cattdlPaxPay(jQ, dl, cdl){
        'use strict';
        if (jQ && jQ.extend && cdl && !dl.some(function(a){return /CATTDL PaxPay/i.test(a && a.event || '');}) ) try {
            var newPM = {};
            var keeps = {};

            var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');
            var domainName = cdl.twlh(/airtours/i)?'.airtours.co.uk':(cdl.twlh(/club18-30/i)?'.club18-30.com':(cdl.twlh(/directholidays/gi)?'.directholidays.co.uk':'.thomascook.com'));

            newPM.roomtype = jQ('.room-type').next().text() || '';

            var jqpax = jQ('div.PassengerDetails');
            jqpax.find('input[name="pax_inputs_fields:leadPaxPanel:firstname"]').on('blur', function(e){
                var fn = jQ(e.currentTarget).val() || '';
                keeps.firstname = fn;
                jQ.extend(cdl.CATTParams, newPM, keeps);
                cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);
            });

            jqpax.find('input[name="pax_inputs_fields:leadPaxPanel:surname"]').on('blur', function(e){
                var ln = jQ(e.currentTarget).val() || '';
                keeps.lastname = ln;
                jQ.extend(cdl.CATTParams, newPM, keeps);
                cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);
            });

            jQ.extend(cdl.CATTParams, newPM, keeps);
            jQ.extend(ck_cdpm, keeps);
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);

        } catch(e) {
            cdl.error('GTM CATTDL PaxPay: '+e);
        } finally {
            var stampEpoch = +new Date();
            dl.push({'event': 'CATTDL PaxPay', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
        }
        return jQ && jQ.extend && cdl;
    }(window.jQuery, window.dataLayer, window.CATTDL));
</script>