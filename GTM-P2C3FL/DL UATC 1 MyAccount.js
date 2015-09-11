<script id='gtm_uatcdlMA'>
(function gtm_uatcdlMA(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams;
        cdl.DL_uatc = {};
        cdl.DL_uatc.webanalytics = {};
        var locpathname = loc.pathname || '';
        var locsearch = loc.search || '';
        var lochref = loc.href || document.URL || '';
        var lochost = location.hostname || location.host || '';

        if (!window.ga || window.ga.length < 1)  {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        };

        var myaccountactivation = /\/myaccount\/activate/.test(locpathname)?'User_Activation':'';

        cdl.DL_uatc = {
            profileid       : 'UA-33036832-7',
            cookiedomain    : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false
            }
        };
        cdl.DL_uatc.webanalytics = {
            page            : loc && ((locpathname || '/')+(locsearch || '')) || '',
            location        : loc && loc.href || '',
            metrics         : {
                metric15        : {'hitcount'       : 1}
            },
            dimensions      : {
                dimension6      : {'appserver'              : cdpm.appserver || ''},
                dimension12     : {'pageid'                 : cdpm.pageid || ''},
                dimension19     : {'errorcode'              : cdpm.errors || ""},
                dimension30     : {'utmaguid'               : cdpm.utmaguid || ''},
                dimension31     : {'utmbguid'               : cdpm.utmbguid || ''},
                dimension51     : {'gaguid'                 : cdpm.gaguid || ''},
                dimension53     : {'myaccountuserid'        : cdpm.user && cdpm.user.id || ''},
                dimension54     : {'myaccountaction'        : myaccountactivation || ''},
                dimension32     : {'emailguid'              : cdpm.emailguid || ''},
                dimension64     : {'dreamcaptureid'         : cdpm.dreamcaptureid || ''},
                dimension65     : {'pagetimestamp'          : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                dimension75     : {'unixtimestamp'          : ''+(cdpm.pagetimestamp || 0) || ''},
                dimension76     : {'tags'                   : cdpm.poolcontrol && 'N' || 'Y'},
                dimension102    : {'pagecontext'            : cdpm.pagecontext || ''},
                dimension115    : {'errormessage'           : cdpm.errors && cdpm.errors.errormsg || ''}
            },
            events : {
            internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': true, 'page': locpathname+locsearch},
            errorcode           : {'category': 'Errors', 'action': cdpm.errors || (cdpm.errors && cdpm.errors.Code) || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.departureairportselected || cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page': locpathname+locsearch}
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC UATCDL MyAccount: '+e);
    } finally {
         dl.push({'event': 'UATCDL MyAccount'});
     }
     return cdl.DL_uatc;
}(window.CATTDL, window.dataLayer, window.location))
</script>
