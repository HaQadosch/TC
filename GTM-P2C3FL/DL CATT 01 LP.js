<script id='GTM-P2C3FL_cattdlLP'>
(function gtm_cattdlLP(jQ, dl, cdl){
    'use strict'
    if (jQ && jQ.extend && cdl && dl && !dl.some(function(a){return /CATTDL LP/i.test(a && a.event || '')})) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid) 
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else 
                lastSteps = cdpm.pageid+'(1)';
            keeps['trailingsteps'] = lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));

        var userId = cdpm.user && cdpm.user.id || '';
        if (!userId) {
            if(location.host === 'www.thomascook.com') { 
                $.ajax('https://www.thomascook.com/api/users/session').success(function(data, textStatus, jqXHR){
                    if (data && data.id && jqXHR.status === 200) {
                        cdpm['user'] = {};
                        cdpm.user.id = data.id || '';
                    }
                })
            }
        };

        var myaccountactivationid;
        if(/\/myaccount\/activate/.test(location.pathname)) {
            myaccountactivationid = (/\/myaccount\/activate\/(.+)\//.exec(location.pathname) || []).pop() || ''
        }
        newPM['sessionid'] = window.sessionToken || '';
        newPM['user'] = {};
        newPM.user.id = window.getPageData && window.getPageData('user') && window.getPageData('user').data && window.getPageData('user').data.id || myaccountactivationid || '';
        jQ.extend(cdl.CATTParams, newPM, keeps)

    } catch(e) {
        cdl.error('GTM CATTDL LP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL LP'})     
    }
    return cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>