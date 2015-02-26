<script id='gtm_CIM'>
(function gtm_CIMDL(dl, cdl){
    'use strict'
    if (dl && cdl) try {
        cdl.DL_cim = {
            pp_gemius_identifier : 'B3A1liL6lR70I2KFOTduOHZ27A_BAgRs2tWsEQ0ZlTj.f7',
            lan : (window.condorContextPath || window.Ecom && window.Ecom.Application && window.Ecom.Application.language || '').replace(/\//g, '').toUpperCase(),
            key : 'keyword',
            subs : 'subsection',
            free : 'free_field',
            script : {
                src : '//gabe.hit.gemius.pl/xgemius.js',
                status: 'not fired'
            }
        };
        cdl.DL_cim.pp_gemius_extraparameters = new Array('lan='+(cdl.DL_cim.lan || ''), 'key='+(cdl.DL_cim.key || ''), 'subs='+(cdl.DL_cim.subs || ''), 'free='+(cdl.DL_cim.free || ''))
    } catch(e) {
        cdl.error && cdl.error('GTM CIM DL:', e)
    } finally {
        dl.push({'event':'CIM DL'})
    }
    return dl && cdl && cdl.DL_cim
}(window.dataLayer, window.CATTDL));

(function gtm_cim(jQ, dl, cdl, cmdl){
    'use strict'
    if (dl && cdl && cmdl) try {
        window.pp_gemius_identifier = cmdl.pp_gemius_identifier;
        window.pp_gemius_extraparameters = cmdl.pp_gemius_extraparameters;
        jQ.ajaxSetup({cache: true});
        jQ.getScript && jQ.getScript(cmdl.script && cmdl.script.src || '', function gtm_CIMGetScript(){
            cmdl.script.status = 'fired'
        })
    } catch(e) {
        cdl.error && cdl.error('GTM CIM:', e)
    } finally {
        dl.push({'event':'CIM'})
    }
    return dl && jQ && cdl && cmdl
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_cim))
</script>


<script id='gtm_SaleCycle'>
(function gtm_SaleCycleDL(dl, cdl){
    'use strict'
    if (dl && cdl) try {
        cdl.DL_salecycle = {
            script1 : 'app.salecycle.com/capture/lib/json2.js',
            script2 : 'app.salecycle.com/capture/lib/jstorage.js',
            script3 : 'app.salecycle.com/capture/thomascook.js'
        };
    } catch(e) {
        cdl.error && cdl.error('GTM SaleCycle DL:', e)
    } finally {
        dl.push({'event':'SaelCycle DL'})
    }
    return dl && cdl && cdl.DL_salecycle
}(window.dataLayer, window.CATTDL));

(function gtm_salecycle(jQ, dl, cdl, scdl){
    'use strict'
    if (dl && cdl && scdl) try {
        var __scP=document.location.protocol=="https:"?"https://":"http://",
            __scHEAD=document.getElementsByTagName("head")[0];
        var __scD1=document.createElement("script");
        __scD1.type="text/javascript";
        __scD1.async=true;
        __scD1.src=__scP+"app.salecycle.com/capture/lib/json2.js";

        var __scD2=document.createElement("script");
        __scD2.type="text/javascript";
        __scD2.async=true;
        __scD2.src=__scP+"app.salecycle.com/capture/lib/jstorage.js";

        var __scS=document.createElement("script");
        __scS.type="text/javascript";
        __scS.async=true;
        __scS.src=__scP+"app.salecycle.com/capture/thomascook.js";
        __scHEAD.appendChild(__scD1);
        __scHEAD.appendChild(__scD2);
        __scHEAD.appendChild(__scS)
        scdl.status = 'fired'
    } catch(e) {
        cdl.error && cdl.error('GTM SaleCycle:', e)
    } finally {
        dl.push({'event':'SaleCycle'})
    }
    return dl && jQ && cdl && scdl
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_salecycle))
</script>

<script>
(function gtm_SalecycleDL(cdl, dl){
    'use strict'
    if (cdl) try {
        cdl.DL_salecycle = {
            script         : {
                status  : 'not fired',
                url     : '//d16fk4ms6rqz1v.cloudfront.net/capture/thomascook.js'
            }
        }
    } catch(e) {
        cdl.error("GTM DL_salecycle: "+e)
    } finally {
        dl.push({event: 'Salecycle'});
    }
    return cdl.DL_salecycle
}(window.CATTDL, window.externalLayer));

(function gtm_Salecycle(jQ, cdl, scdl){
    'use strict';
    if (jQ && cdl && scdl && /salecycle/i.test(cdl.CATTParams && cdl.CATTParams.cookies && cdl.CATTParams.cookies.test || '')) try {
        if (scdl.script) {
            jQ.ajaxSetup({cache: true});
            jQ.getScript && jQ.getScript(scdl.script.url, function gtm_salecyleScript(){
                scdl.script.status = 'fired'
             })
        }
    } catch (e){cdl.error('GTM Salecyle: '+e)}
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_salecycle))
</script>

&& /optilead/i.test(cdl.CATTParams && cdl.CATTParams.cookies && cdl.CATTParams.cookies.test || '')
