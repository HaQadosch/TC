<script>
(function gtm_uatcdlLP(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';
        var lochost = location.hostname || location.host || '';        
        
        cdl.DL_uatc = {
            profileid       : 'UA-33036832-7',
            cookiedomain    : twlh(/thomascook.io/i)?"thomascook.io":"thomascook.com",
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
                    dimension6      : {'appserver'      : cdpm.appserver || 'empty'},
                    dimension12     : {'pageid'         : cdpm.pageid || 'empty'},
                    dimension19     : {'errorcode'      : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || ""},
                    dimension30     : {'utmaguid'       : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'       : cdpm.utmbguid || ''},
                    dimension51     : {'gaguid'         : cdpm.gaguid || 'empty'},
                    dimension32     : {'emailguid'      : cdpm.emailguid || ''},
                    dimension64     : {'dreamcaptureid' : cdpm.dreamcaptureid || ''},
                    dimension65     : {'pagetimestamp'  : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension75     : {'unixtimestamp'  : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension102    : {'pagecontext'    : cdpm.pagecontext || ''},
                    dimension115    : {'errormessage'   : cdpm.errors && cdpm.errors.errormsg || ''}                    
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': true, 'page': locpathname+locsearch},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': loc.hostname+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page': locpathname+locsearch}
                }
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC UATCDL LP: '+e)
    } finally {
        dl.push({'event': 'UATCDL LP'})
        gatcDL.push({'event': 'UATCDL LP'})
    }
    return cdl.DL_uatc
}(window.CATTDL, window.dataLayer || [], window.location))
</script>
