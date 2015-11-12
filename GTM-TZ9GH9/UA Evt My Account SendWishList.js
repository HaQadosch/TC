<script id='GTM-TZ9GH9_evtSendwishlist'>
(function gtm_evtSendwishlist(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) 
        try {
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
            , { 'page'              : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                ,'dimension14'      : cdpm.sessionid || ''
                ,'dimension51'      : cdpm.gaguid || 'empty'
                ,'dimension52'      : window.userId || ''
                ,'dimension53'      : cdpm.user && cdpm.user.id || ''
                ,'dimension55'      : 'event'
                ,'dimension65'      : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'dimension75'      : ''+(window.Date && window.Date.now() || 0)
                ,'dimension118'     : (cdurl && cdurl.pathname || location.pathname || '')
                ,'dimension119'     : (cdurl && cdurl.paramstring || location.search || '') 
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
        var imgs = []; 
        jQ('.carousel-container .wishlist-item[ng-repeat*="item in wishlist"]') && $('.carousel-container .wishlist-item[ng-repeat*="item in wishlist"]').each(function(e,d){ 
            imgs.push( /cdn\.thomascook\.com(.+)\//.exec(decodeURIComponent($(d).find('div.item-image').attr('style') || [''])).pop().replace(/\//g,'') )
        });
        var evtcategory = 'MyAccount SendWishList';
        var evtaction = cdpm.user && cdpm.user.id || '';
        var evtlabel = imgs.join('|');
        var evtvalue = 1;
        var evtnoninteraction = 1;
        UAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);
        GAevent(evtcategory,evtaction,evtlabel,evtvalue,evtnoninteraction);

    } catch(e) {
        cdl.error('GTM Evt MyAccount SendWishList: '+e)
    }
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>