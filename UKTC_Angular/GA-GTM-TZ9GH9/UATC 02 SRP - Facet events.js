<script id='gtm_uatcSRPfacet'>
(function gtm_uatcSRPfacet(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || "";
        var cdpm = cdl.CATTParams;
        var uawa = uadl.webanalytics || {};
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || location.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || location.search || '';
        var lochref = cdurl && cdurl.fullurl || location.href || '';
        var lochost = location.hostname || location.host || '';        
        var uaImp = uadl.webanalytics.addimpression || [];
        var cdom = cdpm.domevents || {};

        if(!window.ga) {(function uatcGA(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga')};
         
        //if (!/thomascook\.com\/search/.test(cdurl.referrer) && cdom){
            //$('div.row.facetContainer.ng-scope').on("change",function(e){
                var wgD = window.getPageData('/search');
                var eventCat = 'SRP Facets';

                window.ga && window.ga(function gtm_useTracker() {
                    var trc = ga.getByName(uadl.name)
                    if (!trc) {
                        // console.info('no trc')
                        w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                        trc = ga.getByName(uadl.name)
                        // console.info('trc', trc)
                        // console.info('clientID', trc.get('clientId'))
                    }
                    var sendSet = {};
                   
                    sendSet['page'] = ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || '';
                    sendSet['dimension51'] = cdpm.gaguid || '';
                    sendSet['dimension52'] = window.userId || '';
                    sendSet['dimension55'] = 'event';
                    sendSet['dimension65'] = cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || '';
                    sendSet['dimension75'] = ''+(window.Date && window.Date.now() || 0);
                    sendSet['dimension118'] = (locpathname || '');
                    sendSet['dimension119'] = (locsearch || '');

                    sendSet['page'] = uawa.page;

                    if(/undo/i.test(cdom.id)){
                        /*var eventAct = (/facet-slider/i.test(cdom.id)?'Rating':
                                            (/boardBasis/i.test(cdom.id)?'Board Basis':
                                                (/commercialDestination/i.test(cdom.id)?'Destinations':
                                                    (/depAirport/i.test(cdom.id)?'Departure Airport':
                                                        (/resortCategory/i.test(cdom.id)?'Resorts':''
                                                            (/pricePerAdult/i.test(cdom.id)?'Price per Adult':
                                                                (/holidayType/i.test(cdom.id)?'Holiday Type':
                                                                    (/discount/i.test(cdom.id)?'Discount':
                                                                        (/brand/i.test(cdom.id)?'Brand':
                                                                            (/savings/i.test(cdom.id)?'Savings':'na'
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        );*/    
                                                            
                        window.ga(trackerName+'send','event'
                            , eventCat
                            , $(cdom.rawEvent.originalEvent.path).eq(3).find('div.bold.facetTitle').text()
                            , 'undo'
                            , parseInt(cdom.data && cdom.data.value) || 0
                            , sendSet
                            , {'nonInteraction': false})
                    } else if (/srp-facet-search\.filters\.commercialDestination/.test(cdom.id)) {
                        window.ga(trackerName+'send','event'
                            , eventCat
                            , 'commercialDestination'
                            , cdom.rawEvent && cdom.rawEvent.target && cdom.rawEvent.target.value || ''
                            , 0
                            , sendSet
                            , {'nonInteraction': false})
                    } else if (/srp-facet-search\.filters\.depAirport/.test(cdom.id)) {
                        window.ga(trackerName+'send','event'
                            , eventCat
                            , 'depAirport'
                            , cdom.rawEvent && cdom.rawEvent.target && cdom.rawEvent.target.value || ''
                            , 0
                            , sendSet
                            , {'nonInteraction': false})
                    } else if (/srp-facet-search\.filters\.resortCategory/.test(cdom.id)) {
                        window.ga(trackerName+'send','event'
                            , eventCat
                            , 'resortCategory'
                            , cdom.rawEvent && cdom.rawEvent.target && cdom.rawEvent.target.value || ''
                            , 0
                            , sendSet
                            , {'nonInteraction': false})                        
                    } else if (/srp-facet-Hotel\ssearch/.test(cdom.id)) {
                        if(cdom.data === (cdom.rawEvent && cdom.rawEvent.target && cdom.rawEvent.target.value)) {
                        // window.ga(trackerName+'send','event'
                        //     , eventCat
                        //     , 'Hotel search'
                        //     , (cdom.rawEvent && cdom.rawEvent.target && cdom.rawEvent.target.value) || ''
                        //     , 0
                        //     , sendSet
                        //     , {'nonInteraction': false})
                        console.log('Facet rawEvent',cdom.rawEvent && cdom.rawEvent.target && cdom.rawEvent.target.value);
                        console.log('Facet data',cdom.data);
                        }
                    } else {
                        window.ga(trackerName+'send','event'
                            , eventCat
                            , $(cdom.rawEvent.originalEvent.path).eq(3).find('div.bold.facetTitle').text()
                            , cdom.data && cdom.data.title || ''
                            , parseInt(cdom.data && cdom.data.value) || 0
                            , sendSet
                            , {'nonInteraction': false})
                    }
                });
            //});
        //};

            dl.push({'event': 'UATC facet event'});
            window.gatcDL && gatcDL.push({'event': 'UATC facet event'});

    } catch(e) {
        cdl.error('GTM UK TC UATC facet event: '+e)
    } 
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>
