<script>
(function gtm_piwikDL(cdl, dl) 
{
	if (dl && cdl)
	{
		try
		{
			var u=(("https:" == document.location.protocol) ? "https" : "http") + "://webanalytics.btelligent.net/analytics/";
			cdl.DL_piwik = 
			{
				setTrackerUrl : u + 'piwik.php',
				setSiteId : '1',
				
				script : 
				{
					status : 'not fired',
					url	: u + 'piwik.js'  //'piwik.php' [Edit]
				}
			}
		}
		catch (err)
		{
			console.log("GTM DL_Piwik: ", e);
		}
		finally
		{
			dl.push({'event': 'piwikDL'});
		}
	}
	
	return cdl && cdl.DL_piwik;
	
}(window.CATTDL, window.dataLayer));

(function gtm_piwik(jQ, cdl, pwkdl, dl) 
{
 if (jQ && cdl && pwkdl && dl)
 { 
	try 
	    {
	        jQ.ajaxSetup({cache: true});
	        window._paq = window._paq || [];
	       		var pageURL = [];
	        	pageURL[0] = "www.condor.com/de/index.jsp";
	        	pageURL[1] = "www.condor.com/de/fluginfos/premium-economy-class/besonderer-service.jsp";
	        	pageURL[2] = "www.condor.com/de/fluginfos/business-class/businessfliegen.jsp";
	        	pageURL[3] = "www.condor.com/de/fluege/";

	  		var value = window.location.href || "";
	          	
	         	if (value.match(pageURL[1]) || value.match(pageURL[3]) || 
	         		value.match(pageURL[2]) || value.match(pageURL[4]) )
	         	{
	            	jQ.when(jQ.getScript && jQ.getScript(pwkdl.script && pwkdl.script.url || '')).then(
	            	function gtm_piwikScript(data)
	            	{
		                pwkdl.script.status = 'fired';	
	            	});
	          	}
	          	else
	          	{
	          		console.log("value:" + value +  "Error: user not on page page for tagging");
	          	}
	      	try 
	      	{
		      	window._paq.push(["trackPageView"]);
				window._paq.push(["enableLinkTracking"]);
			}
			catch (error)
			{
				console.log("GTM_Piwik - failed to push ");
			} 
		} 
	    catch(e) 
	    {
	        console.log('GTM Piwik: ', e);
	    } 
	    finally 
	    {
			dl.push({'event':'piwik'});  
	    }
  }
  
   
  return jQ && cdl && pwkdl && dl;
  
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_piwik, window.dataLayer))
</script>