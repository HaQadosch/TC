<script id='GTM-KH4KVH_UATCDLPaxPay'>
  (function gtm_uatcdlPaxPay(jQ, cdl, loc, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if ( jQ && cdl && cdl.CATTParams && !dl.some(function(a){return /UATCDL PaxPay/i.test(a && a.event || '');}) ) try {
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
            page            : '/vp/en/'+(cdpm.lob || 'epackage')+'/'+(cdpm.holidaytype || 'epackage')+'/'+(cdpm.pageid || 'quote')
          , location        : loc && loc.href || window.document && window.document.URL || ''
          , nbrimpressions  : cdpm.searchresultstotal
          , addproduct      : JSON.parse(window.unescape(cdpm.cookies && cdpm.cookies.gtm_uaprod || '{}'))
          , metrics         : {
              metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0}
            , metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0}
            , metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0}
            , metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0}
            , metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0}
            , metric6         : {'searchresultspagenbr'   : 1}
            , metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0}
            , metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultstotal) || 0}
            , metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0}
            , metric10        : {'bookingvalue'           : parseInt(cdpm.bookingvalue) || 0}
            , metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0}
            , metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0}
            , metric15        : {'hitcount'               : 1}

          }
          , dimensions      : {
              dimension1      : {'deptairport'                : cdpm.departureairportselected || 'empty'}
            , dimension2      : {'destination'                : cdpm.destination || 'empty'}
            , dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'}
            , dimension5      : {'deptdate'                   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || 'empty'}
            , dimension6      : {'appserver'                  : cdpm.appserver || 'empty'}
            , dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'}
            , dimension9      : {'duration'                   : ''+cdpm.duration || 'empty'}
            , dimension10     : {'lob'                        : cdpm.lob || ''}
            , dimension11     : {'holidaytype'                : cdpm.holidaytype || ''}
            , dimension12     : {'pageid'                     : cdpm.pageid || ''}
            , dimension13     : {'resortsearched'             : cdpm.searches && cdpm.searches.resort || 'empty'}
            , dimension14     : {'sessid'                     : cdpm.sessid || 'empty'}
            , dimension15     : {'starrating'                 : cdpm.starrating || 'empty'}
            , dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'}
            , dimension17     : {'accomname'                  : cdpm.accomname || 'empty'}
            , dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'}
            , dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.code || cdpm.errorcode || ''}
            , dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'}
            , dimension22     : {'destairport'                : cdpm.destinationairportselected || 'empty'}
            , dimension23     : {'searchresultspagenbr'       : '1'}
            , dimension24     : {'searchresultspages'         : '1'}
            , dimension25     : {'searchresultsperpage'       : cdpm.searchresultstotal || 'empty'}
            , dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || 'empty'}
            , dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'}
            , dimension29     : {'sortoption'                 : cdpm.sortoption || 'empty'}
            , dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'}
            , dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'}
            , dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'}
            , dimension33     : {'carrier'                    : cdpm.touroperator || 'empty'}
            , dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')}
            , dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')}
            , dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')}
            , dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')}
            , dimension51     : {'gaguid'                     : cdpm.gaguid || 'empty'}
            , dimension55     : {'hittype'                    : 'page'}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')}
            , dimension111    : {'totalprice'                 : ''+(cdpm.bookingvalue || '0')}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK multicom UATCDL PaxPay: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL PaxPay', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer));
</script>
