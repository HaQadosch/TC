<script id='GTM-TZ9GH9_evtAccomImpression'>
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
                , { 'page'              : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    ,'dimension5'       : cdl.gadate && cdl.gadate(cdpm.deptdate || 0)
                    ,'dimension10'      : cdpm.lob || ''
                    ,'dimension11'      : cdpm.holidaytype || ''
                    ,'dimension12'      : cdpm.pageid || ''
                    ,'dimension14'      : cdpm.sessionid || ''
                    ,'dimension16'      : cdpm.accomcode || ''
                    ,'dimension51'      : cdpm.gaguid || 'empty'
                    ,'dimension55'      : 'event'
                    ,'dimension65'      : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    ,'dimension75'      : ''+(window.Date && window.Date.now() || 0)
                    ,'dimension118'     : (cdurl && cdurl.pathname || location.pathname || '')
                    ,'dimension119'     : (cdurl && cdurl.paramstring || location.search || '')
                    ,'metric15'         : 1
                    ,'metric51'         : alldates || 0
                    ,'metric52'         : altdates || 0
                    ,'metric53'         : seldate || 0
                    ,'nonInteraction'   : evtnoninteraction});
            } catch(e) { console.info('GTM Evt 03 Accom Calendar Impression - GA',e) }
        });

        ready('#PackageSlickFull', function(element){
            try { 
                var cdpm = cdl.CATTParams || [];
                var uatrc = (uadl.name+".") || ".";
                var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
                var uawa = uadl.webanalytics || {};
                var lobholidaytypepageid = cdpm && cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || cdpm.domevents && cdpm.domevents.data && cdpm.domevents.data.productId || 'accomguid')        
                var cdurl = cdpm.urlparams || {};

                var mainimg = $('#PackageSlickFull div.PackageSlick-slide.slick-slide.slick-active')
                var index = mainimg.attr('index');
                var src = mainimg.children().attr('src');

                var evtcategory = 'Accom PopUp Carousel';
                var evtaction = 'Open';
                var evtlabel = 'index: '+index+'|'+'src: '+src;
                var evtvalue = 1;
                var evtnoninteraction = 1;

                function UAevent(category,action,label,value,noninteraction) {
                    w.ga(uatrc+'send', 'event'
                    , category
                    , action
                    , label
                    , 1
                    , { 'page'              : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension5'       : cdl.gadate && cdl.gadate(cdpm.deptdate || 0)
                        ,'dimension10'      : cdpm.lob || ''
                        ,'dimension11'      : cdpm.holidaytype || ''
                        ,'dimension12'      : cdpm.pageid || ''
                        ,'dimension14'      : cdpm.sessionid || ''
                        ,'dimension16'      : cdpm.accomcode || ''
                        ,'dimension51'      : cdpm.gaguid || 'empty'
                        ,'dimension55'      : 'event'
                        ,'dimension58'      : cdpm.accomguid || ''
                        ,'dimension65'      : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75'      : ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118'     : (cdurl && cdurl.pathname || location.pathname || '')
                        ,'dimension119'     : (cdurl && cdurl.paramstring || location.search || '')
                        ,'metric15'         : 1
                        ,'nonInteraction'   : noninteraction
                    });
                };
                function GAevent(category,action,label,value,noninteraction) {
                    w._gaq.push([gatrc+'_trackEvent'
                    , category
                    , action
                    , label
                    , value  
                    , {'noninteraction': noninteraction}]); 
                };

                setTimeout(function ButtonClicks(){
                    if(!/gtm_uabound/i.test(jQ('#PackageSlickFull button.slick-next').attr('class'))){
                        $('#PackageSlickFull button.slick-next').addClass('gtm_uabound');
                         $('#PackageSlickFull button.slick-next').click(function(e){
                            var clc_mainimg = $(this).parent().find('div.PackageSlick-slide.slick-slide.slick-active')
                            var clc_index = clc_mainimg.attr('index');
                            var clc_src = clc_mainimg.children().attr('src')

                            var clc_evtcategory = 'Accom PopUp Carousel';
                            var clc_evtaction = 'Next Button'
                            var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                            var clc_evtvalue = 1;
                            var clc_evtnoninteraction = 1;
                            UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                            GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                        })
                    };
                    if(!/gtm_uabound/i.test(jQ('#PackageSlickFull button.slick-prev').attr('class'))){
                        $('#PackageSlickFull button.slick-prev').addClass('gtm_uabound');
                        $('#PackageSlickFull button.slick-prev').click(function(e){
                            var clc_mainimg = $(this).parent().find('div.PackageSlick-slide.slick-slide.slick-active')
                            var clc_index = clc_mainimg.attr('index');
                            var clc_src = clc_mainimg.children().attr('src')

                            var clc_evtcategory = 'Accom PopUp Carousel';
                            var clc_evtaction = 'Previous Button'
                            var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                            var clc_evtvalue = 1;
                            var clc_evtnoninteraction = 1;
                            UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                            GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                        })
                    };
                    if(!/gtm_uabound/i.test(jQ('#PackageSlickFullNav button.slick-next').attr('class'))){
                        $('#PackageSlickFullNav button.slick-next').addClass('gtm_uabound');
                         $('#PackageSlickFullNav button.slick-next').click(function(e){
                            var clc_mainimg = $('#PackageSlickFull div.PackageSlick-slide.slick-slide.slick-active')
                            var clc_index = clc_mainimg.attr('index');
                            var clc_src = clc_mainimg.children().attr('src')

                            var clc_evtcategory = 'Accom PopUp Carousel';
                            var clc_evtaction = 'Items Next Button'
                            var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                            var clc_evtvalue = 1;
                            var clc_evtnoninteraction = 1;
                            UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                            GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                        })
                    };
                    if(!/gtm_uabound/i.test(jQ('#PackageSlickFullNav button.slick-prev').attr('class'))){
                        $('#PackageSlickFullNav button.slick-prev').addClass('gtm_uabound');
                        $('#PackageSlickFullNav button.slick-prev').click(function(e){
                            var clc_mainimg = $('#PackageSlickFull div.PackageSlick-slide.slick-slide.slick-active')
                            var clc_index = clc_mainimg.attr('index');
                            var clc_src = clc_mainimg.children().attr('src')

                            var clc_evtcategory = 'Accom PopUp Carousel';
                            var clc_evtaction = 'Items Previous Button'
                            var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                            var clc_evtvalue = 1;
                            var clc_evtnoninteraction = 1;
                            UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                            GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                        })
                    };
                    if(!/gtm_uabound/i.test(jQ('#PackageSlickFullNav div.PackageSlick-slide.slick-slide').attr('class'))){
                        $('#PackageSlickFullNav div.PackageSlick-slide.slick-slide').addClass('gtm_uabound');
                        $('#PackageSlickFullNav div.PackageSlick-slide.slick-slide').click(function(e){
                            var clc_mainimg = $(this)
                            var clc_index = clc_mainimg.attr('index');
                            var clc_src = clc_mainimg.children().attr('src')

                            var clc_evtcategory = 'Accom PopUp Carousel';
                            var clc_evtaction = 'Carousel Items'
                            var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                            var clc_evtvalue = 1;
                            var clc_evtnoninteraction = 1;
                            UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                            GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                        })
                    };
                },1500)

            } catch(e) { console.info('GTM Evt 03 Accom Carousel PopUp - GA',e) }
        });
        // later, you can stop observing
        //observer.disconnect();

    } catch(e) {
        cdl.error('GTM Evt 03 Accom Impression: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>