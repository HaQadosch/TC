<script>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams;
        var cdsr = cdpm.srpresults || {};
        var cdfc = cdpm.srpfacets || {};
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname
        var locsearch = cdurl && cdurl.paramstring
        var lochref = cdurl && cdurl.fullurl

        var wgetData = window.getPageData(locpathname) || {};

        var discfacets = ''; cdpm && cdpm.srpfacets && cdpm.srpfacets.discountperc && cdpm.srpfacets.discountperc.forEach(function(e) {if (discfacets) {discfacets = discfacets+'|'+e} else {discfacets = e}});

        cdl.DL_uatc = {
            profileid       : 'UA-27847231-2',
            cookiedomain    : twlh(/neckermann.io/i)?"neckermann.io":"neckermann.nl",
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : lochref,
                referrer    : cdurl.referrer  || '',
                hostname    : loc && (loc.hostname || '') || ''
            },
            webanalytics    :   {
                page            : '/vp/en/'+(cdpm.lob || 'angular')+'/'+(cdpm.holidaytype || 'angular')+'/'+(cdpm.pageid || 'angular'),
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
                    metric9         : {'searchresultstotal'         : parseInt(cdpm.searchresultstotal) || 0}
                    //metric15        : {'hitcount'       : 1}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || 'any'},
                    dimension2      : {'destination'                : cdpm.destination || 'any'},
                    dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || 'empty'},
                    dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                    dimension7      : {'boardbasis'                 : cdfc.boardbasis && cdfc.boardbasis.toString() || 'any'},
                    dimension8      : {'budget'                     : cdfc.pricerange && cdfc.pricerange.toString() || 'any'},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || 'empty')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resort || 'empty'},
                    dimension14     : {'sessionid'                  : cdpm.sessionid || 'empty'},
                    dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || ""},
                    dimension20     : {'touroperator'               : cdfc.touroperator && cdfc.touroperator.toString() || 'any'},
                    dimension21     : {'destinationsession'         : cdpm.destination || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr && (''+cdpm.searchresultspagenbr) || 'empty'},
                    dimension24     : {'searchresultspages'         : cdpm.searchresultspages && (''+cdpm.searchresultspages) || 'empty'},
                    dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage && (''+cdpm.searchresultsperpage) || 'empty'},
                    dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal && (''+cdpm.searchresultstotal) || 'empty'},
                    dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                    dimension29     : {'sortoptionsession'          : cdpm.sortoption || 'empty'},
                    dimension30     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},  
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension56     : {'seasoncode'                 : cdpm.seasoncode || ''},
                    dimension66     : {'facet discountperc'         : discfacets || ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                    dimension115    : {'realurl'                    : locpathname+locsearch || ''},               
                    dimension119    : {'pagetimestamp'              : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension123    : {'discountperc'               : ''+(cdfc.discountperc && cdfc.discountperc[0] || '')},
                    dimension124    : {'discountvalue'              : ''+(cdfc.discountvalue && cdfc.discountvalue[0] || '')},                    
                    dimension132    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg || ''},
                    dimension133    : {'zooverrating'               : cdpm.ratings && cdpm.ratings.zoover && cdpm.ratings.zoover.avgrating || ''},
                    dimension134    : {'zoovercount'                : cdpm.ratings && cdpm.ratings.zoover && cdpm.ratings.zoover.count || ''}
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochref, 'value': 1, 'noninteraction': true}
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
                    id          : curCDSR.accomcode || "",
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
        cdl.error('GTM NL NEC UATCDL SRP: '+e)
    } finally {
        dl.push({'event': 'UATCDL SRP'})
        gatcDL.push({'event': 'UATCDL SRP'})
    }   
    return  cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>
