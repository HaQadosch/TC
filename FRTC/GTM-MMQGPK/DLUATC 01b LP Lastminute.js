<script id='gtm_uatcdlLM'>
(function gtm_uatcdlLM(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;

        cdl.DL_uatc = {
            profileid       : 'UA-33795090-1',
            cookiedomain    : /staging/i.test(location.hostname)?'auto':'thomascook.fr',
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
                    dimension1      : {'deptairport'    : cdpm.deptairport || cdpm.departureairportselected || ''},
                    dimension2      : {'destination'    : cdpm.destination || ''},
                    dimension6      : {'appserver'      : cdpm.appserver || ''},
                    dimension9      : {'duration'       : ''+(cdpm.duration || '')},
                    dimension12     : {'pageid'         : cdpm.pageid || ''},
                    dimension19     : {'errorcode'      : cdpm.errorcode || ''},
                    dimension30     : {'utmaguid'       : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'       : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'      : cdpm.emailguid || ''},
                    dimension51     : {'gaguid'         : cdpm.gaguid || ''},
                    dimension53     : {'hittype'        : 'page'},                    
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
        cdl.error('GTM FR TC UATCDL Lastminute: '+e)
    } finally {
        dl.push({'event': 'UATCDL LM'})
    }
    return cdl && cdl.CATTParams && cdl.DL_uatc
}(window.CATTDL, window.dataLayer, window.location));
</script>
