<script id='GTM-TGBQS9_UATCDLConf'>
  (function gtm_uatcdlConf(jQ, cdl, loc, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if ( jQ && cdl && cdl.CATTParams && !dl.some(function(a){return /UATCDL Conf/i.test(a && a.event || '');}) ) try {
      var twlh = cdl.twlh;
      var twls = cdl.twls;
      var ewls = cdl.ewls;
      var ld = cdl._;
      cdpm = cdl.CATTParams || {};
      timeStart = cdpm.timestart || 0;
      var locpathname = location.pathname || '';
      var locsearch = location.search || '';
      cdl.DL_uatc = {};
      cdl.DL_uatc.webanalytics = {};

      ld.assign(cdl.DL_uatc, {
          profileid       : 'UA-33036832-7'
        , cookiedomain    : 'thomascook.com'
        , name            : 'CATTUATC'
        , set             : {
            anonymizeIp : false
          , location    : loc && loc.href || window.document && window.document.URL || ''
          , referrer    : document.referrer  || ''
          , hostname    : loc && loc.hostname || ''
        }
        , webanalytics    : {
            page            : '/vp/en/'+(cdpm.lob || 'epackage')+'/'+(cdpm.holidaytype || 'epackage')+'/'+(cdpm.pageid || 'booking')
          , location        : loc && loc.href || window.document && window.document.URL || ''
          , addproduct      : {
              id              : cdpm.accomcode || ''
            , name            : ((cdpm.accomname || '')+'|'+(cdpm.destinationairportselected || '')+'|'+(cdpm.accomcountry || '')+'|'+(cdpm.accomregion || '')+'|'+(cdpm.accomresort || '')).toLowerCase() || ""
            , category        : ('en|'+(cdpm.lob || '')+'|'+(cdpm.holidaytype || '')).toLowerCase() || ""
            , brand           : (cdpm.touroperator || '').toLowerCase() || ""
            , variant         : ((cdpm.boardbasis || "")
                                 +'|'+(cdpm.departureairportselected || "")
                                 +'|'+(cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || "")
                                 +'|'+(cdl.gadate && cdpm.retdate && cdl.gadate(cdpm.retdate) || "")
                                 +'|'+(""+cdpm.paxtotal || "0")
                                 +'|'+(""+cdpm.paxadult || "0")
                                 +'|'+(""+cdpm.paxchild || "0")
                                 +'|'+(""+cdpm.paxinfant || "0")
                                 +'|'+(""+cdpm.pricepp || "0")).toLowerCase()
            , price           : cdpm.bookingvalue || 0
            , quantity        : 1
          }
          , purchase        : {
              id              : cdpm.bookingref || (((document.referrer)?"empty_":"noReferrer_")+Math.random())
            , affiliation     : ''
            , revenue         : cdpm.bookingvalue || 0
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
              dimension1      : {'deptairport'                : cdpm.departureairportselected || 'empty'}
            , dimension2      : {'destination'                : cdpm.destination || 'empty'}
            , dimension5      : {'deptdate'                   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || 'empty'}
            , dimension6      : {'appserver'                  : cdpm.appserver || 'empty'}
            , dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'}
            , dimension8      : {'budget'                     : cdpm.srpparams && cdpm.srpparams.budget || ''}
            , dimension9      : {'duration'                   : ''+cdpm.duration || 'empty'}
            , dimension10     : {'lob'                        : cdpm.lob || ''}
            , dimension11     : {'holidaytype'                : cdpm.holidaytype || ''}
            , dimension12     : {'pageid'                     : cdpm.pageid || ''}
            , dimension14     : {'sessid'                     : cdpm.sessid || 'empty'}
            , dimension15     : {'starrating'                 : cdpm.starrating || 'empty'}
            , dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'}
            , dimension17     : {'accomname'                  : cdpm.accomname || 'empty'}
            , dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'}
            , dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.code || cdpm.errorcode || ''}
            , dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'}
            , dimension22     : {'destairport'                : cdpm.destinationairportselected || 'empty'}
            , dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'}
            , dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'}
            , dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'}
            , dimension33     : {'carrier'                    : cdpm.carrier && cdpm.carrier.code || 'empty'}
            , dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')}
            , dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')}
            , dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')}
            , dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')}
            , dimension38     : {'paymentoption'              : cdpm.paymentoption || 'empty'}
            , dimension39     : {'cardtype'                   : cdpm.cardtype || 'empty'}
            , dimension40     : {'bookingref'                 : cdpm.bookingref || 'empty'}
            , dimension51     : {'gaguid'                     : cdpm.gaguid || 'empty'}
            , dimension55     : {'hittype'                    : 'page'}
            , dimension58     : {'accomguid'                  : cdpm.accomguid || 'empty'}
            , dimension71     : {'promocode'                  : cdpm.promotion && cdpm.promotion.code || ''}
            , dimension72     : {'promocode value'            : cdpm.promotion && cdpm.promotion.value || ''}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension101    : {'depositselected'            : cdpm.depositselected || ''}
            , dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')}
            , dimension111    : {'totalprice'                 : ''+(cdpm.bookingvalue || '0')}
            , dimension112    : {'destinationcountry'         : cdpm.accomcountry || ''}
            , dimension113    : {'destinationregion'          : cdpm.accomregion || ''}
            , dimension114    : {'destinationresort'          : cdpm.accomresort || ''}
            , dimension115    : {'errormessage'               : cdpm.errors && cdpm.errors.msg || ''}
            , dimension116    : {'depositvalue'               : ''+(cdpm.depositvalue || '')}
            , dimension117    : {'paymentfee'                 : ''+(cdpm.paymentfee || '')}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK multicom UATCDL: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL Conf', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer));
</script>
