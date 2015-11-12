<script>
(function gtm_cattdlConf(jQ, dl, cdl) {
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

        newPM['retdate'] = cdpm.retdate || cdpm.enddate || 0;
        newPM['brand'] = cdpm.brand
            || ''   
        newPM['cardtype'] = cdpm.cardtype
            || "" 
        newPM['voucher'] = cdpm.voucher 
            || ''
        newPM['deptairport'] = cdpm.deptairport
            || cdpm.departurecity
            || (/\((.+)\)/.exec($('div.flightContainer') && $('div.flightContainer').eq(0).text()) || []).pop()
            || ''
        //newPM['pageid'] = /agency/i.test(cdpm.)?'ag_confirm':(/call/i.test(pot)?'cc_confirm':'booking');
        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        newPM['agencycode'] = params.agencycode || '';

        jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);
        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');

    } catch(e) {
        cdl.error('GTM CATTDL Conf: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Conf'})       
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
