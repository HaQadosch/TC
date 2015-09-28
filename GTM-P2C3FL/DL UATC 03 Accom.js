<script id='GTM-P2C3FL_uatcdlAccom'>
(function gtm_uatcdlAccom(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams && dl && !dl.some(function(a){return /UATCDL Accom/i.test(a && a.event || '')}) ) try {
        var twlh = cdl.twlh
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;
        cdl.DL_uatc = {};
        cdl.DL_uatc.webanalytics = {};
        var locpathname = loc.pathname || '';
        var locsearch = loc.search || '';
        var lochref = loc.href || document.URL || '';
        var lochost = location.hostname || location.host || '';

        var xbUATCEC = cdl.ckget('xbUATCEC') || false
        xbUATCEC = xbUATCEC && JSON.parse(unescape(xbUATCEC)) || false

        var vpagepath = '/vp/en/'+(cdpm.lob || 'node')+'/'+(cdpm.holidaytype || 'node')+'/'+(cdpm.pageid || 'accom');
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
                            '&depairport='+(cdpm.deptairportselected || cdpm.deptairport || '')+
                            '&destairport='+(cdpm.destinationairportselected || cdpm.destairport || '')+
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
                location    : loc && loc.href || document.URL || '',
                referrer    : document.referrer.split(/\?/)[0],
                hostname    : loc && loc.hostname || ''
            }
        };
        cdl.DL_uatc.webanalytics = {
            previousstep    : (function (steps){ return (steps.length > 2)?steps[steps.length - 2]:"" }(cdpm.trailingsteps.split('|'))),
            page            : vppage,
            location        : loc && loc.href || document.URL || '',
            addproduct      : {
                id              : cdpm.accomguid || '',
                name            : ((cdpm.accomname || "" )+'|'+(cdpm.destinationairportselected || "")+'|'+(cdpm.accomcountry || "")+'|'+(cdpm.accomregion || "")+'|'+(cdpm.accomdestrest || "")).toLowerCase() || "",
                category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                brand           : (cdpm.touroperator || '').toLowerCase() || "",
                variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.departureairportselected||"")+'|'+(cdpm.deptdate||"")+'|'+(cdpm.retdate||"")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                list            : ('search|'+xbUATCEC.sort).toLowerCase() || "",
                position        : xbUATCEC[cdpm.accomguid] || 0
            },
            metrics         : {
                metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                metric10        : {'bookingvalue'           : parseInt(cdpm.accomprice || cdpm.bookingvalue) || 0},
                metric15        : {'hitcount'               : 1},
                metric20        : {'promocodevalue'         : +(cdpm.promocodevalue || 0)}
            },
            dimensions      : {
                dimension1      : {'departureairportselected'   : cdpm.departureairportselected || 'empty'},
                dimension2      : {'destination'                : cdpm.destination || 'empty'},
                dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                dimension5      : {'deptdate'                   : cdpm.deptdate && cdpm.deptdate.replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1') || ''},
                dimension6      : {'appserver'                  : cdpm.appserver || ''},
                dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''},
                dimension8      : {'budget'                     : cdpm.budget || ''},
                dimension9      : {'duration'                   : cdpm.duration || ''},
                dimension10     : {'lob'                        : cdpm.lob || ''},
                dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                dimension12     : {'pageid'                     : cdpm.pageid || ''},
                dimension13     : {'resortsearched'             : cdpm.resortsearched || ''},
                dimension14     : {'sessid'                     : cdpm.sessid || ''},
                dimension15     : {'starrating'                 : cdpm.starrating || ''},
                dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
                dimension19     : {'errorcode'                  : cdpm.errors || ''},
                dimension20     : {'touroperator'               : cdpm.touroperator || cdpm.brand || ''},
                dimension22     : {'destinationairportselected' : cdpm.destinationairportselected || 'empty'},
                dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr || ''},
                dimension24     : {'searchresultspages'         : cdpm.searchresultspages || ''},
                dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage || ''},
                dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || ''},
                dimension28     : {'sortoption'                 : cdpm.sortoption || ''},
                dimension29     : {'sortoptionsession'          : cdpm.sortoption || ''},
                dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                dimension33     : {'carrier'                    : cdpm.carrier || ''},
                dimension34     : {'paxadult'                   : (''+cdpm.paxadult || '0').toString()},
                dimension35     : {'paxchild'                   : (''+cdpm.paxchild || '0').toString()},
                dimension36     : {'paxinfant'                  : (''+cdpm.paxinfant || '0').toString()},
                dimension37     : {'paxtotal'                   : (''+cdpm.paxtotal || '0').toString()},
                dimension51     : {'gaguid'                     : cdpm.gaguid || ''},
                dimension52     : {'anonymousid'                : window.userId || ''},
                dimension53     : {'myaccountuserid'            : cdpm.user && cdpm.user.id || ''},
                //dimension54     : {'myaccountaction'          : myaccountactivation || ''},                    
                dimension58     : {'accomguid'                  : cdpm.accomguid || 'empty'},
                dimension59     : {'roomcode1'                  : cdpm.rooms && cdpm.rooms == 1 && cdpm.roomtypes && cdpm.roomtypes[0] || ''},
                dimension60     : {'roomcode2'                  : cdpm.rooms && cdpm.rooms > 1 && cdpm.roomtypes && cdpm.roomtypes[1] || ''},
                dimension61     : {'roomcode3'                  : cdpm.rooms && cdpm.rooms > 2 && cdpm.roomtypes && cdpm.roomtypes[2] || ''},
                dimension62     : {'roomcode4'                  : cdpm.rooms && cdpm.rooms > 3 && cdpm.roomtypes && cdpm.roomtypes[3] || ''},
                dimension63     : {'roomcode5'                  : cdpm.rooms && cdpm.rooms > 4 && cdpm.roomtypes && cdpm.roomtypes[4] || ''},
                dimension64     : {'dreamcaptureid'             : cdpm.dreamcaptureid || ''},
                dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                dimension71     : {'promocode'                  : cdpm.promocode || ''},
                dimension72     : {'promocodevalue'             : cdpm.promocodevalue || ''},
                dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
                dimension76     : {'tags'                       : cdpm.poolcontrol && 'N' || 'Y'},
                dimension103    : {'rooms'                      : (cdpm.rooms || '0').toString()},
                dimension106    : {'arrivaltimeoutbound'        : cdpm.flightdetails && cdpm.flightdetails.outbound.arrive.date.replace(/(\d\d)\.(\d\d)\.(\d\d)/g, '$1/$2/20$3') || ''},
                dimension107    : {'departuretimeoutbound'      : cdpm.flightdetails && cdpm.flightdetails.outbound.depart.date.replace(/(\d\d)\.(\d\d)\.(\d\d)/g, '$1/$2/20$3') || ''},
                dimension108    : {'returndate'                 : cdpm.retdate && cdpm.retdate.replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1') || 'empty'},
                dimension109    : {'arrivaltimeinbound'         : cdpm.flightdetails && cdpm.flightdetails.inbound.arrive.date.replace(/(\d\d)\.(\d\d)\.(\d\d)/g, '$1/$2/20$3') || ''},
                dimension110    : {'departuretimeinbound'       : cdpm.flightdetails && cdpm.flightdetails.inbound.depart.date.replace(/(\d\d)\.(\d\d)\.(\d\d)/g, '$1/$2/20$3') || ''},
                dimension111    : {'totalprice'                 : cdpm.accomprice || cdpm.bookingvalue || '0'},
                dimension115    : {'errormsg'                   : cdpm.errors || cdpm.errormessage || ''},
                dimension118    : {'realurlpath'                : loc.pathname || ''},
                dimension119    : {'realurlparams'              : loc.search || ''}
            },
            events : {
            internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': true, 'page': vppage},
            errorcode           : {'category': 'Errors', 'action': cdpm.errors || (cdpm.errors && cdpm.errors.Code) || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.departureairportselected || cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+'&destairport='+(cdpm.destairport || cdpm.destinationairportselected || '')+'&accomcode='+(cdpm.accomcode || '')+'&accomguid='+(cdpm.accomguid || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page': vppage}
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC UATCDL Accom: '+e);
    } finally {
        dl.push({'event': 'UATCDL Accom'});
    }
    return cdl.DL_uatc;
}(window.jQuery, window.dataLayer, window.CATTDL, window.location))
</script>