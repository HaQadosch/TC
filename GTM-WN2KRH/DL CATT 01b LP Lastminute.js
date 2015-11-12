<script id='GTM-WN2KRH_CATTDL1LastMin'>
  (function gtm_cattdlLM(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
      var cdpm = cdl.CATTParams
      var cdsr = cdpm.searches
      var newPM = {}
      var keeps = {}

      var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

      if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
        var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
        if (steps[steps.length-1] === '') steps.pop()
        var lastSteps = steps.pop();
        lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
        if (lastSteps[1] === cdpm.pageid)
          lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
          else
            lastSteps = cdpm.pageid+'(1)';
        keeps['trailingsteps'] = lastSteps

      } else {keeps['trailingsteps'] = cdpm.pageid+'(1)'};

      var form = unescape(jQ('form#textform').serialize());
      if (form){
        newPM['destination'] = ((jQ('a.selected[data-textform-id="to"]').text()) || '').replace(/(en\s|à\s|au\s)/g,'') || '';
        newPM['deptairport'] = (/([^from=\&]+)/.exec(form) || []).pop() || '';
        newPM['duration'] = (/(date=[^\&\s]+)/.exec(form) || ["date="]).pop().replace('date=','') || 'any';
        newPM['errors'] = jQ('div.description-container.blc-white.last-minute-no-result[style="display: block;"]').text()
        || jQ('div.description-container.blc-white.last-minute-no-result img').attr('alt')
        || '';
      }

      cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');

      jQ.extend(cdl.CATTParams, newPM, keeps)

      $('input[type="submit"][value="Valider"]').click( function gtm_uatcdlLMsearch() { dl.push({'event': 'CATTDL LM'}) });

    } catch(e) {
      cdl.error('GTM CATTDL Lastminute: '+e)
    } finally {
      dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
      dl.push({'event': 'CATTDL LP'})
    }
    return jQ && jQ.extend && cdl
  }(window.jQuery, window.dataLayer, window.CATTDL))
</script>
