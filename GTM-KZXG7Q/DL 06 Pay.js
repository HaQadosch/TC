<script id='GTM-KZXG7Q_cattdlPay'>
(function gtm_cattdlPay(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {};
        var keeps = {};
        cdpm.errors = {};
        var errorPM = {};       
        var wgD = window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname) || {}
        var wgdPkg = wgD && wgD.package || {}

        cdpm.lob = "generic";
        cdpm.holidaytype = "generic";
        cdpm.pagecontext = "angular";
        cdpm.sessionid = window.sessionToken || "";
        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        newPM['initialholidaytype'] = params && params.initialholidaytype || '';        

        if (wgdPkg) {
            newPM['destination'] = wgdPkg.content && wgdPkg.content.geoPath || "";
            var wgdPath = newPM.destination && newPM.destination.split(",") || [];
            newPM['accomguid'] = wgdPkg.productId || "";
            newPM['accomtype'] = newPM.accomguid && newPM.accomguid.split('-')[3] || '';
            newPM['brochure'] = newPM.accomguid && newPM.accomguid.split('-')[1] || '';
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
                        
            newPM['accomcountry'] = wgdPath.length > 0 && (wgdPath[0] || "").trim() || '';
            newPM['accomregion'] = wgdPath.length > 1 && (wgdPath[1] || "").trim() || '';
            newPM['accomresort'] = wgdPath.length > 2 && (wgdPath[2] || "").trim() ||  wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].resortName || '';
            newPM['starrating'] = wgdPkg.content && wgdPkg.content.starRating || "";
            newPM['touroperator'] = wgdPkg.brandCode || "";
            newPM['accomname'] = wgdPkg.content && wgdPkg.content.hotelName || wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].hotelName || "";
            newPM['accomcode'] = (wgdPkg.accomodationList && wgdPkg.accomodationList[0] && (wgdPkg.accomodationList[0].hotelCode || "").replace("|","-")) || "";
            newPM['boardbasis'] = wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].roomProfiles && wgdPkg.accomodationList[0].roomProfiles[0] && wgdPkg.accomodationList[0].roomProfiles[0].mealPlan && wgdPkg.accomodationList[0].roomProfiles[0].mealPlan.description || "";
            newPM['duration'] = +(wgdPkg.dateRange && wgdPkg.dateRange.durationInDays || 0);
            newPM['deptdate'] = +new Date(wgdPkg.dateRange && wgdPkg.dateRange.startDate || 0);
            newPM['returndate'] = +new Date(wgdPkg.dateRange && wgdPkg.dateRange.endDate || 0);
            newPM['returntime'] = +new Date(wgdPkg.flightList && wgdPkg.flightList[1] && wgdPkg.flightList[1].departureDateTime || 0);
            newPM['includedinpackage'] = []; for (var i = 0; i < (wgdPkg.includedItems && wgdPkg.includedItems.length || 0); newPM['includedinpackage'].push(wgdPkg.includedItems[i++].description));
            newPM['resort'] = wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].resortName || newPM.accomresort  || "";
            newPM['seasoncode'] = wgD.URLparams && wgD.URLparams.season || '';

            if (wgdPkg.reviews) {
                newPM['ratings'] = {
                    bazaarvoice : { 
                        id          : wgdPkg.reviews.bazaarvoice && wgdPkg.reviews.bazaarvoice.id,
                        avgrating   : wgdPkg.reviews.bazaarvoice && wgdPkg.reviews.bazaarvoice.averageRating || "",
                        count       : wgdPkg.reviews.bazaarvoice && wgdPkg.reviews.bazaarvoice.reviewCount || ""
                    },
                    zoover : { 
                        id          : wgdPkg.reviews.zoover && wgdPkg.reviews.zoover.id,
                        avgrating   : wgdPkg.reviews.zoover && wgdPkg.reviews.zoover.averageRating || "",
                        count       : wgdPkg.reviews.zoover && wgdPkg.reviews.zoover.reviewCount || ""
                    }
                }
            }

            var wgdFlight = wgdPkg.flightList || []
            var wgdFlight0 = wgdFlight && wgdFlight[0]
            if (wgdFlight0) {
                newPM['carrier'] = {}
                newPM['carrier'].code = wgdFlight0.operatingAirlineCode || ""
                newPM['carrier'].name = wgdFlight0.operatingAirlineDisplayText || ""
                newPM['deptairport'] = wgdFlight0.departureAirportCode || ""
                newPM['depttime'] = +(new Date(wgdFlight0.departureDateTime || 0))
                newPM['destairport'] = wgdFlight0.arrivalAirportCode || ""
                newPM['arrivaltime'] = +(new Date(wgdFlight0.arrivalDateTime || 0)) 
                newPM['flightno'] = wgdFlight0.flightNumber || ''

                newPM['flightdetails'] = {}
                newPM['flightdetails'].outbound = []
                var curFlightOut = ''
                var wgdFlightOut = wgdFlight.filter(function gtm_outboundOnly(flt){return /OUTBOUND/i.test(flt.directionInd || '')}) || []
                for (i = 0; i < (wgdFlightOut.length || 0); i++) {
                    curFlightOut = wgdFlightOut[i]
                    newPM['flightdetails'].outbound.push({
                        depart  : {
                            date                : +new Date(curFlightOut.departureDateTime || 0),
                            time                : +new Date(curFlightOut.departureDateTime || 0),
                            airportcode         : curFlightOut.departureAirportCode || "",
                            airport             : curFlightOut.departureAirportDisplayText || "",
                            carrier             : {
                                code    :   curFlightOut.operatingAirlineCode,
                                name    :   curFlightOut.operatingAirlineDisplayText
                            },
                            flightno            : curFlightOut.flightNumber || ''
                        },
                        arrive  : {
                            date                : +new Date(curFlightOut.arrivalDateTime || 0),
                            time                : +new Date(curFlightOut.arrivalDateTime || 0),
                            airportcode         : curFlightOut.arrivalAirportCode || "",
                            airport             : curFlightOut.arrivalAirportDisplayText || "",
                            carrier             : {
                                code    :   curFlightOut.operatingAirlineCode,
                                name    :   curFlightOut.operatingAirlineDisplayText
                            },
                            flightno            : curFlightOut.flightNumber || ''
                        }
                    })
                };
                newPM['flightdetails'].inbound = []
                var curFlightIn = ''
                var wgdFlightIn = wgdFlight.filter(function gtm_inboundOnly(flt){return /INBOUND/i.test(flt.directionInd || '')}) || []
                for (i = 0; i < (wgdFlightIn.length || 0); i++) {
                    curFlightIn = wgdFlightIn[i]
                    newPM['flightdetails'].inbound.push({
                        depart  : {
                            date                : +new Date(curFlightIn.departureDateTime || 0),
                            time                : +new Date(curFlightIn.departureDateTime || 0),
                            airportcode         : curFlightIn.departureAirportCode || "",
                            airport             : curFlightIn.departureAirportDisplayText || "",
                            carrier             : curFlightIn.operatingAirlineCode,
                            flightno            : curFlightIn.flightNumber || ''
                        },
                        arrive  : {
                            date                : +new Date(curFlightIn.arrivalDateTime || 0),
                            time                : +new Date(curFlightIn.arrivalDateTime || 0),
                            airportcode         : curFlightIn.arrivalAirportCode || "",
                            airport             : curFlightIn.arrivalAirportDisplayText || "",
                            carrier             : curFlightIn.operatingAirlineCode,
                            flightno            : curFlightIn.flightNumber || ''
                        }
                    })
                };
            }

            var arrpax = wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].roomProfiles || [];
            newPM['paxadultperroom'] = [];
            newPM['paxchildperroom'] = [];
            newPM['paxinfantperroom'] = [];
            newPM['roomcodes'] = [];
            var curArrPax = []
            for (var i = 0; i < (arrpax.length || 0); i++) {
                curArrPax = arrpax[i]
                newPM['paxadultperroom'].push(curArrPax.numAdults || 0);
                newPM['paxchildperroom'].push(curArrPax.numChildren || 0);
                newPM['paxinfantperroom'].push(curArrPax.numInfants || 0);
                newPM['roomcodes'].push(curArrPax.code || "");
            }

            newPM['paxadult'] = newPM.paxadultperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxchild'] = newPM.paxchildperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxinfant'] = newPM.paxinfantperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxtotal'] = newPM['paxadult']+newPM['paxchild']+newPM['paxinfant']
            newPM['rooms'] = newPM['paxadultperroom'].length

            newPM['totalprice'] = wgD.costSummary.grossAmount || 0;
            newPM['pricepp'] = newPM.totalprice/(newPM.paxtotal || 1) || 0  
            newPM['discountvalue'] = Math.abs(wgD.costSummary && wgD.costSummary.discountAmount || 0);
            newPM['discountperc'] = Math.round(newPM.discountvalue*100 / Math.abs(newPM.totalprice || 1))
            var wgdCost = wgD && wgD.costSummary.costingItem || {}

            //Payment
            var wgdPayO = wgD && wgD.paymentOptionList || {};
            var wgdmethod = wgD && parseInt(wgD.selectedPaymentMethod || '0');
            var wgdcard = wgD && parseInt(wgD.selectedPaymentMethodCard || '0');
            var wgddep = wgD && wgD.selectedPaymentType || '';

            newPM['depositselected'] =  (wgddep).toLowerCase();
            newPM['paymentoption'] = ''; 
            newPM['paymentfee'] = 0;
            newPM['cardtype'] = '';
            newPM['depositvalue'] = 0;            
            wgdPayO.forEach(function(e){
                                if (e.id == wgddep) {
                                    var payD = e.paymentPortion 
                                                    && e.paymentPortion[0] 
                                                    && e.paymentPortion[0].paymentOption 
                                                    && e.paymentPortion[0].paymentOption[wgdmethod] 
                                                    && e.paymentPortion[0].paymentOption[wgdmethod] || {};
                                    newPM.paymentoption = ((payD && payD.paymentMethod && payD.paymentMethod.name).toLowerCase()) || '';
                                    newPM.paymentfee = payD && payD.fee && payD.fee.actualValue || 0;
                                    newPM.cardtype = payD && payD.bankCard && payD.bankCard.code || '';
                                    newPM.depositvalue = e.paymentPortion 
                                                    && e.paymentPortion[0]
                                                    && e.paymentPortion[0].originalPrice || 0;
                                }
            });

            //Extras
            var wgdExtras = wgD && wgD._embedded && wgD._embedded['docs:selectedExtras'] || [];
            newPM['extras'] ={}
            newPM['extras'].travelinsurance = [];
            var curCost = []            
            for (var i = 0; i < wgdCost.length; i++) {
                curCost = wgdCost[i]
                    var curCostUI = curCost.UIFamily || '';
                    var curCosttt = curCost.title || '';
                    var curCostdes = curCost.description || '';
                    var selectedExtra = ((curCost.category && curCost.category == "INSURANCE" && /Annuleringsverzekering/i.test(curCostdes))?'cancellationinsurance':
                                            ((curCostUI == "INS_CAN" && /Annuleringsverzekering/i.test(curCosttt))?'cancellationinsurance':
                                                ((curCostUI == "INS_CAN" && /Poliskosten/i.test(curCosttt))?'cancellationinsurancepolicy':
                                                        ((curCostUI == "INS_TRV" && /Poliskosten/i.test(curCosttt))?'travelinsurancepolicy':'')
                                                )
                                            )
                                        );
                    if (selectedExtra) {
                        newPM['extras'][selectedExtra] = {
                            selected    : true,
                            description : curCost.title || '',
                            cost        : curCost.unitCost || 0,
                            addedcost   : curCost.extendedCost || 0,
                            quantity    : curCost.quantity || 1,
                            referenceid : curCost.referenceId || '',
                            category    : curCost.UIFamily || curCost.category || ''
                        }
                    };
            };
            var curExtra = []            
            for (var i = 0; i < wgdExtras.length; i++) {
                curExtra = wgdExtras[i]                
                if (curExtra.UIFamily == "INS_TRV") {
                        var ins = {
                            selected    : true,
                            description : curExtra.description || '',
                            cost        : curExtra.extendedCost || 0,
                            addedcost   : curExtra.extendedCost || 0,
                            quantity    : curExtra.passengerList && curExtra.passengerList.length || 1,
                            referenceid : curExtra.ID || '',
                            category    : curExtra.UIFamily || ''
                        }
                        newPM.extras.travelinsurance.push(ins);
                    };
            };
        };
        jQ.extend(cdpm, newPM, keeps);        

        if (wgD.response && wgD.response.error){
            errorPM['errorcode'] = wgD.response.error.code || "";
            errorPM['errormsg'] =  wgD.response.error.description;
            jQ.extend(cdpm.errors, errorPM);
        } else if (JSON.parse(CATTDL.ckget('gtm_params')) && JSON.parse(CATTDL.ckget('gtm_params')).errors && JSON.parse(CATTDL.ckget('gtm_params')).errors.secure)
        {
            var procpayPD = window.getPageData('/process-payment')
            errorPM['errorcode'] = procpayPD.errorCode || ''
            errorPM['errormsg'] =  procpayPD.message || ''
            jQ.extend(cdpm.errors, errorPM)
            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
            delete params.errors;
            CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', cdpm.cookiedomain);    
        }
        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL Pay: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Pay'})  
        window.dataLayer_557RZS && dataLayer_557RZS.push({'event': 'CATTDL Pay'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
