<script id='gtm_uatcdlPay'>
(function gtm_uatcdlPay(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;
        var locpathname = loc.pathname || '';
        var locsearch = loc.search || '';
        var lochref = loc.href || document.URL || '';
        var lochost = loc.host || loc.hostname || '';

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        var srpsortlist = params.srplist || 'search';
        var srpsortoption = params.sortoption || '';
        var accomposition = params.accomposition && params.accomposition[cdpm.accomcode || ''] || '';
        var roomcodes = cdpm.roomcodes || [];

        var vpagepath = '/vp/'+(cdpm.sitelanguage || 'na')+'/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid');
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
                            '&depairport='+(cdpm.deptairport || cdpm.depairport || '')+
                            '&destairport='+(cdpm.destairport || '')+                         
                            '&paxadult='+(cdpm.paxadult || '0')+
                            '&paxchild='+(cdpm.paxchild || '0')+
                            '&paxinfant='+(cdpm.paxinfant || '0')+
                            '&boardbasis='+(cdpm.boardbasis || '')+
                            '&destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&region='+(cdpm.region || '')+
                            '&accomresort='+(cdpm.accomresort || '')+
                            '&accomcode='+(cdpm.accomcode || '')+      
                            '&accomname='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&brochure='+(cdpm.brochure || '')+
                            '&duration='+(cdpm.duration || '')+
                            '&rooms='+(cdpm.rooms || '')+
                            '&sessionid='+(cdpm.sessionid || '')+
                            '&appserver='+(cdpm.appserver || '')+
                            '&searchapp='+(cdpm.searchapp || '')+                            
                            '&sitelanguage='+(cdpm.sitelanguage || '')
                        ).toLowerCase();        
        var vppage = (vpagepath || '') + '?' + (vpqsp_cat || '') +'&'+ (vpqsp_st || '') +'&'+ (vpqsp_p || '');        

        cdl.DL_uatc = {
            profileid       : 'UA-33287406-2',
            cookiedomain    : "thomascook.be",
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
                    id              : cdpm.accomcode || '',
                    name            : ((cdpm.accomname || '')+'|'+(cdpm.destairport || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || "",
                    category        : ((cdpm.sitelanguage || 'na')+'|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand           : (cdpm.touroperator || '').toLowerCase() || "",
                    variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.deptairport || cdpm.depairport || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || 0) || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                    list            : (srpsortlist+'|'+srpsortoption).toLowerCase(),
                    position        : accomposition || 0,
                    price           : cdpm.pricetotal || 0,
                    quantity        : 1
                },
                metrics         : {
                    metric1         : {'paxadult'                   : parseInt(cdpm.paxadult || 0)},
                    metric2         : {'paxchild'                   : parseInt(cdpm.paxchild || 0)},
                    metric3         : {'paxinfant'                  : parseInt(cdpm.paxinfant || 0)},
                    metric4         : {'paxtotal'                   : parseInt(cdpm.paxtotal || 0)},
                    metric5         : {'rooms'                      : parseInt(cdpm.rooms || 0)},
                    metric10        : {'bookingvalue'               : +(cdpm.pricetotal || 0)},
                    metric11        : {'depositvalue'               : parseInt(cdpm.depositvalue || 0)},
                    metric12        : {'discountvalue'              : parseInt(cdpm.discountvalue || 0)},
                    metric15        : {'hitcount'                   : 1}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || cdpm.depairport || 'any'},
                    dimension2      : {'destination'                : cdpm.destination || ''},
                    dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || ''},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''},
                    //dimension8      : {'budget'                     : cdpm.budget || 'any'},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || '')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resort || ''},
                    dimension14     : {'sessionid'                  : cdpm.sessionid || ''},
                    dimension15     : {'starrating'                 : cdpm.starrating || ''},
                    dimension16     : {'accomcode'                  : cdpm.accomcode || ''},
                    dimension17     : {'accomname'                  : cdpm.accomname || ''},
                    dimension18     : {'accomresort'                : cdpm.accomresort || ''},
                    dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || ""},
                    dimension20     : {'touroperator'               : cdpm.touroperator || ''},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},  
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension52     : {'pagelanguage'               : cdpm.sitelanguage || ''},
                    dimension53     : {'sessionlanguage'            : cdpm.sitelanguage || ''},
                    dimension54     : {'sessioblob'                 : cdpm.lob || ''},
                    dimension55     : {'sessiobholidaytype'         : cdpm.holidaytype || ''},
                    dimension56     : {'sessiobpageid'              : cdpm.pageid || ''},
                    dimension57     : {'hittype'                    : 'page'},
                    dimension58     : {'accomguid'                  : cdpm.accomcode && (/\d+/.exec(cdpm.accomcode) || ['']).pop() || ''},                      
                    dimension59     : {'room1code'                  : roomcodes && roomcodes[0] || ''},
                    dimension60     : {'room2code'                  : roomcodes && roomcodes[1] || ''},
                    dimension61     : {'room3code'                  : roomcodes && roomcodes[2] || ''},
                    dimension62     : {'room4code'                  : roomcodes && roomcodes[3] || ''},
                    dimension63     : {'room5code'                  : roomcodes && roomcodes[4] || ''},
                    dimension64     : {'room6code'                  : roomcodes && roomcodes[5] || ''},
                    dimension65     : {'pagetimestamp'              : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension68     : {'discountvalue'              : cdpm.discountvalue || ''},
                    //dimension73     : {'deptdatestart'              : cdl.gadate && cdl.gadate(deptdatestart || 0)},
                    //dimension74     : {'deptdateend'                : cdl.gadate && cdl.gadate(deptdateend || 0)},
                    dimension75     : {'unixtimestamp'              : ''+cdpm.pagetimestamp || ''},
                    dimension76     : {'accomgeolocation'           : cdpm.accomgeolocation || ''},
                    dimension77     : {'regiongeolocation'          : cdpm.regiongeolocation || ''},
                    dimension78     : {'destinationisocode'         : cdpm.destinationisocode || ''},
                    dimension80     : {'deptairport'                : cdpm.deptairport || ''},
                    dimension81     : {'accomgeolocation'           : cdpm.accomgeolocation || ''},
                    dimension82     : {'regiongeolocation'          : cdpm.regiongeolocation || ''},
                    dimension83     : {'destinationisocode'         : cdpm.destinationisocode || ''},
                    dimension84     : {'accomcode'                  : cdpm.accomcode || ''},
                    dimension85     : {'destinationcountry'         : cdpm.accomcountry || ''},
                    dimension86     : {'destinationregion'          : cdpm.accomregion || ''},
                    dimension87     : {'destinationresort'          : cdpm.accomresort || ''},
                    dimension88     : {'accomname'                  : cdpm.accomname || ''},
                    dimension89     : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                    dimension103    : {'rooms'                      : ''+cdpm.rooms || ''},
                    dimension104    : {'searchapp'                  : cdpm.searchapp || ''},
                    dimension105    : {'initialholidaytype'         : cdpm.initialholidaytype || ''},
                    dimension111    : {'pricetotal'                 : ''+cdpm.pricetotal || ''},
                    dimension112    : {'destinationcountry'         : cdpm.accomcountry || ''},
                    dimension113    : {'destinationregion'          : cdpm.accomregion || ''},
                    dimension114    : {'destinationresort'          : cdpm.accomresort || ''},
                    dimension115    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg || ''},
                    dimension118    : {'realurlpath'                : locpathname || ''},
                    dimension119    : {'realurlparams'              : locsearch || ''}                      
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochref, 'value': 1, 'noninteraction': true, 'page':vppage},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || cdpm.depairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+'&destairport='+(cdpm.destairport || '')+'&accomcode='+(cdpm.accomcode || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page':vppage}
                }
            }
        }
    } catch(e) {
        cdl.error('GTM BE TC UATCDL Pay: '+e)
    } finally {
        dl.push({'event': 'UATCDL Pay'})
        window.gatcDL && window.gatcDL.push({'event': 'UATCDL Pay'})
    }
    return cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>