<script id='GTM-TZ9GH9_uatcdlSRP'>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams;
        var cdsr = cdpm.srpresults || {};
        var cdfc = cdpm.srpfacets || {};
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';
        var lochost = location.hostname || location.host || '';
        var wgetData = window.getPageData(locpathname) || {};

        var vpagepath     = '/vp/en/'+(cdpm.lob || 'angular')+'/'+(cdpm.holidaytype || 'angular')+'/'+(cdpm.pageid || 'angular');
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
                            '&deptdatestart='+(cdl.gadate(cdpm.deptdatestart) || '')+
                            '&deptdateend='+(cdl.gadate(cdpm.deptdateend) || '')+
                            '&depairport='+(cdpm.deptairport || '')+
                            '&paxadult='+(cdpm.paxadult || '')+
                            '&paxchild='+(cdpm.paxchild || '')+
                            '&paxinfant='+(cdpm.paxinfant || '')+
                            '&boardbasis='+(cdfc.boardbasis && cdfc.boardbasis.toString() || '')+
                            '&destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&srptop3='+(cdpm.searchresultstop3 || '')+
                            '&srptot='+(cdpm.searchresultstotal || '')+
                            '&duration='+(cdpm.duration || '')+
                            '&sortoption='+(cdpm.sortoption || '')+
                            '&rooms='+(cdpm.rooms || '')+                            
                            '&sessionid='+(cdpm.sessionid || '')                            
                        ).toLowerCase();
        var vppage = (vpagepath || '') + '?' + (vpqsp_cat || '') +'&'+ (vpqsp_st || '') +'&'+ (vpqsp_p || '');

        cdl.DL_uatc = {
            profileid       : 'UA-33036832-7',
            cookiedomain    : cdpm.cookiedomain || 'thomascook.com',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : lochref,
                referrer    : cdurl.referrer  || '',
                hostname    : loc && (loc.hostname || '') || ''
            },
            webanalytics    :   {
                    page            : vppage,
                    qsp_st          : vpqsp_st,
                    qsp_cat         : vpqsp_cat,
                    qsp_p           : vpqsp_p,                
                    location        : lochref,
                    metrics         : {
                        metric1         : {'paxadult'                   : parseInt(cdpm.paxadult) || 0},
                        metric2         : {'paxchild'                   : parseInt(cdpm.paxchild) || 0},
                        metric3         : {'paxinfant'                  : parseInt(cdpm.paxinfant) || 0},
                        metric4         : {'paxtotal'                   : parseInt(cdpm.paxtotal) || 0},
                        metric5         : {'rooms'                      : parseInt(cdpm.rooms) || 0},
                        metric6         : {'searchresultspagenbr'       : parseInt(cdpm.searchresultspagenbr) || 0},
                        metric7         : {'searchresultspages'         : parseInt(cdpm.searchresultspages) || 0},
                        metric8         : {'searchresultsperpage'       : parseInt(cdpm.searchresultsperpage) || 0},
                        metric9         : {'searchresultstotal'         : parseInt(cdpm.searchresultstotal) || 0},
                        metric15        : {'hitcount'       : 1}
                    },
                    dimensions      : {
                        dimension1      : {'deptairport'                : cdpm.deptairport || 'any'},
                        dimension2      : {'destination'                : cdpm.destination || 'any'},
                        dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                        dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                        dimension6      : {'appserver'                  : cdpm.appserver || ''},
                        dimension7      : {'boardbasis'                 : cdfc.boardbasis && cdfc.boardbasis.join(';') || 'any'},
                        dimension8      : {'budget'                     : cdfc.pricerange && cdfc.pricerange.join(';') || 'any'},
                        dimension9      : {'duration'                   : ''+(cdpm.duration || 'empty')},
                        dimension10     : {'lob'                        : cdpm.lob || ''},
                        dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                        dimension12     : {'pageid'                     : cdpm.pageid || ''},
                        dimension13     : {'resort'                     : cdpm.resort || ''},
                        dimension14     : {'sessionid'                  : cdpm.sessionid || 'empty'},
                        dimension16     : {'accomcode'                  : cdpm.accomcodesearched || ''},
                        dimension17     : {'accomname'                  : cdpm.accomnamesearched || ''},
                        dimension19     : {'errorcode'                  : ''+(cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || "")},
                        dimension20     : {'touroperator'               : cdfc.touroperator && cdfc.touroperator.join(';') || 'any'},
                        dimension21     : {'destinationsearched'        : cdpm.destination || ''},
                        dimension23     : {'searchresultspagenbr'       : ''+(cdpm.searchresultspagenbr || '')},
                        dimension24     : {'searchresultspages'         : ''+(cdpm.searchresultspages || '')},
                        dimension25     : {'searchresultsperpage'       : ''+(cdpm.searchresultsperpage || '')},
                        dimension26     : {'searchresultstotal'         : ''+(cdpm.searchresultstotal || '')},
                        dimension28     : {'sortoption'                 : cdpm.sortoption || ''},
                        dimension29     : {'sortoptionsession'          : cdpm.sortoption || ''},
                        dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                        dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                        dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                        dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                        dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                        dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},  
                        dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                        dimension52     : {'anonymousid'                : window.userId || ''},
                        dimension53     : {'myaccountuserid'            : cdpm.user && cdpm.user.id || ''},
                        dimension55     : {'hittype'                    : 'page'},
                        dimension64     : {'dreamcaptureid'             : cdpm.dreamcaptureid || ''},
                        dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                        dimension67     : {'concepts'                   : cdfc.concepts && cdfc.concepts.join(';') || ''},
                        dimension68     : {'discountvalue'              : cdfc.discountvalue && cdfc.discountvalue.join(';') || ''},
                        dimension69     : {'discountperc'               : cdfc.discountperc && cdfc.discountperc.join(';') || ''},
                        dimension73     : {'deptdatestart'              : cdl.gadate && cdl.gadate(cdpm.deptdatestart || 0) || ''},
                        dimension74     : {'deptdateend'                : cdl.gadate && cdl.gadate(cdpm.deptdateend || 0) || ''},
                        dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
                        dimension77     : {'searchwidened'              : cdpm.searchwidened || ''},
                        dimension78     : {'searchwidenedselected'      : cdpm.searchwidenedselected || ''},
                        dimension80     : {'basketid'                   : cdpm.tc_basket_id || ''},
                        dimension84     : {'depairportsrppanel'         : cdpm.deptairportsearched || ''},
                        dimension85     : {'destinationsrppanel'        : cdpm.destinationsearched || ''},
                        dimension86     : {'resortsrppanel'             : cdpm.resortsearched || ''},
                        dimension87     : {'searchtype'                 : cdpm.searchtype || ''},
                        dimension88     : {'hotelfacilities'            : cdfc.hotelfacilities && cdfc.hotelfacilities.join(';') || ''},
                        dimension89     : {'roomfacilities'             : cdfc.roomfacilities && cdfc.roomfacilities.join(';') || ''},
                        dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                        dimension107    : {'departuretimeoutbound'      : cdfc.departuretime && cdfc.departuretime.join(';') || ''},
                        dimension110    : {'departuretimeinbound'       : cdfc.returntime && cdfc.returntime.join(';') || ''},
                        dimension115    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg || ''},               
                        dimension118    : {'vprealpath'                 : locpathname || ''},
                        dimension119    : {'vprealparameter'            : locsearch || ''}
                    },
                events : {
                    internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': 1, 'page': vppage},
                    errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': 1, 'page':vppage}
                }
            }
        };

        var dimstarrating = (cdfc.starrating && cdfc.starrating.length)?(cdfc.starrating[0]+"-"+cdfc.starrating[cdfc.starrating.length-1]):"any"
        cdl.DL_uatc.webanalytics.dimensions.dimension15 = {'starrating' : dimstarrating}

        cdl.DL_uatc.webanalytics.nbrimpressions = cdsr.length || cdpm.searchlist || 0
        cdl.DL_uatc.webanalytics.addimpression = [];
        var curCDSR = {};
        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        var srpsortlist = params.srplist || 'search';

        for (var i = 0; i < cdl.DL_uatc.webanalytics.nbrimpressions; i++){
            if (cdsr[i]) {
                curCDSR = cdsr[i]
                cdl.DL_uatc.webanalytics.addimpression.push({
                    id          : curCDSR.accomguid || "",
                    name        : ((curCDSR.accomname || "")+'|'+(curCDSR.arrivalairportcode || "")+'|'+(curCDSR.accomcountry || "")+'|'+(curCDSR.accomregion || "")+'|'+(curCDSR.accomresort || "")).toLowerCase(),
                    category    : ('en|'+(cdpm.lob || "")+'|'+(cdpm.holidaytype || "")).toLowerCase(),
                    brand       : curCDSR.touroperator || "",
                    variant     : ((curCDSR.boardbasis || "")+'|'+(curCDSR.deptairportcode || "")+'|'+(cdl.gadate && cdl.gadate(curCDSR.deptdate || 0) || '')+'|'+(cdl.gadate && cdl.gadate(curCDSR.returndate || 0) || '')+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(curCDSR.pricetotal || "")).toLowerCase(),
                    list        : (srpsortlist+'|'+(cdpm.sortoption || "")).toLowerCase(),
                    position    : (((cdpm.searchresultspagenbr || "0")*1000)+parseInt(i)+1) || 0,
                    dimension27 : 'SRP_Viewer'
                })
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC UATCDL SRP: '+e)
    } finally {
        dl.push({'event': 'UATCDL SRP'})
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATCDL SRP'})
    }   
    return  cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>