<script id='GTM-KMVZTD_UATCDLLP'>
    (function gtm_uatcdlLP(cdl, loc, dl){
    'use strict';
    if (cdl && cdl.CATTParams) try {
      var ld = cdl._
      var cdpm = cdl.CATTParams || {}
      var locpathname = location.pathname || ''
      var locsearch = location.search || '';
      cdl.DL_uatc = {}
      cdl.DL_uatc.webanalytics = {}

      ld.assign(cdl.DL_uatc, {
          profileid       : 'UA-65261977-1'
        , cookiedomain    : 'thomascook.fr'
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
            , dimension56     : {'codeagence'                 : cdpm.codeagence || ''}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
        }
      })

    } catch(e) {
      cdl.error('GTM FR TC MultiTO UATCDL: '+e)
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL LP', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']})
    }
    return cdl.DL_uatc
   }(window.CATTDL, window.location, window.dataLayer))
</script>