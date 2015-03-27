<script>
(function gtm_cattdlSRP(jQ, dl, cdl) {
	'use strict'
	if (jQ && jQ.extend && cdl) try {
		var cdpm = cdl.CATTParams || {};
		var ctpm = window.CATTParams || {};
		var newPM = {}

		cdpm.errors = {}
		var errorPM = {};
		errorPM['errorcode'] = (/(^\d+)/.exec(ctpm.ErrorCode) || '') || [].pop() || '';
		errorPM['errormsg'] = ctpm.ErrorCode || '';
		jQ.extend(cdl.CATTParams.errors, errorPM);
		
		var refreshparams = [
			"AccomCode"
			, "AccomName"
			, "AccomGEOLocation"
			, "AccomResort"
			, "AppServer"
			, "BoardBasis"
			, "Brochure"
			, "DeptDate"
			, "Destination"
			, "DestinationISOCode"
			, "Duration"
			, "PaxAdult"
			, "PaxChild"
			, "PaxInfant"
			, "PaxTotal"
			, "Region"
			, "RegionGEOLocation"
			, "RetDate"			
			, "Rooms"
			, "SearchApp"
			, "SearchResultsPageNbr"
			, "SearchResultsPages"
			, "SearchResultsPerPage"
			, "SearchResultsTotal"
			, "SessId"
			, "TourOperator"
			, "PageType"
			, "SiteLanguage"
			, "siteType"
		];

		var ctpmkeys = Object.keys(ctpm);
		for (var i in ctpmkeys){
					var ctpmval = ctpmkeys[i] || ''
					var reg = new RegExp(ctpmval, 'i');
					if (ctpmval && reg.test(refreshparams.join('|'))) { 
						cdpm[ctpmval.toLowerCase()] = ctpm[ctpmval]
					}
				};		

		cdpm['deptairport'] = ctpm.DepartureAirportSelected && ctpm.DepartureAirportSelected.toLowerCase() || '';
		cdpm['destination'] = ctpm.Destination || '';
		cdpm['sortoption'] = (jQ('label.sort-by').find('select[id*=PagerSort]').find('option[selected="selected"]').eq(0).attr('sortby') || '').replace('-','') || ''
		cdpm['sessionid'] = ctpm.SessId || '';

		var rooms = []
		jQ('div.qsm_partycomposition_room_container').each(function(e){

		     if(jQ(this).attr('style')!=='display:none'){
		         rooms.push(jQ(this).attr('id'))
		     }
		});
		cdpm['rooms'] = ctpm.Rooms || rooms.length || 0;
		var duration = ''; jQ('select#QsmChangeSelect_DurationNights').children().each(function(e){
		    if(jQ(this).attr('selected')) {
		        duration = jQ(this).attr('title')
		    } 
		});
		cdpm['duration'] = (duration.replace('(en)','') || '').trim()
			|| (/^\d+/.exec(jQ('select#QsmChangeSelect_prXduration').find('[selected="selected"]').attr('title')) || []).pop()
			|| ctpm.Duration
			|| 0

		cdpm['deptmth'] = (/\d+/.exec(unescape((/pr_month([^&]+)/.exec(jQ('select#QsmChangeSelect_prXmonth').find('[selected="selected"]').attr('value')) || ['']).pop())) || ['']).pop()
			|| ''	
		cdpm['deptmthstart'] = cdpm.deptmth && +new Date((cdpm.deptmth).replace(/(\d{4})(\d{2})/,'$1-$2-01')) || 0;
		var nextmonth = deptmthstart && new Date(deptmthstart) || 0; nextmonth.setMonth(nextmonth.getMonth()+1);
		cdpm['deptmthend'] = cdpm.deptmthstart && nextmonth && (+nextmonth-24*60*60*1000) || 0;
		var depwkstring = (/\d+[^_]/.exec(unescape((/pr_period([^&]+)/.exec(jQ('select#QsmChangeSelect_prXperiod').find('[selected="selected"]').attr('value')) || ['']).pop())) || ['']).pop()			
		cdpm['depwkstart'] = +(depwkstring && new Date(depwkstring.replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3')) || 0);
		cdpm['depwkend'] = depwkstart && +new Date(depwkstart+6*24*60*60*1000) || 0;
		cdpm['starrating'] = []; jQuery('ul#ExtraMultiSelectItems_XpkXownratingminimum').find('[class*="selected"]').find('[id*="QsmMultiSelect"]').each(function(e){
			cdpm.starrating.push(jQ(this).attr('value'));
		});
		cdpm['boardbasis'] = []; 
		jQuery('div.qsm-criteria.qsm-criteria-multiselect[critid="pr_boardtypes"]').find('[class*="selected"]').each(function(e){
			cdpm.boardbasis.push((/[^(]+/.exec((jQ(this).text() || '') || ['']).pop().trim()));
		});
		jQuery('div.qsm-criteria.qsm-criteria-multiselect[critid*="BoardType"]').find('[class*="selected"]').each(function(e){
			cdpm.boardbasis.push((/[^(]+/.exec((jQ(this).text() || '') || ['']).pop().trim()));
		});

		cdpm['srpresults'] = []
		jQ('ul#ListerContainer').children().each(function(e){
			var res = jQ(this)
			var accomdeptdate = (/\d+\/\d+\/\d+/.exec(res.find('span[class="departure-date"]').text()) || []).pop()
			var accomlink = (res.find('[class="booking-button"]').find('a').attr('href') || '').toLowerCase();
			var accomlinkprm = {}; accomlink.split(/\?|&|#/g).slice(1).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) accomlinkprm[cur[1]]=cur[2]})

			srpresults.push({
					accomcode 		: accomlinkprm.codeto || ''
					,accomname 		: res.find('div[class="header-border"]').find('[id*=QsmSelect]').attr('title') || ''
					,destination 	: (res.find('p[class="lro"]').text() || '').trim()
					,deptdate 		: +(new Date(accomlinkprm.date && accomlinkprm.date.replace(/(\d{4})(\d{2})(\d{2})/,'$1-$2-$3')) || new Date(accomdeptdate.replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1'))) || 0
					,deptairport 	: res.find('span[class="airport"]').find('span[class="location"]').text() || ''
					,deptairporcode	: (accomlinkprm.depairport || '').toUpperCase()
					,duration 		: +(accomlinkprm.duration || (/\d+/.exec(res.find('span[class="duration"]').text()) || []).pop() || 0)
					,pagenumber		: +(accomlinkprm.pagenumber || 1)
					,position 		: +(accomlinkprm.startindex || 0)
					,pricepp		: +(res.find('span[class*="current-price"]').find('strong[class="amount"]').text() || 0)
					,rooms 			: +(accomlinkprm.nrofrooms || 1)
					,seasoncode		: accomlinkprm.seasoncode || ''
					,touroperator 	: accomlinkprm.brandcode || ''
					,oldpricepp		: +((/\d+/.exec((res.find('span[class="old-price"]').text() || '').replace('.','')) || []).pop() 
											|| res.find('span[class*="current-price"]').find('strong[class="amount"]').text() || 0)
			})
		});
		//jQ('ul#ListerContainer').children().eq(1)

		window.CATTDL.CATTParams = cdpm;
	} catch(e) {
		cdl.error('GTM CATTDL SRP: '+e)
	} finally {
		dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
		dl.push({'event': 'CATTDL SRP'})
		window.gatcDL && gatcDL.push({'event': 'CATTDL SRP'})
	}
	return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
