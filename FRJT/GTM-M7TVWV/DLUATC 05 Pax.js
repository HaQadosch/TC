<script>
(function gtm_uatcdlPax(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try{
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;              

        cdl.DL_uatc = {
            profileid       : 'UA-33870117-1',
            cookiedomain    : /staging/i.test(location.hostname)?'auto':'jettours.com',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : loc && loc.href || window.document && window.document.URL || '',
                referrer    : document.referrer  || '',
                hostname    : loc && loc.hostname || ''
            },
            webanalytics    : {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location        : loc && loc.href || window.document && window.document.URL || '',
                addproduct      : {
                    id              : cdpm.accomguid || cdpm.accomcode || '',
                    name            : ((cdpm.accomname || '')+'|'+(cdpm.destairport || cdpm.destinationairportselected || '')+'|'+(cdpm.accomcountry || cdpm.country || '')+'|'+(cdpm.accomregion || cdpm.region || '')+'|'+(cdpm.accomresort || cdpm.resortsearched || '')).toLowerCase() || "",
                    category        : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
                    brand           : (cdpm.touroperator || '').toLowerCase() || "",
                    variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.deptairport||cdpm.departureairportselected||"")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || cdpm.retdate || 0) || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||cdpm.srchnbradults||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")).toLowerCase(),
                    list            : ('search|'+(cdpm.sortoption || cdpm.sortby || "")).toLowerCase(),
                    position        : cdpm.srpaccomposition || 0,
                    price           : cdpm.totalprice || 0,
                    quantity        : 1
                },
                metrics         : {
                    metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || ''},
                    metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || ''},
                    metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || ''},
                    metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || ''},
                    metric10        : {'bookingvalue'           : parseInt(cdpm.totalprice) || 0},
                    metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                    metric13        : {'insurance'              : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.selected) || ''},
                    metric14        : {'luggage'                : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.selected) || ''},
                    metric15        : {'hitcount'               : 1},
                    metric16        : {'insurance value'        : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.addedcost) || ''},
                    metric17        : {'luggage value'          : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.addedcost) || ''},
                    metric18        : {'late booking fee'       : parseInt(cdpm.extras && cdpm.extras.latefees && +cdpm.extras.latefees.addedcost) || ''}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || cdpm.departureairportselected || ''},
                    dimension2      : {'destination'                : cdpm.destination || ''},
                    dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || ''},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''},
                    dimension8      : {'budget'                     : ''},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || '')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resort || ''},
                    dimension14     : {'sessid'                     : cdpm.sessionid || ''},
                    dimension15     : {'starrating'                 : cdpm.starrating || ''},
                    dimension16     : {'accomcode'                  : cdpm.accomcode || ''},
                    dimension17     : {'accomname'                  : cdpm.accomname || ''},
                    dimension18     : {'accomresort'                : cdpm.accomresort || cdpm.resortsearched || ''},
                    dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
                    dimension20     : {'touroperator'               : cdpm.touroperator || ''},
                    dimension21     : {'destinationsearched'        : cdpm.destination || ''},
                    dimension22     : {'destairport'                : cdpm.destairport || cdpm.destinationairportselected || ''},
                    dimension23     : {'searchresultspagenbr'       : ''+(cdpm.searchresultspagenbr || '')},
                    dimension24     : {'searchresultspages'         : ''+(cdpm.searchresultspages || '')},
                    dimension25     : {'searchresultsperpage'       : ''+(cdpm.searchresultsperpage || '')},
                    dimension26     : {'searchresultstotal'         : ''+(cdpm.searchresultstotal || '')},
                    dimension28     : {'sortoption'                 : cdpm.sortoption || ''},
                    dimension29     : {'sortoptionsession'          : cdpm.sortoption || ''},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier || 'empty'},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || cdpm.srchnbradults || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || '0'},
                    dimension54     : {'intcmp'                     : cdpm.internalcampaignid || ''},
                    dimension55     : {'intcmpsession'              : cdpm.internalcampaignid || ''},
                    dimension59     : {'roomcode1'                  : cdpm.roomcodes && cdpm.roomcodes[0] || ''},
                    dimension60     : {'roomcode2'                  : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension61     : {'roomcode3'                  : cdpm.roomcodes && cdpm.roomcodes[2] || ''},
                    dimension62     : {'roomcode4'                  : cdpm.roomcodes && cdpm.roomcodes[3] || ''},
                    dimension63     : {'roomcode5'                  : cdpm.roomcodes && cdpm.roomcodes[4] || ''},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')},
                    dimension106    : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].arrive.date) || ''},
                    dimension107    : {'departuretimeoutbound'      : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].depart.date) || ''},
                    dimension108    : {'returndate'                 : cdl.gadate && cdl.gadate(cdpm.retdate || 0) || ''},
                    dimension109    : {'arrivaltimeinbound'         : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].arrive.date) || ''},
                    dimension110    : {'departuretimeinbound'       : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].depart.date) || ''},
                    dimension111    : {'totalprice'                 : ''+(cdpm.totalprice || '0')},
                    dimension112    : {'destinationcountry'         : cdpm.accomcountry || cdpm.country || ''},
                    dimension113    : {'destinationregion'          : cdpm.accomregion || cdpm.region || ''},
                    dimension114    : {'destinationresort'          : cdpm.accomresort || cdpm.resort || ''},
                    dimension115    : {'errormessage'               : cdpm.errors.msg || ''},
                    dimension116    : {'depositvalue'               : ''+(cdpm.depositvalue || '0')},
                    dimension117    : {'paymentfee'                 : ''+(cdpm.paymentfee || '')}
                }
            }
        }
    } catch(e) {
        cdl.error('GTM FR JT UATCDL Pax: '+e)
    } finally {
        dl.push({'event': 'UATCDL Pax'})
    }
    return cdl.DL_uatc
}(window.jQuery, window.dataLayer, window.CATTDL, window.location));
</script>
