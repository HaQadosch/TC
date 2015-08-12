<script id='gtm_uatcdlPay'>
(function gtm_uatcdlPay(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams
        var cdurl = cdpm && cdpm.urlparams
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';
        var lochost = location.hostname || location.host || '';

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        var srpsortlist = params && params.srplist || 'search';
        var srpsortoption = params && params.sortoption || '';
        var accomposition = params && params.accomposition && params.accomposition[cdpm.accomguid || ''] || '';
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
                            (cdl.gadate(cdpm.deptdate) || '')+'_'+
                            ((cdpm.searchresultstotal === '0'?'nResults':'yResults') || '')
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
            cookiedomain    : twlh(/thomascook.io/i)?"thomascook.io":"thomascook.com",
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
                addproduct      : {
                    id              : cdpm.accomguid || '',
                    name            : ((cdpm.accomname || '')+'|'+(cdpm.destairport || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || "",
                    category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand           : (cdpm.touroperator || '').toLowerCase() || "",
                    variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.deptairport||"")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || 0) || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                    list            : (srpsortlist+'|'+srpsortoption).toLowerCase(),
                    position        : accomposition || 0,
                    price           : cdpm.totalprice || 0,
                    quantity        : 1
                },
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
                    metric11        : {'depositvalue'           : +(cdpm.depositvalue || 0)},
                    metric12        : {'discountvalue'          : +(cdpm.discountvalue || 0)},
                    metric13        : {'insurance'              : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.selected || 0)},
                    metric14        : {'luggage'                : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.selected || 0)},
                    metric15        : {'hitcount'               : 1},
                    metric16        : {'insurance value'        : +(cdpm.extras && cdpm.extras.insurance && cdpm.extras.insurance.addedcost || 0)},
                    metric17        : {'luggage value'          : +(cdpm.extras && cdpm.extras.luggage && cdpm.extras.luggage.addedcost || 0)},
                    metric18        : {'late booking fee'       : +(cdpm.extras && cdpm.extras.latefees && cdpm.extras.latefees.addedcost || 0)},
                    metric20        : {'promocodevalue'         : +(cdpm.promotion && cdpm.promotion.value || 0)},
                    metric21        : {'promo3for2'             : parseInt(cdpm.extras && cdpm.extras.promo3for2 && +cdpm.extras.promo3for2.selected) || 0},
                    metric22        : {'promo3for2 value'       : +(cdpm.extras && cdpm.extras.promo3for2 && cdpm.extras.promo3for2.addedcost || 0)},
                    metric23        : {'seat selection'         : parseInt(cdpm.extras && cdpm.extras.seats && +cdpm.extras.seats.selected || 0)},
                    metric24        : {'seat selection value'   : +(cdpm.extras && cdpm.extras.seats && cdpm.extras.seats.addedcost || 0)},
                    metric25        : {'charitydonation'        : parseInt(cdpm.extras && cdpm.extras.donation && +cdpm.extras.donation.selected || 0)},
                    metric26        : {'charitydonation value'  : +(cdpm.extras && cdpm.extras.donation && cdpm.extras.donation.addedcost || 0)},
                    metric27        : {'inflightmeals'          : parseInt(cdpm.extras && cdpm.extras.inflightmeals && +cdpm.extras.inflightmeals.selected || 0)},                  
                    metric28        : {'inflightmeals value'    : +(cdpm.extras && cdpm.extras.inflightmeals && +cdpm.extras.inflightmeals.addedcost || 0)},
                    metric29        : {'premiumcabin'           : parseInt(cdpm.extras && cdpm.extras.premiumcabin && +cdpm.extras.premiumcabin.selected || 0)},
                    metric30        : {'premiumcabin value'     : +(cdpm.extras && cdpm.extras.premiumcabin && +cdpm.extras.premiumcabin.addedcost || 0)},
                    metric31        : {'transfer'               : parseInt(cdpm.extras && cdpm.extras.transfers && +cdpm.extras.transfers.selected || 0)},
                    metric32        : {'transfer value'         : +(cdpm.extras && cdpm.extras.transfers && +cdpm.extras.transfers.addedcost || 0)},
                    metric37        : {'flexibleterms'          : parseInt(cdpm.extras && cdpm.extras.flexibleterms && +cdpm.extras.flexibleterms.selected || 0)},
                    metric38        : {'flexibleterms value'    : +(cdpm.extras && cdpm.extras.flexibleterms && +cdpm.extras.flexibleterms.addedcost || 0)},
                    metric39        : {'taxitransfer'           : parseInt(cdpm.extras && cdpm.extras.taxitransfers && +cdpm.extras.taxitransfers.selected || 0)},
                    metric40        : {'taxitransfer value'     : +(cdpm.extras && cdpm.extras.taxitransfers && +cdpm.extras.taxitransfers.addedcost || 0)},
                    metric41        : {'carhire'                : parseInt(cdpm.extras && cdpm.extras.carhire && +cdpm.extras.carhire.selected || 0)},
                    metric42        : {'carhire value'          : +(cdpm.extras && cdpm.extras.carhire && +cdpm.extras.carhire.addedcost || 0)},
                    metric43        : {'carhire_ownarrangement'     : parseInt(cdpm.extras && cdpm.extras.carhire_ownarrangement && +cdpm.extras.carhire_ownarrangement.selected || 0)}                    
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || 'empty'},
                    dimension2      : {'destination'                : cdpm.destination || 'empty'},
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
                    dimension14     : {'sessid'                     : cdpm.sessid || 'empty'},
                    dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
                    dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                    dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                    dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19     : {'errorcode'                  : ''+(cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || "")},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                    dimension21     : {'destinationsearched'        : cdpm.srpparams && cdpm.srpparams.destination || ''},
                    dimension22     : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.srpparams && ''+cdpm.srpparams.searchresultspagenbr || ''},
                    dimension24     : {'searchresultspages'         : cdpm.srpparams && ''+cdpm.srpparams.searchresultspages || ''},
                    dimension25     : {'searchresultsperpage'       : cdpm.srpparams && ''+cdpm.srpparams.searchresultsperpage || ''},
                    dimension26     : {'searchresultstotal'         : cdpm.srpparams && ''+cdpm.srpparams.searchresultstotal || ''},
                    dimension28     : {'sortoption'                 : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension29     : {'sortoptionsession'          : cdpm.srpparams && cdpm.srpparams.sortoption || ''},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier && cdpm.carrier.code || 'empty'},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension38     : {'paymentoption'              : cdpm.paymentoption || 'empty'},
                    dimension39     : {'cardtype'                   : cdpm.cardtype || 'empty'},
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
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && (cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || '')},
                    dimension68     : {'discountvalue'              : ''+(cdpm.discountvalue || 0)},
                    dimension69     : {'discountperc'               : ''+(cdpm.discountperc || 0)},                    
                    dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension79     : {'flighttype'                 : flttype || ''},
                    dimension80     : {'basketid'                   : cdpm.tc_basket_id || ''},
                    dimension101    : {'depositselected'            : cdpm.depositselected || 'empty'},                 
                    dimension103    : {'rooms'                      : cdpm.rooms && ''+cdpm.rooms || '0'},
                    dimension106    : {'arrivaltimeoutbound'        : cdl.gatime && fltoutbound && fltoutbound[0] && fltoutbound[0].arrive && cdl.gatime(fltoutbound[0].arrive.date) || ''},
                    dimension107    : {'departuretimeoutbound'      : cdl.gatime && fltoutbound && fltoutbound[0] && fltoutbound[0].depart && cdl.gatime(fltoutbound[0].depart.date) || ''},
                    dimension108    : {'returndate'                 : cdl.gadate && cdl.gadate(cdpm.returndate || 0) || ''},
                    dimension109    : {'arrivaltimeinbound'         : cdl.gatime && fltinbound && fltinbound[0] && fltinbound[0].arrive && cdl.gatime(fltinbound[0].arrive.date) || ''},
                    dimension110    : {'departuretimeinbound'       : cdl.gatime && fltinbound && fltinbound[0] && fltinbound[0].depart && cdl.gatime(fltinbound[0].depart.date) || ''},
                    dimension111    : {'totalprice'                 : ''+(cdpm.totalprice || '0')},
                    dimension112    : {'destinationcountry'         : cdpm.accomcountry || 'empty'},
                    dimension113    : {'destinationregion'          : cdpm.accomregion || 'empty'},
                    dimension114    : {'destinationresort'          : cdpm.accomresort || 'empty'},
                    dimension115    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg || ''},
                    dimension116    : {'depositvalue'               : ''+(cdpm.depositvalue || '0')},
                    dimension117    : {'paymentfee'                 : ''+(cdpm.paymentfee || '')},
                    dimension118    : {'vprealpath'                 : locpathname || ''},
                    dimension119    : {'vprealparameter'            : locsearch || ''}
                },
                events : {
                    internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': true, 'page': vppage},
                    errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+'&destairport='+(cdpm.destairport || '')+'&accomcode='+(cdpm.accomcode || '')+'&accomguid='+(cdpm.accomguid || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page':vppage}
                }
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC UATCDL Pay: '+e)
    } finally {
        dl.push({'event': 'UATCDL Pay'})
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'UATCDL Pay'})
    }
    return cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>
