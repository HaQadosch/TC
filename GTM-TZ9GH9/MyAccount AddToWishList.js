<script id='gtm_uatcAddtoWishlist'>
(function gtm_uatcAddtoWishlist(jQ, cdl, uadl, gadl, w, d, dl){
    'use strict';
    if (cdl && uadl && gadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {}
        var uaImp = uadl.webanalytics.addimpression || [];
        var tn = gadl.trackername+'.' || '';
        w._gaq = w._gaq || [];
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr)};
        var cdpm = CATTDL.CATTParams;

    if(!w.ga) w = (function uatcGA(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(w,d,'script','//www.google-analytics.com/analytics.js','ga')

    window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (trc) {
            } else {

                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'})

            var srpItems = cdpm.srpresults
            for (i = 0; i < cdpm.srpresults.length; i++)
            {var accoms = jQ('div#package-'+srpItems[i].accomguid) || jQ([]);
                accoms.find('a.btn.btn-default.btn-wishlist.popover-dismiss.pull-right').on('click', function(d){
                    //UATC
                    trc.send('event', 'FrogWishList'
                            , d.target.innerText.replace(/Add To Wish List/i, 'Add').trim() || ""
                            , d.target.parentElement.parentElement.parentElement.parentElement.parentElement.id.replace('package-','') || ""
                        /*d.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.replace('package-','') 
                            || d.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.replace('package-','') 
                            || ""*/
                    , 1
                    , { 'dimension51': cdpm.gaguid || 'empty'
                        ,'dimension65': cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        ,'nonInteraction': 1
                    });
                    //GATC
                    wgp([tn+'_trackEvent', 'FrogWishList'
                            , d.target.innerText.replace(/Add To Wish List/i
                            , 'Add').trim() || ""
                            , d.target.parentElement.parentElement.parentElement.parentElement.parentElement.id.replace('package-','') || ""
                            /*d.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.replace('package-','')
                            || d.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.replace('package-','')
                            || ""*/
                    ]);

                });
            };

        })
    } catch(e) {
        cdl.error('SRP Add to wish list: '+e)
    }
    return cdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document, window.dataLayer || []))
</script>