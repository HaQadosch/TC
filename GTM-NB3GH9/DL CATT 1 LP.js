<script id='GTM-NB3GH9_cattdlLP'>
(function gtm_cattdlLP(jQ, dl, cdl){
	'use strict'
	if (jQ && typeof jQ.extend !== 'undefined' && cdl) try{
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

		} else keeps['trailingsteps'] = cdpm.pageid+'(1)';

	    cdpm.cookiedomain = 
	          ({
	          	'thomascook'					:'thomascook.com',
	            'airtours'						:'airtours.co.uk',
	            'club18-30'						:'club18-30.com',
	            'eceit'							:'staging.eceit.net',
	            'directholidays'				:'directholidays.co.uk',
	            'uk.staging'					:'uk.staging.thomascook.io',
	            'uk.qa'							:'uk.qa.thomascook.io',
	            'uk.integration'				:'uk.integration.thomascook.io',
	            'uk.int'						:'uk.int.thomascook.io'

	          })[((/([^\.]*).co.uk|([^\.]*).com|([^\.]*).net|(.+)\.thomascook\.io/i.exec(loc.hostname) || []).filter(function hostname(e){return e}) || ['thomascook']).pop()];

 		cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));

 		jQ.extend(cdl.CATTParams, newPM, keeps)

	}catch(e){cdl.error('GTM CATTDL LP: '+e)}
	dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
	dl.push({'event': 'CATTDL LP'})

	return cdl
}(!window.jQuery?!1:window.jQuery, !window.dataLayer?!1:window.dataLayer,!window.CATTDL?!1:window.CATTDL))
</script>