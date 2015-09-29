<script id='GTM-TZ9GH9_evtAccomCalendarImpression'>
(function gtm_evtAccomCalendarImpression(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl && (w.MutationObserver || w.WebKitMutationObserver)) 
        try 
    {
        (function(win){
                'use strict';

                var listeners = [], 
                doc = win.document, 
                MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
                observer;
                
                function ready(selector, fn){
                    // Store the selector and callback to be monitored
                    listeners.push({
                        selector: selector,
                        fn: fn
                    });
                    if(!observer){
                        // Watch for changes in the document
                        observer = new MutationObserver(check);
                        observer.observe(doc.documentElement, {
                            childList: true,
                            subtree: true
                        });
                    }
                    // Check if the element is currently in the DOM
                    check();
                }
                function check(){
                    // Check the DOM for elements matching a stored selector
                    for(var i = 0, len = listeners.length, listener, elements; i < len; i++){
                        listener = listeners[i];
                        // Query for elements matching the specified selector
                        elements = doc.querySelectorAll(listener.selector);
                        for(var j = 0, jLen = elements.length, element; j < jLen; j++){
                            element = elements[j];
                            // Make sure the callback isn't invoked with the 
                            // same element more than once
                            if(!element.ready){
                                element.ready = true;
                                // Invoke the callback with the element
                                listener.fn.call(element, element);
                            }
                        }
                    }
                }

                // Expose `ready`
                win.ready = ready;       
        })(this)

        ready('#CalendarBody', function(element){
            try { 
                var cdpm = cdl.CATTParams || [];
                var uatrc = (uadl.name+".") || ".";
                var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
                var uawa = uadl.webanalytics || {};
                var lobholidaytypepageid = cdpm && cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || cdpm.domevents && cdpm.domevents.data && cdpm.domevents.data.productId || 'accomguid')        
                var cdurl = cdpm.urlparams || {};

                var alldates = jQ(element).find('div.Event.hasEvent').length || 0;
                var altdates = jQ(element).find('div.Event.unavailableRoom').length || 0;
                var seldate = jQ(element).find('span.icon.airplaneE').length || 0;

                var evtcategory = 'Accom_Impression_Calendar';
                var evtaction = 'page view'
                var evtlabel = lobholidaytypepageid;
                var evtvalue = 1;
                var evtnoninteraction = 1;

                w.ga(uatrc+'send', 'event'
                , evtcategory
                , evtaction
                , evtlabel
                , 1
                , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    ,'dimension10'  : cdpm.lob || ''
                    ,'dimension11'  : cdpm.holidaytype || ''
                    ,'dimension12'  : cdpm.pageid || ''
                    ,'dimension51'  : cdpm.gaguid || 'empty'
                    ,'dimension55'  : 'event'
                    ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                    ,'dimension118' : (cdurl && cdurl.pathname || location.pathname || '')
                    ,'dimension119' : (cdurl && cdurl.paramstring || location.search || '')
                    ,'metric15'     : 1
                    ,'metric51'     : alldates || 0
                    ,'metric52'     : altdates || 0
                    ,'metric53'     : seldate || 0
                }                
                , {'nonInteraction': evtnoninteraction});
            } catch(e) { console.info('GTM Evt 03 Accom Calendar Impression - GA',e) }
        });

        // later, you can stop observing
        //observer.disconnect();

    } catch(e) {
        cdl.error('GTM Evt 03 Accom Calendar Impression: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>