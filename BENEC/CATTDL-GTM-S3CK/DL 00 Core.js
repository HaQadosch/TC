<script>
(function gtm_cattdlCore(w, dl, loc) {
	'use strict';
	//setTimeout(function(){
		try{
			w.CATTDL = w.CATTDL || {};
			var cdpm = w.CATTDL.CATTParams || {};
			var ctpm = w.CATTParams || {};
			var keeps = {}			

			w.CATTDL = {
				twlh 	: function twlh(rg) {return RegExp.prototype.test.call(rg, loc.host)},
				twdc 	: function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
				ewdc 	: function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
				twls 	: function twls(rg) {return RegExp.prototype.test.call(rg, loc.search)},
				ewls 	: function ewls(rg) {return RegExp.prototype.exec.call(rg, loc.search)},
				gadate  : function gadate(dt){var pd = new Date(dt); return ((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear())},
				gatime	: function gatime(ts){var pt = new Date(ts); return ((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'))},
				ckget 	: function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
				ckset 	: function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
					if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
					var sExpires = ""
					if (vEnd) {switch (vEnd.constructor) {
							case Number: sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd; break;
							case String: sExpires = "; expires=" + vEnd; break;
							case Date: sExpires = "; expires=" + vEnd.toUTCString(); break;
							}}
					document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "")
					return true
				},
				post 	: function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.thomascook.com;"},
				get 	: function get(key) {
					var regKey = new RegExp(key+'=([^;]*)', 'i')
					return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false
		        },
		        info 	: function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
		        error 	: function error(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg}
			};

	        //journey steps path
	        var ck_cdpm = JSON.parse(CATTDL.ckget('gtm_cdpm') || '{}')
			if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
				var steps = (ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/) || []).filter(function steps(e){return e})
				var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop())
				if (lastSteps[1] === cdpm.pageid) 
					lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
				else 
					lastSteps = /home/i.test(cdpm.pageid)?'home(1)':(lastSteps[0]+cdpm.pageid+'(1)');
				keeps['trailingsteps'] = (/home/i.test(cdpm.pageid) && steps.join('') || '')+lastSteps
			} else keeps['trailingsteps'] = cdpm.pageid+'(1)';

			var domainName = ({
				'neckermann':'.neckermann.be',
				'thomascookairlines':'.thomascookairlines.be'
			})[((/([^\.]*).be|([^\.]*).com|([^\.]*).net/i.exec(location.hostname) || []).filter(function hostname(e){return e}) || ['neckermann']).pop()];

	        cdpm['cookies'] = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
	        cdpm['gaguid'] = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || "";
	        cdpm['utmaguid'] = cdpm.utmaguid || (cdpm.cookies && cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) || []).pop() || "";
	        cdpm['utmbguid'] = cdpm.utmbguid || cdpm.cookies && cdpm.cookies.__utmb || "";
	        cdpm['pagetimestamp'] = (w.Date && +w.Date.now() || '0');
			cdpm['device'] = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"")
				|| '';

			cdpm['lob'] = (({
	        	'algemeen'				: 'general'
	        	,'packagae'				: 'flightpackage'
	        	,'vliegvakanties'		: 'flightpackage'
	        	,'flightpackage'		: 'flightpackage'
	        	,'dichtbijvakanties'	: 'nearby'	
	        	,'hotelonly'			: 'hotel'	        	        	
	        })[ctpm.LOB] || ctpm.LOB || 'generic').toLowerCase(); 	       
			cdpm['holidaytype'] = (({
	        	'algemeen'				: 'general'
	        	,'vliegvakanties'		: 'flightpackage'
	        	,'flightpackage'		: 'flightpackage'
	        	,'car'					: 'carholidays'
	        	,'dichtbijvakanties'	: 'nearby'
	        	,'hotelonly'			: 'hotel'
	        	,'promotie'				: 'offer'
	        	,'flight-neckermann'	: 'flight'
	        })[ctpm.HolidayType] || ctpm.HolidayType || 'generic').toLowerCase();	         
			cdpm['initialholidaytype'] = (({
	        	'algemeen'				: 'general'
	        	,'vliegvakanties'		: 'flightpackage'
	        	,'flightpackage'		: 'flightpackage'
	        	,'car'					: 'carholidays'
	        	,'dichtbijvakanties'	: 'nearby'
	        	,'hotelonly'			: 'hotel' 	
	        	,'promotie'				: 'offer'
	        	,'flight-neckermann'	: 'flight'	        	
	        })[ctpm.InitialHolidayType] || ctpm.InitialHolidayType || 'generic').toLowerCase();
			cdpm['pageid'] = (({
	        	'lister'			: 'search'
	        	,'detail'			: 'accom'
	        })[ctpm.PageId] || ctpm.PageId || 'home').toLowerCase(); 	        

			CATTDL.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);
	 		if (w.jQuery) {jQuery.extend(CATTDL.CATTParams, keeps)}
	 		
	 		window.CATTDL.CATTParams = cdpm

		} catch(e) {
			var msg = 'GTM CATTDL Core: '+e;
			console && ((console.error)?console.error(msg):console.log(msg))
		} finally {
			dl.push({'event': 'core_'+(window.CATTDL.CATTParams && window.CATTDL.CATTParams.pageid || 'home')});
		}
		return w.CATTDL			
	//}, 1000)
}(window, window.dataLayer, document.location))
</script>
