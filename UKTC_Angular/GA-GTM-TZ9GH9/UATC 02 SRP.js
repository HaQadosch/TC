<script>
(function gtm_uatcSRP(jQ, cdl, uadl, w, d, dl){
	'use strict';
	if (cdl && uadl) try {
		var trackerName = (uadl.name+".") || ""
        var cdpm = cdl.CATTParams;
        var uawa = uadl.webanalytics || {};
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || location.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || location.search || '';
        var lochref = cdurl && cdurl.fullurl || location.href || '';
        var lochost = location.hostname || location.host || '';        
		var uaImp = uadl.webanalytics.addimpression || [];

		if(!w.ga) w = (function uatcGA(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(w,d,'script','//www.google-analytics.com/analytics.js','ga')

		window.ga && window.ga(function gtm_useTracker() {
			var trc = ga.getByName(uadl.name)
			if (trc) {
				console.info('trc', trc)
				trc.plugins_ && console.info('plugins', trc.plugins_.keys) || console.info('no plugins') 
				console.info('clientID', trc.get('clientId'))
			} else {
				console.info('no trc')
				w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
				trc = ga.getByName(uadl.name)
				console.info('trc', trc)
				console.info('clientID', trc.get('clientId'))
			}
			for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
			if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
			if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
			cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
			uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid'	: cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

			var sendSet = {};
			var ux = window.ECEOP || '';
            if (ux){
                jQ.each(ux && ux.pageview || [], function ux_keyDimension(kDim, vDim){
                    jQ.each(vDim, function uxvalDimension(_, val){val && (sendSet['dimension'+vDim.dimension]=val)})
                })
            };
			if (jQ){
				jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
					jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
				})
				jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
					jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
				})	
			}
			sendSet['page'] = uawa.page;
			sendSet['dimension52'] = window.userId || '';
			sendSet['hitCallback'] = function gtm_uatcSRPAddImpressions(){
				var curUAImp = {}
				if (uawa.nbrimpressions && uawa.addimpression && uawa.addimpression.length){
					for (var i = 0; i<uawa.nbrimpressions; i++){
						curUAImp = uaImp[i] || {}
						w.ga(trackerName+'ec:addImpression', {
								  'id': 			curUAImp.id || '',
								  'name': 			curUAImp.name || '',
								  'category': 		curUAImp.category || '',
								  'brand': 			curUAImp.brand || '',
								  'variant': 		curUAImp.variant || '',
								  'list': 			curUAImp.list || '',
								  'position': 		curUAImp.position || '',
								  'dimension27': 	curUAImp.dimension27 || ''
						})
					}
					var accoms = [];
					for (i = 0; i < uawa.nbrimpressions; accoms.push((uaImp[i++].id) || ""));
					w.ga(trackerName+'ec:setAction', 'view', {'list': (uaImp[0] && uaImp[0].list || "")});		
					trc.send('event', 'viewAddImpression', (uaImp[0].list || "")
							,  (accoms && accoms.toString() || "")
							, 1
							, {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
		                    	,'dimension51': cdpm.gaguid || 'empty'
		                        ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
		                        ,'dimension75': ''+(window.Date && window.Date.now() || 0)
		                        ,'dimension118': (locpathname || '')
		                        ,'dimension119': (locsearch || '')
		                    }
							, {'nonInteraction': true, 'location': uawa.location});
				}
			};
			trc.send('pageview', sendSet);
			
            for (evt in uawa.events) {
                var gevt = uawa.events[evt]
                if (gevt.action) (trc.send('event', gevt.category, gevt.action,  gevt.label, gevt.value
                    , {'page': gevt.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    	,'dimension51': cdpm.gaguid || 'empty'
                        ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (locpathname || '')
                        ,'dimension119': (locsearch || '')
                    }
                    , {'nonInteraction': gevt.noninteraction}));
            };
        
			dl.push({'event': 'UATC SRP'});

			if (ux) {window.ECEOP.pageview = []};
		})
	} catch(e) {
		cdl.error('GTM UK TC UATC SRP: '+e)
	} finally {
		window.externalLayer && externalLayer.push({'event' : 'uapageview'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || 'home')+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '/')})
	}
	return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>
