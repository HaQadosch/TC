<script id='GTM-WN2KRH_uatcdlBook'>
  (function gtm_uatcdlBook(jQ, dl, cdl, loc) {
    'use strict'
    if (jQ && cdl && cdl.CATTParams) try {
      var twls = cdl.twls
      var ewls = cdl.ewls
      var cdpm = cdl.CATTParams || {};

      var paymenttype = cdpm.pageid && ((cdpm.pageid == 'ag_confirm')?'agency':(cdpm.pageid == 'cc_confirm')?'telephone':'creditcard') || 'creditcard';

      cdl.DL_uatc = {
        profileid       : 'UA-46165926-1',
        cookiedomain    : /staging/i.test(location.hostname)?'auto':'voyagesdirects.fr',
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
            id              : cdpm.accomguid || cdpm.accomcode || '',
            name            : ((cdpm.accomname || '')+'|'+(cdpm.destairport || cdpm.destinationairportselected || '')+'|'+(cdpm.accomcountry || cdpm.country || '')+'|'+(cdpm.accomregion || cdpm.region || '')+'|'+(cdpm.accomresort || cdpm.resortsearched || '')).toLowerCase() || "",
            category        : ('fr|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase() || "",
            brand           : (cdpm.touroperator || '').toLowerCase() || "",
            variant         : ((cdpm.boardbasis||"")+'|'+(cdpm.deptairport||cdpm.departureairportselected||"")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || cdpm.retdate || 0) || "")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult|| cdpm.srchnbradults ||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpm.pricepp||"0")+'|'+(paymenttype || '')).toLowerCase(),
            list            : ('search|'+(cdpm.sortoption || cdpm.sortby || "")).toLowerCase(),
            position        : cdpm.srpaccomposition || 0,
            price           : cdpm.totalprice || 0,
            quantity        : 1
          },
          purchase        : {
            id              : cdpm.bookingref || (((document.referrer)?"empty_":"noReferrer_")+Math.random()),
            affiliation     : '',
            revenue         : cdpm.totalprice || 0,
            tax             : '',
            shipping        : '',
            coupon          : cdpm.promotion && cdpm.promotion.code || ''
          },
          metrics         : {
            metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
            metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
            metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
            metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
            metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
            metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0},
            metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0},
            metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || 0},
            metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0},
            metric10        : {'totalprice'             : parseInt(cdpm.totalprice) || 0},
            metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
            metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
            metric13        : {'insurance'              : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.selected) || 0},
            metric14        : {'luggage'                : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.selected) || 0},
            metric15        : {'hitcount'               : 1},
            metric16        : {'insurance value'        : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.addedcost) || 0},
            metric17        : {'luggage value'          : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.addedcost) || 0},
            metric18        : {'late booking fee'       : parseInt(cdpm.extras && cdpm.extras.latefees && +cdpm.extras.latefees.addedcost) || 0},
            metric19        : {'payment fee'            : parseInt(cdpm.paymentfee) || 0},
            metric20        : {'promocodevalue'         : parseInt(cdpm.promotion && cdpm.promotion.value) || 0}
          },
          dimensions      : {
            dimension1      : {'departureairportselected'   : cdpm.deptairport || cdpm.departureairportselected || ''},
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
            dimension18     : {'accomresort'                : cdpm.accomresort || ''},
            dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
            dimension20     : {'touroperator'               : cdpm.touroperator || ''},
            dimension21     : {'destination'                : cdpm.destination || ''},
            dimension22     : {'destairport'                : cdpm.destairport || cdpm.destinationairportselected || ''},
            dimension23     : {'searchresultspagenbr'       : ''+(cdpm.searchresultspagenbr || '')},
            dimension24     : {'searchresultspages'         : ''+(cdpm.searchresultspages || '')},
            dimension25     : {'searchresultsperpage'       : ''+(cdpm.searchresultsperpage || '')},
            dimension26     : {'searchresultstotal'         : ''+(cdpm.searchresultstotal || '')},
            dimension28     : {'sortoption'                 : (cdpm.sortoption) || ''},
            dimension29     : {'sortoptionsession'          : (cdpm.sortoption) || ''},
            dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
            dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
            dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
            dimension33     : {'carrier'                    : cdpm.carrier || ''},
            dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || cdpm.srchnbradults || '0')},
            dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
            dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},
            dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
            dimension38     : {'paymentoption'              : cdpm.paymentoption || ''},
            dimension39     : {'cardtype'                   : cdpm.cardtype || ''},
            dimension40     : {'bookingref'                 : cdpm.bookingref || ''},
            dimension51     : {'gaguid'                     : cdpm.gaguid || ''},
            dimension52     : {'searchengine'               : cdpm.searchapp || ''},
            dimension53     : {'hittype'                    : 'page'},
            dimension54     : {'intcmp'                     : cdpm.internalcampaignid || ''},
            dimension55     : {'intcmpsession'              : cdpm.internalcampaignid || ''},
            dimension56     : {'agencycode'                 : cdpm.agencycode || ''},
            dimension59     : {'roomcode1'                  : cdpm.roomcodes && cdpm.roomcodes[0] || ''},
            dimension60     : {'roomcode2'                  : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
            dimension61     : {'roomcode3'                  : cdpm.roomcodes && cdpm.roomcodes[2] || ''},
            dimension62     : {'roomcode4'                  : cdpm.roomcodes && cdpm.roomcodes[3] || ''},
            dimension63     : {'roomcode5'                  : cdpm.roomcodes && cdpm.roomcodes[4] || ''},
            dimension70     : {'airline bookingref'         : cdpm.airlineref || ''},
            dimension71     : {'promocode'                  : cdpm.promotion && cdpm.promotion.code || ''},
            dimension72     : {'promocode value'            : cdpm.promotion && cdpm.promotion.value || ''},
            dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
            dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
            dimension101    : {'depositselected'            : cdpm.depositselected || ''},
            dimension103    : {'rooms'                      : ''+(cdpm.rooms && ''+cdpm.rooms || '')},
            dimension106    : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].arrive.date) || ''},
            dimension107    : {'departuretimeoutbound'      : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].depart.date) || ''},
            dimension108    : {'returndate'                 : cdl.gadate && cdl.gadate(cdpm.retdate || 0) || ''},
            dimension109    : {'arrivaltimeinbound'         : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].arrive.date) || ''},
            dimension110    : {'departuretimeinbound'       : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] && cdpm.flightdetails.inbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.inbound[0].depart.date) || ''},
            dimension111    : {'totalprice'                 : ''+(cdpm.totalprice || '0')},
            dimension112    : {'destinationcountry'         : cdpm.accomcountry || cdpm.country || ''},
            dimension113    : {'destinationregion'          : cdpm.accomregion || cdpm.region || ''},
            dimension114    : {'destinationresort'          : cdpm.accomresort || cdpm.resortsearched || ''},
            dimension115    : {'errormessage'               : cdpm.errors || ''},
            dimension116    : {'depositvalue'               : ''+(cdpm.depositvalue || '0')},
            dimension117    : {'paymentfee'                 : ''+(cdpm.paymentfee || '')}
          }
        }
      }
    } catch(e) {
      cdl.error('GTM FR VD UATCDL Book: '+e)
    } finally {
      dl.push({'event': 'UATCDL Book'})
    }
    return jQ && cdl && cdl.CATTParams && cdl.DL_uatc
  }(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));
</script>
