<script id='GTM-TZ9GH9_evtAccomCarousel'>
(function gtm_evtAccom(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) 
        try 
    {
        var cdpm = cdl.CATTParams || [];
        var uatrc = (uadl.name+".") || ".";
        var gatrc = ((cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+".") || ".";
        var uawa = uadl.webanalytics || {};
        var cdom = cdpm.domevents;
        var cdomid = cdom && cdom.id || '';
        var lobholidaytypepageid = cdpm && cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || cdpm.domevents && cdpm.domevents.data && cdpm.domevents.data.productId || 'accomguid')        
        var cdurl = cdpm.urlparams || {};

        function UAevent(category,action,label,value,noninteraction) {
            w.ga(uatrc+'send', 'event'
            , category
            , action
            , label
            , 1
            , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension1'       : cdpm.deptairport || ''
                ,'dimension2'       : cdpm.destination || ''
                ,'dimension5'       : cdl.gadate && cdl.gadate(cdpm.deptdate || 0)
                ,'dimension10'      : cdpm.lob || ''
                ,'dimension11'      : cdpm.holidaytype || ''
                ,'dimension12'      : cdpm.pageid || ''
                ,'dimension14'      : cdpm.sessionid || ''
                ,'dimension16'      : cdpm.accomcode || ''
                ,'dimension17'      : cdpm.accomname || ''
                ,'dimension22'       : cdpm.destairport || ''
                ,'dimension51'      : cdpm.gaguid || 'empty'
                ,'dimension55'      : 'event'
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
        };
        if(!/gtm_uabound/i.test(jQ('#stickyPriceTicketParent #PackageSlick button.slick-next').attr('class'))){
            $('#stickyPriceTicketParent #PackageSlick button.slick-next').addClass('gtm_uabound');
            $('#stickyPriceTicketParent #PackageSlick button.slick-next').click(function(e){
                var mainimg = $('#PackageSlick div.PackageSlick-slide.slick-slide.slick-active[analytics-id=accom-item-showCarousel]')
                var index = mainimg.attr('index');
                var src = mainimg.children().attr('src')

                var evtcategory = 'Accom Main Carousel';
                var evtaction = 'Main Next Button'
                var evtlabel = 'index: '+index+'|'+'src: '+src;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            })
        };
        if(!/gtm_uabound/i.test(jQ('#stickyPriceTicketParent #PackageSlick button.slick-prev').attr('class'))){
            $('#stickyPriceTicketParent #PackageSlick button.slick-prev').addClass('gtm_uabound');
            $('#stickyPriceTicketParent #PackageSlick button.slick-prev').click(function(e){
                var mainimg = $('#PackageSlick div.PackageSlick-slide.slick-slide.slick-active[analytics-id=accom-item-showCarousel]')
                var index = mainimg.attr('index');
                var src = mainimg.children().attr('src')

                var evtcategory = 'Accom Main Carousel';
                var evtaction = 'Main Previous Button'
                var evtlabel = 'index: '+index+'|'+'src: '+src;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            })
        };
        if(!/gtm_uabound/i.test(jQ('#stickyPriceTicketParent #PackageSlickNav button.slick-next').attr('class'))){
            $('#stickyPriceTicketParent #PackageSlickNav button.slick-next').addClass('gtm_uabound');
            $('#stickyPriceTicketParent #PackageSlickNav button.slick-next').click(function(e){
                var mainimg = $('#PackageSlick div.PackageSlick-slide.slick-slide.slick-active[analytics-id=accom-item-showCarousel]')
                var index = mainimg.attr('index');
                var src = mainimg.children().attr('src')

                var evtcategory = 'Accom Main Carousel';
                var evtaction = 'Items Next Button'
                var evtlabel = 'index: '+index+'|'+'src: '+src;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            })
        };
        if(!/gtm_uabound/i.test(jQ('#stickyPriceTicketParent #PackageSlickNav button.slick-prev').attr('class'))){
            $('#stickyPriceTicketParent #PackageSlickNav button.slick-prev').addClass('gtm_uabound');
            $('#stickyPriceTicketParent #PackageSlickNav button.slick-prev').click(function(e){
                var mainimg = $('#PackageSlick div.PackageSlick-slide.slick-slide.slick-active[analytics-id=accom-item-showCarousel]')
                var index = mainimg.attr('index');
                var src = mainimg.children().attr('src')

                var evtcategory = 'Accom Main Carousel';
                var evtaction = 'Items Previous Button'
                var evtlabel = 'index: '+index+'|'+'src: '+src;
                var evtvalue = 1;
                var evtnoninteraction = 1;
                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            })
        };
        if(!/gtm_uabound/i.test(jQ('#stickyPriceTicketParent #PackageSlickNav div.PackageSlick-slide.slick-slide').attr('class'))){
            $('#stickyPriceTicketParent #PackageSlickNav div.PackageSlick-slide.slick-slide').addClass('gtm_uabound');
            $('#stickyPriceTicketParent #PackageSlickNav div.PackageSlick-slide.slick-slide').click(function(e){
                var mainimg = $(this)
                var index = mainimg.attr('index');
                var src = mainimg.children().attr('src')

                var evtcategory = 'Accom Main Carousel';
                var evtaction = 'Carousel Items'
                var evtlabel = 'index: '+index+'|'+'src: '+src;
                var evtvalue = 1;
                var evtnoninteraction = 1;

                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            })
        };
        if(!/gtm_uabound/i.test(jQ('#stickyPriceTicketParent #PackageSlick div.PackageSlick-slide.slick-slide').attr('class'))){
            $('#stickyPriceTicketParent #PackageSlick div.PackageSlick-slide.slick-slide').addClass('gtm_uabound');
            $('#stickyPriceTicketParent #PackageSlick div.PackageSlick-slide.slick-slide').click(function(e){
                var mainimg = $(this)
                var index = mainimg.attr('index');
                var src = mainimg.children().attr('src')

                var evtcategory = 'Accom PopUp Carousel';
                var evtaction = 'Open'
                var evtlabel = 'index: '+index+'|'+'src: '+src;
                var evtvalue = 1;
                var evtnoninteraction = 1;

                UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
                GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
            })
        };
    } catch(e) {
        cdl.error('GTM Evt 03 Accom Carousel: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>