<script id='GTM-TZ9GH9_evtAccomCarouselPopUp'>
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
                ,'dimension10'  : cdpm.lob || ''
                ,'dimension11'  : cdpm.holidaytype || ''
                ,'dimension14'  : cdpm.sessionid || ''
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
        };

        var mainimg = $('div.PackageSlick-slide.slick-slide.slick-active[analytics-id=accom-item-showCarousel]')
        var index = mainimg.attr('index');
        var src = mainimg.children().attr('src');

        var evtcategory = 'Accom PopUp Carousel';
        var evtaction = 'Open';
        var evtlabel = 'index: '+index+'|'+'src: '+src;
        var evtvalue = 1;
        var evtnoninteraction = 1;
        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);

        if(!/gtm_uabound/i.test(jQ('button.slick-next').attr('class'))){
            $('button.slick-next').addClass('gtm_uabound');
            $('button.slick-next').click(function(e){
                var clc_mainimg = $('#PackageSlickFull').find('div.PackageSlick-slide.slick-slide.slick-active')
                var clc_index = clc_mainimg.attr('index');
                var clc_src = mainimg.children().attr('src')

                var clc_evtcategory = 'Accom PopUp Carousel';
                var clc_evtaction = 'Next Button'
                var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                var clc_evtvalue = 1;
                var clc_evtnoninteraction = 1;
                UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
            })
        };

        if(!/gtm_uabound/i.test(jQ('button.slick-prev').attr('class'))){
            $('button.slick-prev').addClass('gtm_uabound');
            $('button.slick-prev').click(function(e){
                var clc_mainimg = $('#PackageSlickFull').find('div.PackageSlick-slide.slick-slide.slick-active')
                var clc_index = mainimg.attr('index');
                var clc_src = mainimg.children().attr('src')

                var clc_evtcategory = 'Accom PopUp Carousel';
                var clc_evtaction = 'Previous Button'
                var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                var clc_evtvalue = 1;
                var clc_evtnoninteraction = 1;
                UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
            })
        };

        if(!/gtm_uabound/i.test(jQ('div.PackageSlick-slide.slick-slide').attr('class'))){
            $('div.PackageSlick-slide.slick-slide').addClass('gtm_uabound');
            $('div.PackageSlick-slide.slick-slide').click(function(e){
                var clc_mainimg = $(this)
                var clc_index = mainimg.attr('index');
                var clc_src = mainimg.children().attr('src')

                var clc_evtcategory = 'Accom PopUp Carousel';
                var clc_evtaction = 'Carousel Items'
                var clc_evtlabel = 'index: '+clc_index+'|'+'src: '+clc_src;
                var clc_evtvalue = 1;
                var clc_evtnoninteraction = 1;
                UAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
                GAevent(clc_evtcategory,clc_evtaction,clc_evtlabel,clc_evtvalue,clc_evtnoninteraction);
            })
        };
    } catch(e) {
        cdl.error('GTM Evt 03 Accom Carousel PopUp: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>