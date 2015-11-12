<script id='GTM-KH5PKD_UATCDLBook'>
  (function gtm_uatcdlBook(jQ, cdl, loc, dl){
    'use strict';
    if ( jQ && cdl && cdl.CATTParams && dl) //!dl.some(function(a){return /UATCDL Book/i.test(a && a.event || '');}) ) 
    try {
      var twlh = cdl.twlh;
      var twls = cdl.twls;
      var ewls = cdl.ewls;
      var ld = cdl._;
      var cdpm = cdl.CATTParams || {};
      var locpathname = location.pathname || '';
      var locsearch = location.search || '';
      cdl.DL_uatc = {};
      cdl.DL_uatc.webanalytics = {};

      var errors = cdpm.errors || cdpm || {};
      var uaProd = JSON.parse(window.unescape(cdpm.cookies && cdpm.cookies.gtm_uaprod || '{}'));
      uaProd.price = +(cdpm.pricetotal || cdpm.bookingvalue || 0);
      cdl.ckset('gtm_uaprod', JSON.stringify(uaProd));

      ld.assign(cdl.DL_uatc, {
          profileid       : 'UA-33036832-7'
        //, profileid2      : 'UA-33029666-1'
        , cookiedomain    : 'thomascook.com'
        , name            : 'CATTUATC'
        //, name2           : 'CATT2UATC'
        , set             : {
            anonymizeIp : false
          , location    : loc && loc.href || window.document && window.document.URL || ''
          , referrer    : document.referrer  || ''
          , hostname    : loc && loc.hostname || ''
        }
        , webanalytics    : {
            page            : cdl.transpose('/vp/en/{lob}/{holidaytype}/{pageid}', {
                                  'lob'         : cdpm.lob || 'cruise'
                                , 'holidaytype' : cdpm.holidaytype || 'cruise'
                                , 'pageid'      : cdpm.pageid || ''
                              }).toLowerCase()
          , location        : loc && loc.href || window.document && window.document.URL || ''
          , addproduct      : {
              id              : cdpm.cruiseshipid || cdpm.accomcode || ''
            , name            : ((cdpm.cruiseship || cdpm.accomname || '')+'|'+(cdpm.destinationairportselected || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || ""
            , category        : ('en|'+(cdpm.lob || '')+'|'+(cdpm.holidaytype || '')).toLowerCase() || ""
            , brand           : (cdpm.cruiseline || cdpm.touroperator || '').toLowerCase() || ""
            , variant         : ((cdpm.boardbasis || "")
                                 +'|'+(cdpm.departureairportselected || "")
                                 +'|'+(cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || "")
                                 +'|'+(cdl.gadate && cdpm.retdate && cdl.gadate(cdpm.retdate) || "")
                                 +'|'+(""+(cdpm.paxtotal || "0"))
                                 +'|'+(""+(cdpm.paxadult || "0"))
                                 +'|'+(""+(cdpm.paxchild || "0"))
                                 +'|'+(""+cdpm.paxinfant || "0")
                                 +'|'+(""+(cdpm.pricepp || "0"))).toLowerCase()
            , price           : +(cdpm.totalprice || cdpm.bookingvalue || 0)
            , quantity        : 1
          }
          , purchase        : {
              id              : cdpm.bookingref || (((document.referrer)?"empty_":"noReferrer_")+Math.random())
            , affiliation     : ''
            , revenue         : +(cdpm.totalprice || cdpm.bookingvalue || 0)
            , tax             : ''
            , shipping        : ''
            , coupon          : cdpm.promotion && cdpm.promotion.code || ''
          }
          , metrics         : {
              metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0}
            , metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0}
            , metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0}
            , metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0}
            , metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0}
            , metric10        : {'totalprice'             : parseInt(cdpm.bookingvalue) || 0}
            , metric13        : {'insurance'              : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.selected) || 0}
            , metric14        : {'luggage'                : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.selected) || 0}
            , metric15        : {'hitcount'               : 1}
            , metric16        : {'insurance_value'        : parseInt(cdpm.extras && cdpm.extras.insurance && +cdpm.extras.insurance.addedcost) || 0}
            , metric17        : {'luggage_value'          : parseInt(cdpm.extras && cdpm.extras.luggage && +cdpm.extras.luggage.addedcost) || 0}
            , metric20        : {'promocode_value'        : parseInt(cdpm.promotion && cdpm.promotion.value) || 0}
            , metric41        : {'carhire'                : parseInt(cdpm.extras && cdpm.extras.carhire && +cdpm.extras.carhire.selected) || 0}
            , metric42        : {'carhire_value'          : parseInt(cdpm.extras && cdpm.extras.carhire && +cdpm.extras.carhire.addedcost) || 0}
            , metric44        : {'carpark_value'          : parseInt(cdpm.extras && cdpm.extras.carpark && +cdpm.extras.carpark.addedcost) || 0}
            , metric45        : {'attractions_value'      : parseInt(cdpm.extras && cdpm.extras.attractions && +cdpm.extras.attractions.addedcost) || 0}
          }
          , dimensions      : {
              dimension1      : {'deptairport'                : cdpm.departureairportselected || ''}
            , dimension2      : {'destination'                : cdpm.destination || ''}
            , dimension5      : {'deptdate'                   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || ''}
            , dimension6      : {'appserver'                  : cdpm.appserver || ''}
            , dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''}
            , dimension8      : {'budget'                     : cdpm.srpparams && cdpm.srpparams.budget || ''}
            , dimension9      : {'duration'                   : ''+(cdpm.duration || '')}
            , dimension10     : {'lob'                        : cdpm.lob || ''}
            , dimension11     : {'holidaytype'                : cdpm.holidaytype || ''}
            , dimension12     : {'pageid'                     : cdpm.pageid || ''}
            , dimension14     : {'sessionid'                  : cdpm.sessionid || ''}
            , dimension15     : {'starrating'                 : cdpm.starrating || ''}
            , dimension16     : {'accomcode'                  : cdpm.cruiseshipid || cdpm.accomcode || ''}
            , dimension17     : {'accomname'                  : cdpm.cruiseship || cdpm.accomname || ''}
            , dimension18     : {'accomresort'                : cdpm.accomresort || ''}
            , dimension19     : {'errorcode'                  : (errors.errormsg)?((!errors.errorcode)?'unknown':errors.errorcode):''}
            , dimension20     : {'touroperator'               : cdpm.cruiseline || cdpm.touroperator || ''}
            , dimension22     : {'destairport'                : cdpm.destinationairportselected || ''}
            , dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''}
            , dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''}
            , dimension32     : {'emailguid'                  : cdpm.emailguid || ''}
            , dimension33     : {'carrier'                    : cdpm.carrier || ''}
            , dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')}
            , dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')}
            , dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')}
            , dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')}
            , dimension38     : {'paymentoption'              : cdpm.paymentoption || ''}
            , dimension39     : {'cardtype'                   : cdpm.cardtype || ''}
            , dimension40     : {'bookingref'                 : cdpm.bookingref || ''}
            , dimension51     : {'gaguid'                     : cdpm.gaguid || ''}
            , dimension55     : {'hittype'                    : 'page'}
            , dimension58     : {'accomguid'                  : cdpm.accomguid || ''}
            , dimension71     : {'promocode'                  : cdpm.promotion && cdpm.promotion.code || ''}
            , dimension72     : {'promocode value'            : cdpm.promotion && cdpm.promotion.value || ''}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension101    : {'depositselected'            : cdpm.depositselected || ''}
            , dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')}
            , dimension111    : {'totalprice'                 : ''+(cdpm.totalprice || cdpm.bookingvalue || '0')}
            , dimension112    : {'destinationcountry'         : cdpm.accomcountry || ''}
            , dimension113    : {'destinationregion'          : cdpm.accomregion || ''}
            , dimension114    : {'destinationresort'          : cdpm.accomresort || ''}
            , dimension115    : {'errormsg'                   : errors.errormsg || errors.errorcode|| ''}
            , dimension116    : {'depositvalue'               : ''+(cdpm.depositvalue || '')}
            , dimension117    : {'paymentfee'                 : ''+(cdpm.paymentfee || '')}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK TC Cruise UATCDL: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL Book', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - dl[0]['gtm.start']});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer_KH5PKD));
</script>
