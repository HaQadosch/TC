<script>
(function gtm_cattdlAccom(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
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
                lastSteps = lastSteps[0]+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        newPM['duration'] = cdpm.duration && parseInt((/(\d+)/.exec(cdpm.duration) || ['']).pop())
            || cdpm.firstrsltduration
            || '0'
        newPM['retdate'] = cdpm.retdate
            || cdpm.enddate
            || cdpm.deptdate + (86400000 * parseInt(cdpm.firstrsltduration || 0))
            || 0
        newPM['boardbasis'] = cdpm.boardbasis
            || cdpm.firstrsltboardbasis
            || ''
        newPM['deptairport'] = cdpm.departureairportselected
            || cdpm.srchcitydeparture && cdpm.srchcitydeparture.replace(/^([^;]+).*/, '$1')
            || cdpm.departurecity
            || ''
        keeps['accomguid'] = cdpm.accomguid
            || cdpm.accomcode
            || ""
        keeps['accomimg'] = cdpm.accomimg
            || jQ('div.image.imageContainer img').attr('src')
            || ''
        newPM['accomtitle'] = cdpm.accomresort
            || ''
        newPM['accomname'] = cdpm.accomname
            || ''
        newPM['accomprice'] = jQ('span.prix-ttc#prix-ttc').text()
            || cdpm.firstrsltfromprice
            || 0
        keeps['accomurl'] = cdpm.accomurl
            || ''
        keeps['accomcountry'] = cdpm.country
            || cdpm.destination
            || cdpm.accomcountry
            || ""
        keeps['accomregion'] = cdpm.region
            ||  cdpm.accomregion
            || ""
        keeps['sortoption'] = cdpm.sortoption
            ||  cdpm.sortby
            || ""
        keeps['srpaccomposition'] = window.sessionStorage && window.sessionStorage.getItem('gtm_srpaccomposition|'+keeps.accomguid) || 0
            || ""
        newPM['departureairportselected'] = newPM.deptairport
            || ""
        newPM['destinationairportselected'] = ''

        newPM['brand'] = cdpm.brand
            || ''

        newPM['paxadult'] = cdpm.paxadult || 0
        newPM['paxchild'] = cdpm.paxchild || 0
        newPM['paxinfant'] = cdpm.paxinfant || 0
        newPM['paxtotal'] = cdpm.paxtotal || parseInt(newPM.paxadult || 0)+parseInt(newPM.paxchild || 0)+parseInt(newPM.paxinfant || 0) || 0

        newPM['pricepp'] = newPM.accomprice
            || ""
        newPM['rooms'] = cdpm.rooms
            || 0
        newPM['roomtype'] = []

        newPM['starrating'] = cdpm.starrating
            || '0'

        newPM['errors'] = jQ('div.noResultsToDisplay').text()
            || jQ('div.list-none').text()
            || jQ('div.errorDivBox div.errorDiv').eq(0).text()
            || ''

        jQ.extend(cdl.CATTParams, newPM, keeps)
        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');


    } catch(e) {
        cdl.error('GTM CATTDL Accom: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Accom'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
