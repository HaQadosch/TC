<script id='GTM-KH5PKD_cattdlSRP'>
setTimeout(function gtm_cattdlSRP(jQ, dl, cdl) {
  'use strict';
  var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
  var cdpm;
  var ld = cdl._;
  
  if (jQ && cdl && dl) //&& !dl.some(function(a){return /CATTDL SRP/i.test(a && a.event || '');}) ) 
  try {
    cdpm = cdl.CATTParams;
    var keeps = {};
    var newPM = {};
    var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');

    var jqmain = jQ('div.search_results_container');
    var jqSelPage =  jqmain.find('div.numbers em span:eq(0)').text() || '1';
    var jqSortOption = jqmain.find('select.ordered-dropdown > option:selected').text()  || "";
    var accoms = jqmain.find('div.sailing_results_set.table_frame').toArray().map(function (e, i) {
      return {
        'cruiseline'      : jQ(e).find('span.hide_cruise_vendor details_value a[title*=Learn more about the cruiseline]').text() || jQ(e).find('span.hide_results_vendorname').text() || ''
        , 'cruiselineid'  : (/vendor_id=(\d+)/.exec(jQ(e).find('span.hide_cruise_vendor a').attr('href') || '') || ['']).pop()
        , 'cruiseship'    : jQ(e).find('div.sailing_results_set_details span.details_value a[title*=Learn more about the ship]').text() || ''
        , 'name'          : (jQ(e).find('div.sailing_results_set_name').text() || '').trim()
        , 'id'            : (/ship_id=(\d+)/.exec(jQ(e).find('div.sailing_results_set_details span.details_value a[title*=Learn more about the ship]').attr('href') || '') || ['']).pop()
        , 'destination'   : (jQ(e).find('div.sailing_results_ports div.port_list').text() || '').trim().replace(/\s\|\s/g,';')
        , 'deptport'      : jQ(e).find('div.sailing_results_departure_port span.details_value').text() || ''
        , 'totalprice'    : ''
        , 'pricepp'       : ''
        , 'duration'      : parseInt(jQ(e).find('div.sailing_results_cruise_length span.details_value').text()) || 0
        , 'imgurl'        : jQ(e).find('div.sailing_results_set_ship_image img').attr('src') || ''
        , 'pos'           : i
      };
    });
    newPM['sortoption'] = ''; jQ('div.sort_order_container form select').eq(0).find('option').each(function(e,d){ 
      if(jQ(d).is(':selected')) {
          newPM.sortoption = (jQ(d).text() || '').trim()
      }
    });
    newPM['destination'] = ''; jQ('select#destination_id option').each(function(e,d){ 
      if(jQ(d).attr('selected')) {
        newPM.destination = jQ(d).text() || cdpm.destination || '';
      } 
    });
    newPM['cruiseline'] = ''; jQ('select#vendor_id option').each(function(e,d){ 
      if(jQ(d).attr('selected')) {
        newPM.cruiseline = jQ(d).text() || cdpm.cruiseline || '';
      } 
    });
    newPM['cruiseship'] = ''; jQ('select#cruise_ships option').each(function(e,d){ 
      if(jQ(d).attr('selected')) {
        newPM.cruiseship = jQ(d).text() || cdpm.cruiseship || '';
      } 
    });
    newPM['searchresultspagenbr'] = jQ('div.pagination span.current').eq(0).text() || 0;
    newPM['searchresultsperpage'] = cdpm.searchresultsperpage || accoms.length || 0;
    newPM['searchresultspages'] = parseInt(cdpm.searchresultspages) || 0;
    newPM['searchresultstotal'] = parseInt(cdpm.searchresultstotal) || 0;
    var deptdates = jQ('div.search_results_modify div[class*=search-criteria] br');
    newPM['deptdatestart'] = +new Date((deptdates.next().text() || '1 January 1970').trim()) || 0;
    newPM['deptdateend'] = +new Date((deptdates.next().next().text() || '1 January 1970').trim()) || 0;
    newPM['errors'] = {
      errorcode: '',
      errormsg: jQ('div.errortxt') && jQ('div.errortxt').text().trim() || ''
    };
    var departweeknbr = (function gtm_weekNbr(dd){
      var wNbr = 0;
      var date = new Date(dd);
      var dateY = date.getFullYear();
      var firstOfJan = new Date(dateY,0,1);
      wNbr = Math.ceil((((date - firstOfJan) / 86400000) + firstOfJan.getDay()+1)/7) || 0;
      return wNbr || 0;
    }(cdpm.deptdate || ''));

    keeps = {
      'accoms': accoms
      , 'departweeknbr': departweeknbr
      , 'selpage': jqSelPage
      , 'sortoption': jqSortOption
    };

    ld.assign(cdl.CATTParams, keeps);
    ld.extend(cdl.CATTParams, newPM);
    ld.assign(ck_cdpm, keeps);

    cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.thomascook.com');
  } catch(e) {
    cdl.error('GTM CATTDL SRP: '+e);
  } finally {
    var stampEpoch = +new Date();
    dl.push({'event': 'CATTDL SRP', 'lob': cdl.CATTParams.lob || '', 'pid': cdl.CATTParams.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
  }
  return jQ && cdl;
}(window.jQuery, window.dataLayer_KH5PKD, window.CATTDL),1000);
</script>