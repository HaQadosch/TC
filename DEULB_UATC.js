/*
* UATC LP
*/
//<script id='gtm_uatcdlLP'>
(function gtm_uatcdlLP(cdl, dl){
    'use strict';
    if (cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_uatc = {};
        cdl.DL_uatc.webanalytics = {};

        cdl.DL_uatc = {
            profileid       : 'UA-33036832-7',
            cookiedomain    : "thomascook.com",
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false
            }
        };
        cdl.DL_uatc.webanalytics = {
            location        : location && location.href || window.document && window.document.URL || '',
            metrics         : {
                metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0},
                metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0},
                metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || 0},
                metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0},
                metric10        : {'bookingvalue'           : parseInt(cdpm.bookingvalue) || 0},
                metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                metric13        : {'insurance'              : parseInt(cdpm.insurance) || 0},
                metric14        : {'luggage'                : parseInt(cdpm.luggage) || 0},
                metric15        : {'hitcount'               : 1}
            },
            dimensions      : {
                dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
                dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                dimension51     : {'gaguid'                     : cdpm.gaguid || 'empty'},
                dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''},
                dimension75     : {'unixtimestamp'              : cdpm.pagetimestamp || ''}
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC UATCDL LP: '+e);
    } finally {
        dl.push({'event': 'UATCDL LP'});
    }
    return cdl && cdl.CATTParams && cdl.DL_uatc;
}(window.CATTDL, window.dataLayer));
//</script>

//<script id='gtm_uatcLP'>
(function gtm_uatcLP(cdl, uadl){
    'use strict';
    if (cdl && uadl) try{
        var trackerName = (uadl.name+".") || "";

        (function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);return window;}(window,document,'script','https://www.google-analytics.com/analytics.js','ga'));

        window.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name});
        for (var setOption in uadl.set) window.ga(trackerName+'set', setOption, uadl.set[setOption]);
        window.ga(trackerName+'send', 'pageview');

    } catch(e) {
        cdl.error('GTM UK TC UATC LP: '+e);
    }
}(window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc));
//</script>


/*
* UATC SRP
*/
//<script id='gtm_uatcdlSRP'>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
            var cdpm = cdl.CATTParams || '';
            var cdpmac = cdpm && cdpm.accoms || '';
            cdl.DL_uatc = {};
            cdl.DL_uatc.webanalytics = {};
            var nbrAccom = (cdpm.accoms || []).length || jQ('div.ResultsListView').length || 0;

            cdl.DL_uatc = {
                profileid       : 'UA-33036832-7',
                cookiedomain    : "tcsignature.com",
                name            : 'CATTUATC',
                set             : {
                    anonymizeIp : false,
                    location    : loc && loc.href || window.document && window.document.URL || '',
                    referrer    : document.referrer.split(/\?/)[0],
                    hostname    : loc && loc.hostname || ''
                }
            };
            cdl.DL_uatc.webanalytics = {
                nbrimpressions  : nbrAccom,
                addimpression   : [],
                page            : '/vp/en/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid'),
                location        : loc && loc.href || window.document && window.document.URL || '',
                metrics         : {
                    metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                    metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0},
                    metric10        : {'bookingvalue'           : parseInt(cdpm.bookingvalue) || 0},
                    metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                    metric13        : {'insurance'              : parseInt(cdpm.insurance) || 0},
                    metric14        : {'luggage'                : parseInt(cdpm.luggage) || 0},
                    metric15        : {'hitcount'               : 1}
                },
                dimensions      : {
                    dimension1      : {'departureairportselected'   : cdpm.departureairportselected || 'empty'},
                    dimension2      : {'destination'                : cdpm.destination || 'empty'},
                    dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'},
                    dimension5      : {'deptdate'                   : cdpm.deptdate || 'empty'},
                    dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'},
                    dimension8      : {'budget'                     : cdpm.budget || 'empty'},
                    dimension9      : {'duration'                   : cdpm.duration || 'empty'},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resortsearched || 'empty'},
                    dimension14     : {'sessid'                     : cdpm.sessid || 'empty'},
                    dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
                    dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                    dimension21     : {'destinationsearched'        : cdpm.destination || 'empty'},
                    dimension22     : {'destinationairportselected' : cdpm.destinationairportselected || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr || 'empty'},
                    dimension24     : {'searchresultspages'         : cdpm.searchresultspages || 'empty'},
                    dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage || 'empty'},
                    dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || 'empty'},
                    dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                    dimension29     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'},
                    dimension33     : {'carrier'                    : cdpm.carrier || 'empty'},
                    dimension34     : {'paxadult'                   : cdpm.paxadult || 'empty'},
                    dimension35     : {'paxchild'                   : cdpm.paxchild || 'empty'},
                    dimension36     : {'paxinfant'                  : cdpm.paxinfant || 'empty'},
                    dimension37     : {'paxtotal'                   : cdpm.paxtotal || 'empty'},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''},
                    dimension75     : {'unixtimestamp'              : ''+cdpm.pagetimestamp || ''}
                }
            };

            var depdateDate = new Date((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1'));

            var passInfo = {};
            for (var i = 0; i < nbrAccom; i++){
                var accomCountry = "";
                var accomRegion = "";
                var accomRest = (cdpmac[i].location || '');
                var retdateDate = new Date((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1')); retdateDate.setDate(depdateDate.getDate()+parseInt(cdpm.duration|| '1'));
                var retDate = retdateDate.toLocaleDateString();

                cdl.DL_uatc.webanalytics.addimpression.push({
                    id          : cdpmac[i].id || '',
                    name        : ((cdpmac[i].name || '')+'||'+accomCountry+'|'+accomRegion+'|'+accomRest).toLowerCase(),
                    category    : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase(),
                    brand       : (cdpm.touroperator || '').toLowerCase()||"",
                    variant     : ((cdpmac[i].boardBasis || '')+'|'+(cdpmac[i].airportcode || cdpmac[i].airportname || "")+'|'+(cdpm.deptdate||"")+'|'+(retDate||"")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpmac[i].totalprice || '')).toLowerCase(),
                    list        : ('search|'+cdpm.sortoption).toLowerCase(),
                    position    : (cdpm.selpage*1000)+parseInt(i)+1,
                    dimension27 : 'SRP_Viewer'
                });
                passInfo[cdpmac[i].id] = (cdpm.selpage*1000)+parseInt(i)+1;
            }
            passInfo.sort = (cdpm.sortoption || '').toLowerCase();
            cdl.ckset('xbUATCEC', window.escape(JSON.stringify(passInfo)));

        } catch(e) {
            cdl.error('GTM UK TC UATCDL SRP: '+e);
        }
        dl.push({'event': 'UATCDL SRP'});
        return  cdl.DL_uatc;
}(window.jQuery, window.dataLayer, window.CATTDL, window.location));
//</script>

//<script id='gtm_uatcSRP'>
(function gtm_uatcSRP(jQ, cdl, uadl, dl){
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};

        (function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);return window;}(window,document,'script','https://www.google-analytics.com/analytics.js','ga'));

        window.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name});
        for (var setOption in uadl.set) window.ga(trackerName+'set', setOption, uadl.set[setOption]);
        window.ga(trackerName+'require', 'ec', 'ec.js');

        if (jQ){
            jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
                jQ.each(vDim, function valDimension(_, val){val && window.ga(trackerName+'set', kDim, val)});
            });
            jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
                jQ.each(vMet, function valMetrics(_, val){val && window.ga(trackerName+'set', kMet, val)});
            });
        }

        window.ga(trackerName+'send', 'pageview', {'page': uawa.page});

        dl.push({'event': 'UATCECaddImpression'});
    } catch(e) {
        cdl.error('GTM UK TC UATC SRP: '+e);
    }
    return cdl && uadl;
}(window.jQuery, window.CATTDL, !window.CATTDL.DL_uatc?!1:window.CATTDL.DL_uatc, window.dataLayer));
//</script>

/*
* UATC QTE
*/
//<script id='gtm_uatcdlQuote'>
(function gtm_uatcdlQuote(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_uatc = {};
        cdl.DL_uatc.webanalytics = {};

        var xbUATCEC = cdl.get('xbUATCEC') || false;
        xbUATCEC = xbUATCEC && JSON.parse(window.unescape(xbUATCEC)) || false;

        cdl.DL_uatc = {
            profileid       : 'UA-33036832-7',
            cookiedomain    : "tcsignature.com",
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : loc && loc.href || window.document && window.document.URL || '',
                referrer    : document.referrer.split(/\?/)[0],
                hostname    : loc && loc.hostname || ''
            }
        };
        cdl.DL_uatc.webanalytics = {
            page            : '/vp/en/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid'),
            location        : loc && loc.href || window.document && window.document.URL || '',
            addproduct      : {
                id              : cdpm.accomguid || '',
                name            : (cdpm.accomname+'||'+cdpm.accomcountry+'|'+cdpm.accomregion+'|'+cdpm.accomdestrest).toLowerCase() || "",
                category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                brand           : cdpm.touroperator.toLowerCase() || "",
                variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.departureairportselected||"")+'|'+(cdpm.deptdate||"")+'|'+(cdpm.retdate||"")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                list            : ('search|'+xbUATCEC.sort).toLowerCase() || "",
                position        : xbUATCEC[cdpm.accomguid] || 0,
                price           : cdpm.bookingvalue || 0,
                quantity        : 1
            },
            metrics         : {
                metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0},
                metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0},
                metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || 0},
                metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0},
                metric10        : {'bookingvalue'           : parseInt(cdpm.bookingvalue) || 0},
                metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                metric13        : {'insurance'              : parseInt(cdpm.insurance) || 0},
                metric14        : {'luggage'                : parseInt(cdpm.luggage) || 0},
                metric15        : {'hitcount'               : 1}
            },
            dimensions      : {
                dimension1      : {'departureairportselected'   : cdpm.departureairportselected || 'empty'},
                dimension2      : {'destination'                : cdpm.destination || 'empty'},
                dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'},
                dimension5      : {'deptdate'                   : cdpm.deptdate || 'empty'},
                dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'},
                dimension8      : {'budget'                     : cdpm.budget || 'empty'},
                dimension9      : {'duration'                   : cdpm.duration || 'empty'},
                dimension10     : {'lob'                        : cdpm.lob || ''},
                dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                dimension12     : {'pageid'                     : cdpm.pageid || ''},
                dimension13     : {'resortsearched'             : cdpm.resortsearched || 'empty'},
                dimension14     : {'sessid'                     : cdpm.sessid || 'empty'},
                dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
                dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
                dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
                dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                dimension22     : {'destinationairportselected' : cdpm.destinationairportselected || 'empty'},
                dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr || 'empty'},
                dimension24     : {'searchresultspages'         : cdpm.searchresultspages || 'empty'},
                dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage || 'empty'},
                dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || 'empty'},
                dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                dimension29     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'},
                dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'},
                dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'},
                dimension33     : {'carrier'                    : cdpm.carrier || 'empty'},
                dimension34     : {'paxadult'                   : cdpm.paxadult || 'empty'},
                dimension35     : {'paxchild'                   : cdpm.paxchild || 'empty'},
                dimension36     : {'paxinfant'                  : cdpm.paxinfant || 'empty'},
                dimension37     : {'paxtotal'                   : cdpm.paxtotal || 'empty'},
                dimension51     : {'gaguid'                     : cdpm.gaguid || 'empty'},
                dimension58     : {'accomguid'                  : cdpm.accomguid || 'empty'},
                dimension59     : {'roomcode1'                  : cdpm.roomtypes && cdpm.roomtypes[0] || 'empty'},
                dimension60     : {'roomcode2'                  : cdpm.roomtypes && cdpm.roomtypes[1] || ''},
                dimension61     : {'roomcode3'                  : cdpm.roomtypes && cdpm.roomtypes[2] || ''},
                dimension62     : {'roomcode4'                  : cdpm.roomtypes && cdpm.roomtypes[3] || ''},
                dimension63     : {'roomcode5'                  : cdpm.roomtypes && cdpm.roomtypes[4] || ''},
                dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''},
                dimension75     : {'unixtimestamp'              : ''+cdpm.pagetimestamp || ''},
                dimension103    : {'rooms'                      : cdpm.rooms || 'empty'},
                dimension106    : {'arrivaltimeoutbound'        : cdpm.flightdetails && (function (){var x = new Date(cdpm.flightdetails.outbound.arrive.date.replace(/(\d\d\s[^\s]+\s[^\s]+).*/g, '$1')) || Date.now(); return (/\d\d/.exec(x.getDate())?'':'0')+x.getDate()+'/'+(1 + x.getMonth())+'/'+x.getFullYear()}()) || ''},
                dimension107    : {'departuretimeoutbound'      : cdpm.flightdetails && (function (){var x = new Date(cdpm.flightdetails.outbound.depart.date.replace(/(\d\d\s[^\s]+\s[^\s]+).*/g, '$1')) || Date.now(); return (/\d\d/.exec(x.getDate())?'':'0')+x.getDate()+'/'+(1 + x.getMonth())+'/'+x.getFullYear()}()) || 'empty'},
                dimension108    : {'returndate'                 : cdpm.retdate || 'empty'},
                dimension109    : {'arrivaltimeinbound'         : cdpm.flightdetails && (function (){var x = new Date(cdpm.flightdetails.inbound.arrive.date.replace(/(\d\d\s[^\s]+\s[^\s]+).*/g, '$1')) || Date.now(); return (/\d\d/.exec(x.getDate())?'':'0')+x.getDate()+'/'+(1 + x.getMonth())+'/'+x.getFullYear()}()) || 'empty'},
                dimension110    : {'departuretimeinbound'       : cdpm.flightdetails && (function (){var x = new Date(cdpm.flightdetails.inbound.depart.date.replace(/(\d\d\s[^\s]+\s[^\s]+).*/g, '$1')) || Date.now(); return (/\d\d/.exec(x.getDate())?'':'0')+x.getDate()+'/'+(1 + x.getMonth())+'/'+x.getFullYear()}()) || ''},
                dimension111    : {'totalprice'                 : cdpm.bookingvalue || 'empty'}
            }
        };

    } catch(e) {
        cdl.error('GTM UK TC UATCDL Quote: '+e);
    }
    dl.push({'event': 'UATCDL Quote'});
    return cdl.DL_uatc;
}(window.jQuery, window.dataLayer, window.CATTDL, window.location));
//</script>

//<script id='gtm_uatcQuote'>
(function gtm_uatcQuote(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var uaprod = uadl.webanalytics.addproduct || {};

        (function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);return window;}(window,document,'script','https://www.google-analytics.com/analytics.js','ga'));

        w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name});
        w.ga(trackerName+'set', 'location', uawa.location);
        for (var setOption in uadl.set) w.ga(trackerName+'set', setOption, uadl.set[setOption]);
        w.ga(trackerName+'require', 'ec', 'ec.js');

        if (jQ){
            jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
                jQ.each(vDim, function valDimension(_, val){val && w.ga(trackerName+'set', kDim, val)});
            });
            jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
                jQ.each(vMet, function valMetrics(_, val){val && w.ga(trackerName+'set', kMet, val)});
            });
        }

        w.ga(trackerName+'send', 'pageview', {
            'page': uawa.page,
            'hitCallback': function gtm_uatcCustAddProduct(){
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'        : uaprod.name,
                    'category'    : uaprod.category,
                    'brand'        : uaprod.brand,
                    'variant'    : uaprod.variant,
                    'price'        : uaprod.price,
                    'quantity'    : uaprod.quantity
                });

                w.ga(trackerName+'ec:setAction','checkout', {'step': 1, 'label': 'cust'});
                w.ga(trackerName+'send', 'event', 'ECProductView', uaprod.id, "1");
            }
        });

        dl.push({'event': 'UATCECcheckout'});
    } catch(e){
        cdl.error('GTM UK TC UATC Quote: '+e);
        dl.push({'event': 'UATCECcheckout'});
    }
    return cdl && uadl;
}(window.jQuery, window.CATTDL, !window.CATTDL.DL_uatc?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer));
//</script>


/*
* UATC PaxPay
*/
//<script>
(function gtm_uatcdlPaxPay(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams){
        try{
            var cdpm = cdl.CATTParams;
            cdl.DL_uatc = {};
            cdl.DL_uatc.webanalytics = {};

            var xbUATCEC = cdl.get('xbUATCEC') || false;
            xbUATCEC = xbUATCEC && JSON.parse(window.unescape(xbUATCEC)) || false;

            cdl.DL_uatc = {
                profileid       : 'UA-33036832-7',
                cookiedomain    : "tcsignature.com",
                name            : 'CATTUATC',
                set             : {
                    anonymizeIp : false,
                    location    : loc && loc.href || window.document && window.document.URL || '',
                    referrer    : document.referrer.split(/\?/)[0],
                    hostname    : loc && loc.hostname || ''
                }
            };
            cdl.DL_uatc.webanalytics = {
                page            : '/vp/en/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid'),
                location        : loc && loc.href || window.document && window.document.URL || '',
                addproduct      : {
                    id              : cdpm.accomguid || '',
                    name            : (cdpm.accomname+'||'+cdpm.accomcountry+'|'+cdpm.accomregion+'|'+cdpm.accomdestrest).toLowerCase() || "",
                    category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand           : cdpm.touroperator.toLowerCase() || "",
                    variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.departureairportselected||"")+'|'+(cdpm.deptdate||"")+'|'+(cdpm.retdate||"")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                    list            : ('search|'+xbUATCEC.sort).toLowerCase() || "",
                    position        : xbUATCEC[cdpm.accomguid] || 0,
                    price           : cdpm.bookingvalue || 0,
                    quantity        : 1
                },
                metrics         : {
                    metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                    metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0},
                    metric10        : {'bookingvalue'           : parseInt(cdpm.bookingvalue) || 0},
                    metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                    metric13        : {'insurance'              : parseInt(cdpm.insurance) || 0},
                    metric14        : {'luggage'                : parseInt(cdpm.luggage) || 0},
                    metric15        : {'hitcount'               : 1}
                },
                dimensions      : {
                    dimension1      : {'departureairportselected'   : cdpm.departureairportselected || 'empty'},
                    dimension2      : {'destination'                : cdpm.destination || 'empty'},
/*                  dimension3      : {'brochure'                   : cdpm.brochure || 'empty'},
*/                  dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'},
                    dimension5      : {'deptdate'                   : cdpm.deptdate || 'empty'},
                    dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'},
                    dimension8      : {'budget'                     : cdpm.budget || 'empty'},
                    dimension9      : {'duration'                   : cdpm.duration || 'empty'},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resortsearched || 'empty'},
                    dimension14     : {'sessid'                     : cdpm.sessid || 'empty'},
                    dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
                    dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                    dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                    dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                    //dimension21     : {'destinationsearched'        : cdpm.destination || 'empty'},
                    dimension22     : {'destinationairportselected' : cdpm.destinationairportselected || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr || 'empty'},
                    dimension24     : {'searchresultspages'         : cdpm.searchresultspages || 'empty'},
                    dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage || 'empty'},
                    dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || 'empty'},
                    /* dimension27      : {'SRP_Viewer'                 : 'EcAddImpression'}, */
                    dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                    dimension29     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'},
                    dimension33     : {'carrier'                    : cdpm.carrier || 'empty'},
                    dimension34     : {'paxadult'                   : cdpm.paxadult || 'empty'},
                    dimension35     : {'paxchild'                   : cdpm.paxchild || 'empty'},
                    dimension36     : {'paxinfant'                  : cdpm.paxinfant || 'empty'},
                    dimension51     : {'gaguid'                 : cdpm.gaguid || 'empty'},
                    dimension37     : {'paxtotal'                   : cdpm.paxtotal || 'empty'},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''},
                    dimension75     : {'unixtimestamp'              : ''+cdpm.pagetimestamp || ''}
                    }
            };

        } catch (e){cdl.error('GTM UK TC UATCDL PaxPay: '+e)}
        dl.push({'event': 'UATCDL PaxPay'})

        return cdl.DL_uatc
    }
}(!window.jQuery?!1:window.jQuery, window.dataLayer || [], !window.CATTDL?!1:window.CATTDL, window.location))
//</script>

//<script>
  (function gtm_uatcPaxPay(jQ, cdl, uadl, w, d, dl){
      'use strict';
      if (cdl && uadl) try {
          var trackerName = (uadl.name+".") || ""
          var uawa = uadl.webanalytics || {}
          var uaprod = uadl.webanalytics.addproduct || {}

          w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
          w.ga(trackerName+'set', 'location', uawa.location);
          for (var setOption in uadl.set) w.ga(trackerName+'set', setOption, uadl.set[setOption]);
          w.ga(trackerName+'require', 'ec', 'ec.js')

          if (jQ){
              jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
                  jQ.each(vDim, function valDimension(_, val){val && w.ga(trackerName+'set', kDim, val)})
              })
              jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
                  jQ.each(vMet, function valMetrics(_, val){val && w.ga(trackerName+'set', kMet, val)})
              })
          }

          w.ga(trackerName+'send', 'pageview', {
              'page': uawa.page,
              'hitCallback': function gtm_uatcCustAddProduct(){
                  w.ga(trackerName+'ec:addProduct', {
                      'id'        : uaprod.id,
                      'name'        : uaprod.name,
                      'category'    : uaprod.category,
                      'brand'        : uaprod.brand,
                      'variant'    : uaprod.variant,
                      'price'        : uaprod.price,
                      'quantity'    : uaprod.quantity
                  });

                  w.ga(trackerName+'ec:setAction','checkout', {'step': 2, 'label': 'paxpay'})
                  w.ga(trackerName+'send', 'event', 'ECProductView', uaprod.id, "1");
              }
          });

          dl.push({'event': 'UATCECcheckout'});
      } catch (e){cdl.error('GTM UK TC UATC PaxPay: '+e); dataLayer.push({'event': 'UATCECcheckout'})}
  }(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, !window.CATTDL.DL_uatc?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
//  </script>
