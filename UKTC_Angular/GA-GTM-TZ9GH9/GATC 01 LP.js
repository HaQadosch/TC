<script>
(function gtm_gatcLP(jQ, cdl, gadl, w, d, loc){
	'use strict';
	if (cdl && gadl) try {
		var tn = gadl.trackername+'.' || '';
		var gawa = gadl.webanalytics || {}
		w._gaq = w._gaq || [];
		var wgp = function gtm_wgp(arr){ return w._gaq.push(arr)}
		var cdpm = cdl.CATTParams;
		var cdurl = cdpm.urlparams || {};	
		var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
		var locsearch = cdurl && cdurl.paramstring || loc.search || '';
		var lochref = cdurl && cdurl.fullurl || loc.href || '';

		wgp([tn+'_setAccount', gadl.profileid]);
		wgp([tn+'_setDomainName', gadl.cookiedomain]);
		wgp([tn+'_setAllowLinker', gadl.allowlinker]);
		wgp([tn+'_addIgnoredRef', 'ww1.thomascook.com']); 
		if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term])})
		if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope])});
		
		var fullVP = (locpathname+locsearch) || (location.pathname+(location.search || ''));
		wgp([tn+'_set', 'page', fullVP]);
		wgp([tn+'_trackPageview', fullVP])
		
		if (window.userId) {
			wgp([tn+'_setCustomVar', 33, 'MyAccountUserID', window.userId, 2]);
			wgp([tn+'_setCustomVar', 34, 'MyAccountUserID', window.userId, 3]);
			wgp([tn+'_trackEvent', 'MyAccountUserID', locpathname || '', window.userId, 1, true])	
		};

		for (evt in gawa.events) {
			var gevt = gawa.events[evt]
			if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
		};

		try{
			$("#util1 > ul > li").first().one("click",function gtm_clickRetrieveBooking(){
				wgp([tn+"_trackEvent","Retrieve Booking","href="+d.location.href,"referrer="+d.referrer,1,true])
			})
		}catch(e){};

		(function gtm_callGAscript() { var ga = d.createElement('script'); ga.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)}())

		var as=d.getElementsByTagName("a");
		var inBound=new RegExp("^#$|^javascript:|"+d.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace(".","\\.")+"|thomascook\\.com|google-analytics\\.com|mailto:","gi");
		for(var i=0;i<as.length;i++){
		    var aHref=as[i].href;
		    if(!aHref||aHref.match(inBound))continue;
		    var aOnClick=as[i].onclick;
		    as[i].onclick=function(){wgp([tn+"_trackEvent","outbound link","click",this.href.split("//")[1],1,true]);aOnClick()}
		};
	} catch (e){cdl.error('GTM UK TC GATC LP: '+e)}
}(window.jQuery, window.CATTDL, window.CATTDL.DL_gatc || {}, window, document, window.location))
</script>
