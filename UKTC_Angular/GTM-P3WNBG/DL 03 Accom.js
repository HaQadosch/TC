<script id='gtm_cattdlAccom'>
(function gtm_cattdlAccom(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams

        var newPM = {}
        var keeps = {}
        cdpm.errors = {}
        var errorPM = {}

        var wgD = window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname || "") || {}
        var errParams = wgD.searchParams || {}
        var wgdAccom = wgD.matrix && wgD.matrix.data.links && wgD.matrix.data.links.self.context || {}      
        
        if (wgD && wgD.details && wgD.matrix) {
            cdpm.lob = "package"
            cdpm.holidaytype = wgdAccom?((wgdAccom.connectorCode == 1)?((wgdAccom.brand === "Z")?"flexitrips-angular":"package-angular"):((wgdAccom.connectorCode == 2)?"multi-angular":"generic-angular")):"generic-angular"
            cdpm.pagecontext = "angular";
            cdpm.tc_basket_id = JSON.parse(cdl.ckget('tc_basket_id')) || '';           
            
            var wgdDetails = wgD.details || {};
            var wgdPath = (wgdAccom.geoPath && wgdAccom.geoPath.split("/")) || (wgdDetails.geoPath && wgdDetails.geoPath && wgdDetails.geoPath.value.split("/")) ||  []
            newPM['accomcountry'] = wgdPath.length > 0 && wgdPath[0] || "";
            newPM['accomregion'] = wgdPath.length > 1 && wgdPath[1] || "";
            newPM['accomresort'] = wgdPath.length > 2 && wgdPath[2] || "";
            newPM['resort'] = newPM.accomresort;
            newPM['accomconcept'] = (typeof wgdAccom.concepts == 'string') && wgdAccom.concepts || wgdDetails.concepts && wgdDetails.concepts[0] && wgdDetails.concepts[0].type || "";
            newPM['duration'] = +wgdAccom.duration || 0;
            newPM['accomvideo'] = ($('button.btn.btn-block.btn-default.src-accomHighlights-videoButton'))?'y':'n';
            var wgdAF = wgD.matrix && wgD.matrix.data && wgD.matrix.data.alternativeFlights;
            newPM['premiumcabinvisible'] = false; for (var i=0;i<(wgdAF && wgdAF.length);i++){if(wgdAF[i] && wgdAF[i].flights[0] && wgdAF[i].flights[0].inbound && wgdAF[i].flights[0].inbound.premium && wgdAF[i].flights[0].inbound.premium === true) {newPM.premiumcabinvisible = true}}

            var wgdPrice = wgD.matrix && wgD.matrix.data && wgD.matrix.data.priceList && wgD.matrix.data.priceList[0] || !1
            if (wgdPrice) {
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
                        newPM['destairport'] = newPMflout.arrive.airportcode
                        newPM['arrivaltime'] = newPMflout.arrive.time
                        newPM['depttime'] = newPMflout.depart.time
                        newPM['flightno'] = newPMflout.depart.flightno
                        newPM['premiumcabin'] = newPMflout.premium
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

                newPM['includedinpackage'] = []; for (var i = 0; i < (wgdPrice.whatsIncluded && wgdPrice.whatsIncluded.length || 0); newPM.includedinpackage.push(wgdPrice.whatsIncluded[i++].description));
                newPM['touroperator'] = wgdPrice.brandCode || ""
                newPM['totalprice'] = wgdPrice.priceSummary && wgdPrice.priceSummary.totalAmount || 0
                newPM['pricepp'] = wgdPrice.priceSummary && wgdPrice.priceSummary.priceFrom || 0
                newPM['discountvalue'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionAmount || 0
                newPM['discountperc'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionPercentage || 0
                newPM['boardbasis'] = wgdPrice.boardTypeDesc || ""
                newPM['brochure'] = wgdPrice.brochureName || ""
                var strdeptdate = wgdAccom.selectedDate || wgdAccom.startDate || 0;
                newPM['deptdate'] = strdeptdate && +(new Date(strdeptdate.substring(4,0), strdeptdate.substring(5,7)-1, strdeptdate.substring(8,10))) 
                                    || flightout && flightout.departure && flightout.departure.time && +new Date(flightout.departure.time) 
                                    || 0;
            };
            if (wgdDetails) {
                if (wgdDetails.reviews) {
                    newPM['ratings'] = {
                        bazaarvoice : { 
                                        id          : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.id || '',
                                        avgrating   : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.averageRating || "",
                                        count       : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.reviewCount || ""
                                      },
                        tripadvisor : { 
                                        id          : wgdDetails.reviews.tripadvisor && wgdDetails.reviews.tripadvisor.id || '',
                                        avgrating   : wgdDetails.reviews.tripadvisor && wgdDetails.reviews.tripadvisor.averageRating || "",
                                        count       : wgdDetails.reviews.tripadvisor && wgdDetails.reviews.tripadvisor.reviewCount || ""
                                      }
                    };
                }               
                newPM['accomlongitude'] = wgdDetails.geoLocation && wgdDetails.geoLocation.longitude || "";
                newPM['accomlatitude'] = wgdDetails.geoLocation && wgdDetails.geoLocation.latitude || "";
                newPM['accomname'] = wgdDetails.hotelName && wgdDetails.hotelName.value || wgdPrice.hotelName || "";
            } 

            newPM['accomcode'] = wgdPrice.hotelCode 
                    || wgdPrice.rooms && wgdPrice.rooms[0] && wgdPrice.rooms[0].context && wgdPrice.rooms[0].context.hotelCode.replace('|','-')
                    || wgdAccom.hotelCode || wgdAccom.id || wgdAccom.hotelId || wgdDetails.productId || "";
            newPM['accomguid'] = wgdAccom.id || wgdAccom.hotelId || wgdDetails.productId || "";
            newPM['destination'] = (wgdAccom.geoPath && wgdAccom.geoPath) || (wgdDetails.geoPath && wgdDetails.geoPath.value) || "";

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

            jQ.extend(cdpm, newPM, keeps);
        }
        
        errorPM['errorcode'] = wgD.errorCode || "";
        errorPM['errormsg'] = (wgD.message || []).join(' ');
        jQ.extend(cdpm.errors, errorPM);

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL Accom: '+e)
    } finally {
        dataLayer.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dataLayer.push({'event': (window.getPageData?'CATTDL Accom':'CATTDL LP')})
        gatcDL.push({'event': (window.getPageData?'CATTDL Accom':'CATTDL LP')})
    }
    return cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
