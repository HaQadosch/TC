<script id='GTM-WN2KRH_CATTDL5Cust'>
  (function gtm_cattdlCust(jQ, dl, cdl) {
    'use strict'
    if (jQ &&jQ.extend && cdl) try {
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

      keeps['accomguid'] = cdpm.searches.hotelCode
      || cdpm.searches.hotelId
      || cdpm.searches.productId
      || ck_cdpm.accomguid
      || jQ('input#hotelId').val()
      || (cdl.twls(/hotelid=/i) && (cdl.ewls(/hotelid=([^&]+)/i) || []).pop ())
      || (cdl.twls(/productId=/i) && (cdl.ewls(/productId=([^&]+)/i) || []).pop ())
      || (function gtm_accomGuid(){
        var slct = jQ('a[href*="productId="]')
        var pdtID = ''
        if (slct.length) {
          var hrf = slct.first().attr('href') || ''
          if (hrf) {
            pdtID = /productId=([^&]+)/i.exec(hrf) || []
            if (pdtID.length) pdtID = pdtID.pop()
              }
        }
        return pdtID
      }())
      || cdpm.accomguid
      || ""
      newPM['deptairport'] = cdpm.departureairportselected
      || cdpm.departurecity
      || cdpm.srchcitydeparture && cdpm.srchcitydeparture.replace(/^([^;]+).*/, '$1')
      || ''
      newPM['accomtitle'] = jQ('.hotelDetails > p:eq(0)').text().trim() && jQ('.hotelDetails > p:eq(0)').text().trim().replace(/,\s*/g, '/')
      || ''
      var dests = (cdpm.accomresort || newPM.accomtitle || '').split(/\//)
      || []
      newPM['accomprice'] = cdpm.bookingvalue
      || jQ('li.total.clearfix.cko-priceTicket-black span.amount:eq(0)').text()
      || ""
      newPM['accomcountry'] = ck_cdpm.accomcountry
      || dests && dests.shift()
      || cdpm.destination
      || ""
      newPM['accomregion'] = ck_cdpm.accomregion
      || dests && dests.shift()
      || ""
      newPM['accomdestrest'] = ck_cdpm.accomdestrest
      || dests && dests.join(',')
      || ""

      newPM['pricepp'] = (jQ('div#priceTicketId .pp span.amount') && jQ('div#priceTicketId .pp span.amount').text())
      || (jQ('div#ticketWrapper .pp span.amount') && jQ('div#ticketWrapper .pp span.amount').text())
      || (jQ('#pricePresentationAvgP') && jQ('#pricePresentationAvgP').text().replace(/\D*/g, ''))
      || ""

      newPM['retdate'] = cdpm.enddate
      || (function retdate(date){
        'use strict'
        var retdate = ''
        if (date) try {
          var x = new Date(date)
          var m = x.getUTCMonth(); m++;
          var d = x.getUTCDate(); d++;
          retdate = x.getUTCFullYear()+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d
        } catch(e) {}
        return retdate
      }(jQ('[data-test-id=departureInboundDate1]').text()))
      || ''

      newPM['brand'] = cdpm.brand
      || (/sprite-brand-(\w*)/i.exec(jQ('div[class*=sprite-brand-]').attr('class') || []) || []).pop()
      || (/brandIcon-(\w*)/i.exec(jQ('span[class*=brandIcon-]').attr('class') || []) || []).pop()
      || ''

      newPM['roomtypes'] = (function getRoomTypes(){var x = [cdpm.room1code]; if (cdpm.room2code){x.push(cdpm.room2code); if (cdpm.room3code){x.push(cdpm.room3code); if (cdpm.room4code){x.push(cdpm.room4code); if (cdpm.room5code){x.push(cdpm.room5code); }}}} return x}())
      || (jQ('div#accommRoomContainer input:checked') || []).length && (function getRoomTypes(elt){var rtypes = []; elt && elt.each(function() {rtypes.push(jQ(this).attr('data-roomcode'))}); return rtypes}(jQ('div#accommRoomContainer input:checked')))
      || (function getRoomTypesSEO(elt){var rtypes = []; elt && elt.each(function() {rtypes.push(jQ(this).attr('id').replace(/[^_]*_[^_]*_([^_]*)_\d+_\d+/g, '$1'))}); return rtypes}(jQ('div#facetDBPaxCombination input:checked')))
      || []

      var accomDetails = jQ('dl.inc span')
      || false
      newPM['accomdetails'] = {
        roomtype    : accomDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '') || '',
        boardbasis  : accomDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s+/g, ' ') || ''
      }

      newPM['paxadultperroom'] = []
      jQ('span.col-md-7.col-xs-7').each(function(e){newPM['paxadultperroom'].push(+(/(\d+)\sAdult/i.exec(jQ(this).text()) || []).pop())})
      newPM['paxchildperroom'] = []
      jQ('span.col-md-7.col-xs-7').each(function(e){newPM['paxchildperroom'].push(+(/(\d+)\sChild/i.exec(jQ(this).text()) || []).pop())})
      newPM['paxinfantperroom'] = []
      jQ('span.col-md-7.col-xs-7').each(function(e){newPM['paxinfantperroom'].push(+(/(\d+)\sInfant/i.exec(jQ(this).text()) || []).pop())})

      var paxadultarray = []; for (i = 0; i < jQ('div.ticket li').length; paxadultarray.push(+(/(\d+)\sx\sAdult/i.exec(jQ(jQ('div.ticket li')[i++]).text()) || [0]).pop()));
      var paxchildarray = []; for (i = 0; i < jQ('div.ticket li').length; paxchildarray.push(+(/(\d+)\sx\sChild/i.exec(jQ(jQ('div.ticket li')[i++]).text()) || [0]).pop()));
      var paxinfantarray = []; for (i = 0; i < jQ('div.ticket li').length; paxinfantarray.push(+(/(\d+)\sx\sInfant/i.exec(jQ(jQ('div.ticket li')[i++]).text()) || [0]).pop()));
      var paxadulttot1 = (function (){var total = 0; jQ.each(paxadultarray,function() {total += this;}); return total}())
      var paxadulttot2 = (function (){var total = 0; jQ.each(newPM['paxadultperroom'],function() {total += this;}); return total}())
      var paxchildtot1 = (function (){var total = 0; jQ.each(paxchildarray,function() {total += this;}); return total}())
      var paxchildtot2 = (function (){var total = 0; jQ.each(newPM['paxchildperroom'],function() {total += this;}); return total}())
      var paxinfanttot1 = (function (){var total = 0; jQ.each(paxinfantarray,function() {total += this;}); return total}())
      var paxinfanttot2 = (function (){var total = 0; jQ.each(newPM['paxinfantperroom'],function() {total += this;}); return total}())

      if (paxadulttot1 !== 0) {newPM['paxadult'] = paxadulttot1}
      else {if(paxadulttot2 !==0) {newPM['paxadult'] = paxadulttot2}
            else {if(cdpm.paxadult !== undefined) {newPM['paxadult'] = cdpm.paxadult}
                  else newPM['paxadult'] = 0}};
      if (paxchildtot1 !== 0) {newPM['paxchild'] = paxchildtot1}
      else {if(paxchildtot2 !==0) {newPM['paxchild'] = paxchildtot2}
            else {if(cdpm.paxchild !== undefined) {newPM['paxchild'] = cdpm.paxchild}
                  else newPM['paxchild'] = 0}};
      if (paxinfanttot1 !== 0) {newPM['paxinfant'] = paxinfanttot1}
      else {if(paxinfanttot2 !==0) {newPM['paxinfant'] = paxinfanttot2}
            else {if(cdpm.paxinfant !== undefined) {newPM['paxinfant'] = cdpm.paxinfant}
                  else newPM['paxinfant'] = 0}};

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

      newPM['touroperator'] = jQ('div.brand span').text()
      || ''

      jQ.extend(cdl.CATTParams, newPM, keeps);
      jQ.extend(ck_cdpm, keeps);
      var domainName = '.jettours.com'
      cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);

      var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
      params.lob = cdpm.lob || '';
      params.holidaytype = cdpm.holidaytype || '';
      params.accomcode = cdpm.accomcode || '';
      CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');

    } catch(e ){
      cdl.error('GTM CATTDL Cust: '+e)
    } finally {
      dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
      dl.push({'event': 'CATTDL Cust'})
    }
    return jQ &&jQ.extend && cdl
  }(window.jQuery, window.dataLayer, window.CATTDL))
</script>
