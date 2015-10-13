<script id='GTM-KZXG7Q_cattdlSRPitems'>
(function gtm_cattdlSRPitems(jQ, dl, cdl, w) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var keeps = {}
        var locpathname = cdpm.urlparams && cdpm.urlparams.pathname || ''

        var wGet = w.getPageData;
        var wgD = wGet && wGet(locpathname) || {}
        var wgetDataSrch = wGet && wGet('/search')
            || wGet('/vliegvakanties/search')
            || wGet('/lastminute/search')
            || wGet('/wintersport/search')
            || wGet('/autovakanties/search')
            || wGet('/stedentrips/search')
            || wGet('/kortevakanties/search')
            || wGet('/searchresults-map') 
            || (/\/holidays\/.+\/.+/i.test(locpathname) && wGet(locpathname))
            || {}
        if (Object.keys(wgetDataSrch).length !== 0) {
            var srpPM = {};
            var wgdSrch = (!/500|502|404/.test(wgD.status) && (!wgD.errorCode || wgD.errorCode !== null))?(wgD.links && wgD.links.search && wgD.links.search.context || {}):(wgD.searchParams || {})

            newPM['searchwidened'] = (''+wgdSrch.flexible == 'true')?'true':((''+wgetDataSrch.widened == 'true')?'true':'false');
            newPM['searchwidenedselected'] = (''+wgdSrch.flexible == 'true')?'true':'false';

            srpPM['deptairportsearchedarray'] = (typeof wgdSrch.origin == 'string')?[(wgdSrch.origin && wgdSrch.origin.replace(/\&amp;/g, '-').replace(/\&/g, '-') || '')]:(wgdSrch.origin.map && wgdSrch.origin.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['']);
            srpPM['deptairportsearched'] = srpPM.deptairportsearchedarray && srpPM.deptairportsearchedarray.join(';') || '';
            srpPM['destinationsearchedarray'] = (typeof wgdSrch.goingTo == 'string')?[(wgdSrch.goingTo && wgdSrch.goingTo.replace(/\&amp;/g, '-').replace(/\&/g, '-') || '')]:(wgdSrch.goingTo.map && wgdSrch.goingTo.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['']);
            srpPM['destinationsearched'] = srpPM.destinationsearchedarray && srpPM.destinationsearchedarray.join(';') || '';
            srpPM['resortsearchedarray'] = (typeof wgdSrch.resortCode == 'string')?[(wgdSrch.resortCode && wgdSrch.resortCode.replace(/\&amp;/g, '-').replace(/\&/g, '-') || '')]:(wgdSrch.resortCode.map && wgdSrch.resortCode.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['']);
            srpPM['resortsearched'] = srpPM.resortsearchedarray && srpPM.resortsearchedarray.join(';') || '';

            srpPM['regionsearchedarray'] = [];
            srpPM['resortsearchedarray'] = [];
            srpPM['countrysearchedarray'] = [];
            srpPM['regionsearched'] = "";
            srpPM['resortsearched'] = "";
            srpPM['countrysearched'] = "";
            var resCat = (typeof wgdSrch.resortCategory == 'string')?[wgdSrch.resortCategory]:wgdSrch.resortCategory;
            var regCat = (typeof wgdSrch.regionCategory == 'string')?[wgdSrch.regionCategory]:wgdSrch.regionCategory;
            var desCat = (typeof wgdSrch.destinationCategory == 'string')?[wgdSrch.destinationCategory]:wgdSrch.destinationCategory;
            if ((!resCat || resCat.length < 1) && (!regCat || regCat.length < 1)) {
                if (!desCat || desCat.length < 1){
                    srpPM['countrysearchedarray'] = srpPM.destinationsearchedarray;
                } else {
                    srpPM['countrysearchedarray'] = desCat || [];
                }
            } else if ((regCat && regCat.length > 0) && (!resCat || regCat.length < 1)) {
                srpPM['regionsearchedarray'] = regCat.map && regCat.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || [''];
                srpPM['countrysearchedarray'] = srpPM.destinationsearchedarray.map && srpPM.destinationsearchedarray.map(function(e){return (e.split(',') || ['']).pop().trim()})
            } else if (resCat && resCat.length > 0) {
                srpPM['resortsearchedarray'] = resCat && resCat.map && resCat.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || [''];
                srpPM['regionsearchedarray'] = srpPM.destinationsearchedarray.map && srpPM.destinationsearchedarray.map(function(e){return (e.split(',') || ['',''])[1].trim()});
                srpPM['countrysearchedarray'] = srpPM.destinationsearchedarray.map && srpPM.destinationsearchedarray.map(function(e){return (e.split(',') || ['']).pop().trim()});
            };
            srpPM['regionsearched'] = srpPM.regionsearchedarray && srpPM.regionsearchedarray.join(';') || '';
            srpPM['countrysearched'] = srpPM.countrysearchedarray && srpPM.countrysearchedarray.join(';') || '';
            srpPM['resortsearched'] = srpPM.resortsearchedarray && srpPM.resortsearchedarray.join(';') || '';

            srpPM['destination'] = ''; if (!srpPM['destination']){srpPM['destination']=srpPM['destinationsearched']} else {srpPM['destination']=srpPM['destination']};
            srpPM['deptairport'] = ''; if (!srpPM['deptairport']){srpPM['deptairport']=srpPM['deptairportsearched']} else {srpPM['deptairport']=srpPM['deptairport']};
            srpPM['country'] = srpPM.countrysearched;
            srpPM['region'] = srpPM.regionsearched;
            srpPM['resort'] = srpPM.resortsearched;

            var strdeptdate = ''
            srpPM['deptdate'] = (strdeptdate = wgdSrch.when && wgdSrch.when._i || wgdSrch.when || "19700101") && +new Date(strdeptdate.substring(0,4), strdeptdate.substring(4,6)-1, strdeptdate.substring(6,8)) || 0;
            var wgdItems = wgetDataSrch.items || {}
            srpPM['searchresultstop3'] = wgdItems && wgdItems[0] && ((wgdItems[0] && wgdItems[0].id || "") +"-"+(wgdItems[1] && wgdItems[2].id || "")+"-"+(wgdItems[2] && wgdItems[2].id || "")) || "";
            srpPM['searchlist'] = wgdItems.length || 0;     

            var wgdStats = wgetDataSrch.stats || {}
            srpPM['searchresultstotal'] = wgdStats.total || 0;
            srpPM['searchresultsperpage'] = wgdStats && wgdStats.end && wgdStats.start && (parseInt(((wgdStats.end - wgdStats.start + 1)/10) || 0) == 0)?(Math.ceil(6/10)*10):((wgdStats.end - wgdStats.start + 1) || 0)
            srpPM['searchresultspages'] = Math.ceil(wgdStats.total / srpPM['searchresultsperpage']) || 0;
            srpPM['searchresultspagenbr'] = parseInt(jQ('div.paginationSearchResults:eq(0) span.active').attr('analytics-data') || Math.ceil((wgdStats.end + 1)/srpPM['searchresultsperpage']) || 0)
            srpPM['sessionid'] = window.sessionToken || "";

            cdpm.srpparams = {};
            jQ.extend(cdl.CATTParams.srpparams, srpPM);

            var curItem = {}
            var curpath = []
            var curflightout = {}
            var curflightin = {}
            var srpItems = []
            for (var i = 0; i < wgdItems.length; i++) {
                curItem = wgdItems[i];
                curpath = curItem.geoPath && curItem.geoPath.value && curItem.geoPath.value.split("/") || []
                curflightout = curItem.flights && curItem.flights[0] && curItem.flights[0].outbound && curItem.flights[0].outbound.legs || {}
                curflightin = curItem.flights && curItem.flights[0] && curItem.flights[0].inbound && curItem.flights[0].inbound.legs || {}
                srpItems[i] = {
                    accomcode           :   curItem.hotel && curItem.hotel.code || "",
                    accomguid           :   curItem.id || "",
                    accomlatitude       :   curItem.geoLocation && curItem.geoLocation.latitude || "",
                    accomlongitude      :   curItem.geoLocation && curItem.geoLocation.longitude || "",
                    accomname           :   curItem.hotel && curItem.hotel.value || "",
                    accomcountry        :   curpath.length > 0 && curpath[0] || "",
                    accomregion         :   curpath.length > 1 && curpath[1] || "",
                    accomresort         :   curpath.length > 2 && curpath[2] || "",
                    accomconcept        :   curItem.concepts && curItem.concepts[0] || "",
                    arrivalairportcode  :   curflightout && curflightout[0] && curflightout[0].arrival && curflightout[0].arrival.airportCode
                                                || "",
                    arrivalairport      :   curflightout && curflightout[0] && curflightout[0].arrival && curflightout[0].arrival.title
                                                || "",
                    arrivaltime         :   +new Date(curflightout && curflightout[0] && curflightout[0].arrival && curflightout[0].arrival.time)
                                                || 0,
                    boardbasis          :   curItem.priceDetail && curItem.priceDetail.boardTypeDesc || "",
                    carrier             :   curflightout && curflightout[0] && curflightout[0].airlineCode 
                                                || "",
                    deptairportcode     :   curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.airportCode
                                                || "",
                    deptairport         :   curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.title
                                                || "",
                    deptdate            :   +new Date(curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.time && curflightout[0].departure.time)
                                                || 0,
                    depttime            :   +new Date(curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.time)
                                                || 0,
                    discountvalue       :   curItem.priceDetail && curItem.priceDetail.totalDiscount || "",
                    duration            :   curItem.duration  || "0",
                    pricepp             :   curItem.priceDetail && curItem.priceDetail.priceFrom || "",
                    pricetotal          :   curItem.priceDetail && curItem.priceDetail.amount || "",
                    returndate          :   +new Date(curflightin && curflightin[0] && curflightin[0].departure && curflightin[0].departure.time && curflightin[0].departure.time)
                                                || 0,
                    returntime          :   +new Date(curflightin && curflightin[0] && curflightin[0].departure && curflightin[0].departure.time && curflightin[0].departure.time)
                                                || 0,
                    starrating          :   curItem.ratings && curItem.ratings.starRating || "",
                    touroperator        :   curItem.tourOperator && curItem.tourOperator.name || ""
                };
            
                srpItems[i].flightdetails = {};
                srpItems[i].flightdetails.outbound = [];
                var curflightoutJ = {}
                var fltoutcount = curflightout && curflightout.length || 0;
                for (var j = 0; j < fltoutcount; j++) {
                    curflightoutJ = curflightout && curflightout[j] || {}
                    srpItems[i].flightdetails.outbound.push({
                        depart  : {
                            date                : curflightoutJ.departure && curflightoutJ.departure.time && +(new Date(curflightoutJ.departure.time) || 0),
                            time                : curflightoutJ.departure && curflightoutJ.departure.time && +(new Date(curflightoutJ.departure.time) || 0),
                            airportcode         : curflightoutJ.departure && curflightoutJ.departure.airportCode || "",
                            airport             : curflightoutJ.arrival && curflightoutJ.arrival.title,
                            carrier             : {
                                                    code :  curflightoutJ && curflightoutJ.airlineCode || "",
                                                    name :  curflightoutJ && curflightoutJ.airline || ""
                                                  },
                            flightno            : curflightoutJ.flightCode || ''
                        },
                        arrive  : {
                            date                : curflightoutJ.arrival && curflightoutJ.arrival.time && +(new Date(curflightoutJ.arrival.time) || 0),
                            time                : curflightoutJ.arrival && curflightoutJ.arrival.time && +(new Date(curflightoutJ.arrival.time) || 0),
                            airportcode         : curflightoutJ.arrival && curflightoutJ.arrival.airportCode || "",
                            airport             : curflightoutJ.arrival && curflightoutJ.arrival.title,
                            carrier             : {
                                                    code :  curflightoutJ && curflightoutJ.airlineCode || "",
                                                    name :  curflightoutJ && curflightoutJ.airline || ""
                                                  },
                            flightno            : curflightoutJ.flightCode || ''
                        }
                    })
                };

                srpItems[i].flightdetails.inbound = [];   
                var fltincount = curflightin && curflightin.length || 0;                          
                var curflightinK = {}
                for (var k = 0; k < fltincount; k++) {
                    curflightinK = curflightin && curflightin[k] || {}
                    srpItems[i].flightdetails.inbound.push({
                        depart  : {
                            date                : curflightinK.departure && curflightinK.departure.time && +(new Date(curflightinK.departure.time) || 0),
                            time                : curflightinK.departure && curflightinK.departure.time && +(new Date(curflightinK.departure.time) || 0),
                            airportcode         : curflightinK.departure && curflightinK.departure.airportCode || "",
                            airport             : curflightinK.arrival && curflightinK.arrival.title,
                            carrier             : {
                                                    code :  curflightinK && curflightinK.airlineCode || "",
                                                    name :  curflightinK && curflightinK.airline || ""
                                                  },
                            flightno            : curflightinK.flightCode || ''
                        },
                        arrive  : {
                            date                : curflightinK.arrival && curflightinK.arrival.time && +(new Date(curflightinK.arrival.time) || 0),
                            time                : curflightinK.arrival && curflightinK.arrival.time && +(new Date(curflightinK.arrival.time) || 0),
                            airportcode         : curflightinK.arrival && curflightinK.arrival.airportCode || "",
                            airport             : curflightinK.arrival && curflightinK.arrival.title,
                            carrier             : {
                                                    code :  curflightinK && curflightinK.airlineCode || "",
                                                    name :  curflightinK && curflightinK.airline || ""
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
        window.dataLayer_557RZS && dataLayer_557RZS.push({'event': 'CATTDL SRP items'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || '')});
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL, window))
</script>