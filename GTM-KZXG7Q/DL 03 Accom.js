<script id='GTM-KZXG7Q_cattdlAccom'>
(function gtm_cattdlAccom(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}
        cdpm.errors = {}
        var errorPM = {}

        var wgD = window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname || "") || {};
        var errParams = wgD.searchParams || {};
        cdpm.lob = "generic";
        cdpm.holidaytype = "generic";
        cdpm.pagecontext = "angular";
        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        newPM['initialholidaytype'] = params && params.initialholidaytype || '';  
        
        if (wgD && (wgD.details || wgD.accommodation) && wgD.matrix) {
            var wgdMatrix = wgD.matrix && wgD.matrix.data || {};
            var wgdDetails = wgD.details || wgD.accommodation || {};
            var wgdAccom = wgdMatrix && wgdMatrix.links && wgdMatrix.links && wgdMatrix.links.self && wgdMatrix.links.self.context || {};
            var wgdParams = wgdMatrix && wgdMatrix.links && wgdMatrix.links && wgdMatrix.links.matrixSearch && wgdMatrix.links.matrixSearch.params;
            var wgdPrice = wgdMatrix && wgdMatrix.priceList && wgD.matrix.data.priceList[0] || !1;
            var wgdPath = wgdAccom.geoPath && wgdAccom.geoPath.split("/") || wgdDetails.geoPath && wgdDetails.geoPath.value && wgdDetails.geoPath.value.split("/") || [];            

            newPM['accomcountry'] = wgdPath.length > 0 && wgdPath[0] || "";
            newPM['accomregion'] = wgdPath.length > 1 && wgdPath[1] || "";
            newPM['accomresort'] = wgdPath.length > 2 && wgdPath[2] || "";
            newPM['resort'] = newPM.accomresort;
            newPM['duration'] = +(wgdAccom.durationInDays || wgdPrice.durationInDays || 0);
            newPM['seasoncode'] = (wgdAccom && wgdAccom.season) || (wgdPrice && wgdPrice.seasonCode) || 'N/A';
            newPM['accomcode'] = wgdPrice.hotelCode || wgdMatrix.bookingContext && wgdMatrix.bookingContext.context && wgdMatrix.bookingContext.context.field && wgdMatrix.bookingContext.context.field[0] && wgdMatrix.bookingContext.context.field[0].value || "";
            newPM['accomguid'] = wgdAccom.id || wgdAccom.hotelId || wgdDetails.productId || "";
            newPM['accomtype'] = newPM.accomguid && newPM.accomguid.split('-')[3] || '';
            newPM['destination'] = wgdAccom.geoPath && wgdAccom.geoPath || wgdDetails.geoPath && wgdDetails.geoPath.value || "";

            if (wgdPrice) {
                newPM['brochure'] = wgdPrice.brochureName || "";
                cdpm['holidaytype'] = ({
                    'blank'             : 'package',
                    'AANB'              : 'package',
                    'BUNG'              : 'carholidays',
                    'AZAU'              : 'carholidays',
                    'NEAR'              : 'carholidays',
                    'TENT'              : 'carholidays',
                    'CAMP'              : 'carholidays',                    
                    'CITY'              : 'citytrips',
                    'ACIT'              : 'citytrips',
                    'AUTO'              : 'ski',     
                    'AAUT'              : 'ski',                    
                    'VER'               : 'flights',
                    'AVER'              : 'flights',                                        
                    ''                  : 'package'
                })[(/.*/i.exec(newPM.brochure) || ['']).pop()];
                cdpm['lob'] =  (cdpm.holidaytype && cdpm.holidaytype!=='package')?'hotel':'package';                

                newPM['includedinpackage'] = []; for (var i = 0; i < (wgdPrice.whatsIncluded && wgdPrice.whatsIncluded.length || 0); newPM.includedinpackage.push(wgdPrice.whatsIncluded[i++].description));
                newPM['touroperator'] = wgdPrice.brandCode || "";
                newPM['totalprice'] = wgdPrice.priceSummary && wgdPrice.priceSummary.totalAmount || 0;
                newPM['pricepp'] = wgdPrice.priceSummary && wgdPrice.priceSummary.priceFrom || 0;
                newPM['discountvalue'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionAmount || 0;
                newPM['discountperc'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionPercentage || 0;
                newPM['boardbasis'] = wgdPrice.boardTypeDesc || "";

                var flout = wgdPrice && wgdPrice.flights && wgdPrice.flights[0] && wgdPrice.flights[0].outbound && wgdPrice.flights[0].outbound.legs || '';
                if (flout) {
                        newPM['flightdetails'] = {};
                        newPM['flightdetails'].outbound = [];                        
                        var fltoutI = {};
                        var fltoutlen = flout.length || 0;
                        for (var i = 0; i < fltoutlen; i++) {
                            fltoutI = flout[i]
                            newPM['flightdetails'].outbound.push({
                                depart  : {
                                    date            : fltoutI.departure && fltoutI.departure.time && +new Date(fltoutI.departure.time) || 0,
                                    time            : fltoutI.departure && fltoutI.departure.time && +new Date(fltoutI.departure.time) || 0,
                                    airportcode     : fltoutI.departure && fltoutI.departure.airportCode || "",
                                    airport         : fltoutI.departure && fltoutI.departure.title
                                },
                                arrive  : {
                                    date            : fltoutI.arrival && fltoutI.arrival.time && +new Date(fltoutI.arrival.time) || 0,
                                    time            : fltoutI.arrival && fltoutI.arrival.time && +new Date(fltoutI.arrival.time) || 0,
                                    airportcode     : fltoutI.arrival && fltoutI.arrival.airportCode || "",
                                    airport         : fltoutI.arrival && fltoutI.arrival.title
                                },
                                carrier : {
                                    code            :   fltoutI.airlineCode || "",
                                    name            :   fltoutI.airline || ""
                                },
                                flightno : fltoutI.flightCode || '',
                                premium  : fltoutI.premium || false
                            })
                        };
                        var newPMflout = newPM.flightdetails && newPM.flightdetails.outbound[fltoutlen-1];
                        newPM['carrier'] = []; 
                        newPM['carrier'].push ({ code : newPMflout.carrier.code
                                                , name : newPMflout.carrier.name});
                        newPM['deptairport'] = wgdAccom.depAirport || newPMflout.depart.airportcode || "";
                        newPM['destairport'] = newPMflout.arrive && newPMflout.arrive.airportcode || '';
                        newPM['arrivaltime'] = newPMflout.arrive.time || 0;
                        newPM['depttime'] = newPMflout.depart && newPMflout.depart.time || 0;
                        newPM['flightno'] = newPMflout.depart && newPMflout.depart.flightno || newPMflout.flightno || '';
                        newPM['premiumcabin'] = newPMflout.premium;
                };

                var flin = wgdPrice && wgdPrice.flights && wgdPrice.flights[0] && wgdPrice.flights[0].inbound && wgdPrice.flights[0].inbound.legs || '';
                if (flin) {
                    newPM['flightdetails'].inbound = [];
                    var fltinI = {};
                    var fltinlen = flin.length || 0;                    
                    for (var i = 0; i < fltinlen; i++) {
                        fltinI = flin[i]
                        newPM['flightdetails'].inbound.push({
                            depart  : {
                                date                : fltinI.departure && fltinI.departure.time && +new Date(fltinI.departure.time) || 0,
                                time                : fltinI.departure && fltinI.departure.time && +new Date(fltinI.departure.time) || 0,
                                airportcode         : fltinI.departure && fltinI.departure.airportCode || "",
                                airport             : fltinI.departure && fltinI.departure.title
                            },
                            arrive  : {
                                date                : fltinI.arrival && fltinI.arrival.time && +new Date(fltinI.arrival.time) || 0,
                                time                : fltinI.arrival && fltinI.arrival.time && +new Date(fltinI.arrival.time) || 0,
                                airportcode         : fltinI.arrival && fltinI.arrival.airportCode || "",
                                airport             : fltinI.arrival && fltinI.arrival.title
                            },
                            carrier  : {
                                code                :   fltinI.airlineCode || "",
                                name                :   fltinI.airline || ""
                            },
                            flightno : fltinI.flightCode || '',
                            premium  : fltinI.premium || false
                        })
                    };
                    newPM['returndate'] = newPM.flightdetails.inbound[fltinlen-1].depart.time
                                        || +new Date(newPM.deptdate + (newPM.duration)*1000*60*60*24) 
                                        || 0
                    newPM['returntime'] = newPM.flightdetails.inbound[fltinlen-1].depart.time            
                }


                newPM['includedinpackage'] = []; for (var i = 0; i < (wgdPrice.whatsIncluded && wgdPrice.whatsIncluded.included && wgdPrice.whatsIncluded.included.length || 0); newPM.includedinpackage.push(wgdPrice.whatsIncluded.included[i++].description));
                newPM['touroperator'] = wgdPrice.brandCode || ""
                newPM['totalprice'] = wgdPrice.priceSummary && wgdPrice.priceSummary.totalAmount || 0
                newPM['pricepp'] = wgdPrice.priceSummary && wgdPrice.priceSummary.priceFrom || 0
                newPM['discountvalue'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionAmount || 0
                newPM['discountperc'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionPercentage || 0
                newPM['boardbasis'] = wgdPrice.boardTypeDesc || ""
                newPM['brochure'] = wgdPrice.brochureName || ""
                var strdeptdate = wgdAccom.selectedDate || wgdAccom.startDate || 0;
                newPM['deptdate'] = strdeptdate && +(new Date(strdeptdate.substring(4,0), strdeptdate.substring(5,7)-1, strdeptdate.substring(8,10))) 
                                    || flout && flout[0] && flout[0].departure && flout[0].departure.time && +new Date(flout[0].departure.time) 
                                    || 0;
            }

            if (wgdDetails) {
                if (wgdDetails.reviews) {
                    newPM['ratings'] = {
                        bazaarvoice : { 
                                        id          : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.id || '',
                                        avgrating   : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.averageRating || "",
                                        count       : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.reviewCount || ""
                                      },
                        zoover : { 
                                        id          : wgdDetails.reviews.zoover && wgdDetails.reviews.zoover.id || '',
                                        avgrating   : wgdDetails.reviews.zoover && wgdDetails.reviews.zoover.averageRating || "",
                                        count       : wgdDetails.reviews.zoover && wgdDetails.reviews.zoover.reviewCount || ""
                                      }
                    };
                }               
                newPM['accomlongitude'] = wgdDetails.geoLocation && wgdDetails.geoLocation.longitude || "";
                newPM['accomlatitude'] = wgdDetails.geoLocation && wgdDetails.geoLocation.latitude || "";
                newPM['accomname'] = wgdDetails.hotelName && wgdDetails.hotelName.value || wgdPrice.hotelName || "";
            } 

            var arrpax = wgdAccom.room || ""
            if (typeof arrpax == "string"){
                newPM['paxadultperroom'] = []; newPM['paxadultperroom'].push(+arrpax.split(",")[1] || 0);
                newPM['paxchildperroom'] = []; newPM['paxchildperroom'].push((arrpax.split(",")).slice(2).map(Number).filter(function(e){return e>1}).length || 0);
                newPM['paxinfantperroom'] = []; newPM['paxinfantperroom'].push((arrpax.split(",")).slice(2).map(Number).filter(function(e){return e<2}).length || 0);
                newPM['roomcodes'] = []; newPM['roomcodes'].push(arrpax.split(",")[0]);
            } else {    
                newPM['paxadultperroom'] = []; for (var i = 0; i < arrpax.length; newPM['paxadultperroom'].push(+((arrpax[i++].split(",") || []).slice(1)[0]) || 0));
                newPM['paxchildperroom'] = []; for (var i = 0; i < arrpax.length; newPM['paxchildperroom'].push((arrpax[i++].split(",") || []).slice(2).map(Number).filter(function(e){return e>1}).length));
                newPM['paxinfantperroom'] = []; for (var i = 0; i < arrpax.length; newPM['paxinfantperroom'].push((arrpax[i++].split(",") || []).slice(2).map(Number).filter(function(e){return e<2}).length));
                newPM['roomcodes'] = []; for (var i = 0; i < arrpax.length; newPM['roomcodes'].push((arrpax[i++].split(",")[0]) || ""));
            }
            newPM['paxadult'] = (function (){var total = 0; jQ.each(newPM['paxadultperroom'],function() {total += this;}); return total}()) || 0;
            newPM['paxchild'] = (function (){var total = 0; jQ.each(newPM['paxchildperroom'],function() {total += this;}); return total}()) || 0;
            newPM['paxinfant'] = (function (){var total = 0; jQ.each(newPM['paxinfantperroom'],function() {total += this;}); return total}()) || 0;
            newPM['paxtotal'] = newPM['paxadult']+newPM['paxchild']+newPM['paxinfant'];
            newPM['rooms'] = newPM['paxadultperroom'].length;

            newPM['starrating'] = wgdPrice && wgdPrice.starRating || wgdDetails && wgdDetails.ratings && wgdDetails.ratings.starRating || "";
            newPM['searchapp'] = (wgdAccom.connectorCode == 1?"solr":"multicom");
            newPM['sessionid'] = window.sessionToken || ""
        }
        jQ.extend(cdpm, newPM, keeps);        

        errorPM['errorcode'] = wgD.errorCode || "";
        errorPM['errormsg'] = (wgD.message || []).join(' ');
        jQ.extend(cdpm.errors, errorPM);

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL Accom: '+e)
    } finally {
        dataLayer.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dataLayer.push({'event': (window.getPageData?'CATTDL Accom':'CATTDL LP')})
        window.dataLayer_557RZS && dataLayer_557RZS.push({'event': (window.getPageData?'CATTDL Accom':'CATTDL LP')})
    }
    return cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>