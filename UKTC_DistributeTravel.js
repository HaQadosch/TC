<script id='gtm_DistTravel'>
(function gtm_DistTravelDL(cdl, edl) {
    'use strict';
    if (cdl&& edl) try{
        var cdpm = cdl.CATTParams;
        cdl.DL_distributetravel = {
            trackingid     : '2000006',
            userid         : cdpm.utmaguid || '',
            search         : cdpm.accomname || '',
            destination : cdpm.destination || '',
            depdate     : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '',
            depairport     : cdpm.deptairport|| '',
            orderid     : cdpm.bookingref || '',
            salesvalue     : cdpm.totalprice || '',
            currency     : 'GBP',
            script: {
                src: '//track.dtrck.net/dtrckTracker.js',
                status: 'not fired'
            }
        }
    } catch(e) {
        cdl.error("GTM Ext UK TC DL_DistributeTravel: "+e);
    } finally {
        edl.push({event: 'DL_DistributeTravel'});
    }
    return cdl&& edl && cdl.DL_distributetravel;
}(window.CATTDL, window.externalLayer));

(function gtm_DistTravelScript(jQ, cdl, dtdl) {
    'use strict';
    if (jQ && cdl && dtdl) try {
        jQ.ajaxSetup({cache: true});
         jQ.getScript && jQ.getScript(dtdl.script.src, function gtm_DistTravelScript(){
            window.Distribute = new dtrckTracker(dtdl.trackingid);
            window.Distribute.trackIncomingClick();
            if (/accom|cust|pax|pay|booking|conf/i.test(cdl.CATTParams && cdl.CATTParams.pageid || '')) {
                window.Distribute.addCustomParameter(new dtrckCustomParameter('userID', dtdl.userid || ''));
                window.Distribute.addCustomParameter(new dtrckCustomParameter('search_destination', dtdl.search || ''));
            }
            if (/booking|conf/i.test(cdl.CATTParams && cdl.CATTParams.pageid || '')) {
                window.Distribute.addCustomParameter(new dtrckCustomParameter('orderID', window.Math && window.Math.random() || ''));
                window.Distribute.addCustomParameter(new dtrckCustomParameter('salesValue', '1'));
                window.Distribute.addCustomParameter(new dtrckCustomParameter('salesCurrency', 'GBP'));
                window.Distribute.addCustomParameter(new dtrckCustomParameter('departure_date', dtdl.depdate || ''));
                window.Distribute.addCustomParameter(new dtrckCustomParameter('departure_airport', dtdl.depairport || ''));
            }
            window.Distribute.logCustomParameters();
            dtdl.script && (dtdl.script.status = 'fired');
         });
    } catch(e) {
        cdl.error('GTM Ext UK TC DistTravel: '+e);
    }
    return jQ && cdl && dtdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_distributetravel))
</script>
