<script id='gtm_UATCErrors'>
(function gtm_UATCErrors(jQ, loc, cdl, w) {
    'use strict'
    if (jQ && cdl && cdl.CATTParams) try{
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams;
        var wgetData = (w.getPageData && w.getPageData(cdurl && cdurl.pathname) || {});

        var errorcode = wgetData.response && wgetData.response.error && wgetData.response.error.code || "";
        var errormsg = wgetData.response && wgetData.response.error && wgetData.response.error.description;
        cdpm.errors = cdpm.errors || "";
        cdpm.errors.errorcode = errorcode;
        cdpm.errors.errormsg = errormsg;
        
        if (errorcode || errormsg) {w.ga(cdl.DL_uatc.name+'.send', 'event'
                , 'Errors'
                , errorcode || ''
                , errrormsg || ''
                , 1
                , { 'page'          : uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    ,'dimension19'  : errormsg && errormsg.length > 0 && (errorcode || "unknown") || ""
                    ,'dimension115' : errormsg || ''
                    ,'dimension51'  : cdpm.gaguid || 'empty'
                    ,'dimension55'  : 'event'
                    ,'dimension65'  : cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                    ,'dimension118' : (cdurl && cdurl.pathname || location.pathname || '')
                    ,'dimension119' : (cdurl && cdurl.paramstring || location.search || '') 
                }
                , {'nonInteraction': true}
            );
        }           

    } catch(e) {
        var msg = 'GTM UATC Errors: '+e; 
        console && ((console.error)?console.error(msg):console.log(msg))
    }
    return 1
}(window.jQuery, document.location, window.CATTDL, window))
</script>