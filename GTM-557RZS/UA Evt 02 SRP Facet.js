<script id='GTM-557RZS_evtSRPFacet'>
(function gtm_evtSRPFacet(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdurl = cdpm.urlparams || {};

        if (!window.ga || window.ga.length < 1) {
           (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        }
       
        var wgD = window.getPageData('/search');
        var eventCat = 'SRP Facets';
        
        function UAevent(category,action,label,value,noninteraction) {
            w.ga(uatrc+'send', 'event'
            , category
            , action
            , label
            , 1
            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension30'  : cdpm.gaguid || 'empty'
                ,'dimension115' : cdurl && (cdurl.pathname || location.pathname || '')+(cdurl.paramstring || location.search || '')
                ,'dimension119'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'nonInteraction': noninteraction});
        };

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            };
            ;
            //SRP Facet destinationCategory
            if (/srp-facet-destinationCategory/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'destinationCategory';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Destination: '+e)}
            }
            //SRP Facet regionCategory
            else if (/srp-facet-regionCategory/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'regionCategory';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Region: '+e)}
            }
            //SRP Facet resortCategory
            else if (/srp-facet-resortCategory/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'resortCategory';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Resort: '+e)}
            }
            //SRP Facet Hotel Search
            else if (/(srp-facet-$|srp-facet-hotelName)/.test(cdom.id)){
              if (cdom && cdom.data !== 'selectedItem') {  
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Hotel search';
                        var evtlabel = cdom && cdom.data || '';
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Hotel Search: '+e)}
              }
            }
            //SRP Facet depAirport
            else if (/srp-facet-depAirport/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'depAirport';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet depAirport: '+e)}
            }
            //SRP Facet resortCategory
            else if (/srp-facet-resortCategory/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'resortCategory';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet depAirport: '+e)}
            }
            //SRP Facet TripAdvisorRating
            else if (/srp-facet-zoover/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'ZooverRating';
                        var evtlabel = ''+(cdom && cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet ZooverRating: '+e)}
            }
            //SRP Facet StarRating
            else if (/srp-facet-stars/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Rating';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Rating: '+e)}
            }
            //SRP Facet Board Basis
            else if (/srp-facet-boardType/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Board Basis';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Board Basis: '+e)}
            }
            //SRP Facet Price per Adult
            else if (/srp-facet-priceRange/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Price per Adult';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Price per Adult: '+e)}
            }
            //SRP Facet Accom Type
            else if (/srp-facet-accommodationType/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Accom Type';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Accom Type: '+e)}
            }
            //SRP Facet Discount
            else if (/srp-facet-discount/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Discount';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Discount: '+e)}
            //SRP Brochure
            } else if (/srp-facet-brochureName/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Brochure';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Brochure: '+e)}
            //SRP Savings
            } else if (/srp-facet-savings/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Savings';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Savings: '+e)}
            //SRP Facilities
            } else if (/srp-facet-facilities/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Facilities';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Facilities: '+e)}
            } else {
                    try {
                        var evtcategory = eventCat;
                        var evtaction = $(cdom.rawEvent.originalEvent.path).eq(3).find('div.bold.facetTitle').text();
                        var evtlabel = ''+(cdom && (cdom.data && cdom.data.title || cdom.data || 'undo'));
                        var evtvalue = 1;
                        var evtnoninteraction = false;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Other: '+e)}
            }
        });

    dl.push({'event': 'UA Evt SRP Facet'});
    window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UA Evt SRP Facet'});

    } catch(e) {
        cdl.error('GTM NL NEC UA Evt SRP Facet: '+e)
    } 
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>