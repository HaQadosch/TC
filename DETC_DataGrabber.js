try{
    var offers = new Array(), departureDate = '', duration = '', tourOperator = '', service = '', pricePerPerson = '';
    $.each($('.search-for-hotel'), function(index, item){
        if(index > 9){ return false;}
        departureDate = $(item).find('.acommodation-footer-links li').first().text().trim();
        departureDate = departureDate.substring(0,departureDate.indexOf(','));
        departureDate = departureDate.replace('Mo.', '').replace('Di.', '').replace('Mi.', '').replace('Do.', '').replace('Fr.', '').replace('Sa.', '').replace('So.', '').trim();
        departureDate = departureDate.replace('.', '/').replace('.', '/');
        duration = $(item).find('.row').first().text().trim();
        duration = parseInt(duration);
        tourOperator = $(item).find('.row:nth-child(2) img').attr('title').replace('Veranstalter ', '').trim();
        service = $(item).find('.row:nth-child(2) div:nth-child(1) p:nth-child(1)').text().trim();
        service += ', ' + $(item).find('.row:nth-child(2) div:nth-child(1) p:nth-child(2)').text().trim();
        pricePerPerson = $(item).find('.price').text().replace('.', '').trim();
        offers.push({
            'Line': index+1,
            'DepartureAirport': $(item).find('.regionInfoLink').text().trim(),
            'DepartureDate': departureDate,
            'Duration': duration,
            'TourOperator': tourOperator,
            'Service': service,
            'PricePerPerson': pricePerPerson
        });
    });


    var data = {
        "AccomCode": window.CATTParams.AccomCode,
        "AccomName": window.CATTParams.AccomName,
        "AccomResort": window.CATTParams.AccomResort,
        "BoardBasis": window.CATTParams.AccomResort,
        "Budget": window.CATTParams.Budget,
        "DepartureAirportSelected": window.CATTParams.DepartureAirportSelected,
        "DeptDate": window.CATTParams.DeptDate,
        "Destination": window.CATTParams.Destination,
        "DestinationAirportSelected": window.CATTParams.DestinationAirportSelected,
        "Duration": window.CATTParams.Duration,
        "Extras": window.CATTParams.Extras,
        "HolidayType": window.CATTParams.HolidayType,
        "LOB": window.CATTParams.LOB,
        "PaxAdult": window.CATTParams.PaxAdult,
        "PaxInfant": window.CATTParams.PaxInfant,
        "PaxTotal": window.CATTParams.PaxTotal,
        "ResortSearched": window.CATTParams.ResortSearched,
        "RetDate": window.CATTParams.RetDate,
        "ReturnAirportSelected": window.CATTParams.ReturnAirportSelected,
        "Rooms": window.CATTParams.Rooms,
        "SearchResultPageNbr": window.CATTParams.SearchResultsPageNbr,
        "SearchResultsPages": window.CATTParams.SearchResultsPages,
        "SearchResultsPerPage": window.CATTParams.SearchResultsPerPage,
        "SearchResultsTotal": window.CATTParams.SearchResultsTotal,
        "SortOption": window.CATTParams.SortOption,
        "StarRating": window.CATTParams.StarRating,
        "WidenedDepDate": window.CATTParams.WidenedDepDate,
        "offers": offers
    };
    data = encodeURIComponent(JSON.stringify(data));
    $.getScript('https://www.tc-ecom.de/misc/lang-datagrabber/ldg.php?data='+data);

} catch (e){if (typeof console != "undefined") console.log("DE TC Data Grabber: "+e)}

//<script id='gtm_EcomDataGrabber'>
(function gtm_ecomdatagrabberDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_ecomdatagrabber = {
            data : {
                "AccomCode": cdpm.accomcode || '',
                "AccomName": cdpm.accomname || '',
                "AccomResort": cdpm.accomresort || '',
                "BoardBasis": cdpm.boardbasis || cdpm.accomresort || '',
                "Budget": cdpm.budget || '',
                "DepartureAirportSelected": cdpm.departureairportselected || '',
                "DeptDate": cdpm.deptdate || '',
                "Destination": cdpm.destination || '',
                "DestinationAirportSelected": cdpm.destinationairportselected || '',
                "Duration": cdpm.duration || '',
                "Extras": cdpm.extras || '',
                "HolidayType": cdpm.holidaytype || '',
                "LOB": cdpm.lob || '',
                "PaxAdult": cdpm.paxadult || '',
                "PaxInfant": cdpm.paxinfant || '',
                "PaxTotal": cdpm.paxtotal || '',
                "ResortSearched": cdpm.resortsearched || '',
                "RetDate": cdpm.retdate || '',
                "ReturnAirportSelected": cdpm.returnairportselected || '',
                "Rooms": cdpm.rooms || '',
                "SearchResultPageNbr": cdpm.searchresultspagenbr || '',
                "SearchResultsPages": cdpm.searchresultspages || '',
                "SearchResultsPerPage": cdpm.searchresultsperpage || '',
                "SearchResultsTotal": cdpm.searchresultstotal || '',
                "SortOption": cdpm.sortoption || '',
                "StarRating": cdpm.starrating || '',
                "WidenedDepDate": cdpm.wideneddepdate || '',
                "offers": []
            },
            script : {
                src : 'https://www.tc-ecom.de/misc/lang-datagrabber/ldg.php?data=',
                status : 'not fired'
            }
        };
        var curHotel = '';
        jQ.each(jQ('.search-for-hotel'), function gtm_offers(index, item){
            try {
                if(index < 10){
                    curHotel = jQ(item);
                    cdl.DL_ecomdatagrabber.data.offers.push({
                        'Line': index+1,
                        'DepartureAirport': curHotel.find('.regionInfoLink').text().trim(),
                        'DepartureDate': (curHotel.find('.acommodation-footer-links li').first().text().trim() || '').replace(/\n/g, '').replace(/\D+(\d\d)\.(\d\d)\.(\d\d\d\d).*/, '$1/$2/$3'),
                        'Duration': window.parseInt(curHotel.find('.row').first().text().trim() || '1'),
                        'TourOperator': curHotel.find('.row:nth-child(2) img').attr('title').replace('Veranstalter ', '').trim() ||'',
                        'Service': (curHotel.find('.row:nth-child(2) div:nth-child(1) p:nth-child(1)').text().trim() || '')+', '+(curHotel.find('.row:nth-child(2) div:nth-child(1) p:nth-child(2)').text().trim() || ''),
                        'PricePerPerson': curHotel.find('.price').text().replace('.', '').trim() || ''
                    });
                }
            } catch(ee) {
                cdl.error && cdl.error('GTM ecomdatagrabber DL offers: '+ee);
            }
        });
    } catch(e) {
        cdl.error('GTM ecomdatagrabber DL: '+ e);
    } finally {
        dl.push({'event':'ecomdatagrabberDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_ecomdatagrabber;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_blah(jQ, dl, cdl, dgdl){
    'use strict';
    if (jQ && dl && cdl && dgdl) try {
        var srcdt = dgdl.data && window.JSON && window.JSON.stringify && window.encodeURIComponent(JSON.stringify(dgdl.data));
        jQ.getScript && jQ.getScript(dgdl.script && dgdl.script.src && (dgdl.script.src+srcdt) || '', function gtm_ecomdatagrabberScript(){
            try {
                dgdl.script && (dgdl.script.status = 'fired');
            } catch(ee) {
                cdl.error('GTM ecomdatagrabberScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM ecomdatagrabber:'+ e);
    } finally {
        dl.push({'event':'ecomdatagrabber'});
    }
    return jQ && dl && cdl && dgdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_ecomdatagrabber));
//</script>
