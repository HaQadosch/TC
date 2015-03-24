<script>
(function gtm_uamyaccountLogin(jQ, cdl, uadl, w){
		'use strict';
	if (cdl && uadl) try{	

	var cdpm = cdl.CATTParams || [];
	var trackerName = (uadl.name+".") || "";
	var uawa = uadl.webanalytics || {};

	//var myaccountid = (w.getPageData('user') && w.getPageData('user').data.id) || (w.getPageData('user') && w.getPageData('user').data.data) || "";

    w.ga(trackerName+'send', 'event'
			, 'MyAccountLogin'
			, (cdpm.user && cdpm.user.action || "")
			, (cdpm.user && cdpm.user.msg || "")
			, 1
			, { 'dimension51': cdpm.gaguid || 'empty',
			    'dimension65': cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || '',
			    'dimension75': ''+(window.Date && window.Date.now() || 0)}                          
			, {'nonInteraction': true});
	}
	catch(e){cdl.error('GTM UATC MyAccountSignUp: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, !window.CATTDL.DL_uatc?!1:window.CATTDL.DL_uatc, window))
</script>

<script>
(function gtm_gamyaccountLogin(jQ, cdl, gadl, w){
		'use strict';
	if (cdl && gadl) try{	

	var cdpm = cdl.CATTParams || [];
	var trackerName = (gadl.trackername+".") || "";
	var uawa = uadl.webanalytics || {};
	
    w._gaq.push([trackerName+'_trackEvent'
            , 'MyAccountSignUp'
            , (cdpm.user && cdpm.user.action || "")
            , (cdpm.user && cdpm.user.msg || "")
            , 1     
            , {'noninteraction': true}]);  
	}
	catch(e){cdl.error('GTM GATC MyAccountSignUp: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, !window.CATTDL.DL_gatc?!1:window.CATTDL.DL_gatc, window))
</script>
