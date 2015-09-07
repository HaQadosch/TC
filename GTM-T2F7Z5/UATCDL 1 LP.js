<script id='GTM-T2F7Z5_UATCDLLP'>
    (function gtm_uatcdlLP(jQ, cdl, loc, dl){
    'use strict';
    if ( jQ && cdl && cdl.CATTParams && !dl.some(function(a){return /UATCDL LP/i.test(a && a.event || '');}) ) try {
      var ld = cdl._;
      var cdpm = cdl.CATTParams || {};
      var locpathname = location.pathname || '';
      var locsearch = location.search || '';
      cdl.DL_uatc = {};
      cdl.DL_uatc.webanalytics = {};

      ld.assign(cdl.DL_uatc, {
          profileid       : 'UA-33036832-7'
        , cookiedomain    : 'directholidays.co.uk'
        , name            : 'CATTUATC'
        , set             : {
            anonymizeIp : false
          , location    : loc && loc.href || window.document && window.document.URL || ''
          , referrer    : document.referrer  || ''
          , hostname    : loc && loc.hostname || ''
        }
        , webanalytics    : {
            location        : loc && loc.href || window.document && window.document.URL || ''
          , metrics         : {
              metric15        : {'hitcount'               : 1}
          }
          , dimensions      : {
              dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.code || cdpm.errorcode || ''}
            , dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'}
            , dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'}
            , dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'}
            , dimension51     : {'gaguid'                     : cdpm.gaguid || 'empty'}
            , dimension55     : {'hittype'                    : 'page'}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
        }
      });

    } catch(e) {
      cdl.error('GTM UK directholidays UATCDL: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL LP', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer_T2F7Z5));
</script>