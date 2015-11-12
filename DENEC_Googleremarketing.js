try{
    //console.log('DE NEC Google Marketing v7');
    var pageType, startDate = '', endDate = '';
    switch(window.CATTParams.PageID){
        case 'subsrch':
        case 'search':
            pageType = 'searchresults';
            break;
        case 'accom':
            pageType = 'offerdetail';
            break;
        case 'paxpay':
            pageType = 'conversionintent';
            break;
        case 'booking':
            pageType = 'conversion';
            break;
        default:
            pageType = 'home';
    }
    if(window.CATTParams.DeptDate != null && window.CATTParams.DeptDate.length > 0){
        startDate = window.CATTParams.DeptDate.split('/');startDate = startDate[2] + '-' + startDate[1] + '-' + startDate[0];
    }
    if(window.CATTParams.RetDate != null && window.CATTParams.RetDate.length > 0){
        endDate = window.CATTParams.RetDate.split('/');endDate = endDate[2] + '-' + endDate[1] + '-' + endDate[0];
    }

    var script = '';// = '<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion_async.js"></script>';
    script += '<noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/963772549/?value=0&amp;guid=ON&amp;script=0"/></div></noscript>';
    $('body').append(script);
    $.getScript( "http://www.googleadservices.com/pagead/conversion_async.js", function( data, textStatus, jqxhr ) {
        window.google_trackConversion({
            google_conversion_id: 963772549,
            google_custom_params: {
                travel_destid: window.CATTParams.DestinationAirportSelected,
                travel_originid: window.CATTParams.DepartureAirportSelected,
                travel_pagetype: pageType,
                travel_startdate: startDate,
                travel_enddate: endDate,
                travel_totalvalue: window.CATTParams.BookingValue
            },
            google_remarketing_only: true
        });
    });
} catch (e){if (typeof console != "undefined") console.log("DE NEC Google Marketing: "+e)}

//<script id='gtm_GoogleMarketing'>
(function gtm_GoogleMarketingDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_googlemarketing = {
            google_trackConversion : {
                google_conversion_id: 963772549,
                google_custom_params: {
                    travel_destid: cdpm.destinationairportselected || '',
                    travel_originid: cdpm.departureairportselected || '',
                    travel_pagetype: /home|generic/i.test(cdpm.pageid || '')?'home':/subsrch|search/i.test(cdpm.pageid || '')?'searchresults':/accom/i.test(cdpm.pageid || '')?'offerdetail':/paxpay/i.test(cdpm.pageid || '')?'conversionintent':/booking/i.test(cdpm.pageid || '')?'conversion':'home',
                    travel_startdate: (cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3-$2-$1'),
                    travel_enddate: (cdpm.retdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3-$2-$1'),
                    travel_totalvalue: cdpm.bookingvalue || ''
                },
                google_remarketing_only: true
            },
            script : {
                src : 'https://www.googleadservices.com/pagead/conversion_async.js',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM GoogleMarketing: '+ e);
    } finally {
        dl.push({'event':'GoogleMarketingDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_googlemarketing;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_GoogleMarketing(jQ, dl, cdl, gmdl){
    'use strict';
    if (jQ && dl && cdl && gmdl) try {
        jQ.getScript && jQ.getScript(gmdl.script && gmdl.script.src || '', function gtm_GoogleMarketingScript(){
            try {
                gmdl.google_trackConversion && window.google_trackConversion && window.google_trackConversion(gmdl.google_trackConversion);
                gmdl.script.status = 'fired';
            } catch(ee) {
                cdl.error('GTM GoogleMarketingScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM GoogleMarketing:'+ e);
    } finally {
        dl.push({'event':'GoogleMarketing'});
    }
    return jQ && dl && cdl && gmdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_googlemarketing));
//</script>
