<script id='gtm_uatcdlLP'>
(function gtm_uatcdlLP(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams || {};
        var ctpm = CATTParams || {};
        var locpathname = loc.pathname
        var locsearch = loc.search
        var lochref = loc.href
        
        cdl.DL_uatc = {
            profileid       : 'UA-33087819-2',
            cookiedomain    : "neckermann.be",
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
                    dimension6      : {'appserver'          : cdpm.appserver || ''},
                    dimension12     : {'pageid'             : cdpm.pageid || ''},
                    dimension14     : {'sessionid'          : cdpm.sessionid || 'empty'},
                    dimension19     : {'errorcode'          : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && ((/\d+/.exec(cdpm.errors.errorcode) || '').pop() || "unknown") || ""},
                    dimension30     : {'utmaguid'           : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'           : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'          : cdpm.emailguid || ''},
                    dimension51     : {'gaguid'             : cdpm.gaguid || ''},
                    dimension52     : {'pagelanguage'       : cdpm.sitelanguage || ''},
                    dimension53     : {'sessionlanguage'    : cdpm.sitelanguage || ''},
                    dimension57     : {'hittype'            : 'page'},                    
                    dimension65     : {'pagetimestamp'      : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},                    
                    dimension75     : {'unixtimestamp'      : ''+cdpm.pagetimestamp || ''},
                    dimension102    : {'pagecontext'        : cdpm.pagecontext || ''},
                    dimension104    : {'searchapp'          : cdpm.searchapp || ctpm.SearchApp || ''},                    
                    dimension105    : {'initialholidaytype' : cdpm.initialholidaytype || ''},                    
                    dimension115    : {'errormessage'       : cdpm.errors && cdpm.errors.errormsg || ''}                                
                },
                events : {
                    internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || (cdpm.searches && cdpm.searches.scip || cdpm.searches.s_cip || cdpm.searches.sccl)  || '', 'label': lochref, 'value': 1, 'noninteraction': true, 'page': (locpathname || '')+(locsearch || '')},
                    errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochref, 'value': 1, 'noninteraction': true, 'page': (locpathname || '')+(locsearch || '')}
                }
            }
        };
    } catch(e) {
        cdl.error('GTM BE NEC UATCDL LP: '+e)
    } finally {
        dl.push({'event': 'UATCDL LP'})
        gatcDL.push({'event': 'UATCDL LP'})
    }
    return cdl.DL_uatc
}(window.CATTDL, window.dataLayer || [], window.location))
</script>