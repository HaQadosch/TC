(function gtm_crazyEggDL (cdl, dl)
{
	if (dl && cdl)
	{
		try
		{	//var htt = document.location.protocol;
			//var now = Math.floor(new Date().getTime()/3600000); 
			var srcURL = "//dnn506yrbagrg.cloudfront.net/pages/scripts/0012/5391.js?" + (Math.floor(new Date().getTime()/3600000));
			//srcURL = '//dnn506yrbagrg.cloudfront.net/pages/scripts/0012/5391.js"+Math.floor(new Date().getTime()/3600000)';
			
			cdl.DL_crazyEgg = {
				script:  
				{
					status: 'not fired',
					url: srcURL 
				}
			}
		}
		catch (error)
		{
			console.log("GTM DL_CrazyEgg : "+error);
		}
		finally
		{
			dl.push({'event' : 'crazyEggDL'});
		}
	}
	return cdl && cdl.DL_crazyEgg;	
}(window.CATTDL, window.dataLayer));


(function gtm_crazyEgg (jQ, cdl, ceggdl, dl)
{
	if (jQ && cdl && ceggdl && dl)
	{
		try
		{
        	jQ.getScript(ceggdl.script.url, function gtm_fireCrazyEggScript(data){
                ceggdl.script.status = 'fired';	
        	});
        }
		catch (err)
		{
			console.log("GTM_crazyEgg : "+err);
		}
		finally
		{
			 dl.push({'event':'crazyEgg'}); 
		}
	}
	
	return jQ && cdl && ceggdl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_crazyEgg, window.dataLayer));
