<script id='GTM-TZ9GH9_evtSRPFacet'>
(function gtm_evtSRPFacet(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdurl = cdpm.urlparams || {};

        if(!w.ga || w.ga.llength < 1) { w.ga=w.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date; w.ga=w.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date };
       
        var wgD = window.getPageData('/search');
        var eventCat = 'SRP Facets';
        
        function UAevent(category,action,label,value,noninteraction) {
            w.ga(uatrc+'send', 'event'
            , category
            , action
            , label
            , 1
            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension51'  : cdpm.gaguid || 'empty'
                ,'dimension55'  : 'event'
                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                ,'dimension118' : (cdurl && cdurl.pathname || location.pathname || '')
                ,'dimension119' : (cdurl && cdurl.paramstring || location.search || '') 
               ,'nonInteraction': noninteraction
            });
        };
        function GAevent(category,action,label,value,noninteraction) {
            w._gaq.push([gatrc+'_trackEvent'
            , category
            , action
            , label
            , value  
            , {'noninteraction': noninteraction}]); 
        }

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (!trc) {
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            };
            ;
            //SRP Facet commercialDestination
            if (/srp-facet-commercialDestination/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'commercialDestination';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Destination: '+e)}
            }
            //SRP Facet Hotel Search
            else if (/(srp-facet-$|srp-facet-hotelName)/.test(cdom.id)){
              if (cdom && cdom.data !== 'selectedItem') {  
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Hotel search';
                        var evtlabel = cdom && cdom.data || '';
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
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
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet depAirport: '+e)}
            }
            //SRP Facet resortCategory
            else if (/srp-facet-resortCategory/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'resortCategory';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet depAirport: '+e)}
            }
            //SRP Facet TripAdvisorRating
            else if (/srp-facet-tripAdvisor/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'TripAdvisorRating';
                        var evtlabel = ''+(cdom && cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet TripAdvisorRating: '+e)}
            }
            //SRP Facet StarRating
            else if (/srp-facet-stars/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Rating';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Rating: '+e)}
            }
            //SRP Facet Board Basis
            else if (/srp-facet-boardType/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Board Basis';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Board Basis: '+e)}
            }
            //SRP Facet Price per Adult
            else if (/srp-facet-priceRange/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Price per Adult';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Price per Adult: '+e)}
            }
            //SRP Facet Holiday Type
            else if (/srp-facet-concept/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Holiday Type';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Holiday Type: '+e)}
            }
            //SRP Facet Discount
            else if (/srp-facet-discount/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Discount';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Discount: '+e)}
            //SRP Brand
            } else if (/srp-facet-brand/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Brand';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Brand: '+e)}
            //SRP Savings
            } else if (/srp-facet-savings/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Savings';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Savings: '+e)}
            //SRP Kids from £1
            } else if (/srp-facet-freeChildFlag/.test(cdom.id)) {
                  try {
                        var evtcategory = eventCat;
                        var evtaction = 'Kids from £1';
                        var evtlabel = cdom && (cdom.data && cdom.data.title || cdom.data || '');
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Kids from £1: '+e)}
            } else {
                    try {
                        var evtcategory = eventCat;
                        var evtaction = $(cdom.rawEvent.originalEvent.path).eq(3).find('div.bold.facetTitle').text();
                        var evtlabel = ''+(cdom && (cdom.data && cdom.data.title || cdom.data || 'undo'));
                        var evtvalue = 1;
                        var evtnoninteraction = 0;
                        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                    } catch(e) {cdl.info('GTM Evt 02 SRP - Facet Other: '+e)}
            }
        });

    dl.push({'event': 'UA Evt SRP Facet'});
    window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UA Evt SRP Facet'});

    } catch(e) {
        cdl.error('GTM UK TC UA Evt SRP Facet: '+e)
    } 
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>