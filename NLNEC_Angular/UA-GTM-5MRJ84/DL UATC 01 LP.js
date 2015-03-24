<script>
(function gtm_uatcdlLP(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl.pathname
        var locsearch = cdurl.paramstring
        var lochref = cdurl.fullurl
        
        cdl.DL_uatc = {
            profileid       : 'UA-27847231-2',
            cookiedomain    : twlh(/neckermann.io/i)?"neckermann.io":"neckermann.nl",
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false             
            },
            webanalytics    : {
                page            : loc && ((locpathname || '/')+(locsearch || '')) || '',
                location        : lochref,
                metrics         : {
                    metric15        : {'hitcount'       : 1}
                },
                dimensions      : {
                    dimension6      : {'appserver'      : cdpm.appserver || ''},
                    dimension12     : {'pageid'         : cdpm.pageid || ''},
                    dimension14     : {'sessionid'      : cdpm.sessionid || 'empty'},
                    dimension19     : {'errorcode'      : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode+' '+cdpm.errors.errormsg || "unknown") || ""},
                    dimension30     : {'gaguid'         : cdpm.gaguid || ''},
                    dimension32     : {'emailguid'      : cdpm.emailguid || ''},
                    dimension102    : {'pagecontext'    : cdpm.pagecontext || ''},
                    dimension119    : {'pagetimestamp'  : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''}
                    //dimension132  : {'errormessage'   : cdpm.errors && cdpm.errors.errormsg || ''}                                        
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochref, 'value': 1, 'noninteraction': true}
                }
            }
        };
    } catch(e) {
        cdl.error('GTM NL NEC UATCDL LP: '+e)
    } finally {
        dl.push({'event': 'UATCDL LP'})
        gatcDL.push({'event': 'UATCDL LP'})
    }
    return cdl.DL_uatc
}(window.CATTDL, window.dataLayer || [], window.location))
</script>
