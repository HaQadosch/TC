<script>
(function gtm_uatcdlLP(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;

        cdl.DL_uatc = {
            profileid       : 'UA-33870117-1',
            cookiedomain    : /staging/i.test(location.hostname)?'auto':'jettours.com',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false             
            },
            webanalytics    : {
                page            : loc && ((loc.pathname || '')+(loc.search || '')) || '',
                location        : loc && loc.href || window.document && window.document.URL || '',         
                metrics         : {
                    metric15        : {'hitcount'       : 1}
                },
                dimensions      : {
                    dimension6      : {'appserver'      : cdpm.appserver || ''},
                    dimension12     : {'pageid'         : cdpm.pageid || ''},
                    dimension19     : {'errorcode'      : cdpm.errorcode || ''},
                    dimension30     : {'utmaguid'       : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'       : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'      : cdpm.emailguid || ''},
                    dimension51     : {'gaguid'         : cdpm.gaguid || ''},
                    dimension54     : {'intcmp'         : cdpm.internalcampaignid || ''},
                    dimension55     : {'intcmpsession'  : cdpm.internalcampaignid || ''},
                    dimension65     : {'pagetimestamp'  : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension75     : {'unixtimestamp'  : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension102    : {'pagecontext'    : cdpm.pagecontext || ''},
                    dimension115    : {'errormessage'   : cdpm.errors || ''}
                }
            }
        };
    } catch(e) {
        cdl.error('GTM FR JT UATCDL LP: '+e)
    } finally {
        dl.push({'event': 'UATCDL LP'})
    }
    return cdl && cdl.CATTParams && cdl.DL_uatc
}(window.CATTDL, window.dataLayer, window.location));
</script>
