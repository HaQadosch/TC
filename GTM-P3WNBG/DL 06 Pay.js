<script id='GTM-P3WNBG_cattdlPay'>
(function gtm_cattdlPay(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {};
        var keeps = {};
        cdpm.errors = {};
        var errorPM = {};       

        var wgD = window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname) || {};
        var wgdPkg = wgD && wgD.package || {};
        var wgdSum = wgD.costSummary || {};

        cdpm.lob = "package"
        cdpm.holidaytype = "generic-angular"
        cdpm.pagecontext = "angular"
        cdpm.sessionid = window.sessionToken || "";
        cdpm.tc_basket_id = JSON.parse(cdl.ckget('tc_basket_id')) || '';
        
        if (wgdPkg) {
            cdpm.holidaytype =  (/MULTICOM/i.test(wgdPkg.provider || '')) && (wgdPkg.brandCode == 'Z')?'flexitrips-angular':((/MULTICOM/i.test(wgdPkg.provider || '')) && (wgdPkg.brandCode !== 'Z')?'multi-angular':'package-angular')
            newPM['destination'] = (wgdPkg.content && wgdPkg.content.geoPath || "").replace(/\&amp;/g, '-').replace(/\&/g, '-');
            var wgdPath = newPM.destination && newPM.destination.split(",") || [];
            newPM['accomcountry'] = wgdPath.length > 0 && (wgdPath[0] || "").trim() || '';
            newPM['accomregion'] = wgdPath.length > 1 && (wgdPath[1] || "").trim() || '';
            newPM['accomresort'] = wgdPath.length > 2 && (wgdPath[2] || "").trim() ||  wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].resortName || ''
            newPM['starrating'] = wgdPkg.content && wgdPkg.content.starRating || "";
            newPM['touroperator'] = wgdPkg.brandCode || "";
            newPM['accomname'] = (wgdPkg.content && wgdPkg.content.hotelName || wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].hotelName || "").replace(/\&amp;/g, '-').replace(/\&/g, '-')
            newPM['accomguid'] = wgdPkg.productId || "";
            var wgdAcc = window.getPageData('/packages/'+newPM.accomguid) || {};
            newPM['accomcode'] = ((/tosCode=([^&]+)/.exec(wgdPkg.contentUrl || '') || ['']).pop()) 
                || (wgdPkg.accomodationList && wgdPkg.accomodationList[0] && (wgdPkg.accomodationList[0].hotelCode || "").replace("|","-"))
                || (wgdAcc.matrix && wgdAcc.matrix.data && wgdAcc.matrix.data.priceList && wgdAcc.matrix.data.priceList[0] && wgdAcc.matrix.data.priceList[0].rooms && wgdAcc.matrix.data.priceList[0].rooms[0] && wgdAcc.matrix.data.priceList[0].rooms[0].context && wgdAcc.matrix.data.priceList[0].rooms[0].context.hotelCode || '').replace('|','-')
                || "";
            newPM['boardbasis'] = wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].roomProfiles && wgdPkg.accomodationList[0].roomProfiles[0] && wgdPkg.accomodationList[0].roomProfiles[0].mealPlan && wgdPkg.accomodationList[0].roomProfiles[0].mealPlan.description || "";
            newPM['duration'] = wgdPkg.dateRange && wgdPkg.dateRange.duration || 0;
            newPM['deptdate'] = +new Date(wgdPkg.dateRange && wgdPkg.dateRange.startDate || 0)
            newPM['returndate'] = +new Date(wgdPkg.dateRange && wgdPkg.dateRange.endDate || 0)
            newPM['returntime'] = +new Date(wgdPkg.flightList && wgdPkg.flightList[1] && wgdPkg.flightList[1].departureDateTime || 0)

            newPM['includedinpackage'] = []; for (var i = 0; i < (wgdPkg.includedItems && wgdPkg.includedItems.length || 0); newPM['includedinpackage'].push(wgdPkg.includedItems[i++].description))
            newPM['resort'] = wgdPkg.accomodationList && wgdPkg.accomodationList[0] && wgdPkg.accomodationList[0].resortName || newPM.accomresort  || ""

            if (wgdPkg.reviews) {
                newPM['ratings'] = {
                    bazaarvoice : { 
                        id          : wgdPkg.reviews.bazaarvoice && wgdPkg.reviews.bazaarvoice.id,
                        avgrating   : wgdPkg.reviews.bazaarvoice && wgdPkg.reviews.bazaarvoice.averageRating || "",
                        count       : wgdPkg.reviews.bazaarvoice && wgdPkg.reviews.bazaarvoice.reviewCount || ""
                    },
                    tripadvisor : { 
                        id          : wgdPkg.reviews.tripadvisor && wgdPkg.reviews.tripadvisor.id,
                        avgrating   : wgdPkg.reviews.tripadvisor && wgdPkg.reviews.tripadvisor.averageRating || "",
                        count       : wgdPkg.reviews.tripadvisor && wgdPkg.reviews.tripadvisor.reviewCount || ""
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

            newPM['totalprice'] = wgdSum.grossAmount || 0;
            newPM['pricepp'] = newPM.totalprice/(newPM.paxtotal || 1) || 0  
            newPM['discountvalue'] = Math.abs(wgdSum.discountAmount || 0);
            newPM['discountperc'] = Math.round(newPM.discountvalue*100 / Math.abs(newPM.totalprice || 1))
            var wgdItems = wgdSum.costingItem || {}

            //Payment
            newPM['depositselected'] = (wgD.selectedPaymentOption && wgD.selectedPaymentOption.id || "").toLowerCase();
            newPM['depositvalue'] = wgD.selectedPaymentOption.paymentPortion[0] && wgD.selectedPaymentOption.paymentPortion[0].originalPrice || 0;
            newPM['paymentoption'] = wgD.selectedCard && wgD.selectedCard.name || "";
            newPM['paymentfee'] = wgD.selectedCard && wgD.selectedCard.fee && wgD.selectedCard.fee.actualValue || 0;
            newPM['paymentinstallments'] = wgdSum.paymentOptionsObj && wgdSum.paymentOptionsObj.paymentPortion && wgdSum.paymentOptionsObj.paymentPortion.map(function(e){return {'name': e.name, 'duedate': +new Date(e.dueDate), 'value': e.originalPrice} })
                || wgD.selectedPaymentOption && wgD.selectedPaymentOption && wgD.selectedPaymentOption.paymentPortion && wgD.selectedPaymentOption.paymentPortion.map(function(e){return {'name': e.name, 'duedate': +new Date(e.dueDate), 'value': e.originalPrice} })
                || [];
            newPM['remainingbalance'] = wgdSum.paymentOptionsObj && wgdSum.paymentOptionsObj.remainingBalance 
                || wgD.selectedPaymentOption && wgD.selectedPaymentOption.remainingBalance
                || 0;

            //Extras
            newPM['extras'] = {};
            wgdItems.forEach(function(e){
                if (e.title) {
                    var selectedExtra = ({
                                        "Charitable donation"           : "donation"
                                        ,"Late Booking Fee"             : "latefees"
                                        ,"Infant Flight"                : "infantflight"
                                        ,"In-flight meals"              : "inflightmeals"
                                        ,"Choose your seat"             : "seats"
                                        ,"3 for the price of 2"         : "promo3for2"
                                        ,"Private taxi transfer"        : "taxitransfers"
                                        ,"Standard airport transfers"   : "transfers"
                                        ,"Flexible terms"               : "flexibleterms"
                                        ,"Travel insurance"             : "insurance"
                                        ,"Premium cabin"                : "premiumcabin"
                                        ,"Car hire"                     : "carhire"
                                        ,"Extra luggage allowance"      : "luggage"
                                        ,"Luggage allowance"            : "luggage"
                                    })[e.title]
                    if (selectedExtra === 'carhire' && e.description ==='No Car - Own Arrangements'){ selectedExtra = 'carhire_ownarrangement' }
                    newPM['extras'][selectedExtra] = {
                        selected    : true,
                        description : e.description || '',
                        cost        : e.unitCost || 0,
                        addedcost   : e.extendedCost || 0,
                        quantity    : e.quantity || 1
                    }
                }
            });
            jQ.extend(cdpm, newPM, keeps);
        }
        var userId = cdpm.user && cdpm.user.id || '';
        if (!userId) {
            if(location.host === 'www.thomascook.com') { 
                $.ajax('https://www.thomascook.com/api/users/session').success(function(data, textStatus, jqXHR){
                    if (data && data.id && jqXHR.status === 200) {
                        cdpm['user'] = {};
                        cdpm.user.id = data.id || '';
                    }
                })
            }
        };
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
            CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));
        } else if (jQ('p.error-text') && jQ('p.error-text').length > 0) {
            errorPM['errorcode'] = (/Error Code:\s(.+)\)/.exec(jQ('p.error-text').text()) || ['']).pop();
            errorPM['errormsg'] =  jQ('p.error-text').text() || '';
            jQ.extend(cdpm.errors, errorPM)
        }
        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL Pay: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Pay'})  
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'CATTDL Pay'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
