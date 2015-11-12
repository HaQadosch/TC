<script id='GTM-MSD88R_gatcDLLP'>
(function gtm_gatcdlLP(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams && dl && !dl.some(function(a){return /GATCDL LP/i.test(a && a.event || '')})) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid           : "UA-33036832-1",
            cookiedomain        : cdpm.cookiedomain || 'thomascook.com',
            trackername         : 'CATTGATC',
            anonymizeip         : false,
            allowlinker         : true,
            addignoredref       : 'thomascook.com',
            organicsearch       : {
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
                'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+
                '&depAirport='+(cdpm.departureairportSelected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(cdpm.rooms || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,     'name':'AppServer',                        'value':(cdpm.appserver || ''),                         'scope': 3},
                custvar04     : {'index': 4,     'name':'InternalCampaign',                 'value':(cdpm.internalcampaignid || ''),                'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',                         'value':(cdpm.utmaguid || ''),                          'scope': 1},
                custvar31     : {'index': 31,    'name':'eCircleID',                        'value':(cdpm.ecircleid || ''),                         'scope': 1},
                custvar32     : {'index': 32,    'name':'dreamCaptureID',                   'value':(cdpm.dreamcaptureid || ''),                    'scope': 1},
                custvar33     : {'index': 33,    'name':'MyAccountUserID',                  'value':(cdpm.user && cdpm.user.id || ''),              'scope': 3},                
                custvar35     : {'index': 35,    'name':'UtmbGuid',                         'value':(cdpm.utmbguid || ''),                          'scope': 2},
                custvar36     : {'index': 36,    'name':'tags',                             'value':(cdpm.poolcontrol && 'control' || 'variant'),   'scope': 1},
                custvar39     : {'index': 39,    'name':'dreamCaptureAbtaVisitorSession',   'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (loc.host+loc.pathname || '')+"?SessionID="+cdpm.sessionid+"&AppServer="+cdpm.appserver+loc.search.replace(/\?/, '&'), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC GATCDL LP: '+e);
    }
    dl.push({'event': 'GATCDL LP'});
    return window.DL_gatc;
}(window.CATTDL, window.dataLayer_MSD88R, document.location || window.location))
</script>