<script id='GTM-MSD88R_Subscribe'>
(function gtm_Subscribe(jQ, d, w, dl, cdl) {
    'use strict';
    if ( jQ && cdl && dl && !dl.some(function(a){return /core_/i.test(a && a.event || '')}) ) try {
        var cdpm = cdl.CATTParams || {}

        if ($.subscribe) {
            var dpush = function dpush(evt){dl.push(evt)};
            var cookieTestInfo = function cookieTestInfo(mess){if (cdl.twdc(/test=test/i)) console.info(mess)};
            $.subscribe('updatePageData', function gtm_updatePageData(d){
                cookieTestInfo('GTM updatePageData updated', '\n', d, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData(), '\n', 'pathname is ', (location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop() || location.pathname));
                if (d) {
                    if (d.error) {
                        dpush({'event': 'updatePageData_error'})
                    } else if (d.errorCode && /payment/i.test(location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop() || location.pathname)) {
                        dpush({'event': 'updatePageData_errorPayment'})
                    } else if (d.id == "pax-go-to-passenger-details-is-valid") {
                        dpush({'event': 'updatePageData_addpax'})
                    } else if (!d.carouselItems) {
                        dpush({'event': 'updatePageData', 'pathname': location.pathname})
                    }
                }
            });
            $.subscribe('PageView', function gtm_PageView(d) {
                cookieTestInfo('GTM PageView updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                dpush({'event': 'PageView'+"_"+(d && d.page || (location.pathname == '/' && /#!/i.test(location.hash) && (/([^#!][^?]*)/i.exec(location.hash) || ['']).pop()) || loc.pathname)});
            });
            $.subscribe('domEvent', function gtm_domEvent(d){
                cookieTestInfo('GTM domEvent updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                if (ld && ld.assign ) ld.assign(cdpm.domevents, d);
                dpush({'event': 'domEvent','id':d && d.id,'data':d && d.data,'timestamp':+new Date()});
            });
            $.subscribe('updateUserData', function gtm_updateUserData(d){
                cookieTestInfo('GTM updateUserData updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                cdpm.user = {};
                cdpm.user.action = d && d.action || "";
                cdpm.user.msg = d && d.data && (d.data.id || d.data.data && d.data.data.message || d.data.statusText) || "";
                cdpm.user.id = d && d.data && d.data.id || "";
                dpush({'event': 'updateUserData','action':""+(d && d.action || '')});
            });
            $.subscribe('error', function gtm_error(d){
                cookieTestInfo('GTM error updated', '\n', d /*, '\n', Object.keys(window.getPageData()).join('|'), '\n', window.getPageData()*/);
                dpush({'event': 'jserror'})
            });             
        } else console.log('GTM $.subsribe undefined');

        if(!w.ga){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga')};

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM Subscribe: '+e; 
        console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        dl.push({'event': 'subscribed'});
    }
    return w.CATTDL;
}(!window.CATTDL?!1:window.CATTDL.jQ, window.document, window, window.dataLayer_MSD88R, window.CATTDL));
</script>