<script id='GTM-TZ9GH9_gatcdlPay'>
(function gtm_gatcdlPay(cdl, dl, loc) {
    'use strict';
    if (cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams || {};
        var cdurl = cdpm.urlparams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        	: twlh(/directholidays/i)?"UA-33029666-1":"UA-33036832-1",
            cookiedomain     	: cdpm.cookiedomain || 'thomascook.com',
            trackername        	: 'CATTGATC',
            anonymizeip        	: false,
            allowlinker        	: true,
            addignoredref   	: 'thomascook.com',            
            organicsearch    	: {
                                    'search.bt.com': 'p',
                                    'search.sky.com': 'term',
                                    'search.mywebsearch.com': 'searchfor',
                                    'search.orange.co.uk': 'q',
                                    'search.virginmedia.com': 'q',
                                    'search.incredibar.com': 'q',
                                    'search.alot.com': 'q',
                                    'search.sweetim.com': 'q',
                                    'searchmobileonline.com': 'q',
                                    'searchbrowsing.com': 'q',
                                    'advancedsearch2.virginmedia.com': 'SearchQuery'
                                }
        };
        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomcode || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+
                '&depAirport='+(cdpm.deptairport || '')+
                '&DestAirport='+(cdpm.destairport || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&PaxInfant='+(cdpm.paxinfant || '')+
                '&BoardBasis='+(cdpm.boardbasis || '')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomGuid='+(cdpm.accomguid || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(''+cdpm.rooms || '')+
                '&Duration='+(''+cdpm.duration || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                var02     : {'index': 2,  'name':'AppServer',               'value':(cdpm.appserver || ''),                         'scope': 3},
                var04     : {'index': 4,  'name':'InternalCampaign',        'value':(cdpm.internalcampaignid || ''),                'scope': 3},
                var30     : {'index': 30, 'name':'UtmaGuid',                'value':(cdpm.utmaguid || ''),                          'scope': 1},
                var31     : {'index': 31, 'name':'eCircleID',               'value':(cdpm.ecircleid || ''),                         'scope': 1},
                var32     : {'index': 32, 'name':'dreamCaptureID',          'value':(cdpm.dreamcaptureid || ''),                    'scope': 1},
                var33     : {'index': 33, 'name':'MyAccountUserID',         'value':(cdpm.user && cdpm.user.id || ''),              'scope': 3},
                var34     : {'index': 34, 'name':'MyAccountAnonymousID',    'value':(window.userId || ''),                          'scope': 3},                   
                var35     : {'index': 35, 'name':'UtmbGuid',                'value':(cdpm.utmbguid || ''),                          'scope': 2},
                var36     : {'index': 36, 'name':'tags',                    'value':(cdpm.poolcontrol && 'control' || 'variant'),   'scope': 1},
                var39     : {'index': 39, 'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                angularpages        : {'category': 'Angular Pages', 'action': locpathname || '', 'label': loc.host, 'value': 1, 'noninteraction': true},
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+locpathname, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+locpathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': loc.hostname+locpathname+'?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true},
                opcreative             : {'category': 'OptimostCreative', 'action': cdpm.optimostcreative || '', 'label': loc.href || '', 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC GATCDL Pay: '+e);
    } finally {
        dl.push({'event': 'GATCDL Pay'});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'GATCDL Pay'});
    }
    return cdl && cdl.CATTParams && cdl.DL_gatc;
}(window.CATTDL, window.dataLayer, document.location || window.location))
</script>