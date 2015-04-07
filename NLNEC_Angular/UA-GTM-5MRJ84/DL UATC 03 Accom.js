<script>
(function gtm_uatcdlAccom(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams;
        var searchseo = ''; Object.getOwnPropertyNames(window.getPageData() || {}).forEach(function(val, idx, array) {if(/\/holidays\/.+\/.+/i.test(val) && window.getPageData(val)) {searchseo = val}});
        var wgdSrch = window.getPageData && window.getPageData('/search') || window.getPageData('searchresults-map') || window.getPageData(searchseo) || {};
        var locpathname = cdurl && cdurl.pathanme
        var locsearch = cdurl && cdurl.paramstring
        var lochref = cdurl && cdurl.fullurl

        cdl.DL_uatc = {
            profileid       : 'UA-27847231-2',
            cookiedomain    : twlh(/neckermann.io/i)?"neckermann.io":"neckermann.nl",
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : true,
                location    : lochref,
                referrer    : cdurl.referrer  || '',
                hostname    : loc && loc.hostname || ''
            },
            webanalytics    : {
                page            : '/vp/en/'+(cdpm.lob || 'angular')+'/'+(cdpm.holidaytype || 'angular')+'/'+(cdpm.pageid || 'angular'),
                location        : lochref,
                metrics         : {
                    metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                    metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'   : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspagenbr) || ''},
                    metric7         : {'searchresultspages'     : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultspages) || ''},
                    metric8         : {'searchresultsperpage'   : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultsperpage) || ''},
                    metric9         : {'searchresultstotal'     : parseInt(cdpm.srpparams && cdpm.srpparams.searchresultstotal) || ''},
                    metric10        : {'bookingvalue'           : parseInt(cdpm.totalprice) || 0},
                    metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0}
                    //metric15        : {'hitcount'               : 1},
                    //metric29        : {'premiumcabin'           : parseInt(+cdpm.premiumcabin || 0)}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || 'empty'},
                    dimension2      : {'destination'                : cdpm.destination || 'empty'},
                    dimension3      : {'brochure'                   : cdpm.brochure || 'empty'},
                    dimension4      : {'searchresultstop3'          : cdpm.srpparams && cdpm.srpparams.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'},
                    dimension8      : {'budget'                     : cdpm.srpparams && cdpm.srpparams.budget || ''},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || 'empty')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.srpparams && cdpm.srpparams.resort || ''},
                    dimension14     : {'sessid'                     : cdpm.sessionid || 'empty'},
                    dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
                    dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                    dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                    dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || ""},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                    dimension21     : {'destination'                : cdpm.destination || 'empty'},
                    dimension22     : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.srpparams && ''+cdpm.srpparams.searchresultspagenbr || ''},
                    dimension24     : {'searchresultspages'         : cdpm.srpparams && ''+cdpm.srpparams.searchresultspages || ''},
                    dimension25     : {'searchresultsperpage'       : cdpm.srpparams && ''+cdpm.srpparams.searchresultsperpage || ''},
                    dimension26     : {'searchresultstotal'         : cdpm.srpparams && ''+cdpm.srpparams.searchresultstotal || ''},
                    dimension28     : {'sortoption'                 : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension29     : {'sortoptionsearched'         : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension30     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier && cdpm.carrier.code || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension56     : {'seasoncode'                 : cdpm.seasoncode || ''},
                    dimension63     : {'roomcode1'                  : cdpm.roomcodes && cdpm.roomcodes[0] || 'empty'},
                    dimension64     : {'roomcode2'                  : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                    dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')},
                    dimension106    : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].arrive.date) || ''},
                    dimension107    : {'departuretimeoutbound'      : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].depart.date) || ''},
                    dimension115    : {'realurl'                    : locpathname+locsearch || ''},
                    dimension119    : {'pagetimestamp'             : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension123    : {'discountperc'              : ''+(cdpm.discountperc || '0')},
                    dimension124    : {'discountvalue'             : ''+(cdpm.discountvalue || '0')},
                    dimension132    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg || ''},
                    dimension133    : {'zooverrating'               : cdpm.ratings && cdpm.ratings.zoover && cdpm.ratings.zoover.avgrating || ''},
                    dimension134    : {'zoovercount'                : cdpm.ratings && cdpm.ratings.zoover && cdpm.ratings.zoover.count || ''}                    
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochref, 'value': 1, 'noninteraction': true}
                }
            }
        };

        var accId = cdpm.accomcode || "";
        var accSort = wgdSrch && wgdSrch.links && wgdSrch.links.search && wgdSrch.links.search.context && wgdSrch.links.search.context.sort || "";
        var accPage = cdpm.srpparams && cdpm.srpparams.searchresultspagenbr || 0;
        var accPosition = 0
        if (wgdSrch && wgdSrch.items) {
            for (i = 0; i < wgdSrch.items.length; i++) {
                if (wgdSrch.items[i] && wgdSrch.items[i].hotel && wgdSrch.items[i].hotel.code === accId) {
                    accPosition = (accPage*1000)+(i+1);
                    break;
                } else {continue}
            }
        };

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        var srpsortlist = params.srplist || 'search';
        params.accomposition = {};
        params.accomposition[accId || 'na'] =  accPosition;
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.neckermann.nl');

        cdl.DL_uatc.webanalytics.addproductlist = {
            id          : accId,
            name        : ((cdpm.accomname || "")+'|'+(cdpm.destairport || "")+'|'+(cdpm.accomcountry || "")+'|'+(cdpm.accomregion || "")+'|'+(cdpm.accomresort || "")).toLowerCase(),
            category    : ("en|"+(cdpm.lob || "")+'|'+(cdpm.holidaytype || "")).toLowerCase(),
            brand       : (cdpm.touroperator || "").toLowerCase(),
            variant     : ((cdpm.boardbasis || "")+'|'+(cdpm.deptairport || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || 0) || "")+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(cdpm.pricepp || "0")).toLowerCase(),
            list        :(srpsortlist+'|'+(accSort || "")).toLowerCase(),
            position    : accPosition || 0
        };
    } catch(e) {
        cdl.error('GTM NL NEC UATCDL Accom: '+e)
    } finally {
        dl.push({'event': 'UATCDL Accom'})
        gatcDL.push({'event': 'UATCDL Accom'})
    }
    return jQ && cdl && cdl.CATTParams && cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>
