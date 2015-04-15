<script>
(function gtm_cattdlSubSRP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
        var newPM = {}
        var keeps = {}
        var cdfc = jQ('div.innerform.multiline') || jQ([]);

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/).filter(function steps(e){return e})
            var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop())
            if (lastSteps[1] === cdpm.pageid) 
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else 
                lastSteps = lastSteps[0]+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        newPM['boardbasis'] = cdpm.srchboardbasis 
            || cdfc.find('select#selverpflegung option[value='+cdfc.find('select#selverpflegung').val()+']').text()
            || ''

        newPM['duration'] = cdfc.find('select#seldauer option[value='+cdfc.find('select#seldauer').val()+']').text() 
            || cdpm.srchduration 
            || ''+cdpm.duration
            || ''
        newPM['touroperator'] = cdfc.find('select#selectTO option[value='+cdfc.find('select#selectTO').val()+']').text()
            || ''
        newPM['searchresultsperpage'] = ''+jQ('div.col-2-3-m20 li[class!=soleil][class!=mer]').length
            || ''
        newPM['searchresultstotal'] = ''+jQ('div.col-2-3-m20 li[class!=soleil][class!=mer]').length
         || ''
        newPM['searchresultspagenbr'] = '1'
        newPM['searchresultspages'] = '1'
        newPM['errors'] =  jQ('img[alt="Thomascook pas de resultat"]').attr('alt')
            || jQ('img[alt="Thomascook  pas de resultat"]').attr('alt')
            || ''
        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
        newPM['roomtypesearched'] = params.roomtypesearched || '';
        
        var accomform = $('input#selectHostel')
        params.accomnamesearched = accomform && accomform.val();
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');
        jQ.extend(cdl.CATTParams, newPM, keeps)

    } catch(e) {
        cdl.error('GTM CATTDL SubSRP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL SubSRP'})     
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
