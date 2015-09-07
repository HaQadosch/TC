<script id='GTM-KH4KVH_cattdlCust'>
    (function gtm_cattdlCust(jQ, dl, cdl) {
        'use strict';
        if (jQ && jQ.extend && cdl && !dl.some(function(a){return /CATTDL Cust/i.test(a && a.event || '');}) ) try {
            var cdpm = cdl.CATTParams;
            var newPM = {};
            var keeps = {};

            var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');


            keeps.accomguid = cdpm.searches.BuildingID || '';
            newPM.roomtype = jQ('#room-type').text().trim() || '';

            jQ.extend(cdl.CATTParams, newPM, keeps);
            jQ.extend(ck_cdpm, keeps);
            var domainName = cdl.twlh(/airtours/i)?'.airtours.co.uk':(cdl.twlh(/club18-30/i)?'.club18-30.com':(cdl.twlh(/directholidays/gi)?'.directholidays.co.uk':'.thomascook.com'));
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);

        } catch(e) {
            cdl.error('GTM CATTDL Cust: '+e);
        } finally {
            var stampEpoch = +new Date();
            dl.push({'event': 'CATTDL Cust', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
        }
        return jQ && jQ.extend && cdl;
    }(window.jQuery, window.dataLayer, window.CATTDL));
</script>