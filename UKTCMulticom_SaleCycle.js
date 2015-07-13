//<script id='gtm_salecycle'>
(function gtm_SalecycleDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        cdl.DL_salecycle = {
            script         : {
                status  : 'not fired',
                url     : '//d16fk4ms6rqz1v.cloudfront.net/capture/directholidays.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_salecycle: "+e);
    } finally {
        dl.push({event: 'Salecycle'});
    }
    return cdl && dl && cdl.DL_salecycle;
}(window.CATTDL, window.externalDataLayer || window.externalLayer));

(function gtm_Salecycle(jQ, cdl, scdl){
    'use strict';
    if (jQ && cdl && scdl) try {
        if (scdl.script) {
            jQ.ajaxSetup({cache: true});
            jQ.getScript && jQ.getScript(scdl.script.url, function gtm_salecyleScript(){
                scdl.script.status = 'fired';
             });
        }
    } catch(e) {
        cdl.error('GTM Salecyle: '+e);
    }
    return jQ && cdl && scdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_salecycle));
//</script>

// With insertJS
//<script id='gtm_salecycle'>
(function gtm_salecycle(cdl, dl){
    if (dl && cdl) try {
        cdl.insertJS && cdl.insertJS('salecycle', 'https://d16fk4ms6rqz1v.cloudfront.net/capture/directholidays.js');
    } catch(e) {
        cdl.error && cdl.error('GTM SaleCycle: '+e);
    }
    return dl && cdl;
}(window.CATTDL, window.dataLayer));
//</script>
