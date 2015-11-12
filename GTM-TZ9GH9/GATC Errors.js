<script id='gtm_gatcErrorEVT'>
(function gtm_gatcErrorEVT(jQ, cdl, w, d){
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try{

        var tn =  CATTDL.DL_gatc.trackername+'.' || '';
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams;
        var wgetData = (w.getPageData && w.getPageData(cdurl && cdurl.pathname) || {});

        var errorcode = wgetData.response && wgetData.response.error && wgetData.response.error.code || "";
        var errormsg = wgetData.response && wgetData.response.error && wgetData.response.error.description;
        cdpm.errors.code = errorcode;
        cdpm.errors.msg = errormsg;
        
        if (errorcode || errormsg) {
        w._gaq.push([tn+'_trackEvent','Errors'
                                     , cdpm.errors && Object.keys(cdpm.errors) && (errorcode || '')+(errorcode && errormsg && ' ' || '')+(errormsg || '') || ''
                                     , loc.hostname+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&')
                                    , 1, true]);

        (function gtm_callGAscript() {
            var ga = d.createElement('script');
                ga.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'
            var s = d.getElementsByTagName('script')[0]; 
                s.parentNode.insertBefore(ga, s)
        }());
        dataLayer.push({'event': 'GATC Error Event'});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'GATC Error Event'});
        }

    } catch (e){console.info('GTM UK TC GATC Error Evt: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, window, document));
</script>
