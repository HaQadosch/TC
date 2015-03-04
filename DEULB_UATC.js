
/*******************************************************
                    DL UATC 01 LP
********************************************************/
<script>
(function gtm_uatcdlLP(cdl, dl, loc) {
    'use strict';
    if (cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;

        cdl.DL_uatc = {
            profileid        : 'UA-33795090-1',
            cookiedomain     : 'urlaub.de',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp    : true
            },
            webanalytics     : {
                page            : loc.href || document.URL,
                location         : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                metrics         : {
                    metric15        : {'hitcount'        : 1}
                },
                dimensions         : {
                    dimension6         : {'appserver'        : cdpm.appserver || 'empty'},
                    dimension12        : {'pageid'            : cdpm.pageid || 'empty'},
                    dimension19        : {'errorcode'        : cdpm.errorcode || ''},
                    dimension30        : {'utmaguid'        : cdpm.utmaguid || ''},
                    dimension31        : {'utmbguid'         : cdpm.utmbguid || ''},
                    dimension51     : {'gaguid'            : cdpm.gaguid || 'empty'},
                    dimension32        : {'emailguid'         : cdpm.emailguid || ''},
                    dimension65        : {'pagetimestamp'     : cdl.gadate(cdpm.pagetimestamp || 0) || ''},
                    dimension102    : {'pagecontext'    : cdpm.pagecontext || ''}
                }
            }
        };
    } catch(e) {
        cdl.error('GTM FR TC UATCDL LP: '+e)
    } finally {
        dl.push({'event': 'UATCDL LP'})
    }
    return cdl && cdl.CATTParams && cdl.DL_uatc
}(window.CATTDL, window.dataLayer, window.location));

(function gtm_uatcLP(jQ, cdl, uadl, w) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};

          if (!window.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'    : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })
            }

            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';
            trc.send('pageview', sendSet);
        })
    } catch(e) {
        cdl.error('GTM FR TC UATC LP: '+e)
    }
    return
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>

/*******************************************************
                    DL UATC 02 SubSRP
********************************************************/
<script>
(function gtm_uatcdlSubSRP(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;
        var cdfc = jQ('div.innerform.multiline') || jQ([]);

        cdl.DL_uatc = {
            profileid        : 'UA-33795090-1',
            cookiedomain     : 'urlaub.de',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp    : true,
                location     : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                referrer     : document.referrer  || '',
                hostname     : loc && (loc.hostname || '') || ''
            },
            webanalytics     :     {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location         : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                metrics         : {
                    metric1         : {'paxadult'                    : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'                    : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'                    : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'                    : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                        : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'        : parseInt(cdpm.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'            : parseInt(cdpm.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'        : parseInt(cdpm.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'            : parseInt(cdpm.searchresultstotal) || 0},
                    metric15        : {'hitcount'        : 1}
                },
                dimensions         : {
                    dimension1         : {'deptairport'                : cdpm.deptairport || cdpm.departureairportselected || 'empty'},
                    dimension2         : {'destination'                : cdpm.destination || 'empty'},
                    dimension4         : {'searchresultstop3'            : cdpm.searchresultstop3 || 'empty'},
                    dimension5         : {'deptdate'                    : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || 'empty'},
                    dimension6         : {'appserver'                    : cdpm.appserver || 'empty'},
                    dimension7         : {'boardbasis'                    : cdpm.srchboardbasis || cdfc.find('select#selverpflegung option[value='+cdfc.find('select#selverpflegung').val()+']').text() || 'any'},
                    dimension8         : {'budget'                        : ''},
                    dimension9         : {'duration'                    : cdfc.find('select#seldauer option[value='+cdfc.find('select#seldauer').val()+']').text() || cdpm.srchduration || ''+cdpm.duration || 'empty'},
                    dimension10        : {'lob'                        : cdpm.lob || ''},
                    dimension11        : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12        : {'pageid'                        : cdpm.pageid || ''},
                    dimension13        : {'resort'                        : cdpm.resort || 'empty'},
                    dimension14        : {'sessionid'                    : cdpm.sessionid || 'empty'},
                    dimension19        : {'errorcode'                    : cdpm.errorcode || ''},
                    dimension20        : {'touroperator'                : cdfc.find('select#selectTO option[value='+cdfc.find('select#selectTO').val()+']').text() || 'any'},
                    dimension21        : {'destination'                : cdpm.destination || cdpm.srchdestination || 'empty'},
                    dimension23        : {'searchresultspagenbr'        : '1'},
                    dimension24        : {'searchresultspages'            : '1'},
                    dimension25        : {'searchresultsperpage'        : ''+jQ('div.col-2-3-m20 li[class!=soleil][class!=mer]').length || 'empty'},
                    dimension26        : {'searchresultstotal'            : ''+jQ('div.col-2-3-m20 li[class!=soleil][class!=mer]').length || 'empty'},
                    dimension28        : {'sortoption'                    : 'empty'},
                    dimension29        : {'sortoption'                    : 'empty'},
                    dimension30        : {'utmaguid'                    : cdpm.utmaguid || 'empty'},
                    dimension31        : {'utmbguid'                     : cdpm.utmbguid || 'empty'},
                    dimension32        : {'emailguid'                     : cdpm.emailguid || 'empty'},
                    dimension34     : {'paxadult'                    : ''+(cdpm.paxadult || cdpm.srchnbradults || 'empty')},
                    dimension35     : {'paxchild'                    : ''+(cdpm.paxchild || 'empty')},
                    dimension36     : {'paxinfant'                    : ''+(cdpm.paxinfant || 'empty')},
                    dimension37     : {'paxtotal'                    : ''+(cdpm.paxtotal || 'empty')},
                    dimension65        : {'pagetimestamp'                 : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension67        : {'concepts'                     : ''},
                    dimension68        : {'discountvalue'                 : ''},
                    dimension69        : {'discountperc'                 : ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''}
                }
            }
        };
    } catch(e) {
        cdl.error('GTM FR TC UATCDL SubSRP: '+e)
    } finally {
        dl.push({'event': 'UATCDL SubSRP'})
    }
    return     cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));

(function gtm_uatcSubSRP(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var cdpm = CATTDL.CATTParams;

        if(!w.ga) w = (function uatcGA(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(w,d,'script','//www.google-analytics.com/analytics.js','ga')

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'    : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })
            }
            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';
            trc.send('pageview', sendSet);
        })
    } catch(e) {
        cdl.error('GTM FR TC UATC SubSRP: '+e)
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>

/*******************************************************
                    DL UATC 03 SRP
********************************************************/
<script>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;
        var cdsr = cdpm.accoms || [];
        var cdfc = jQ('div.innerform.multiline') || jQ([]);

        cdl.DL_uatc = {
            profileid        : 'UA-33795090-1',
            cookiedomain     : 'urlaub.de',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp    : true,
                location     : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                referrer     : document.referrer  || '',
                hostname     : loc && (loc.hostname || '') || ''
            },
            webanalytics     :     {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location         : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                metrics         : {
                    metric1         : {'paxadult'                    : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'                    : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'                    : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'                    : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                        : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'        : parseInt(cdpm.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'            : parseInt(cdpm.searchresultspages || jQ('nav.bloc-pagination li').length) || 0},
                    metric8         : {'searchresultsperpage'        : parseInt(cdpm.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'            : parseInt(cdpm.searchresultstotal) || 0},
                    metric15        : {'hitcount'                    : 1}
                },
                dimensions         : {
                    dimension1         : {'deptairport'                : cdpm.deptairport || cdpm.departureairportselected || 'empty'},
                    dimension2         : {'destination'                : cdpm.destination || 'empty'},
                    dimension4         : {'searchresultstop3'            : cdpm.searchresultstop3 || 'empty'},
                    dimension5         : {'deptdate'                    : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || 'empty'},
                    dimension6         : {'appserver'                    : cdpm.appserver || 'empty'},
                    dimension7         : {'boardbasis'                    : cdpm.firstrsltboardbasis || cdfc.find('select#selverpflegung option[value='+cdfc.find('select#selverpflegung').val()+']').text() || 'any'},
                    dimension8         : {'budget'                        : ''},
                    dimension9         : {'duration'                    : cdfc.find('select#seldauer option[value='+cdfc.find('select#seldauer').val()+']').text() || cdpm.srchduration || ''+cdpm.duration || 'empty' },
                    dimension10        : {'lob'                        : cdpm.lob || ''},
                    dimension11        : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12        : {'pageid'                        : cdpm.pageid || ''},
                    dimension13        : {'resort'                        : cdpm.resort || 'empty'},
                    dimension14        : {'sessionid'                    : cdpm.sessionid || 'empty'},
                    dimension15        : {'starrating'                    : cdpm.starrating || 'any'},
                    dimension19        : {'errorcode'                    : cdpm.errorcode || ''},
                    dimension20        : {'touroperator'                : cdfc.find('select#selectTO option[value='+cdfc.find('select#selectTO').val()+']').text() || 'any'},
                    dimension21        : {'destination'                : cdpm.destination || 'empty'},
                    dimension23        : {'searchresultspagenbr'        : cdpm.searchresultspagenbr && (''+cdpm.searchresultspagenbr) || 'empty'},
                    dimension24        : {'searchresultspages'            : cdpm.searchresultspages && (''+cdpm.searchresultspages) || 'empty'},
                    dimension25        : {'searchresultsperpage'        : cdpm.searchresultsperpage && (''+cdpm.searchresultsperpage) || 'empty'},
                    dimension26        : {'searchresultstotal'            : cdpm.searchresultstotal && (''+cdpm.searchresultstotal) || 'empty'},
                    dimension28        : {'sortoption'                    : cdpm.sortby || 'empty'},
                    dimension29        : {'sortoption'                    : cdpm.sortby || 'empty'},
                    dimension30        : {'utmaguid'                    : cdpm.utmaguid || 'empty'},
                    dimension31        : {'utmbguid'                     : cdpm.utmbguid || 'empty'},
                    dimension32        : {'emailguid'                     : cdpm.emailguid || 'empty'},
                    dimension34     : {'paxadult'                    : ''+(cdpm.paxadult || cdpm.srchnbradults || 'empty')},
                    dimension35     : {'paxchild'                    : ''+(cdpm.paxchild || 'empty')},
                    dimension36     : {'paxinfant'                    : ''+(cdpm.paxinfant || 'empty')},
                    dimension37     : {'paxtotal'                    : ''+(cdpm.paxtotal || 'empty')},
                    dimension65        : {'pagetimestamp'                 : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension67        : {'concepts'                     : ''},
                    dimension68        : {'discountvalue'                 : ''},
                    dimension69        : {'discountperc'                 : ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''}
                }
            }
        };

        cdl.DL_uatc.webanalytics.nbrimpressions = cdsr.length || 0
        cdl.DL_uatc.webanalytics.addimpression = []
        var curCDSR = {}
        for (var i = 0; i < cdl.DL_uatc.webanalytics.nbrimpressions; i++){
            if (cdsr[i]) {
                curCDSR = cdsr[i]
                cdl.DL_uatc.webanalytics.addimpression.push({
                    id            : curCDSR.accomguid || "",
                    name        : ((curCDSR.accomname || "")+'|'+(curCDSR.arrivalairportcode || "")+'|'+(curCDSR.accomcountry || "")+'|'+(curCDSR.accomregion || "")+'|'+(curCDSR.accomresort || "")).toLowerCase(),
                    category    : ('en|'+(cdpm.lob || "")+'|'+(cdpm.holidaytype || "")).toLowerCase(),
                    brand        : curCDSR.touroperator || "",
                    variant        : ((curCDSR.boardbasis || "")+'|'+(curCDSR.deptairportcode || "")+'|'+(cdl.gadate && cdl.gadate(curCDSR.deptdate || 0) || '')+'|'+(cdl.gadate && cdl.gadate(curCDSR.retdate || 0) || '')+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || cdpm.srchnbradults || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(curCDSR.totalprice || "")).toLowerCase(),
                    list        : ('search|'+(cdpm.sortoption || "")).toLowerCase(),
                    position    : (((cdpm.searchresultspagenbr || "0")*1000)+(curCDSR.position || "")) || 0,
                    dimension27    : 'SRP_Viewer'
                })

            }
        };
        jQ('a.voir').each(function(ind, elt){
            if (window.sessionStorage) window.sessionStorage.getItem('gtm_srpaccomposition|'+(jQ(elt).attr('data-hid') || 'na')) || window.sessionStorage.setItem('gtm_srpaccomposition|'+(jQ(elt).attr('data-hid') || 'na'), jQ(elt).attr('data-pos') || 'na')
        });
    } catch(e) {
        cdl.error('GTM FR TC UATCDL SRP: '+e)
    } finally {
        dl.push({'event': 'UATCDL SRP'})
    }
    return     cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));

(function gtm_uatcSRP(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaImp = uadl.webanalytics.addimpression || [];
        var cdpm = CATTDL.CATTParams;

        if(!w.ga) w = (function uatcGA(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(w,d,'script','//www.google-analytics.com/analytics.js','ga')


        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'    : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })
            }
            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';
            sendSet['hitCallback'] = function gtm_uatcSRPAddImpressions(){
                var curUAImp = {}
                if (uawa.nbrimpressions && uawa.addimpression && uawa.addimpression.length){
                    for (var i = 0; i<uawa.nbrimpressions; i++){
                        curUAImp = uaImp[i] || {}
                        w.ga(trackerName+'ec:addImpression', {
                                  'id':             curUAImp.id || '',
                                  'name':             curUAImp.name || '',
                                  'category':         curUAImp.category || '',
                                  'brand':             curUAImp.brand || '',
                                  'variant':         curUAImp.variant || '',
                                  'list':             curUAImp.list || '',
                                  'position':         curUAImp.position || '',
                                  'dimension27':     curUAImp.dimension27 || ''
                        })
                    }
                    var accoms = [];
                    for (i = 0; i < uawa.nbrimpressions; accoms.push((uaImp[i++].id) || ""));
                    w.ga(trackerName+'ec:setAction', 'view', {'list': (uaImp[0] && uaImp[0].list || "")});
                    trc.send('event', 'viewAddImpression', (uaImp[0].list || ""),  (accoms && accoms.toString() || ""), 1, {'nonInteraction': true, 'location': uawa.location});
                }
            };

            trc.send('pageview', sendSet);
            dl.push({'event': 'UATCECaddImpression'});
        })
    } catch(e) {
        cdl.error('GTM FR TC UATC SRP: '+e)
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>


/*******************************************************
                    DL UATC 04 Accom
********************************************************/
<script>
(function gtm_uatcdlAccom(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;

        cdl.DL_uatc = {
            profileid        : 'UA-33795090-1',
            cookiedomain     : 'urlaub.de',
            name             : 'CATTUATC',
            set             : {
                anonymizeIp    : true,
                location     : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                referrer     : document.referrer  || '',
                hostname     : loc && loc.hostname || ''
            },
            webanalytics     : {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location         : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                metrics         : {
                    metric1         : {'paxadult'                : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'                : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'                : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'                : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                    : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspagenbr) || ''},
                    metric7         : {'searchresultspages'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspages) || ''},
                    metric8         : {'searchresultsperpage'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultsperpage) || ''},
                    metric9         : {'searchresultstotal'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultstotal) || ''},
                    metric10         : {'bookingvalue'            : parseInt(cdpm.totalprice) || 0},
                    metric11         : {'depositvalue'            : parseInt(cdpm.depositvalue) || 0},
                    metric12         : {'discountvalue'            : parseInt(cdpm.discountvalue) || 0},
                    metric15        : {'hitcount'                : 1}
                },
                dimensions         : {
                    dimension1         : {'deptairport'                : cdpm.deptairport || cdpm.departureairportselected || 'empty'},
                    dimension2         : {'destination'                : cdpm.destination || 'empty'},
                    dimension4         : {'searchresultstop3'            : cdpm.srpparams && cdpm.srpparams.searchresultstop3 || ''},
                    dimension5         : {'deptdate'                    : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6         : {'appserver'                    : cdpm.appserver || 'empty'},
                    dimension7         : {'boardbasis'                    : cdpm.boardbasis || 'empty'},
                    dimension8         : {'budget'                        : ''},
                    dimension9         : {'duration'                    : ''+(cdpm.duration || 'empty')},
                    dimension10        : {'lob'                        : cdpm.lob || ''},
                    dimension11        : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12        : {'pageid'                        : cdpm.pageid || ''},
                    dimension13        : {'resortsearched'                : cdpm.srpparams && cdpm.srpparams.resort || ''},
                    dimension14        : {'sessid'                        : cdpm.sessionid || 'empty'},
                    dimension15        : {'starrating'                    : cdpm.starrating || 'empty'},
                    dimension16        : {'accomcode'                    : cdpm.accomcode || 'empty'},
                    dimension17        : {'accomname'                    : cdpm.accomname || 'empty'},
                    dimension18        : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19        : {'errorcode'                    : cdpm.errorcode || ''},
                    dimension20        : {'touroperator'                : cdpm.touroperator || 'empty'},
                    dimension21        : {'destination'                : cdpm.destination || 'empty'},
                    dimension22        : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23        : {'searchresultspagenbr'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultspagenbr || ''},
                    dimension24        : {'searchresultspages'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultspages || ''},
                    dimension25        : {'searchresultsperpage'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultsperpage || ''},
                    dimension26        : {'searchresultstotal'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultstotal || ''},
                    dimension28        : {'sortoption'                    : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension29        : {'sortoption'                    : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension30        : {'utmaguid'                    : cdpm.utmaguid || 'empty'},
                    dimension31        : {'utmbguid'                     : cdpm.utmbguid || 'empty'},
                    dimension32        : {'emailguid'                     : cdpm.emailguid || ''},
                    dimension33        : {'carrier'                     : cdpm.carrier && cdpm.carrier.code || ''},
                    dimension34     : {'paxadult'                    : ''+(cdpm.paxadult || cdpm.srchnbradults || 'empty')},
                    dimension35     : {'paxchild'                    : ''+(cdpm.paxchild || 'empty')},
                    dimension36     : {'paxinfant'                    : ''+(cdpm.paxinfant || 'empty')},
                    dimension37     : {'paxtotal'                    : ''+(cdpm.paxtotal || 'empty')},
                    dimension51     : {'gaguid'                        : cdpm.gaguid || 'empty'},
                    dimension58     : {'accomguid'                    : cdpm.accomguid || 'empty'},
                    dimension59     : {'roomcode1'                    : cdpm.roomcodes && cdpm.roomcodes[0] || 'empty'},
                    dimension60     : {'roomcode2'                    : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension61     : {'roomcode3'                    : cdpm.roomcodes && cdpm.roomcodes[2] || ''},
                    dimension62     : {'roomcode4'                    : cdpm.roomcodes && cdpm.roomcodes[3] || ''},
                    dimension63     : {'roomcode5'                    : cdpm.roomcodes && cdpm.roomcodes[4] || ''},
                    dimension65        : {'pagetimestamp'                 : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension103     : {'rooms'                        : ''+(cdpm.rooms || '0')},
                    dimension106     : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].arrive.date) || ''},
                    dimension107     : {'departuretimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].depart.date) || ''},
                    dimension108     : {'returndate'                    : cdl.gadate && cdl.gadate(cdpm.returndate || 0) || ''},
                    dimension109     : {'arrivaltimeinbound'            : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].arrive.date) || ''},
                    dimension110     : {'departuretimeinbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].depart.date) || ''},
                    dimension111     : {'totalprice'                    : ''+(cdpm.totalprice || '0')},
                    dimension112     : {'destinationcountry'            : cdpm.accomcountry || 'empty'},
                    dimension113     : {'destinationregion'            : cdpm.accomregion || 'empty'},
                    dimension114     : {'destinationresort'            : cdpm.accomresort || 'empty'},
                    dimension115     : {'errormessage'                : cdpm.errors.msg || ''},
                    dimension116     : {'depositvalue'                : ''+(cdpm.depositvalue || '')},
                    dimension117     : {'paymentfee'                    : ''+(cdpm.paymentfee || '')}
                }
            }
        };

        var accId = cdpm.accomguid || cdpm.accomcode || "";
        var accPos = window.sessionStorage && window.sessionStorage.getItem('gtm_srpaccomposition|'+accId)

        cdl.DL_uatc.webanalytics.addproduct = {
            id            : accId,
            name        : ((cdpm.accomname || "")+'|'+(cdpm.destairport || "")+'|'+(cdpm.accomcountry || "")+'|'+(cdpm.accomregion || "")+'|'+(cdpm.accomresort || "")).toLowerCase(),
            category    : ("en|"+(cdpm.lob || "")+'|'+(cdpm.holidaytype || "")).toLowerCase(),
            brand        : (cdpm.touroperator || "").toLowerCase(),
            variant        : ((cdpm.boardbasis || "")+'|'+(cdpm.deptairport || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.retdate || 0) || "")+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || cdpm.srchnbradults || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(cdpm.pricepp || "0")).toLowerCase(),
            list        : 'search|'+(cdpm.sortoption || cdpm.sortby || ""),
            position    : accPos || 0
        };
    } catch(e) {
        cdl.error('GTM FR TC UATCDL Accom: '+e)
    } finally {
        dl.push({'event': 'UATCDL Accom'})
    }
    return jQ && cdl && cdl.CATTParams && cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));

(function gtm_uatcAccom(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaprod = uawa.addproduct || {}
        var cdpm = CATTDL.CATTParams || {}

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        w.ga && w.ga(function gtm_useTracker() {
            var trc = w.ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = w.ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdpm.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdpm.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'    : cdpm.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })
            }

            if (cdpm.trailingsteps.replace(/.*accom\((\d)\).*$/g, '$1') === '1') {
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'        : uaprod.name,
                    'category'    : uaprod.category,
                    'brand'        : uaprod.brand,
                    'variant'    : uaprod.variant,
                    'list'        : uaprod.list,
                    'position'    : uaprod.position
                });

                w.ga(trackerName+'ec:setAction', 'click', {'list': uaprod.list});
                trc.send('event', 'ECProductListClick', uaprod.id,  ''+uaprod.position, 1, {'nonInteraction': true});
                dl.push({'event': 'UATCDL Accom EC'})
            };

            var interactionCounter = 1;
            jQ('a.voir[id!=link-availibility]').on('click', function gtm_clickAddProduct(e){
                var onclk = jQ(e.target).attr('onclick') || '';
                onclk = onclk && onclk.split(/\('|'\)/g) || '';
                onclk = onclk && onclk.length > 2 && parseInt(onclk[1]) || ''

                var resa = w.tagManageribe && w.tagManageribe.length && w.tagManageribe[0] || ''
                resa = resa && resa.offerList && resa.offerList.length > onclk && resa.offerList || ''
                resa = (resa && resa.filter(function(e){return typeof e.orderDisplay !== 'undefined' && e.orderDisplay === onclk}) || ['']).pop()

                var variant = ((cdpm.boardbasis || "")+'|'+
                (resa && resa.offerDepartureAirport && resa.offerDepartureAirport.replace(/^([^;]+).*/, '$1') || '')+'|'+
                (resa && resa.offerDate || '')+'|'+
                (cdl.gadate && cdl.gadate(cdpm.retdate || 0) || "")+'|'+
                (cdpm.paxtotal || "0")+'|'+
                (cdpm.paxadult || cdpm.srchnbradults || "0")+'|'+
                (cdpm.paxchild || "0")+'|'+
                (cdpm.paxinfant || "0")+'|'+
                (resa && resa.offerBestPrice || "0")).toLowerCase()

                w.ga(trackerName+'ec:addProduct', {
                    'id': uaprod.id,
                    'name': uaprod.name,
                    'category': uaprod.category,
                    'brand': (resa && resa.offerTourOperator || '').toLowerCase(),
                    'variant': variant
                });
                w.ga(trackerName+'ec:setAction', 'detail');
                trc.send('event', 'ECProductView', uaprod.id, ''+(interactionCounter++));
                dl.push({'event': 'UATCECaddProduct'});
            })

            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';

            trc.send('pageview', sendSet);
        })
    } catch(e) {
        cdl.error('GTM FR TC UATC Accom: '+e);
        dataLayer.push({'event': 'UATCECaddProduct'})
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>


/*******************************************************
                    DL UATC 05 Pax
********************************************************/
<script>
(function gtm_uatcdlPax(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try{
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;

        cdl.DL_uatc = {
            profileid        : 'UA-33795090-1',
            cookiedomain     : 'urlaub.de',
            name             : 'CATTUATC',
            set             : {
                anonymizeIp    : true,
                location     : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                referrer     : document.referrer  || '',
                hostname     : loc && loc.hostname || ''
            },
            webanalytics     : {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location         : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                addproduct         : {
                    id                : cdpm.accomguid || '',
                    name            : ((cdpm.accomname || '')+'|'+(cdpm.destairport || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || "",
                    category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand            : (cdpm.touroperator || '').toLowerCase() || "",
                    variant            : ((cdpm.boardbasis||"")+'|'+(cdpm.deptairport||cdpm.departureairportselected||"")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || 0) || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||cdpm.srchnbradults||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                    list            : ('search|'+(window.sessionStorage && window.sessionStorage.getItem('gtm_srpsortoption') || "")).toLowerCase(),
                    position        : window.sessionStorage && window.sessionStorage.getItem('gtm_srpaccomposition|'+cdpm.accomguid) || 0,
                    price            : cdpm.totalprice || 0,
                    quantity        : 1
                },
                metrics         : {
                    metric1         : {'paxadult'                : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'                : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'                : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'                : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                    : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspagenbr) || ''},
                    metric7         : {'searchresultspages'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspages) || ''},
                    metric8         : {'searchresultsperpage'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultsperpage) || ''},
                    metric9         : {'searchresultstotal'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultstotal) || ''},
                    metric10         : {'bookingvalue'            : parseInt(cdpm.totalprice) || 0},
                    metric11         : {'depositvalue'            : parseInt(cdpm.depositvalue) || 0},
                    metric12         : {'discountvalue'            : parseInt(cdpm.discountvalue) || 0},
                    metric13         : {'insurance'                : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.selected) || ''},
                    metric14        : {'luggage'                : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.selected) || ''},
                    metric15        : {'hitcount'                : 1},
                    metric16        : {'insurance value'        : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.addedcost) || ''},
                    metric17        : {'luggage value'            : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.addedcost) || ''},
                    metric18        : {'late booking fee'        : parseInt(cdpm.extras && cdpm.extras.latefees && +cdpm.extras.latefees.addedcost) || ''}
                },
                dimensions         : {
                    dimension1         : {'deptairport'                : cdpm.deptairport || cdpm.departureairportselected || 'empty'},
                    dimension2         : {'destination'                : cdpm.destination || 'empty'},
                    dimension4         : {'searchresultstop3'            : cdpm.srpparams && cdpm.srpparams.searchresultstop3 || ''},
                    dimension5         : {'deptdate'                    : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6         : {'appserver'                    : cdpm.appserver || 'empty'},
                    dimension7         : {'boardbasis'                    : cdpm.boardbasis || 'empty'},
                    dimension8         : {'budget'                        : ''},
                    dimension9         : {'duration'                    : ''+cdpm.duration || 'empty'},
                    dimension10        : {'lob'                        : cdpm.lob || ''},
                    dimension11        : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12        : {'pageid'                        : cdpm.pageid || ''},
                    dimension13        : {'resortsearched'                : cdpm.srpparams && cdpm.srpparams.resort || ''},
                    dimension14        : {'sessid'                        : cdpm.sessid || 'empty'},
                    dimension15        : {'starrating'                    : cdpm.starrating || 'empty'},
                    dimension16        : {'accomcode'                    : cdpm.accomcode || 'empty'},
                    dimension17        : {'accomname'                    : cdpm.accomname || 'empty'},
                    dimension18        : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19        : {'errorcode'                    : cdpm.errorcode || ''},
                    dimension20        : {'touroperator'                : cdpm.touroperator || 'empty'},
                    dimension21        : {'destinationsearched'        : cdpm.srpparams && cdpm.srpparams.destination || ''},
                    dimension22        : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23        : {'searchresultspagenbr'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultspagenbr || ''},
                    dimension24        : {'searchresultspages'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultspages || ''},
                    dimension25        : {'searchresultsperpage'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultsperpage || ''},
                    dimension26        : {'searchresultstotal'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultstotal || ''},
                    dimension28        : {'sortoption'                    : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension29        : {'sortoptionsession'            : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension30        : {'utmaguid'                    : cdpm.utmaguid || 'empty'},
                    dimension31        : {'utmbguid'                     : cdpm.utmbguid || 'empty'},
                    dimension32        : {'emailguid'                     : cdpm.emailguid || ''},
                    dimension33        : {'carrier'                     : cdpm.carrier && cdpm.carrier.code || 'empty'},
                    dimension34     : {'paxadult'                    : ''+cdpm.paxadult || cdpm.srchnbradults || '0'},
                    dimension35     : {'paxchild'                    : ''+cdpm.paxchild || '0'},
                    dimension36     : {'paxinfant'                    : ''+cdpm.paxinfant || '0'},
                    dimension37     : {'paxtotal'                    : ''+cdpm.paxtotal || '0'},
                    dimension51     : {'gaguid'                        : cdpm.gaguid || '0'},
                    dimension58     : {'accomguid'                    : cdpm.accomguid || 'empty'},
                    dimension59     : {'roomcode1'                    : cdpm.roomcodes && cdpm.roomcodes[0] || 'empty'},
                    dimension60     : {'roomcode2'                    : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension61     : {'roomcode3'                    : cdpm.roomcodes && cdpm.roomcodes[2] || ''},
                    dimension62     : {'roomcode4'                    : cdpm.roomcodes && cdpm.roomcodes[3] || ''},
                    dimension63     : {'roomcode5'                    : cdpm.roomcodes && cdpm.roomcodes[4] || ''},
                    dimension65        : {'pagetimestamp'                 : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension103     : {'rooms'                        : cdpm.rooms && ''+cdpm.rooms || '0'},
                    dimension106     : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].arrive.date) || ''},
                    dimension107     : {'departuretimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].depart.date) || ''},
                    dimension108     : {'returndate'                    : cdl.gadate && cdl.gadate(cdpm.returndate || 0) || ''},
                    dimension109     : {'arrivaltimeinbound'            : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].arrive.date) || ''},
                    dimension110     : {'departuretimeinbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].depart.date) || ''},
                    dimension111     : {'totalprice'                    : ''+cdpm.totalprice || '0'},
                    dimension112     : {'destinationcountry'            : cdpm.accomcountry || 'empty'},
                    dimension113     : {'destinationregion'            : cdpm.accomregion || 'empty'},
                    dimension114     : {'destinationresort'            : cdpm.accomresort || 'empty'},
                    dimension115     : {'errormessage'                : cdpm.errors.msg || ''},
                    dimension116     : {'depositvalue'                : ''+cdpm.depositvalue || '0'},
                    dimension117     : {'paymentfee'                    : ''+cdpm.paymentfee || ''}
                }
            }
        }
    } catch(e) {
        cdl.error('GTM FR TC UATCDL Pax: '+e)
    } finally {
        dl.push({'event': 'UATCDL Pax'})
    }
    return cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));

(function gtm_uatcPax(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaprod = uadl.webanalytics.addproduct || {}

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'    : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })
            }

            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';
            sendSet['hitCallback'] = function gtm_uatcCustAddProduct(){
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'        : uaprod.name,
                    'category'    : uaprod.category,
                    'brand'        : uaprod.brand,
                    'variant'    : uaprod.variant,
                    'price'        : uaprod.price,
                    'quantity'    : uaprod.quantity
                });

                w.ga(trackerName+'ec:setAction','checkout', {'step': 2, 'label': 'pax'})
                trc.send('event', 'ECProductView', uaprod.id, "1");
            };
            trc.send('pageview', sendSet);
        })
        dl.push({'event': 'UATCECcheckout'});
    } catch(e) {
        cdl.error('GTM FR TC UATC Pax: '+e);
        dataLayer.push({'event': 'UATCECcheckout'})
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>

/*******************************************************
                    DL UATC 06 Pay
********************************************************/
<script>
(function gtm_uatcdlPay(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;

        cdl.DL_uatc = {
            profileid        : 'UA-33795090-1',
            cookiedomain     : 'urlaub.de',
            name             : 'CATTUATC',
            set             : {
                anonymizeIp    : true,
                location     : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                referrer     : document.referrer  || '',
                hostname     : loc && loc.hostname || ''
            },
            webanalytics     : {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location         : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                addproduct         : {
                    id                : cdpm.accomguid || '',
                    name            : ((cdpm.accomname || '')+'|'+(cdpm.destairport || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || "",
                    category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand            : (cdpm.touroperator || '').toLowerCase() || "",
                    variant            : ((cdpm.boardbasis||"")+'|'+(cdpm.deptairport||cdpm.departureairportselected||"")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || 0) || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult|| cdpm.srchnbradults ||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                    list            : ('search|'+(window.sessionStorage && window.sessionStorage.getItem('gtm_srpsortoption') || "")).toLowerCase(),
                    position        : window.sessionStorage && window.sessionStorage.getItem('gtm_srpaccomposition|'+cdpm.accomguid) || 0,
                    price            : cdpm.totalprice || 0,
                    quantity        : 1
                },
                metrics         : {
                    metric1         : {'paxadult'                : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'                : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'                : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'                : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                    : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspagenbr) || ''},
                    metric7         : {'searchresultspages'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspages) || ''},
                    metric8         : {'searchresultsperpage'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultsperpage) || ''},
                    metric9         : {'searchresultstotal'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultstotal) || ''},
                    metric10         : {'bookingvalue'            : parseInt(cdpm.totalprice) || 0},
                    metric11         : {'depositvalue'            : parseInt(cdpm.depositvalue) || 0},
                    metric12         : {'discountvalue'            : parseInt(cdpm.discountvalue) || 0},
                    metric13         : {'insurance'                : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.selected) || ''},
                    metric14        : {'luggage'                : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.selected) || ''},
                    metric15        : {'hitcount'                : 1},
                    metric16        : {'insurance value'        : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.addedcost) || ''},
                    metric17        : {'luggage value'            : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.addedcost) || ''},
                    metric18        : {'late booking fee'        : parseInt(cdpm.extras && cdpm.extras.latefees && +cdpm.extras.latefees.addedcost) || ''}
                },
                dimensions         : {
                    dimension1         : {'deptairport'                : cdpm.deptairport || cdpm.departureairportselected || 'empty'},
                    dimension2         : {'destination'                : cdpm.destination || 'empty'},
                    dimension4         : {'searchresultstop3'            : cdpm.srpparams && cdpm.srpparams.searchresultstop3 || ''},
                    dimension5         : {'deptdate'                    : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6         : {'appserver'                    : cdpm.appserver || 'empty'},
                    dimension7         : {'boardbasis'                    : cdpm.boardbasis || 'empty'},
                    dimension8         : {'budget'                        : ''},
                    dimension9         : {'duration'                    : ''+cdpm.duration || 'empty'},
                    dimension10        : {'lob'                        : cdpm.lob || ''},
                    dimension11        : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12        : {'pageid'                        : cdpm.pageid || ''},
                    dimension13        : {'resortsearched'                : cdpm.srpparams && cdpm.srpparams.resort || ''},
                    dimension14        : {'sessid'                        : cdpm.sessid || 'empty'},
                    dimension15        : {'starrating'                    : cdpm.starrating || 'empty'},
                    dimension16        : {'accomcode'                    : cdpm.accomcode || 'empty'},
                    dimension17        : {'accomname'                    : cdpm.accomname || 'empty'},
                    dimension18        : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19        : {'errorcode'                    : cdpm.errorcode || ''},
                    dimension20        : {'touroperator'                : cdpm.touroperator || 'empty'},
                    dimension21        : {'destination'                : cdpm.srpparams && cdpm.srpparams.destination || ''},
                    dimension22        : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23        : {'searchresultspagenbr'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultspagenbr || ''},
                    dimension24        : {'searchresultspages'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultspages || ''},
                    dimension25        : {'searchresultsperpage'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultsperpage || ''},
                    dimension26        : {'searchresultstotal'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultstotal || ''},
                    dimension28        : {'sortoption'                    : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension29        : {'sortoptionsession'            : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension30        : {'utmaguid'                    : cdpm.utmaguid || 'empty'},
                    dimension31        : {'utmbguid'                     : cdpm.utmbguid || 'empty'},
                    dimension32        : {'emailguid'                     : cdpm.emailguid || ''},
                    dimension33        : {'carrier'                     : cdpm.carrier && cdpm.carrier.code || 'empty'},
                    dimension34     : {'paxadult'                    : ''+cdpm.paxadult || ''+cdpm.srchnbradults || '0'},
                    dimension35     : {'paxchild'                    : ''+cdpm.paxchild || '0'},
                    dimension36     : {'paxinfant'                    : ''+cdpm.paxinfant || '0'},
                    dimension37     : {'paxtotal'                    : ''+cdpm.paxtotal || '0'},
                    dimension38     : {'paymentoption'                : cdpm.paymentoption || 'empty'},
                    dimension39     : {'cardtype'                    : cdpm.cardtype || 'empty'},
                    dimension51     : {'gaguid'                        : cdpm.gaguid || 'empty'},
                    dimension58     : {'accomguid'                    : cdpm.accomguid || 'empty'},
                    dimension59     : {'roomcode1'                    : cdpm.roomcodes && cdpm.roomcodes[0] || 'empty'},
                    dimension60     : {'roomcode2'                    : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension61     : {'roomcode3'                    : cdpm.roomcodes && cdpm.roomcodes[2] || ''},
                    dimension62     : {'roomcode4'                    : cdpm.roomcodes && cdpm.roomcodes[3] || ''},
                    dimension63     : {'roomcode5'                    : cdpm.roomcodes && cdpm.roomcodes[4] || ''},
                    dimension65        : {'pagetimestamp'                 : cdl.gadate && cdl.gatime && (cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || '')},
                    dimension101     : {'depositselected'            : cdpm.depositselected || 'empty'},
                    dimension103     : {'rooms'                        : cdpm.rooms && ''+cdpm.rooms || '0'},
                    dimension106     : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails.outbound[0].arrive.date) || ''},
                    dimension107     : {'departuretimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails.outbound[0].depart.date) || ''},
                    dimension108     : {'returndate'                    : cdl.gadate && cdl.gadate(cdpm.returndate || 0) || ''},
                    dimension109     : {'arrivaltimeinbound'            : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].arrive && cdl.gatime(cdpm.flightdetails.inbound[0].arrive.date) || ''},
                    dimension110     : {'departuretimeinbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].depart && cdl.gatime(cdpm.flightdetails.inbound[0].depart.date) || ''},
                    dimension111     : {'totalprice'                    : ''+cdpm.totalprice || '0'},
                    dimension112     : {'destinationcountry'            : cdpm.accomcountry || 'empty'},
                    dimension113     : {'destinationregion'            : cdpm.accomregion || 'empty'},
                    dimension114     : {'destinationresort'            : cdpm.accomresort || 'empty'},
                    dimension115     : {'errormessage'                : cdpm.errors && cdpm.errors.msg || ''},
                    dimension116     : {'depositvalue'                : ''+cdpm.depositvalue || '0'},
                    dimension117     : {'paymentfee'                    : ''+cdpm.paymentfee || ''}
                }
            }
        }
    } catch(e) {
        cdl.error('GTM FR TC UATCDL Pay: '+e)
    } finally {
        dl.push({'event': 'UATCDL Pay'})
    }
    return cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));

(function gtm_uatcPay(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaprod = uadl.webanalytics.addproduct || {}

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'    : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })
            }

            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';
            sendSet['hitCallback'] = function gtm_uatcCustAddProduct(){
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'        : uaprod.name,
                    'category'    : uaprod.category,
                    'brand'        : uaprod.brand,
                    'variant'    : uaprod.variant,
                    'price'        : uaprod.price,
                    'quantity'    : uaprod.quantity
                });

                w.ga(trackerName+'ec:setAction','checkout', {'step': 3, 'label': 'pay'})
                trc.send('event', 'ECProductView', uaprod.id, "1");
            };
            trc.send('pageview', sendSet);
        })
        dl.push({'event': 'UATCECcheckout'});
    } catch(e) {
        cdl.error('GTM FR TC UATC Pay: '+e);
        dataLayer.push({'event': 'UATCECcheckout'})
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>


/*******************************************************
                    DL UATC 07 Conf
********************************************************/
<script>
(function gtm_uatcdlBook(jQ, dl, cdl, loc) {
    'use strict'
    if (jQ && cdl && cdl.CATTParams) try {
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams || {};

        cdl.DL_uatc = {
            profileid        : 'UA-33795090-1',
            cookiedomain     : 'urlaub.de',
            name             : 'CATTUATC',
            set             : {
                anonymizeIp    : true,`
                location     : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                referrer     : document.referrer  || '',
                hostname     : loc && loc.hostname || ''
            },
            webanalytics     : {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location         : loc && ((loc.hostname || '')+(loc.pathname || '')) || '',
                addproduct         : {
                    id                : cdpm.accomguid || '',
                    name            : ((cdpm.accomname || '')+'|'+(cdpm.destairport || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || "",
                    category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand            : (cdpm.touroperator || '').toLowerCase() || "",
                    variant            : ((cdpm.boardbasis||"")+'|'+(cdpm.deptairport||cdpm.departureairportselected||"")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || 0) || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult|| cdpm.srchnbradults ||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                    list            : ('search|'+(window.sessionStorage && window.sessionStorage.getItem('gtm_srpsortoption') || "")).toLowerCase(),
                    position        : window.sessionStorage && window.sessionStorage.getItem('gtm_srpaccomposition|'+cdpm.accomguid) || 0,
                    price            : cdpm.totalprice || 0,
                    quantity        : 1
                },
                purchase         : {
                    id                : cdpm.bookingref || (((document.referrer)?"empty_":"noReferrer_")+Math.random()),
                    affiliation        : '',
                    revenue            : cdpm.totalprice || 0,
                    tax                : '',
                    shipping        : '',
                    coupon            : cdpm.promotion && cdpm.promotion.code || ''
                },
                metrics         : {
                    metric1         : {'paxadult'                : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'                : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'                : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'                : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                    : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'    : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'        : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultstotal) || 0},
                    metric10         : {'totalprice'                : parseInt(cdpm.totalprice) || 0},
                    metric11         : {'depositvalue'            : parseInt(cdpm.depositvalue) || 0},
                    metric12         : {'discountvalue'            : parseInt(cdpm.discountvalue) || 0},
                    metric13         : {'insurance'                : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.selected) || 0},
                    metric14        : {'luggage'                : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.selected) || 0},
                    metric15        : {'hitcount'                : 1},
                    metric16        : {'insurance value'        : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.addedcost) || 0},
                    metric17        : {'luggage value'            : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.addedcost) || 0},
                    metric18        : {'late booking fee'        : parseInt(cdpm.extras && cdpm.extras.latefees && +cdpm.extras.latefees.addedcost) || 0},
                    metric19        : {'payment fee'            : parseInt(cdpm.paymentfee) || 0},
                    metric20        : {'promocodevalue'            : parseInt(cdpm.promotion && cdpm.promotion.value) || 0}
                },
                dimensions         : {
                    dimension1         : {'departureairportselected'    : cdpm.deptairport || cdpm.departureairportselected || 'empty'},
                    dimension2         : {'destination'                : cdpm.destination || 'empty'},
                    dimension4         : {'searchresultstop3'            : cdpm.srpparams && cdpm.srpparams.searchresultstop3 || ''},
                    dimension5         : {'deptdate'                    : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6         : {'appserver'                    : cdpm.appserver || 'empty'},
                    dimension7         : {'boardbasis'                    : cdpm.boardbasis || 'empty'},
                    dimension8         : {'budget'                        : ''},
                    dimension9         : {'duration'                    : ''+cdpm.duration || 'empty'},
                    dimension10        : {'lob'                        : cdpm.lob || ''},
                    dimension11        : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12        : {'pageid'                        : cdpm.pageid || ''},
                    dimension13        : {'resortsearched'                : cdpm.srpparams && cdpm.srpparams.resort || ''},
                    dimension14        : {'sessid'                        : cdpm.sessid || 'empty'},
                    dimension15        : {'starrating'                    : cdpm.starrating || 'empty'},
                    dimension16        : {'accomcode'                    : cdpm.accomcode || 'empty'},
                    dimension17        : {'accomname'                    : cdpm.accomname || 'empty'},
                    dimension18        : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19        : {'errorcode'                    : cdpm.errorcode || ''},
                    dimension20        : {'touroperator'                : cdpm.touroperator || 'empty'},
                    dimension21        : {'destination'                : cdpm.srpparams && cdpm.srpparams.destination || ''},
                    dimension22        : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23        : {'searchresultspagenbr'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultspagenbr || ''},
                    dimension24        : {'searchresultspages'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultspages || ''},
                    dimension25        : {'searchresultsperpage'        : cdpm.srpparams && ''+cdpm.srpparams.searchresultsperpage || ''},
                    dimension26        : {'searchresultstotal'            : cdpm.srpparams && ''+cdpm.srpparams.searchresultstotal || ''},
                    dimension28        : {'sortoption'                    : (cdpm.srpparams && cdpm.srpparams.sortoption) || ''},
                    dimension29        : {'sortoptionsession'            : (cdpm.srpparams && cdpm.srpparams.sortoption) || ''},
                    dimension30        : {'utmaguid'                    : cdpm.utmaguid || 'empty'},
                    dimension31        : {'utmbguid'                     : cdpm.utmbguid || 'empty'},
                    dimension32        : {'emailguid'                     : cdpm.emailguid || ''},
                    dimension33        : {'carrier'                     : cdpm.carrier && cdpm.carrier.code || 'empty'},
                    dimension34     : {'paxadult'                    : ''+cdpm.paxadult || ''+cdpm.srchnbradults || '0'},
                    dimension35     : {'paxchild'                    : ''+cdpm.paxchild || '0'},
                    dimension36     : {'paxinfant'                    : ''+cdpm.paxinfant || '0'},
                    dimension37     : {'paxtotal'                    : ''+cdpm.paxtotal || '0'},
                    dimension38     : {'paymentoption'                : cdpm.paymentoption || 'empty'},
                    dimension39     : {'cardtype'                    : cdpm.cardtype || 'empty'},
                    dimension40     : {'bookingref'                    : cdpm.bookingref || 'empty'},
                    dimension51     : {'gaguid'                        : cdpm.gaguid || 'empty'},
                    dimension58     : {'accomguid'                    : cdpm.accomguid || 'empty'},
                    dimension59     : {'roomcode1'                    : cdpm.roomcodes && cdpm.roomcodes[0] || 'empty'},
                    dimension60     : {'roomcode2'                    : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension61     : {'roomcode3'                    : cdpm.roomcodes && cdpm.roomcodes[2] || ''},
                    dimension62     : {'roomcode4'                    : cdpm.roomcodes && cdpm.roomcodes[3] || ''},
                    dimension63     : {'roomcode5'                    : cdpm.roomcodes && cdpm.roomcodes[4] || ''},
                    dimension70     : {'airline bookingref'            : cdpm.airlineref || 'empty'},
                    dimension71     : {'promocode'                    : cdpm.promotion && cdpm.promotion.code || ''},
                    dimension72     : {'promocode value'            : cdpm.promotion && cdpm.promotion.value || ''},
                    dimension65        : {'pagetimestamp'                 : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension101     : {'depositselected'            : cdpm.depositselected || 'empty'},
                    dimension103     : {'rooms'                        : ''+cdpm.rooms && ''+cdpm.rooms || 'empty'},
                    dimension106     : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].arrive.date) || ''},
                    dimension107     : {'departuretimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].depart.date) || ''},
                    dimension108     : {'returndate'                    : cdl.gadate && cdl.gadate(cdpm.returndate || 0) || ''},
                    dimension109     : {'arrivaltimeinbound'            : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].arrive.date) || ''},
                    dimension110     : {'departuretimeinbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].depart.date) || ''},
                    dimension111     : {'totalprice'                    : ''+cdpm.totalprice || '0'},
                    dimension112     : {'destinationcountry'            : cdpm.accomcountry || 'empty'},
                    dimension113     : {'destinationregion'            : cdpm.accomregion || 'empty'},
                    dimension114     : {'destinationresort'            : cdpm.accomresort || 'empty'},
                    dimension115     : {'errormessage'                : cdpm.errors && cdpm.errors.msg || ''},
                    dimension116     : {'depositvalue'                : ''+cdpm.depositvalue || '0'},
                    dimension117     : {'paymentfee'                    : ''+cdpm.paymentfee || ''}
                }
            }
        }
    } catch(e) {
        cdl.error('GTM FR TC UATCDL Book: '+e)
    } finally {
        dl.push({'event': 'UATCDL Book'})
    }
    return jQ && cdl && cdl.CATTParams && cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));

(function gtm_uatcBook(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var cdpm = cdl.CATTParams;
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var uaprod = uadl.webanalytics.addproduct || {};
        var uapurch = uadl.webanalytics.purchase || {};

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'    : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })
            }

            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';
            sendSet['hitCallback'] = function gtm_uatcBookAddProduct(){
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'        : uaprod.name,
                    'category'    : uaprod.category,
                    'brand'        : uaprod.brand,
                    'variant'    : uaprod.variant,
                    'price'        : uaprod.price,
                    'quantity'    : uaprod.quantity
                });
                w.ga(trackerName+'ec:setAction','purchase', {
                    'id'             : uapurch.id,
                    'affiliation'     : uapurch.affiliation,
                    'revenue'         : uapurch.revenue,
                    'tax'             : uapurch.tax,
                    'shipping'         : uapurch.shipping,
                    'coupon'         : uapurch.coupon
                });
                trc.send('event', 'ECPurchase', uapurch.id, "1");
            };
            trc.send('pageview', sendSet);
        })
        dl.push({'event': 'UATCECTransaction'});
    } catch(e) {
        cdl.error('GTM FR TC UATC Book: '+e);
        dataLayer.push({'event': 'UATCECTransaction'})
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer))
</script>



/*******************************************************
                    UATC 01 LP
********************************************************/

ga('send', 'pageview', {
  'page': '/my-new-page',
  'hitCallback': function() {
    alert('analytics.js done sending data');
  }
});

ga('set', 'page', '/my-custom-page');
ga('send', 'pageview');
ga('send', 'event', 'image1', 'clicked');
ga('send', 'event', 'image2', 'clicked');

window.ga(function(){
    var trc = ga.getByName('CATTUATC')
    trc.set('options', 'feat1')
})

window.ga(function(){
    var trc = ga.getByName('CATTUATC')
    trc.get('options')
})


/* Events */

<script>
(function gtm_uatcevents(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) try {

        var cdpm = cdl.CATTParams || [];
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var wgetData = (window.getPageData && window.getPageData(location.pathname) || {});

        if (cdom && cdom.id) {
            if (/gplus|tweet|facebook/i.test(cdom.id)) try {
                w.ga(trackerName+'send', 'event'
                    , 'SocialLinks'
                    , ((/[^_]+/.exec(cdom.id) || []).pop() || "")
                    , ((/[_](.+)/.exec(cdom.id) || []).pop() || "")
                    , {'nonInteraction': false, 'page': uawa.page});
            } catch(e) {
                cdl.error('GTM UATC Events Social Links: '+e)
            } else if (/payment-promo_entry_box/i.test(cdom.id)) try {
                if (cdom.data && typeof cdom.data == 'string') setTimeout(function gtm_promoCodeEvt(){
                        w.ga(trackerName+'send', 'event'
                        , 'PromoCodes'
                        , cdom.data && typeof cdom.data == 'string' && cdom.data || ''
                        , /invalid/i.test(cdom.rawEvent.currentTarget.className)?'PromoCode invalid':'PromoCode Valid'
                        , parseInt(wgetData.promotion && wgetData.promotion.promoDiscount) || 0
                        , {'nonInteraction': false, 'page': uawa.page});
                }, 500)
            } catch(e) {
                cdl.error('GTM UATC Events PromoCodes: '+e)
            }
        }
    } catch(e) {
        cdl.error('GTM UATC Events: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>


/* Errors */
<script>
(function gtm_UATCErrors(jQ, loc, cdl, w) {
    'use strict'
    if (jQ && cdl && cdl.CATTParams) try{
        var twlh = cdl.twlh
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams;
        var pageData = cdpm.urlparams.pathname;
        var wgetData = (w.getPageData && w.getPageData(pageData) || {});

        var errorcode = wgetData.response && wgetData.response.error && wgetData.response.error.code || "";
        var errormsg = wgetData.response && wgetData.response.error && wgetData.response.error.description;
        cdpm.errors.code = errorcode;
        cdpm.errors.msg = errormsg;

        if (errorcode || errormsg) w.ga(cdl.DL_uatc.name+'.send', 'event', 'Errors', errorcode || 'unknown',  errormsg || 'unknown', 1, {'nonInteraction': true});

    } catch(e) {
        var msg = 'GTM UATC Errors: '+e;
        console && ((console.error)?console.error(msg):console.log(msg))
    }
    return 1
}(window.jQuery, document.location, window.CATTDL, window))
</script>
