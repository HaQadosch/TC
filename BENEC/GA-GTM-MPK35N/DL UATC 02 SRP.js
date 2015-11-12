<script>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams;
        var cdsr = cdpm.srpresults || {};
        var locpathname = loc.pathname || '';
        var locsearch = loc.search || '';
        var lochref = loc.href || document.URL || '';
        var lochost = loc.host || loc.hostname || '';

        var deptdatestart = cdpm.deptwkstart?cdpm.deptwkstart:(cdpm.deptmthstart?cdpm.deptmthstart:(cdpm.deptdate?cdpm.deptdate:0));
        var deptdateend = cdpm.deptwkend?cdpm.deptwkend:(cdpm.deptmthend?cdpm.deptmthend:(cdpm.deptdate?cdpm.deptdate:0));
        var starrating = (cdpm.starrating && cdpm.starrating.length)?(cdpm.starrating[0]+"-"+cdpm.starrating[cdpm.starrating.length-1]):"any";
        var boardbasis = (cdpm.boardbasis && cdpm.boardbasis.length)?(cdpm.boardbasis[0]+"-"+cdpm.boardbasis[cdpm.starrating.length-1]):"any";


        var vpagepath     = '/vp/en/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid');
        var vpqsp_cat   = ('ss_cat='+ 
                            (cdpm.lob || '')+'_'+
                            (cdpm.pageid || '')
                        ).toLowerCase();        
        var vpqsp_st  = ('ss_st='+ 
                            (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                            (cdl.gadate(cdpm.deptdate) || '')+'_'+
                            ((cdpm.searchresultstotal === 0?'nResults':'yResults') || '')
                        ).toLowerCase();
        var vpqsp_p     = ( 
                            'deptdate='+(cdl.gadate(cdpm.deptdate) || '')+
                            '&depairport='+(cdpm.deptairport || '')+
                            '&paxadult='+(cdpm.paxadult || '')+
                            '&paxchild='+(cdpm.paxchild || '')+
                            '&paxinfant='+(cdpm.paxinfant || '')+
                            '&boardbasis='+(boardbasis|| '')+
                            '&destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&srptop3='+(cdpm.searchresultstop3 || '')+
                            '&srptot='+(cdpm.searchresultstotal || '')+
                            '&duration='+(cdpm.duration || '')+
                            '&sortoption='+(cdpm.sortoption || '')+
                            '&rooms='+(cdpm.rooms || '')+                            
                            '&sessionid='+(cdpm.sessionid || '')+
                            '&appserver='+(cdpm.appserver || '')+
                            '&searchapp='+(cdpm.searchapp || '')+                            
                            '&sitelanguage='+(cdpm.sitelanguage || '')                                                       
                        ).toLowerCase();
        var vppage = (vpagepath || '') + '?' + (vpqsp_cat || '') +'&'+ (vpqsp_st || '') +'&'+ (vpqsp_p || '');

        cdl.DL_uatc = {
            profileid       : 'UA-33087819-2',
            cookiedomain    : "neckermann.be",
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : lochref,
                referrer    : document.referrer  || '',
                hostname    : loc && (loc.hostname || '') || ''
            },
            webanalytics    :   {
                page            : vppage,
                location        : lochref,
                metrics         : {
                    metric1         : {'paxadult'                   : parseInt(cdpm.paxadult || 0)},
                    metric2         : {'paxchild'                   : parseInt(cdpm.paxchild || 0)},
                    metric3         : {'paxinfant'                  : parseInt(cdpm.paxinfant || 0)},
                    metric4         : {'paxtotal'                   : parseInt(cdpm.paxtotal || 0)},
                    metric5         : {'rooms'                      : parseInt(cdpm.rooms || 0)},
                    metric15        : {'hitcount'       : 1}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || 'any'},
                    dimension2      : {'destination'                : cdpm.destination || 'any'},
                    dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || ''},
                    dimension7      : {'boardbasis'                 : boardbasis || 'any'},
                    //dimension8      : {'budget'                     : cdpm.budget || 'any'},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || 'any')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resort || ''},
                    dimension14     : {'sessionid'                  : cdpm.sessionid || ''},
                    dimension15     : {'starrating'                 : starrating || 'any'},
                    dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || ""},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'any'},
                    dimension21     : {'destinationsession'         : cdpm.destination || 'any'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr && (''+cdpm.searchresultspagenbr) || '0'},
                    dimension24     : {'searchresultspages'         : cdpm.searchresultspages && (''+cdpm.searchresultspages) || '0'},
                    dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage && (''+cdpm.searchresultsperpage) || '0'},
                    dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal && (''+cdpm.searchresultstotal) || '0'},
                    dimension28     : {'sortoption'                 : cdpm.sortoption || ''},
                    dimension29     : {'sortoptionsession'          : cdpm.sortoption || ''},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                    //dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},  
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension52     : {'pagelanguage'               : cdpm.sitelanguage || ''},
                    dimension53     : {'sessionlanguage'            : cdpm.sitelanguage || ''},                      
                    dimension65     : {'pagetimestamp'              : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension73     : {'deptdatestart'              : cdl.gadate && cdl.gadate(deptdatestart || 0)},
                    dimension74     : {'deptdateend'                : cdl.gadate && cdl.gadate(deptdateend || 0)},
                    dimension75     : {'unixtimestamp'              : cdpm.pagetimestamp || ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                    dimension103    : {'rooms'                      : ''+cdpm.rooms || ''},
                    dimension104    : {'searchapp'                  : ''+cdpm.searchapp || ''},
                    dimension105    : {'initialholidaytype'         : ''+cdpm.initialholidaytype || ''},
                    dimension115    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg || ''},
                    dimension118    : {'realurlpath'                : locpathname || ''},
                    dimension119    : {'realurlparams'              : locsearch || ''}
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochref, 'value': 1, 'noninteraction': true, 'page': vppage},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page':vppage}
                }
            }
        };

        var cdsr = cdl.CATTParams && cdl.CATTParams.srpresults || [];
        cdl.DL_uatc.webanalytics.nbrimpressions = cdsr.length || cdpm.searchlist || 0
        cdl.DL_uatc.webanalytics.addimpression = [];

        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
        params.srplist = 'search';
        params.sortoption = cdpm.sortoption || '';
        params.srpresults = cdsr || [];
        params.searchresultspagenbr = cdpm.searchresultspagenbr || '';
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.neckermann.be');

        var srpsortlist = 'search';
        var curCDSR = {};
        for (var i = 0; i < cdl.DL_uatc.webanalytics.nbrimpressions; i++){
            if (cdsr[i]) {
                curCDSR = cdsr[i]
                cdl.DL_uatc.webanalytics.addimpression.push({
                    id          : curCDSR.accomcode || "",
                    name        : ((curCDSR.accomname || "")+'|'+(curCDSR.destairportcode || "")+'|'+(curCDSR.accomcountry || "")+'|'+(curCDSR.accomregion || "")+'|'+(curCDSR.accomresort || "")).toLowerCase(),
                    category    : ('en|'+(cdpm.lob || "")+'|'+(cdpm.holidaytype || "")).toLowerCase(),
                    brand       : curCDSR.touroperator || "",
                    variant     : ((curCDSR.boardbasis || "")+'|'+(curCDSR.deptairportcode || "")+'|'+(cdl.gadate && cdl.gadate(curCDSR.deptdate || 0) || '')+'|'+(cdl.gadate && cdl.gadate(curCDSR.returndate || 0) || '')+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(curCDSR.pricepp || "")).toLowerCase(),
                    list        : (srpsortlist+'|'+(cdpm.sortoption || "")).toLowerCase(),
                    position    : (((cdpm.searchresultspagenbr || "0")*1000)+parseInt(i)+1) || 0,
                    dimension27 : 'SRP_Viewer'
                })
            }
        };
    } catch(e) {
        cdl.error('GTM BE NEC UATCDL SRP: '+e)
    } finally {
        dl.push({'event': 'UATCDL SRP'})
        window.gatcDL && gatcDL.push({'event': 'UATCDL SRP'})
    }   
    return  cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>
