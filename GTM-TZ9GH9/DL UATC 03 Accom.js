<script id='GTM-TZ9GH9_uatcdlAccom'>
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
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';
        var lochost = location.hostname || location.host || '';
        var cdpr = cdpm.srpparams || {};

        var fltoutbound = cdpm.flightdetails && cdpm.flightdetails.outbound;
        var fltinbound = cdpm.flightdetails && cdpm.flightdetails.inbound;
        var flttype = (fltoutbound && fltoutbound.length && fltoutbound.length > 1)?'indirect':'direct';

        var vpagepath = '/vp/en/'+(cdpm.lob || 'angular')+'/'+(cdpm.holidaytype || 'angular')+'/'+(cdpm.pageid || 'angular');
        var vpqsp_cat   = ('ss_cat='+ 
                            (cdpm.lob || '')+'_'+
                            (cdpm.pageid || '')
                        ).toLowerCase();        
        var vpqsp_st  = ('ss_st='+ 
                            (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                            (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                            (cdpm.accomcode || '')
                        ).toLowerCase();
        var vpqsp_p     = ( 
                            'deptdate='+(cdl.gadate(cdpm.deptdate) || '')+
                            '&depairport='+(cdpm.deptairport || '')+
                            '&destairport='+(cdpm.destairport || '')+                         
                            '&paxadult='+(cdpm.paxadult || '0')+
                            '&paxchild='+(cdpm.paxchild || '0')+
                            '&paxinfant='+(cdpm.paxinfant || '0')+
                            '&boardbasis='+(cdpm.boardbasis || '')+
                            '&destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&accomcode='+(cdpm.accomcode || '')+
                            '&accomguid='+(cdpm.accomguid || '')+             
                            '&accomname='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&duration='+(cdpm.duration || '')+
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
                hostname    : loc && loc.hostname || ''
            },
            webanalytics    : {
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
                    metric6         : {'searchresultspagenbr'       : parseInt(cdpr.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'         : parseInt(cdpr.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'       : parseInt(cdpr.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'         : parseInt(cdpr.searchresultstotal) || 0},
                    metric10        : {'bookingvalue'               : +(cdpm.totalprice || 0)},
                    metric11        : {'depositvalue'               : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'              : parseInt(cdpm.discountvalue) || 0},
                    metric15        : {'hitcount'                   : 1},
                    metric29        : {'premiumcabin'               : parseInt(+cdpm.premiumcabin) || 0}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || 'empty'},
                    dimension2      : {'destination'                : cdpm.destination || 'empty'},
                    dimension4      : {'searchresultstop3'          : cdpr.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'},
                    dimension8      : {'budget'                     : cdpr.budget || ''},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || 'empty')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpr.resort || ''},
                    dimension14     : {'sessid'                     : cdpm.sessionid || 'empty'},
                    dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
                    dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                    dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                    dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19     : {'errorcode'                  : ''+(cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || "")},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                    dimension21     : {'destinationsearched'        : ''+(cdpr.destination || '')},
                    dimension22     : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : ''+(cdpr.searchresultspagenbr || '')},
                    dimension24     : {'searchresultspages'         : ''+(cdpr.searchresultspages || '')},
                    dimension25     : {'searchresultsperpage'       : ''+(cdpr.searchresultsperpage || '')},
                    dimension26     : {'searchresultstotal'         : ''+(cdpr.searchresultstotal || '')},
                    dimension28     : {'sortoption'                 : ''+(cdpr.sortoption || '')},
                    dimension29     : {'sortoption'                 : ''+(cdpr.sortoption || '')},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier && cdpm.carrier.code || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || 'empty'},
                    dimension52     : {'anonymousid'                : window.userId || ''},
                    dimension53     : {'myaccountuserid'            : cdpm.user && cdpm.user.id || ''},
                    dimension55     : {'hittype'                    : 'page'},
                    dimension58     : {'accomguid'                  : cdpm.accomguid || 'empty'},
                    dimension59     : {'roomcode1'                  : cdpm.roomcodes && cdpm.roomcodes[0] || 'empty'},
                    dimension60     : {'roomcode2'                  : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension61     : {'roomcode3'                  : cdpm.roomcodes && cdpm.roomcodes[2] || ''},
                    dimension62     : {'roomcode4'                  : cdpm.roomcodes && cdpm.roomcodes[3] || ''},
                    dimension63     : {'roomcode5'                  : cdpm.roomcodes && cdpm.roomcodes[4] || ''},
                    dimension64     : {'dreamcaptureid'             : cdpm.dreamcaptureid || ''},          
                    dimension65     : {'pagetimestamp'              : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension68     : {'discountvalue'              : ''+(cdpm.discountvalue || 0)},
                    dimension69     : {'discountperc'               : ''+(cdpm.discountperc || 0)},
                    dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension79     : {'flighttype'                 : flttype || ''},
                    dimension80     : {'basketid'                   : cdpm.tc_basket_id || ''},
                    dimension87     : {'searchtype'                 : cdpr.searchtype || 'landing/deeplinks'},
                    dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')},
                    dimension106    : {'arrivaltimeoutbound'        : cdl.gatime && fltoutbound && fltoutbound[0] && fltoutbound[0].arrive && cdl.gatime(fltoutbound[0].arrive.date) || ''},
                    dimension107    : {'departuretimeoutbound'      : cdl.gatime && fltoutbound && fltoutbound[0] && fltoutbound[0].depart && cdl.gatime(fltoutbound[0].depart.date) || ''},
                    dimension108    : {'returndate'                 : cdl.gadate && cdl.gadate(cdpm.returndate || 0) || ''},
                    dimension109    : {'arrivaltimeinbound'         : cdl.gatime && fltinbound && fltinbound[0] && fltinbound[0].arrive && cdl.gatime(fltinbound[0].arrive.date) || ''},
                    dimension110    : {'departuretimeinbound'       : cdl.gatime && fltinbound && fltinbound[0] && fltinbound[0].depart && cdl.gatime(fltinbound[0].depart.date) || ''},
                    dimension111    : {'totalprice'                 : ''+cdpm.totalprice || '0'},
                    dimension112    : {'destinationcountry'         : cdpm.accomcountry || 'empty'},
                    dimension113    : {'destinationregion'          : cdpm.accomregion || 'empty'},
                    dimension114    : {'destinationresort'          : cdpm.accomresort || 'empty'},
                    dimension115    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg || ''},
                    dimension116    : {'depositvalue'               : ''+(cdpm.depositvalue || '')},
                    dimension117    : {'paymentfee'                 : ''+(cdpm.paymentfee || '')},
                    dimension118    : {'vprealpath'                 : locpathname || ''},
                    dimension119    : {'vprealparameter'            : locsearch || ''}      
                },
                events : {
                    internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': 1, 'page': vppage},
                    errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+'&destairport='+(cdpm.destairport || '')+'&accomcode='+(cdpm.accomcode || '')+'&accomguid='+(cdpm.accomguid || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': 1, 'page':vppage}
                }
            }
        };

        var accId = cdpm.accomguid || "";
        var accSort = wgdSrch && wgdSrch.links && wgdSrch.links.search && wgdSrch.links.search.context && wgdSrch.links.search.context.sort || "";
        var accPage = cdpr.searchresultspagenbr || 0;
        var accPosition = 0
        if (wgdSrch && wgdSrch.items) {
            for (i = 0; i < wgdSrch.items.length; i++) {
                if (wgdSrch.items[i] && wgdSrch.items[i].id === accId) {
                    accPosition = (accPage*1000)+(i+1);
                    break;
                } else {continue}
            }
        };

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        var srpsortlist = params.srplist || 'search';
        params.accomposition = {};
        params.accomposition[accId || 'na'] =  accPosition;
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));

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
        cdl.error('GTM UK TC UATCDL Accom: '+e)
    } finally {
        dl.push({'event': 'UATCDL Accom'})
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATCDL Accom'})
    }
    return jQ && cdl && cdl.CATTParams && cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>
