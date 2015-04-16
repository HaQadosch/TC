<script>
(function gtm_cattdlLP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
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

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');

        
        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
        $('select#formRoomType').change(function(){params.roomtypesearched = ($('select#formRoomType')&& $('select#formRoomType option[value='+$('select#formRoomType').val()+']').text())
                                        cdl.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');    
                                        });
        $('input#selectHotel').change(function(){params.accomnamesearched = $('input#selectHotel').val()});
        cdl.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');
        
        jQ.extend(cdl.CATTParams, newPM, keeps)

    } catch(e) {
        cdl.error('GTM CATTDL LP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL LP'})     
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
