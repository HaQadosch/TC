<script>
(function gtm_cattdlSRPitems(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var keeps = {}
        var locpathname = cdpm.urlparams && cdpm.urlparams.pathname || ''
        var wgD = window.getPageData && window.getPageData(locpathname) || {}

        var wgetDataSrch = window.getPageData && (window.getPageData('/search') || window.getPageData('/searchresults-map') || (/\/holidays\/.+\/.+/i.test(locpathname) && window.getPageData(locpathname))) || {}
        if (Object.keys(wgetDataSrch).length !== 0) {
            var srpPM = {};
            var wgdSrch = wgetDataSrch.links && wgetDataSrch.links.search && wgetDataSrch.links.search.context || {}
            srpPM['deptairportsearched'] = wgdSrch.origin || "";
            srpPM['destinationsearched'] = wgdSrch.goingTo || "";
            srpPM['duration'] = wgdSrch.duration || "I dont mind";
            srpPM['resortsearched'] = wgdSrch.resortCode || "";
            srpPM['searchwidened'] = wgdSrch.flexible || '';
            srpPM['sortoption'] = wgdSrch.sort || "";

            var destination = ''; wgetDataSrch.commercialDestination && (wgetDataSrch.commercialDestination.options || []).filter(function(e){return e && e.selected}).forEach(function(e){destination=(e.title)});
            var resort = ''; wgetDataSrch.resortCategory && (wgetDataSrch.resortCategory.options || []).filter(function(e){return e && e.selected}).forEach(function(e){resort=(e.title)});
            var deptairport = ''; wgetDataSrch.depAirport && (wgetDataSrch.depAirport.options || []).filter(function(e){return e && e.selected}).forEach(function(e){deptairport=(e.title)});
            var accom = wgetDataSrch.hotelName && wgetDataSrch.hotelName.options && wgetDataSrch.hotelName.options[0] && (wgetDataSrch.hotelName.options[0].title || wgetDataSrch.hotelName.options[0].value) || "";

            srpPM['destination'] = ''; if (!destination){srpPM['destination']=srpPM['destinationsearched']} else {srpPM['destination']=destination};
            srpPM['resort'] = ''; if (!resort){srpPM['resort']=srpPM['resortsearched']} else {srpPM['resort']=resort};
            srpPM['deptairport'] = ''; if (!deptairport){srpPM['deptairport']=srpPM['deptairportsearched']} else {srpPM['deptairport']=deptairport};
            srpPM['accomname'] = accom || '';

            var strdeptdate = ''
            srpPM['deptdate'] = (strdeptdate = wgdSrch.when || "19700101") && +new Date(strdeptdate.substring(0,4), strdeptdate.substring(4,6)-1, strdeptdate.substring(6,8)) || 0;
            var wgdItems = wgetDataSrch.items || {}
            srpPM['searchresultstop3'] = ((wgdItems[0] && wgdItems[0].id || "") +"-"+(wgdItems[1] && wgdItems[2].id || "")+"-"+(wgdItems[2] && wgdItems[2].id || "")) || "";
            srpPM['searchlist'] = wgdItems.length || 0;     

            var wgdStats = wgetDataSrch.stats || {}
            srpPM['searchresultstotal'] = wgdStats.total || 0;
            srpPM['searchresultsperpage'] = (parseInt((wgdStats.end - wgdStats.start + 1)/10) == 0)?(Math.ceil(6/10)*10):((wgdStats.end - wgdStats.start + 1))
            srpPM['searchresultspages'] = Math.ceil(wgdStats.total / srpPM['searchresultsperpage']) || 0;
            srpPM['searchresultspagenbr'] = parseInt(jQ('div.paginationSearchResults:eq(0) span.active').attr('analytics-data') || Math.ceil((wgdStats.end + 1)/srpPM['searchresultsperpage']) || 0)
            srpPM['sessionid'] = window.sessionToken || "";

            cdpm.srpparams = {};
            jQ.extend(cdl.CATTParams.srpparams, srpPM);

            var curItem = {};
            var curpath = [];
            var curflightout = {};
            var curflightin = {};
            var srpItems = [];

            for (var i = 0; i < wgdItems.length; i++) {
                curItem = wgdItems[i];
                curpath = curItem.geoPath && curItem.geoPath.value && curItem.geoPath.value.split("/") || [];
                curflightout = curItem.flights && curItem.flights[0] && curItem.flights[0].outbound || {};
                curflightin = curItem.flights && curItem.flights[0] && curItem.flights[0].inbound || {};
                srpItems[i] = {
                    accomcode           :   (curItem.hotel && curItem.hotel.code || "").replace('|','-'),
                    accomguid           :   curItem.id || "",
                    accomlatitude       :   curItem.geoLocation && curItem.geoLocation.latitude || "",
                    accomlongitude      :   curItem.geoLocation && curItem.geoLocation.longitude || "",
                    accomname           :   curItem.hotel && curItem.hotel.value || "",
                    accomcountry        :   curpath.length > 0 && curpath[0] || "",
                    accomregion         :   curpath.length > 1 && curpath[1] || "",
                    accomresort         :   curpath.length > 2 && curpath[2] || "",
                    accomconcept        :   curItem.concepts && curItem.concepts[0] && curItem.concepts[0].type || "",
                    arrivalairportcode  :   curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].arrival  && curflightout.legs[0].arrival.airportCode
                                                ||curflightout && curflightout.legs[1] && curflightout.legs[1] && curflightout.legs[1].arrival  && curflightout.legs[1].arrival.airportCode //for 2 part journeys
                                                || "",
                    arrivalairport      :   curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].arrival  && curflightout.legs[0].arrival.title
                                                ||curflightout && curflightout.legs[1] && curflightout.legs[1] && curflightout.legs[1].arrival  && curflightout.legs[1].arrival.title //for 2 part journeys
                                                || "",
                    arrivaltime         :   curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].arrival  && curflightout.legs[0].arrival.time
                                                ||curflightout && curflightout.legs[1] && curflightout.legs[1] && curflightout.legs[1].arrival  && curflightout.legs[1].arrival.time //for 2 part journeys
                                                || 0,
                    boardbasis          :   curItem.priceDetail && curItem.priceDetail.boardTypeDesc || "",
                    carrier             :   curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].airlineCode
                                                || curflightout && curflightout.legs && curflightout.legs[1] && curflightout.legs[1].airlineCode //for 2 part journeys
                                                || "",
                    deptairportcode     :    curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].departure && curflightout.legs[0].departure.airportCode
                                                || curflightout && curflightout.legs && curflightout.legs[1] && curflightout.legs[1].departure && curflightout.legs[1].departure.airportCode //for 2 part journeys
                                                || "",
                    deptairport         :   curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].departure && curflightout.legs[0].departure.title
                                                || curflightout && curflightout.legs && curflightout.legs[1] && curflightout.legs[1].departure && curflightout.legs[1].departure.title //for 2 part journeys
                                                || "",
                    deptdate            :   curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].departure && curflightout.legs[0].departure.time
                                                || curflightout && curflightout.legs && curflightout.legs[1] && curflightout.legs[1].departure && curflightout.legs[1].departure.time //for 2 part journeys
                                                || 0,
                    depttime            :   curflightout && curflightout.legs && curflightout.legs[0] && curflightout.legs[0].departure && curflightout.legs[0].departure.time
                                                || curflightout && curflightout.legs && curflightout.legs[1] && curflightout.legs[1].departure && curflightout.legs[1].departure.time //for 2 part journeys
                                                || 0,
                    discountvalue       :   curItem.priceDetail && curItem.priceDetail.totalDiscount || "",
                    duration            :   curItem.duration  || "0",
                    pricepp             :   curItem.priceDetail && curItem.priceDetail.priceFrom || "",
                    pricetotal          :   curItem.priceDetail && curItem.priceDetail.amount || "",
                    returndate          :   curflightin && curflightin .legs && curflightin .legs[0] && curflightin .legs[0].departure && curflightin .legs[0].departure.time
                                                || curflightin && curflightin.legs && curflightin.legs[1] && curflightin.legs[1].departure && curflightin.legs[1].departure.time //for 2 part journeys
                                                || 0,
                    returntime          :   curflightin && curflightin .legs && curflightin .legs[0] && curflightin .legs[0].departure && curflightin .legs[0].departure.time
                                                || curflightin && curflightin.legs && curflightin.legs[1] && curflightin.legs[1].departure && curflightin.legs[1].departure.time //for 2 part journeys
                                                || 0,
                    starrating          :   curItem.ratings && curItem.ratings.starRating || "",
                    touroperator        :   curItem.tourOperator && curItem.tourOperator.name || ""
                };
            
                srpItems[i].flightdetails = {};
                srpItems[i].flightdetails.outbound = [];
                var curflightoutJ = {}
                var fltoutcount = curflightout && curflightout.legs && curflightout.legs.length || 0;
                for (var j = 0; j < fltoutcount; j++) {
                    curflightoutJ = curflightout && curflightout.legs && curflightout.legs[j] || {};
                    srpItems[i].flightdetails.outbound.push({
                        depart  : {
                            date                : curflightoutJ.departure && curflightoutJ.departure.time && +(new Date(curflightoutJ.departure.time) || 0),
                            time                : curflightoutJ.departure && curflightoutJ.departure.time && +(new Date(curflightoutJ.departure.time) || 0),
                            airportcode         : curflightoutJ.departure && curflightoutJ.departure.airportCode || "",
                            airport             : curflightoutJ.arrival && curflightoutJ.arrival.title,
                            carrier             : {
                                                    code :  curflightoutJ.airline && curflightoutJ.airlineCode || "",
                                                    name :  curflightoutJ.airline || ""
                                                  },
                            flightno            : curflightoutJ.flightCode || ''
                        },
                        arrive  : {
                            date                : curflightoutJ.arrival && curflightoutJ.arrival.time && +(new Date(curflightoutJ.arrival.time) || 0),
                            time                : curflightoutJ.arrival && curflightoutJ.arrival.time && +(new Date(curflightoutJ.arrival.time) || 0),
                            airportcode         : curflightoutJ.arrival && curflightoutJ.arrival.airportCode || "",
                            airport             : curflightoutJ.arrival && curflightoutJ.arrival.title,
                            carrier             : {
                                                    code :  curflightoutJ.airline && curflightoutJ.airlineCode || "",
                                                    name :  curflightoutJ.airline || ""
                                                  },
                            flightno            : curflightoutJ.flightCode || ''
                        }
                    })
                };

                srpItems[i].flightdetails.inbound = [];             
                var curflightinK = {}
                var fltincount = curflightin && curflightin.legs && curflightin.legs.length || 0;
                for (var k = 0; k < fltincount; k++) {
                    curflightinK = curflightin && curflightin.legs && curflightin.legs[k] || {}
                    srpItems[i].flightdetails.inbound.push({
                        depart  : {
                            date                : curflightinK.departure && curflightinK.departure.time && +(new Date(curflightinK.departure.time) || 0),
                            time                : curflightinK.departure && curflightinK.departure.time && +(new Date(curflightinK.departure.time) || 0),
                            airportcode         : curflightinK.departure && curflightinK.departure.airportCode || "",
                            airport             : curflightinK.arrival && curflightinK.arrival.title,
                            carrier             : {
                                                    code :  curflightinK.airline && curflightinK.airlineCode || "",
                                                    name :  curflightinK.airline || ""
                                                  },
                            flightno            : curflightinK.flightCode || ''
                        },
                        arrive  : {
                            date                : curflightinK.arrival && curflightinK.arrival.time && +(new Date(curflightinK.arrival.time) || 0),
                            time                : curflightinK.arrival && curflightinK.arrival.time && +(new Date(curflightinK.arrival.time) || 0),
                            airportcode         : curflightinK.arrival && curflightinK.arrival.airportCode || "",
                            airport             : curflightinK.arrival && curflightinK.arrival.title,
                            carrier             : {
                                                    code :  curflightinK.airline && curflightinK.airlineCode || "",
                                                    name :  curflightinK.airline || ""
                                                  },
                            flightno            : curflightinK.flightCode || ''
                        }
                    })
                };
            }
            cdpm.srpresults = srpItems;
        }
        window.CATTDL.CATTParams = cdpm
    } catch(e) {
        cdl.error('GTM CATTDL SRP items: '+e)
    } finally {
        dataLayer.push({'event': 'CATTDL SRP items'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid)});
        window.gatcDL && window.gatcDL.push({'event': 'CATTDL SRP items'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || '')});
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
