<script id='GTM-P2C3FL_uatcSRPicons'>
(function gtm_uatcSRPicons(jQ, cdl, uadl, w){
    'use strict';
    if (cdl && uadl) try{
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};
        var cdpm = cdl.CATTParams || {};
        var cdurl = {};
        cdurl.pathname = location.pathname || '/';
        cdurl.paramstring = location.searches || '';

        var evtcategory = 'SRP search panel icons'
        function UAevent(category,action,label) {
                w.ga(trackerName+'send','event'
                , category
                , action
                , label
                , 1
                , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    ,'dimension51': cdpm.gaguid || ''
                    ,'dimension52' : window.userId || ''
                    ,'dimension55' : 'event'
                    ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                    ,'nonInteraction': 1, 'location': uawa.location});
        }
        function GAevent(category,action,label) {
                w._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                , category
                , action
                , label
                , 1     
                , {'noninteraction': 1}]);
        }
        //departure airport
        jQ('.icon.airplaneNE').on('click',function(e){
                if ((jQ('button.PopularTooltip-itemBtn.ng-binding') || []).length !== 0){
                    var evtaction = 'Departure Airport - Icon - Open';
                    var evtlabel = 'Departure Airport - Icon - Open';
                    //UA
                    UAevent(evtcategory,evtaction,evtlabel);
                    //GA
                    GAevent(evtcategory,evtaction,evtlabel);

                    jQ('button.PopularTooltip-itemBtn.ng-binding').on('click',function(e){
                        var evtaction = 'Departure Airport - Selection'
                        var evtlabel = (jQ(this).text() || '');
                        //UA
                        UAevent(evtcategory,evtaction,evtlabel);
                        //GA
                        GAevent(evtcategory,evtaction,evtlabel);

                    })
                } else {
                    var evtaction = 'Departure Airport - Icon - Close';
                    var evtlabel = 'Departure Airport - Icon - Close';
                    //UA
                    UAevent(evtcategory,evtaction,evtlabel);
                    //GA
                    GAevent(evtcategory,evtaction,evtlabel);
                }    
        });

        //destination
        jQ('.icon.location').on('click',function(e){
                if ((jQ('button.PopularTooltip-itemBtn.ng-binding') || []).length !== 0){
                    var evtaction = 'Destination - Icon - Open';
                    var evtlabel = 'Destination - Icon - Open';
                    //UA
                    UAevent(evtcategory,evtaction,evtlabel);
                    //GA
                    GAevent(evtcategory,evtaction,evtlabel);

                    jQ('button.PopularTooltip-itemBtn.ng-binding').on('click',function(e){
                        var evtaction = 'Destination - Selection';
                        var evtlabel = jQ(this).text() || '';
                        //UA
                        UAevent(evtcategory,evtaction,evtlabel);
                        //GA
                        GAevent(evtcategory,evtaction,evtlabel);
                    })
                } else {
                    var evtaction = 'Destination - Icon - Close';
                    var evtlabel = 'Destination - Icon - Close';
                    //UA
                    UAevent(evtcategory,evtaction,evtlabel);
                    //GA
                    GAevent(evtcategory,evtaction,evtlabel);
                }     
        });

        //calendar
        jQ('input#when').on('blur',function(e){
            jQ('table.ui-datepicker-calendar td').on('click',function(e){
                var evtaction = 'Calendar';
                var evtlabel = (jQ(this).attr('data-year') && jQ(this).find('a') && jQ(this).attr('data-month'))?(("0"+(jQ(this).find('a').text()) || "01").slice(-2)+'/'+("0"+(parseInt(jQ(this).attr('data-month') || "0")+1)).slice(-2)+'/'+jQ(this).attr('data-year')):"01/01/1970";
                //UA
                UAevent(evtcategory,evtaction,evtlabel);
                //GA
                GAevent(evtcategory,evtaction,evtlabel);
            });                
        });

    } catch(e) {
        cdl.error('GTM UK TC UATC SRP Icons: '+e)
    } 
    return jQ && cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>