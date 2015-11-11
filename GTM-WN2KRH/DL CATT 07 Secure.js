<script>
(function gtm_cattdlSecure(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[1]+'('+lastSteps[2]+')'+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
        newPM['lob'] = cdpm.lob || params.lob || 'generic';
        newPM['holidaytype'] = cdpm.holidaytype || params.holidaytype || 'generic';
        newPM['accomcode'] = cdpm.accomcode || params.accomcode;
        newPM['accomname'] = cdpm.accomname || params.accomname;
        newPM['deptdate'] = cdpm.deptdate || params.deptdate;
        newPM['retdate'] = cdpm.retdate || cdpm.enddate || params.retdate;
        newPM['duration'] = cdpm.duration || params.duration;
        newPM['paxadult'] = cdpm.paxadult || params.paxadult;
        newPM['paxchild'] = cdpm.paxchild || params.paxchild;
        newPM['paxinfant'] = cdpm.paxinfant || params.paxinfant;
        newPM['paxtotal'] = cdpm.paxtotal || params.paxtotal;
        newPM['totalprice'] = cdpm.totalprice || params.totalprice;
        newPM['pricepp'] = cdpm.pricepp || params.pricepp;
        newPM['touroperator'] = cdpm.touroperator || params.touroperator;
        newPM['destairport'] = cdpm.destairport || params.destairport;
        newPM['deptairport'] = cdpm.deptairport || cdpm.departurecity || params.deptairport;
        newPM['boardbasis'] = cdpm.boardbasis || params.boardbasis;
        newPM['accomcountry'] = cdpm.accomcountry || cdpm.country || params.accomcountry;
        newPM['accomregion'] = cdpm.accomregion || cdpm.region || params.accomregion;
        newPM['accomresort'] = cdpm.accomresort || cdpm.resortsearched || params.accomresortt;

        var pot = params.paymentoption || '';
        newPM['pageid'] = /agency/.test(cdpm.typepayment)?'ag_secure':(/call/.test(cdpm.typepayment)?'cc_secure':'secure');
        newPM['bookingref'] = cdpm.searches && cdpm.searches.buchungsid
            || ''
        newPM['brand'] = cdpm.brand
            || ''
        newPM['cardtype'] = cdpm.cardtype
            || ""
        newPM['voucher'] = cdpm.voucher
            || ''

        jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');

    } catch(e) {
        cdl.error('GTM CATTDL Secure: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Secure'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
