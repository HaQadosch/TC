<script id='GTM-P2C3FL_gatcdlAccom'>
(function gtm_gatcdlAccom(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams && dl && !dl.some(function(a){return /GATCDL Accom/i.test(a && a.event || '')}) ) try {
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
            profileid           : twlh(/directholidays/i)?"UA-33029666-1":"UA-33036832-1",
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
                'DeptDate='+(cdpm.deptdate || '').replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1')+
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
                custvar02     : {'index': 2,  'name':'AppServer',           'value':(cdpm.appserver || ''),                                     'scope': 3},
                custvar04     : {'index': 4,  'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),                            'scope': 3},
                custvar11     : {'index': 11, 'name':'AccomVideoVisible',   'value':((cdpm.accomvideo || 'n')+'|'+(cdpm.accomguid || '')),      'scope': 3},
                custvar30     : {'index': 30, 'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                                      'scope': 1},
                custvar31     : {'index': 31, 'name':'eCircleID',           'value':(cdpm.ecircleid || ''),                                     'scope': 1},
                custvar32     : {'index': 32, 'name':'dreamCaptureID',      'value':(cdpm.dreamcaptureid || ''),                                'scope': 1},
                custvar33     : {'index': 33, 'name':'MyAccountUserID',     'value':(cdpm.user && cdpm.user.id || ''),                          'scope': 3},                
                custvar35     : {'index': 35, 'name':'UtmbGuid',            'value':(cdpm.utmbguid || ''),                                      'scope': 2},
                custvar36     : {'index': 36, 'name':'tags',                'value':(cdpm.poolcontrol && 'control' || 'variant'),               'scope': 1},
                custvar39     : {'index': 39, 'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                nodejspages            : {'category': 'NodeJS Pages', 'action': loc.host+loc.pathname || '', 'label': loc.host, 'value': 1, 'noninteraction': true},
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (loc.host+loc.pathname || '')+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.departureairportselected || '')+'&deptdate='+(cdpm.deptdate || cdpm.departuredate || '').replace(/\//g, '-')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+'&destairport='+loc.search.replace(/\?/, '&'), 'value': 1, 'noninteraction': true},
                opcreative             : {'category': 'OptimostCreative', 'action': cdpm.optimostcreative || '', 'label': loc.href || '', 'value': 1, 'noninteraction': true},
                pathfinder            : {'category': 'ThePathfinder', 'action': (/ota\/accommodation|srv-search\/accom/i.test(loc.pathname)?'':loc.pathname) || '', 'label': (loc.search?loc.search:"empty"), 'value': 1, 'noninteraction': true}
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC GATCDL Accom: '+e);
    } finally {
        dl.push({'event': 'GATCDL Accom'});
    }
    return window.DL_gatc;
}(window.CATTDL, window.dataLayer, document.location || window.location))
</script>