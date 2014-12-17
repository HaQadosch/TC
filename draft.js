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
