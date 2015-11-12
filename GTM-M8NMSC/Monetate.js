<script id="GTM-M8NMSC_monetate">
  (function gtm_MonetateLP(cdl, dl) {
    'use strict';
    var mtdl = {};
    var cdpm = cdl.CATTParams;
    var uadl = window.CATTDL?window.CATTDL.DL_uatc:!1;
    var uawa = uadl.webanalytics || {};
    var pooltest =
        /monetatetest/i.test(window.document.URL) ||
        'monetate' === (cdpm.cookies && cdpm.cookies.test || '') ||
        !((cdpm && cdpm.utmaguid || 1)%2);
    if (cdl && dl) try {
      var track = function track(args) {
        if (window._gaq) window._gaq.push(function gtm_trackPool() {
          if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = args;
          var tracker = window._gat && window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
          tracker._setCustomVar(args.index, args.name, args.value, args.scope);
          tracker._trackEvent('Monetate', 'test', args.value, 1, true);
        });
        if (window.ga) window.ga(function gtm_uaTrack(){
          var trc = window.ga && window.ga.getByName && window.ga.getByName(uadl.name) || !1;
          if (trc) trc.send('event'
            , 'Monetate', 'test',  args.name, args.value
            , { 'page': uawa.page || location.pathname+(location.search || '') || ''
               ,'dimension98': args.value+'|'+args.value
               ,'nonInteraction': true
            }
           );
        });
      };
      if (pooltest) {
        mtdl = cdl.insertJS({
            'name' : 'monetateDate'
          , 'src' : 'https://sb.monetate.net/js/1/a-d4f809fc/p/thomascook.com/{now}/g'
          , 'params' : {'now': Math.floor((Date.now() + 1825276) / 3600000)}
          , 'dataLayer' : dl
          , 'callback' : function(){
            cdl.insertJS({
                'name' : 'monetateEntry'
              , 'src' : 'https://se.monetate.net/js/2/a-d4f809fc/p/thomascook.com/entry.js'
              , 'dataLayer' : dl
              , 'callback' : function(){
                window.monetateQ = window.monetateQ || [];
                window.monetateQ.push(["setPageType", "home"]);
                window.monetateQ.push(["trackData"]);
              }
            });
          }
        });
        track({'index':38, 'name':'MonetateTest', 'value':'PoolTest', 'scope':1});
      } else {
        track({'index':38, 'name':'MonetateTest', 'value':'PoolControl', 'scope':1});
      }
    } catch (err){
      cdl.error("GTM Monetate: " + err);
    }
    finally {
      var timeStart = cdpm.timestart || 0;
      var stampEpoch = +new Date();
      dl.push({'event': 'Monetate', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl && dl && mtdl;
  }(window.CATTDL, window.dataLayer_M8NMSC || window.dataLayer));
</script>
