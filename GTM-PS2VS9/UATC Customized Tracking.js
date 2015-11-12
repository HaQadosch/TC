<script>
try {
	if ((/intcmp/i).test(document.location.href)){
		var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
		ga('send', 'event', 'InternalCampaign', campaignID,  document.location.search, 1, {'nonInteraction': 1});
	}
} catch(e) {}


if (window.$&& $('.alert-bd')){
	ga('send', 'event', 'Errors', $('.alert-bd').text(),  document.referrer, 1, {'nonInteraction': 1});
}

if (typeof CATTParams != "undefined"){
	if(typeof CATTParams.ErrorCode != "undefined" && CATTParams.ErrorCode){
		var errorLabel= CATTParams.ErrorCode+'&SessionID='+CATTParams.SessID+'&AppServer='+CATTParams.AppServer;
		ga('send', 'event', 'Errors', errorLabel,  window.document.referrer, 1, {'nonInteraction': 1});
	}
}
</script>
