<script id='GTM-TGBQS9_dlEPackage'>
    (function gtm_dlEPackage(cdl, jQ, dl){
      'use strict';
      var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
      var cdpm;
      var ld = cdl._;
      if (jQ && cdl && !dl.some(function(a){return /CATTDL ePackage/i.test(a && a.event || '');})  ) try{
        cdpm = cdl.CATTParams;
        var newPM = {};

        if (cdpm) {
          newPM.accomname = cdpm.accomname || "";
          newPM.deptairport = cdpm.departureairportselected || "";
          newPM.destairport =  cdpm.destinationairportselected || "";
        }
        newPM.cardtype = cdpm.cardtype || jQ('#payHoliday .clearfix:eq(0) div') && (jQ('#payHoliday .clearfix:eq(0) div').text() || '').replace(/\scredit\scard$/i, '') || "" ;
        newPM.destination = jQ('.basketDetail.flightDetail:eq(1) > span:eq(0)').text() || "";

        var items = jQ('div.CheckoutItemContent');
        var curCost = '';
        newPM.extras = {};
        var selectedExtra = '';
        for (var i = 0; i < items.length; i++) {
          curCost = items[i];
          if(jQ(curCost).attr('class')){
            var title = jQ(curCost).attr('class');
            selectedExtra = /CAR_PARKS/.test(title)?'carpark':/ATTRACTIONS/.test(title)?'attractions':/CAR_HIRES/.test(title)?'carhire':'na';
          }
          if (selectedExtra !== 'na') {
            newPM.extras[selectedExtra] = {
              selected    : true,
              description : (jQ(curCost).find('div.CheckoutItemContentHeader') || ['']).text().trim() || '',
              cost        : +(jQ(curCost).find('span.basketPrice') || ['0']).text().trim().replace('£','') || 0,
              addedcost   : +(jQ(curCost).find('span.basketPrice') || ['0']).text().trim().replace('£','') || 0,
              quantity    : 1
            };
          }
        }

        var othercost = 0;
        (items.filter('.EXTRAS').find('div.basketSection div.basketPriceLine')).each(function(_, d){
          var optitle = (jQ(d).find('span.basketDetail') || ['']).text();
          var selectedOpExtra = /Luggage/i.test(optitle)?'luggage':/Atol Protection Cover/i.test(optitle)?'insurance':'na';
          if(selectedOpExtra !== 'na'){
            newPM.extras[selectedOpExtra] = {
              selected    : true,
              description : ((jQ(d).find('span.basketDetail') || ['']).text().trim()),
              cost        : +((jQ(d).find('span.basketPrice') || ['0']).text().replace('£','') ) || 0,
              addedcost   : +((jQ(d).find('span.basketPrice') || ['0']).text().replace('£','') ) || 0,
              quantity    : 1
            };
          }
          if(selectedOpExtra === 'na'){
            othercost = +((jQ(d).find('span.basketPrice') || ['0']).text().replace('£','') )+othercost;
          }
        });
        if(othercost>0){
          newPM.extras.otheroptionalextras = {
            selected    : true,
            description : 'Other Optional Extras',
            cost        : othercost || 0,
            addedcost   : othercost || 0,
            quantity    : 1
          };
        }

        ld.assign(cdl.CATTParams, newPM);

        if (cdpm.pageid === 'booking'){
          var bkgrefcount = 0;
          var paramsbookingref = JSON.parse(cdl.ckget('gtm_bookingref') || '[]');
          if(!cdpm.bookingref){
            cdpm.pageid = 'refreshbookconf';
          }
          paramsbookingref.forEach(function(e){
            if(cdpm.bookingref && e.toString() === cdpm.bookingref){
              bkgrefcount++ ;
            }
          });
          if (bkgrefcount > 0){
            cdpm.pageid = 'refreshbookconf';
          } else {
            paramsbookingref.push(cdpm.bookingref);
            cdl.ckset('gtm_bookingref', JSON.stringify(paramsbookingref), Infinity, '/', '.thomascook.com');
          }
        }
      } catch(e) {
        window.console.info('GTM CATTDL ePackage error :'+e);
      } finally {
        var stampEpoch = +new Date();
        dl.push({'event': 'CATTDL ePackage', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
      }
    }(window.CATTDL, window.jQuery, window.dataLayer));
</script>