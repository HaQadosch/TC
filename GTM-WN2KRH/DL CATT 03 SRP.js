<script>
(function gtm_cattdlSRP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var cdsr = cdpm.searches
        var newPM = {}
        var keeps = {}
        var cdfc = jQ('div.innerform.multiline') || jQ([]);

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

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)'

        var accoms = cdpm.hotellist
        var htmlAccoms = jQ('div.location-description') || jQ([])
        var curAccom = ''
        var curReg = []
        var avoir = jQ([])
        newPM['accoms'] = []
        htmlAccoms.each(function gtm_eachAccoms(i, e){
            jQ(e).attr('data-pos', i+1);
            jQ(e).attr('data-title', (jQ(e).find('h4.title').text().replace(/\s+|&/g, '_')));
            avoir = jQ(e).find('a.voir'); if (avoir.length) {
                avoir.attr('data-pos', i+1);
                avoir.attr('data-hID', jQ(e).find('img').attr('src').replace(/.*H(\d+)\.jpg/g, '$1'))
            }
        });
        accoms && accoms.forEach(function gtm_forEachAccoms(e, i){
            curAccom = htmlAccoms.filter(function gtm_htmlAccomsFilter(ind, elt){return ((/\/([^\/]+)\.jpg/i.exec(e.imgHotel) || ['']).pop() || '') == ((/\/([^\/]+)\.jpg/i.exec(jQ(elt).find('p.image img').attr('src')) || ['']).pop() || '')})
            curReg = window.regionen_2 && window.regionen_2.length && window.regionen_2.filter(function gtm_regFilter(elt, ind){return elt && (elt.split('#').length > 2 && elt.split('#')[2] || '') == (e.IDHotel || e.TopIDHotel || '')}) || []
            curReg = curReg && (curReg.pop() || '').split('#'); curReg && curReg.length > 7 || []

            var deptdate = +new Date((e.offerDate || e.TopOfferDate || curReg && curReg[7] || '0/0/0').replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1')) || 0;
            var duration = parseInt(e.offerNight || e.TopOfferNight || 0);
            newPM.accoms.push({
                'accomname'     : e.hotelname || e.TopHotelname || e.TopIotelname || '',
                'accomguid'     : e.IDHotel || e.TopIDHotel || '',
                'accomcountry'  : curReg && curReg[7] || '',
                'accomcregion'  : curReg && curReg[7] || '',
                'accomresort'   : curReg && curReg[7] || '',
                'price'         : e.offerBestPrice || e.TopOfferBestPrice || curReg && curReg[1] || '',
                'deptdate'      : deptdate,
                'retdate'       : deptdate+(86400000 * duration),
                'deptairportcode'   : e.offerDepartureAirport || e.TopOfferDepartureAirport || '',
                'arrivalairportcode'    : e.offerArrivalAirport || e.TopOfferArrivalAirport || '',
                'location'      : curAccom.find('p.sub').text() || e.landRegionID || e.TopLandRegionID || '',
                'starrating'    : (/(\d+)/i.exec(curAccom.find('span[class|=stars]').attr('class') || '') || ['']).pop() || '',
                'duration'      : duration,
                'boardbasis'    : curAccom.find('ul.precisions li:eq(2)').text() || '',
                'roomtype'      : e.offerRoomType || e.TopOfferRoomType || '',
                'imgurl'        : e.imgHotel || e.TopImgHotel ||curAccom.find('img').attr('src') || '',
                'brand'         : '',
                'touroperator'  : e.offerTourOperator || e.TopOfferTourOperator || e.TopTourOperatorOffer || '',
                'orderDisplay'  : e.orderDisplay || e.TopOrderDisplay || 0,
                'offerid'       : e.offerID || e.TopOfferID || '',
                'position'      : curAccom.attr('data-pos')
            })
        })

        newPM['boardbasis'] = cdpm.firstrsltboardbasis
            || cdfc.find('select#selverpflegung option[value='+cdfc.find('select#selverpflegung').val()+']').text()
        newPM['duration'] = cdfc.find('select#seldauer option[value='+cdfc.find('select#seldauer').val()+']').text()
            || cdpm.srchduration
            || ''+cdpm.duration
        newPM['selpage'] = cdpm.searchresultspagenbr
            || 1
        newPM['sortoption'] = cdpm.sortby
            || cdpm.sortoption
            || ""
        newPM['searchresultspages'] = cdpm.searchresultspages
            || jQ('nav.bloc-pagination li').length
        newPM['touroperator'] = cdfc.find('select#selectTO option[value='+cdfc.find('select#selectTO').val()+']').text()
            || ''
        newPM['errors'] =  jQ('img[alt="Thomascook pas de resultat"]').attr('alt')
            || jQ('img[alt="Thomascook  pas de resultat"]').attr('alt')
            || jQ('img[alt="Jettours pas de resultat"]').attr('alt')
            || ''

        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
        newPM['roomtypesearched'] = params.roomtypesearched || '';

        var accomform = $('input#selectHostel')
        params.accomnamesearched = accomform && accomform.val();
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');
        jQ.extend(cdl.CATTParams, newPM, keeps)

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');
    } catch(e) {
        cdl.error('GTM CATTDL SRP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL SRP'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
