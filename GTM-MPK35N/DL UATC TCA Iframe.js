<script id='gtm_uatcdlTCAIframe'>
(function gtm_uatcdlTCAIframeSelect(jQ, dl, cdl, loc) {
    'use strict'
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams || {};
        var locpathname = loc.pathname || '';
        var locsearch = loc.search || '';
        var lochref = loc.href || document.URL || '';
        var lochost = loc.host || loc.hostname || '';

        //var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        var srpsortlist = 'search';
        var srpsortoption = cdpm.flighttype || '';
        var accomposition = 1;
        var deptdate = (cdpm.deptdate).replace(/(\d+)-(\d+)-(\d+)/g,"$3\/$2\/$1");
        var returndate = (cdpm.returndate).replace(/(\d+)-(\d+)-(\d+)/g,"$3\/$2\/$1");
        var flighttype = cdpm.flighttype?(cdpm.flighttype===1?'return':'oneway'):'unknown';

        var vpagepath = '/vp/'+(cdpm.language || 'na')+'/'+(cdpm.lob || 'flight')+'/'+(cdpm.holidaytype || 'flight')+'/'+(cdpm.pageid || 'pageid');
        var vpqsp_cat   = ('ss_cat='+ 
                            (cdpm.lob || '')+'_'+
                            (cdpm.pageid || '')
                        ).toLowerCase();        
        var vpqsp_st  = ('ss_st='+(cdpm.departureairportselected || '')+
                            '|'+(cdpm.destinationairportselected || '')+
                            '|'+(deptdate || '')+
                            '|'+(cdpm.flighttype || '')+
                            '|'+(cdpm.durationsearched || '')+
                            '|'+(cdpm.paxadult || '')+
                            '|'+(cdpm.paxinfant || '')+
                            '|'+(cdpm.paxchild || '')
                        ).toLowerCase();
        var vpqsp_p     = ( 
                            'deptdate='+(deptdate || '')+
                            'retdate='+(returndate || '')+
                            '&depairport='+(cdpm.departureairportselected || '')+
                            '&destairport='+(cdpm.destinationairportselected || '')+                         
                            '&paxadult='+(cdpm.paxadult || '0')+
                            '&paxchild='+(cdpm.paxchild || '0')+
                            '&paxinfant='+(cdpm.paxinfant || '0')+
                            '&fligtno='+(cdpm.flightno || '')+
                            '&duration='+(cdpm.duration || '')+
                            '&flighttype='+(cdpm.flighttype || '')+
                            '&bookingref='+(cdpm.bookingref || '')+
                            '&gbv='+(cdpm.pricetotal || '')+
                            '&sessionid='+(cdpm.sessid || '')+
                            '&appserver='+(cdpm.appserver || '')+
                            '&sitelanguage='+(cdpm.language || '')
                        ).toLowerCase();        
        var vppage = (vpagepath || '') + '?' + (vpqsp_cat || '') +'&'+ (vpqsp_st || '') +'&'+ (vpqsp_p || ''); 
        cdl.DL_uatc = {
            profileid       : 'UA-33087819-2',
            cookiedomain    : 'thomascookairlines.be',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : lochref,
                referrer    : document.referrer  || '',
                hostname    : loc && (loc.hostname || '') || ''
            },
            webanalytics    : {
                page            : vppage,
                location        : lochref,
                addproduct      : {
                    id              : cdpm.flightno || '',
                    name            : ((cdpm.carrier || '')+'|'+(cdpm.destinationairportselected || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || "",
                    category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand           : (cdpm.touroperator || '').toLowerCase() || "",
                    variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.departureairportselected || "")+'|'+(deptdate || "")+'|'+(returndate || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.bookingvalue||"0")).toLowerCase(),
                    list            : (srpsortlist+'|'+srpsortoption).toLowerCase(),
                    position        : accomposition || 0,
                    price           : cdpm.bookingvalue || 0,
                    quantity        : 1
                },
                purchase        : {
                    id              : cdpm.bookingref || (((document.referrer)?"empty_":"noReferrer_")+Math.random()),
                    affiliation     : '',
                    revenue         : cdpm.bookingvalue || 0,
                    tax             : '',
                    shipping        : '',
                    coupon          : cdpm.promotion && cdpm.promotion.code || ''
                },
               metrics         : {
                    metric1         : {'paxadult'                   : parseInt(cdpm.paxadult || 0)},
                    metric2         : {'paxchild'                   : parseInt(cdpm.paxchild || 0)},
                    metric3         : {'paxinfant'                  : parseInt(cdpm.paxinfant || 0)},
                    metric4         : {'paxtotal'                   : parseInt(cdpm.paxtotal || 0)},
                    // metric5         : {'rooms'                      : parseInt(cdpm.rooms || 0)},
                    metric10        : {'bookingvalue'               : +(cdpm.bookingvalue || 0)},
                    // metric11        : {'depositvalue'               : parseInt(cdpm.depositvalue || 0)},
                    // metric12        : {'discountvalue'              : parseInt(cdpm.discountvalue || 0)},
                    metric15        : {'hitcount'                   : 1}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.departureairportselected || 'any'},
                    dimension2      : {'destination'                : cdpm.destinationairportselected || ''},
                    //dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : (cdpm.deptdate).replace(/(\d+)-(\d+)-(\d+)/g,"$3\/$2\/$1") || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || ''},
                    //dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''},
                    //dimension8      : {'budget'                     : cdpm.budget || 'any'},
                    dimension9      : {'duration'                   : ''+(cdpm.durationselected || '')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    // dimension13     : {'resortsearched'             : cdpm.resort || ''},
                    dimension14     : {'sessionid'                  : cdpm.sessid || ''},
                    // dimension15     : {'starrating'                 : cdpm.starrating || ''},
                    dimension16     : {'accomcode'                  : cdpm.flightno || ''},
                    // dimension17     : {'accomname'                : cdpm.accomname || ''},
                    // dimension18     : {'accomresort'              : cdpm.accomresort || ''},
                    //dimension19     : {'errorcode'                 : cdpm.errorcode && cdpm.errors || ''},
                    dimension20     : {'touroperator'               : cdpm.touroperator || ''},
                    dimension21     : {'destinationsearched'        : cdpm.destinationsearched || ''},
                    dimension22     : {'destination'                : cdpm.destinationairportselected || ''},                    
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                    //dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},  
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension52     : {'pagelanguage'               : cdpm.language || ''},
                    dimension53     : {'sessionlanguage'            : cdpm.language || ''},
                    dimension54     : {'sessioblob'                 : cdpm.lob || ''},
                    dimension55     : {'sessiobholidaytype'         : cdpm.holidaytype || ''},
                    dimension56     : {'sessiobpageid'              : cdpm.pageid || ''},                    
                    //dimension58     : {'accomguid'                  : cdpm.accomcode && (/\d+/.exec(cdpm.accomcode) || ['']).pop() || ''},                      
                    // dimension59     : {'room1code'                  : roomcodes && roomcodes[0] || ''},
                    // dimension60     : {'room2code'                  : roomcodes && roomcodes[1] || ''},
                    // dimension61     : {'room3code'                  : roomcodes && roomcodes[2] || ''},
                    // dimension62     : {'room4code'                  : roomcodes && roomcodes[3] || ''},
                    // dimension63     : {'room5code'                  : roomcodes && roomcodes[4] || ''},
                    // dimension64     : {'room6code'                  : roomcodes && roomcodes[5] || ''},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    //dimension68     : {'discountvalue'              : cdpm.discountvalue || ''},
                    //dimension73     : {'deptdatestart'              : cdl.gadate && cdl.gadate(deptdatestart || 0)},
                    //dimension74     : {'deptdateend'                : cdl.gadate && cdl.gadate(deptdateend || 0)},
                    dimension75     : {'unixtimestamp'              : ''+cdpm.pagetimestamp || ''},
                    dimension79     : {'flighttype'                 : flighttype || ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                    dimension103    : {'rooms'                      : ''+cdpm.rooms || ''},
                    //dimension104    : {'searchapp'                  : cdpm.searchapp || ''},
                    // dimension105    : {'initialholidaytype'         : cdpm.initialholidaytype || ''},
                    dimension108    : {'retdate'                    : returndate || ''},
                    dimension111    : {'pricetotal'                 : ''+cdpm.bookingvalue || ''},
                    // dimension112    : {'destinationcountry'         : cdpm.accomcountry || ''},
                    // dimension113    : {'destinationregion'          : cdpm.accomregion || ''},
                    // dimension114    : {'destinationresort'          : cdpm.accomresort || ''},
                    dimension115    : {'errormessage'               : cdpm.errorcode && cdpm.errors || ''},
                    dimension118    : {'realurlpath'                : locpathname || ''},
                    dimension119    : {'realurlparams'              : locsearch || ''}                      
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochref, 'value': 1, 'noninteraction': true, 'page':vppage},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochost+locpathname+'/?deptairport='+(cdpm.departureairportselected || '')+'&deptdate='+(deptdate || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+'&destairport='+(cdpm.destinationairportselected || '')+'&flightno='+(cdpm.flightno || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page':vppage}
                }
            }
        }
    } catch(e) {
        cdl.error('GTM BE NEC UATCDL TCAIframe: '+e)
    } finally {
        dl.push({'event': 'UATCDL TCAIframe'})
        gatcDL.push({'event': 'UATCDL TCAIframe'})
    }
    return jQ && cdl && cdl.CATTParams && cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>