<script id='GTM-WN2KRH_UATCHelp'>
  (function gtm_uatcHelp(jQ, cdl, uadl, w) {
    'use strict';
    if (cdl && uadl) try {
      var trackerName = (uadl.name+".") || ""
      var uawa = uadl.webanalytics || {};

      if (!window.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      window.ga && window.ga(function gtm_useTracker() {
        var trc = ga.getByName(uadl.name)
        if (!trc) {
          w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
          trc = ga.getByName(uadl.name)
        }
        for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
        if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
        cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
        uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

        $('span.content').on('click',function(){
          var cdpm = cdl.CATTParams || {};
          if ($(this).text() && /Consultez|Envoyez|Trouvez/i.test($(this).text())) {
            trc.send('event'
                     , 'Help'
                     , $(this).text() || ''
                     , location.pathname
                     , 1
                     , { 'dimension51'   : cdpm.gaguid || 'empty'
                        ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118' : location.pathname || ''
                        ,'dimension119' : location.search || ''
                       }
                     , {nonInteraction : false}
                    )
          }
        });
        $('input#btn-modal-news').on('click',function(){
          var cdpm = cdl.CATTParams || {};
          trc.send('event'
                   , 'EmailSignUp'
                   , 'click'
                   , location.pathname
                   , 1
                   , { 'dimension51'   : cdpm.gaguid || 'empty'
                      ,'dimension65'  : cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                      ,'dimension75'  : ''+(window.Date && window.Date.now() || 0)
                      ,'dimension118' : location.pathname || ''
                      ,'dimension119' : location.search || ''
                     }
                   , {nonInteraction : false}
                  )
        });
      })

    } catch(e) {
      cdl.error('GTM FR JT UATC Help Event: '+e)
    }
    return
  }(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>
