<script id='GTM-TZ9GH9_uatcdlLP'>
(function gtm_uatcdlLP(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';
        var lochost = location.hostname || location.host || '';

        var myaccountactivation = /\/myaccount\/activate/.test(locpathname)?'User_Activation':'';

        cdl.DL_uatc = {
            profileid       : 'UA-33036832-7',
            cookiedomain    : (cdpm.cookiedomain || 'thomascook.com'),
            name            : 'CATTUATC',
            set             : {
                anonymizeIp     : false,
                location        : lochref,
                referrer        : cdurl.referrer  || ''
            },
            webanalytics    : {
                page            : loc && ((locpathname || '/')+(locsearch || '')) || '',
                location        : lochref,
                referrer        : cdurl.referrer  || '',
                metrics         : {
                    metric15        : {'hitcount'       : 1}
                },
                dimensions      : {
                    dimension6      : {'appserver'          : cdpm.appserver || ''},
                    dimension12     : {'pageid'             : cdpm.pageid || ''},
                    dimension19     : {'errorcode'          : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || ""},
                    dimension30     : {'utmaguid'           : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'           : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'          : cdpm.emailguid || ''},                    
                    dimension51     : {'gaguid'             : cdpm.gaguid || ''},
                    dimension52     : {'anonymousid'        : window.userId || ''},
                    dimension53     : {'myaccountuserid'    : cdpm.user && cdpm.user.id || ''},
                    dimension54     : {'myaccountaction'    : myaccountactivation || ''},
                    dimension55     : {'hittype'            : 'page'},
                    dimension64     : {'dreamcaptureid'     : cdpm.dreamcaptureid || ''},
                    dimension65     : {'pagetimestamp'      : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension75     : {'unixtimestamp'      : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension80     : {'basketid'           : cdpm.tc_basket_id || ''},
                    dimension102    : {'pagecontext'        : cdpm.pagecontext || ''},
                    dimension115    : {'errormessage'       : cdpm.errors && cdpm.errors.errormsg || ''}                    
                },
                events : {
                    internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': 1, 'page': locpathname+locsearch},
                    errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': loc.hostname+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': 1, 'page': locpathname+locsearch}
                }
            }
        };

    } catch(e) {
        cdl.error('GTM UK TC UATCDL LP: '+e)
    } finally {
        dl.push({'event': 'UATCDL LP'})
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATCDL LP'})
    }
    return cdl.DL_uatc
}(window.CATTDL, window.dataLayer || [], window.location))
</script>