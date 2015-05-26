<script>
(function gtm_uatcevents(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) try {
        var cdpm = cdl.CATTParams || [];
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var wgetData = (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname) || {}); 
        var lobholidaytypepageid = cdpm && cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || cdpm.domevents && cdpm.domevents.data && cdpm.domevents.data.productId || 'accomguid')        

        if (cdom && cdom.id) {
            if (/gplus|tweet|facebook/i.test(cdom.id)) try {
                var cdl = CATTDL || {};             
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                w.ga(trackerName+'send', 'event'
                    , 'SocialLinks'
                    , ((/[^_]+/.exec(cdom.id) || []).pop() || "")
                    , ((/[_](.+)/.exec(cdom.id) || []).pop() || "")
                    , 1
                    , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51'  : cdpm.gaguid || 'empty'
                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                        ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                    }               
                    , {'nonInteraction': false});
            } catch(e) {
                cdl.error('GTM UATC Events Social Links: '+e)
            } else if (/payment-promo_entry_box/i.test(cdom.id)) try {
                var cdl = CATTDL || {};             
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};        
                if (cdom.data && typeof cdom.data == 'string') setTimeout(function gtm_promoCodeEvt(){
                    w.ga(trackerName+'send', 'event'
                    , 'PromoCodes'
                    , cdom.data && typeof cdom.data == 'string' && cdom.data || ''
                    , /invalid/i.test(cdom.rawEvent.currentTarget.className)?'PromoCode invalid':'PromoCode Valid'
                    , parseInt(wgetData.promotion && wgetData.promotion.promoDiscount) || 0
                    , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51'  : cdpm.gaguid || 'empty'
                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                        ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                    }  
                        , {'nonInteraction': false});
                }, 500)
            } catch(e) {
                cdl.error('GTM UATC Events PromoCodes: '+e)
            } else if (/checkout-print-page/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                    w.ga(trackerName+'send', 'event'
                    , 'PrintBookingConfirmation'
                    , cdpm.bookingref || ''
                    , cdpm.airlineref || ''
                    , 1
                    , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51'  : cdpm.gaguid || 'empty'
                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                        ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                    }            
                    , {'nonInteraction': false});
            } catch(e) {
                cdl.error('GTM UATC Events PrintBookingConfirmation: '+e)
            } else if (/confirmation-holiday_extras_link/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                    w.ga(trackerName+'send', 'event'
                    , 'HolidayExtrasLink'
                    , cdpm.bookingref || ''
                    , cdpm.airlineref || ''
                    , 1
                    , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51'  : cdpm.gaguid || 'empty'
                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                        ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                    }            
                    , {'nonInteraction': false});
            } catch(e) {
                cdl.error('GTM UATC Events Holiday Essentials BookingConfirmation: '+e)
            }else if (/payment-submit/i.test(cdom.id)) try {
                var cdl = CATTDL || {};             
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};    
                var cdurl = cdpm.urlparams || {};                     
                    w.ga(trackerName+'send', 'event'
                    , 'PaymentSubmitButton'
                    , cdpm.lob || ''
                    , cdpm.holidaytype || ''
                    , 1
                    , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51'  : cdpm.gaguid || 'empty'
                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                        ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                    }             
                    , {'nonInteraction': false});
            } catch(e) {
                cdl.error('GTM UATC Events PaymentSubmitButton: '+e)
            } else if (/accom-hotelVideo/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                //UA
                    w.ga(trackerName+'send', 'event'
                            , 'Videoclicks'
                            , 'Hotelvideo'
                            , lobholidaytypepageid
                            , 1
                            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51'  : cdpm.gaguid || 'empty'
                                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                            }                           
                            , {'nonInteraction': true});
                //GA
                    w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                            , 'Videoclicks'
                            , 'Hotelvideo'
                            , lobholidaytypepageid
                            , 1     
                            , {'noninteraction': true}]);
            } catch(e) {
                cdl.error('GTM UATC Events Hotel Video: '+e)
            } else if (/accom-reviews-customers/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                //UA
                    w.ga(trackerName+'send', 'event'
                            , 'Reviews'
                            , 'FromOurCustomers'
                            , lobholidaytypepageid
                            , 1
                            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51'  : cdpm.gaguid || 'empty'
                                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                            }                          
                            , {'nonInteraction': true});
                //GA
                w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                            , 'Reviews'
                            , 'FromOurCustomers'
                            , lobholidaytypepageid
                            , 1     
                            , {'noninteraction': true}]);                    
             } catch(e) {
                cdl.error('GTM UATC Events Reviews FromOurCustomers: '+e)
            } else if (/accom-askNAnswers$/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                //UA
                    w.ga(trackerName+'send', 'event'
                            , 'Reviews'
                            , 'Navigate'
                            , lobholidaytypepageid
                            , 1
                            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51'  : cdpm.gaguid || 'empty'
                                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                            }                           
                            , {'nonInteraction': true});
                //GA
                    w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                            , 'Reviews'
                            , 'Navigate'
                            , lobholidaytypepageid
                            , 1     
                            , {'noninteraction': true}]);                    
             } catch(e) {
                cdl.error('GTM UATC Events Reviews Navigate: '+e)
            } else if (/accom-reviews$/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                //UA
                    w.ga(trackerName+'send', 'event'
                            , 'AskandAnswer'
                            , 'Navigate'
                            , lobholidaytypepageid
                            , 1
                            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51'  : cdpm.gaguid || 'empty'
                                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                            }                
                            , {'nonInteraction': true});
                //GA
                    w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                            , 'AskandAnswer'
                            , 'Navigate'
                            , lobholidaytypepageid
                            , 1     
                            , {'noninteraction': true}]);                    
            } catch(e) {
                cdl.error('GTM UATC Events AskandAnswer Navigate: '+e)
            } else if (/accom-askNAnswers-show/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};                
                var anashow = /true/.test(cdpm.domevents && cdpm.domevents.id)?'Show':'Hide'
                //UA
                    w.ga(trackerName+'send', 'event'
                            , 'AskandAnswer'
                            , anashow
                            , lobholidaytypepageid
                            , 1
                            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51'  : cdpm.gaguid || 'empty'
                                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                            }              
                            , {'nonInteraction': true});
                //GA
                    w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                            , 'AskandAnswer'
                            , anashow
                            , lobholidaytypepageid
                            , 1     
                            , {'noninteraction': true}]);
            } catch(e) {
                cdl.error('GTM UATC Events AskandAnswer Show and Hide: '+e)
            } else if (/accom-facilities/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                //UA
                    w.ga(trackerName+'send', 'event'
                            , 'AccomFacilities'
                            , 'Navigate'
                            , lobholidaytypepageid
                            , 1
                            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51'  : cdpm.gaguid || 'empty'
                                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                            }              
                            , {'nonInteraction': true});
                //GA
                    w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                            , 'AccomFacilities'
                            , 'Navigate'
                            , lobholidaytypepageid
                            , 1     
                            , {'noninteraction': true}]);                    
             } catch(e) {
                cdl.error('GTM UATC Events AccomFacilities: '+e)
            } else if (/srp-sort-results/i.test(cdom.id)) try {
                var cdl = CATTDL || {};
                var cdpm = window.CATTDL && CATTDL.CATTParams || {};
                var cdurl = cdpm.urlparams || {};
                //UA
                    w.ga(trackerName+'send', 'event'
                            , 'SRP SortOption'
                            , cdom && cdom.data && cdom.data.val
                            , cdpm && cdpm.lob+'|'+cdpm.holidaytype
                            , 1
                            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51'  : cdpm.gaguid || 'empty'
                                ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (cdurl && cdurl.pathname || location.pathname || '')
                                ,'dimension119': (cdurl && cdurl.paramstring || location.search || '') 
                            }              
                            , {'nonInteraction': true});
                //GA
                    w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                            , 'SRP SortOption'
                            , cdom && cdom.data && cdom.data.val
                            , cdpm && cdpm.lob+'|'+cdpm.holidaytype
                            , 1     
                            , {'noninteraction': true}]);                    
             } catch(e) {
                cdl.error('GTM UATC Events SRP SortOption: '+e)
            }
        };
    } catch(e) {
        cdl.error('GTM UATC Events: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>
