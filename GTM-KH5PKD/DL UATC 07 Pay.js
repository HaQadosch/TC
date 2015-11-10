<script id='GTM-KH5PKD_UATCDLPay'>
  (function gtm_uatcdlPay(jQ, cdl, loc, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if ( jQ && cdl && cdl.CATTParams && dl) //!dl.some(function(a){return /UATCDL CategorySelection/i.test(a && a.event || '');}) ) 
    try {
      var ld = cdl._;
      cdpm = cdl.CATTParams || {};
      timeStart = cdpm.timestart || 0;
      var locpathname = location.pathname || '';
      var locsearch = location.search || '';
      cdl.DL_uatc = {};
      cdl.DL_uatc.webanalytics = {};
      var errors = cdpm.errors || cdpm || {};
      var uaProd = JSON.parse(window.unescape(cdpm.cookies && cdpm.cookies.gtm_uaprod || '{}'));
      uaProd.price = +(cdpm.pricetotal || cdpm.bookingvalue || 0);
      cdl.ckset('gtm_uaprod', JSON.stringify(uaProd));

      var virtualPage = cdl.transpose('/vp/en/{lob}/{holidaytype}/{pageid}', {
                            'lob'         : cdpm.lob || 'cruise'
                          , 'holidaytype' : cdpm.holidaytype || 'cruise'
                          , 'pageid'      : cdpm.pageid || ''
                        }).toLowerCase();

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
            page            : virtualPage
          , location        : loc && loc.href || window.document && window.document.URL || ''
          , nbrimpressions  : parseInt(cdpm.searchresultstotal) || 0
          , addproduct      : uaProd
          , metrics         : {
              metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0}
            , metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0}
            , metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0}
            , metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0}
            , metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0}
            , metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0}
            , metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0}
            , metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultstotal) || 0}
            , metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0}
            , metric10        : {'bookingvalue'           : +(cdpm.totalprice || cdpm.bookingvalue || 0)}
            , metric11        : {'depositvalue'           : +(cdpm.depositvalue || 0)}
            , metric12        : {'discountvalue'          : +(cdpm.discountvalue || 0)}
            , metric15        : {'hitcount'               : 1}

          }
          , dimensions      : {
              dimension1      : {'deptairport'                : cdpm.departureairportselected || ''}
            , dimension2      : {'destination'                : cdpm.destination || ''}
            , dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''}
            , dimension5      : {'deptdate'                   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || ''}
            , dimension6      : {'appserver'                  : cdpm.appserver || ''}
            , dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''}
            , dimension9      : {'duration'                   : ''+(cdpm.duration || '')}
            , dimension10     : {'lob'                        : cdpm.lob || ''}
            , dimension11     : {'holidaytype'                : cdpm.holidaytype || ''}
            , dimension12     : {'pageid'                     : cdpm.pageid || ''}
            , dimension13     : {'resortsearched'             : cdpm.searches && cdpm.searches.resort || ''}
            , dimension14     : {'sessionid'                  : cdpm.sessionid || ''}
            , dimension15     : {'starrating'                 : cdpm.starrating || ''}
            , dimension16     : {'accomcode'                  : cdpm.cruiseshipid || cdpm.accomcode || ''}
            , dimension17     : {'accomname'                  : cdpm.cruiseship || cdpm.accomname || ''}
            , dimension18     : {'accomresort'                : cdpm.accomresort || ''}
            , dimension19     : {'errorcode'                  : (errors.errormsg)?((!errors.errorcode)?'unknown':errors.errorcode):''}
            , dimension20     : {'touroperator'               : cdpm.cruiseline || cdpm.touroperator || ''}
            , dimension22     : {'destairport'                : cdpm.destinationairportselected || ''}
            , dimension23     : {'searchresultspagenbr'       : ''+(cdpm.searchresultspagenbr || '')}
            , dimension24     : {'searchresultspages'         : ''+(cdpm.searchresultspages || '')}
            , dimension25     : {'searchresultsperpage'       : ''+(cdpm.searchresultsperpage || '')}
            , dimension26     : {'searchresultstotal'         : ''+(cdpm.searchresultstotal || '')}
            , dimension28     : {'sortoption'                 : cdpm.sortoption || ''}
            , dimension29     : {'sortoption'                 : cdpm.sortoption || ''}
            , dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''}
            , dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''}
            , dimension32     : {'emailguid'                  : cdpm.emailguid || ''}
            , dimension33     : {'carrier'                    : cdpm.touroperator || ''}
            , dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')}
            , dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')}
            , dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')}
            , dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')}
            , dimension51     : {'gaguid'                     : cdpm.gaguid || ''}
            , dimension55     : {'hittype'                    : 'page'}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')}
            , dimension111    : {'totalprice'                 : ''+(cdpm.totalprice || cdpm.bookingvalue || '0')}
            , dimension115    : {'errormsg'                   : errors.errormsg || errors.errorcode|| ''}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
          , events : {
              internalcampaignid : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '',            'label': virtualPage+'_'+loc.host, 'value': 1, 'noninteraction': true}
            , errorcode          : {'category': 'Errors',           'action': (errors.errorcode+errors.errormsg) || '', 'label': (document.URL || virtualPage || '')+"&sessid="+(cdpm.sessionid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK TC Cruise UATCDL Pay: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL Pay', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer_KH5PKD));
</script>