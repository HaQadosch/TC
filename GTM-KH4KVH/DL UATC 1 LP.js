<script id='GTM-KH4KVH_UATCDLLP'>
    (function gtm_uatcdlLP(jQ, cdl, loc, dl){
    'use strict';
    var cdpm;
    var timeStart = 0;
    if ( jQ && cdl && cdl.CATTParams && !dl.some(function(a){return /UATCDL LP/i.test(a && a.event || '');}) ) try {
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
            location        : loc && loc.href || window.document && window.document.URL || ''
          , metrics         : {
              metric15        : {'hitcount'               : 1}
          }
          , dimensions      : {
              dimension19     : {'errorcode'       : cdpm.errors || cdpm.errorcode || ''}
            , dimension30     : {'utmaguid'        : cdpm.utmaguid || 'empty'}
            , dimension31     : {'utmbguid'        : cdpm.utmbguid || 'empty'}
            , dimension32     : {'emailguid'       : cdpm.emailguid || 'empty'}
            , dimension51     : {'gaguid'          : cdpm.gaguid || 'empty'}
            , dimension55     : {'hittype'         : 'page'}
            , dimension65     : {'pagetimestamp'   : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'   : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension118    : {'vprealpath'      : locpathname || ''}
            , dimension119    : {'vprealparameter' : locsearch || ''}
          }
          , events : {
              internalcampaignid : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': 'home_'+loc.host, 'value': 1, 'noninteraction': true}
            , errorcode          : {'category': 'Errors',           'action': cdpm.errorcode ||  '',         'label': (document.URL || '')+"&sessid="+(cdpm.sessid || '')+"&AppServer="+(cdpm.appserver || ''), 'value': 1, 'noninteraction': true}
          }
        }
      });
    } catch(e) {
      cdl.error('GTM UK multicom UATCDL: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL LP', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl.DL_uatc;
   }(window.jQuery, window.CATTDL, window.location, window.dataLayer));
</script>
