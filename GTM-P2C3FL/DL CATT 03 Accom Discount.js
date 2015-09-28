<script id='GTM-P2C3FL_cattdlAccom'>
(function gtm_cattdlAccom(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl && dl && !dl.some(function(a){return /CATTDL Accom/i.test(a && a.event || '')})) try {
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

        var errorBlock = jQ('div.alert.alert-danger#paxAlertA') || !1
        if (errorBlock && /display:\s?block/i.test(errorBlock.attr('style'))) {
            newPM['errorcode'] = window.CATTParams && window.CATTParams.ErrorCode || errorBlock.find('p').text() || ''
            newPM['errormessage'] = (/\!(.*)/i.exec(errorBlock.text()) || ['']).pop() || ''
        }
        if (/sorry/i.test($('div.priceTicket-priceDetails').text())) {
            newPM['errormessage'] = $('div.priceTicket-priceDetails .h4').text() || ''          
        }

        newPM['duration'] = cdpm.duration
            || jQ('div.duration select.form-control option:selected').val()
            || (/dr=(\d+)&/i.exec(jQ('.sch-accom-backToSearch').attr('href') || '') || []).pop()
            || (/^(\d+)\sNights/i.exec(jQ('span[data-test-id="packageNights"]').text() || '') || []).pop()
            || '0'

        keeps['departweeknbr'] = (function gtm_weekNbr(dd){
            var wNbr = 0
            if (dd) {
                var dates = dd.split(/-/g)
                if (dates.length > 2){
                    var dateY = dates[0]
                    var date = new Date(dateY, dates[1]-1, dates[2])
                    var firstOfJan = new Date(dateY,0,1)
                    wNbr = Math.ceil((((date - firstOfJan) / 86400000) + firstOfJan.getDay()+1)/7) || 0
                }
            }
            return wNbr || 0
        }(window.app && (/startDate=([^&]+)&/i.exec(window.app.matrixUrl || '') || []).pop() || ''))

        newPM['settings'] = (function getSettings(str){
            var pmReg = /(\w+)\s?:/g
            var curpms = []
            var curpm = ''
            var valReg = ''
            var curval = ''
            var sets = {}
            while (curpms = pmReg.exec(str)) {
                curpm = curpms[1]
                valReg = new RegExp(curpm+'\\s?:\\s?([^\\n]*),?\\n', 'g');
                curval = ((valReg.exec(str) || []).pop() || '').replace(/^\s?\'|\',?$/g, '');
                sets[curpm] = curval;
            }
            if (sets.tourOperatorMapping) sets.tourOperatorMapping = JSON.parse(sets.tourOperatorMapping)
            return sets
        }(jQ('script').filter(function fltrScript(){return !jQ(this).attr('src')}).filter(function fltrSrc(){return /settings/i.test(jQ(this).text())}).eq(0).text() || ''));


        keeps['accomguid'] = cdpm.accomguid 
            || window.app && (/package\/([^\/]+)\//i.exec(window.app.matrixUrl || '') || []).pop()
            || newPM.settings && (/package\/([^\/]+)\//i.exec(newPM.settings.matrixUrl || '') || []).pop()
            || jQ('section.panel.panel-result.js-answers.text-default.clearfix').attr('data-id')
            || ""
        keeps['accomimg'] = window.app && window.app.imagePath
            || newPM.settings && newPM.settings.imagePath
            || cdpm.accomimg
            || ''
        newPM['accomtitle'] = window.app && window.app.geoPath
            || newPM.settings && newPM.settings.geoPath && newPM.settings.geoPath.replace(/(",|")/g,'')
            || cdpm.accomresort
            || ''
        newPM['accomname'] = window.app && window.app.hotelName
            || newPM.settings && (/[^,"]+/.exec(newPM.settings.hotelName || '') || []).pop()
            || cdpm.accomname
            || ''
        newPM['accomprice'] = (/\d+/.exec(jQ('td.is-selected button.pika-button span').text()) || []).pop()
            || (/\d+/.exec(jQ('p.priceTicket-item.clearfix.font-family-bold span.pull-right.text-right').text()) || []).pop() 
            || 0;
        keeps['accomurl'] = (newPM.accomtitle && newPM.accomname && newPM.accomtitle && ('http://www.thomascook.com/destinations/'+newPM.accomtitle.replace(/,\s*/g, '/')+'/'+newPM.accomname).replace(/\s/g, '-').replace(/í/, 'i').replace(/è/, 'e').toLowerCase())
            || cdpm.accomurl
            || ''
            if (encodeURI(keeps.accomurl) !== keeps.accomurl) keeps['accomurl'] = ''    
        var dests = newPM.accomtitle && newPM.accomtitle.split(/\//) 
            || [] 
        keeps['accomcountry'] = dests && dests.shift()
            || CATTParams && CATTParams.destination
            || cdpm.accomcountry
            || ""
        keeps['accomregion'] = dests && dests.shift()
            ||  cdpm.accomregion 
            || ""
        keeps['accomdestrest'] = dests && dests.join(',') 
            || cdpm.accomdestrest && cdpm.accomdestrest.replace(/(",|")/g,'')
            || ""
        newPM['departureairportselected'] = jQ('div.depAirport select.form-control option:selected').attr('value') 
            || (/(\w+)\s>/.exec(jQ('div.priceTicket-line:eq(1) span:eq(1)').text()) || []).pop()
            || cdpm.departureairportselected
            || ""
        newPM['destinationairportselected'] = (/>\s(\w+)/.exec(jQ('div.priceTicket-line:eq(1) span:eq(1)').text()) || []).pop()
            || (/(\w{3})/.exec(jQ('span.src-airportCode:eq(1)').text()) || []).pop()
            || cdpm.destinationairportselected
            || ""
        newPM['destination'] = jQ('ul.breadcrumb') && $.makeArray($('ul.breadcrumb.text-default.src-accommImages-breadcrumb.list-unstyled.inline.list-inline li').map(function(e, f){return $(f).text().trim()})).join(',').replace('Holiday,','')
            || cdpm.destination
            || ""

        var deptday = jQ('table.pika-table td[class="is-selected"]') && jQ('table.pika-table td[class="is-selected"]').attr('data-day') || '01';
        var deptmth = ''+ (parseInt(jQ('select.pika-select.pika-select-month option[selected]') && jQ('select.pika-select.pika-select-month option[selected]').attr('value') || 0)+1 || '01');
        var deptyr = jQ('select.pika-select.pika-select-year option[selected]') && jQ('select.pika-select.pika-select-year option[selected]').attr('value') || '1970';
        var depdatecal = +new Date(("0" + deptday).slice(-2)+'/'+("0" + deptmth).slice(-2)+'/'+deptyr);
        var ptdeptdate = +new Date(jQ('div.priceTicket-flightDetails div.priceTicket-line span.font-family-bold[data-test-id="flightInDate"]') && jQ('div.priceTicket-flightDetails div.priceTicket-line span.font-family-bold[data-test-id="flightInDate"]').eq(0).text() || 0)
        var deptdatesel = ''; if (jQ('span.js-departureDate-title')) { deptdatesel = +new Date(jQ('span.js-departureDate-title').text() || 0)}
        var cdpmdeptdate = +new Date(CATTParams.DeptDate?(/^\d{4}-\d+-\d+/.test(CATTParams.DeptDate)?CATTParams.DeptDate.replace(/^(\d{4})-(\d+)-(\d+)/,'$1/$2/$3'):CATTParams.DeptDate):0)

        var ptretdate = +(new Date($('div.containerOverflowMobile div.priceTicket-line [data-test-id=flightOutDate]').text()) || 0);
        var cdpmretdate = +new Date(CATTParams.RetDate?(/^\d{4}-\d+-\d+/.test(CATTParams.RetDate)?CATTParams.RetDate.replace(/^(\d{4})-(\d+)-(\d+)/,'$1/$2/$3'):CATTParams.RetDate):0);

        newPM['deptdate'] = cdl.gadate && cdl.gadate(cdpmdeptdate!==0?cdpmdeptdate:(depdatecal!==0?depdatecal:(ptdeptdate!==0?ptdeptdate:(deptdatesel!==0?deptdatesel:0))));
        newPM['retdate'] = cdl.gadate && cdl.gadate(cdpmretdate!==0?cdpmretdate:(ptdeptdate!==0?ptdeptdate:0));

        newPM['accomcode'] = cdpm.accomcode
            || CATTParams && CATTParams.accomcode
            || ''

        newPM['boardbasis'] = CATTParams && CATTParams.BoardBasis
            || ((/[,].+/.exec(jQ('header.priceTicket-durationLabel.h3.font-family-bold.clearfix').text()) || []).pop() || '').replace(/,\s/,'') 
            || '';
        newPM['brand'] = cdpm.brand
            || (/sprite-brand-(\w*)/i.exec(jQ('div[class*=sprite-brand-]').attr('class') || []) || []).pop()
            || (/brandIcon-(\w*)/i.exec(jQ('span[class*=brandIcon-]').attr('class') || []) || []).pop()
            || ''

        var paccom = jQ(jQ('div.sch-priceTicketMobilePanel-container li.priceTicket-roomDescriptionItem.liImage span[data-test-id="numberOfAdults"]')[0] || "").text()
        newPM['paxadultperroom'] = []
            jQ('ul.priceTicket-roomDescriptionList.unstyled li.priceTicket-roomDescriptionItem.liImage span.font-family-bold').next().each(function(e){newPM['paxadultperroom'].push(+(/(\d+)\sAdult/i.exec(jQ(this).text()) || [0]).pop())})
        newPM['paxchildperroom'] = []
            jQ('ul.priceTicket-roomDescriptionList.unstyled li.priceTicket-roomDescriptionItem.liImage span.font-family-bold').next().each(function(e){newPM['paxchildperroom'] .push(+(/(\d+)\sChild/i.exec(jQ(this).text()) || [0]).pop())})
        newPM['paxinfantperroom'] = []
            jQ('ul.priceTicket-roomDescriptionList.unstyled li.priceTicket-roomDescriptionItem.liImage span.font-family-bold').next().each(function(e){newPM['paxinfantperroom'].push(+(/(\d+)\sInfant/i.exec(jQ(this).text()) || [0]).pop())})
        newPM['paxadult'] = (function (){var total = 0; jQ.each(newPM['paxadultperroom'],function() {total += this;}); return total}())
            || +(/(\d+)\sAdult/i.exec(paccom) || []).pop()
            || cdpm.paxadult
            || '0'
        newPM['paxchild'] = (function (){var total = 0; jQ.each(newPM['paxchildperroom'],function() {total += this;}); return total}())
            || +(/(\d+)\sChild/i.exec(paccom) || []).pop() 
            || cdpm.paxchild
            || '0';
        newPM['paxinfant'] = (function (){var total = 0; jQ.each(newPM['paxinfantperroom'],function() {total += this;}); return total}())
            || +(/(\d+)\sInfant/i.exec(paccom) || []).pop() 
            || cdpm.paxinfant
            || '0';
        newPM['paxtotal'] = parseInt(newPM.paxadult || 0)+parseInt(newPM.paxchild || 0)+parseInt(newPM.paxinfant || 0) || 0

        newPM['pricepp'] = (/(\d+)/i.exec(jQ('span[data-test-id="packagePrice"]').text() || '') || []).pop()
            || jQ('.amount').text()
            || ""
        newPM['rooms'] = jQ('div.src-accomRooms-cta.text-center.col-xs-12.col-sm-3 i.icon.icon-checkmark').length
            || cdpm.rooms
            || 0;
        newPM['roomtypes'] = []; for (var i=0; i < newPM['rooms']; i++) { newPM['roomtypes'].push(jQ('li.src-accomRooms-listItem.clearfix.src-accomRooms-listItem_selected') && jQ('li.src-accomRooms-listItem.clearfix.src-accomRooms-listItem_selected').eq(i).attr('data-room') || '')};

        newPM['starrating'] = newPM.settings && newPM.settings.rating
            || (/^(\d\.?\d?)\sout/.exec(jQ('ul.sunnyHeartRating').attr('title')) || []).pop()
            || cdpm.starrating
            || '0'
        newPM['touroperator'] = cdpm.touroperator
            || newPM.settings && newPM.settings.matrixUrl && ((/brand=[^&]+/.exec(newPM.settings.matrixUrl)) || ['']).pop().replace(/brand=/,'')
            || ''
        newPM['accomvideo'] = ($('button.btn.btn-block.btn-default.src-accomHighlights-videoButton'))?'y':'n'

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

        jQ.extend(cdl.CATTParams, newPM, keeps)

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));

    } catch(e) {
        cdl.error('GTM CATTDL Accom: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Accom'})      
    }
    return jQ && jQ.extend && cdl || !1
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>