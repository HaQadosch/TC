<script>
(function gtm_cattdlPax(jQ, dl, cdl) {
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

        newPM['accomcountry'] = cdpm.country
            || cdpm.destination
            || ck_cdpm.accomcountry
            || ""
        newPM['accomregion'] = cdpm.region
            || ck_cdpm.accomregion
            || ""
        newPM['accomdestrest'] = ""
        keeps['accomguid'] = cdpm.searches.IFF
            || cdpm.accomguid
            || ck_cdpm.accomguid
            || ""
        keeps['pricepp'] = cdpm.basketdetail && cdpm.basketdetail.replace(/.+Adult\/(\d+\.\d\d).+/, '$1')
            || ""
        newPM['deptairport'] = cdpm.departureairportselected
            || cdpm.departurecity
            || cdpm.srchcitydeparture && cdpm.srchcitydeparture.replace(/^([^;]+).*/, '$1')
            || ''
        newPM['duration'] = jQ('p.nuitees').text().replace(/.*(\d).*/, '$1')
            || ""
        keeps['srpaccomposition'] = ck_cdpm.srpaccomposition
            || ''
        newPM['brand'] = cdpm.brand
            || ''

        var accomDetails = jQ('dl.inc span')
            || false
        newPM['accomdetails'] = {
            roomtype    : accomDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '') || '',
            boardbasis  : accomDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s+/g, ' ') || ''
        }
        var flightDetails = jQ('dl.horizontal.flight-details>dd')
            || false
        var fd_outbound1 = flightDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_outbound2 = flightDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound1 = flightDetails.eq(2).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound2 = flightDetails.eq(3).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        newPM['flightdetails'] = {
            outbound    : {
                flight  : fd_outbound1[2] || '',
                depart  : {
                    location    : fd_outbound1[0] || '',
                    date        : fd_outbound1[1] || ''
                },
                arrive  : {
                    location    : fd_outbound2[0] || '',
                    date        : fd_outbound2[1] || ''
                }
            },
            inbound     : {
                flight  : fd_inbound1[2] || '',
                depart  : {
                    location    : fd_inbound1[0] || '',
                    date        : fd_inbound1[1] || ''
                },
                arrive  : {
                    location    : fd_inbound2[0] || '',
                    date        : fd_inbound2[1] || ''
                }
            }
        }
        jQ.extend(ck_cdpm, keeps);
        jQ.extend(cdl.CATTParams, newPM, keeps, ck_cdpm);

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        params.lob = cdpm.lob || '';
        params.holidaytype = cdpm.holidaytype || '';
        params.accomcode = cdpm.accomcode || '';
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');

    } catch(e) {
        cdl.error('GTM CATTDL Pax: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Pax'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
