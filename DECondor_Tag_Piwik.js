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

            if (/index.jsp|fluginfos\/premium-economy-class\/besonderer-service.jsp|fluginfos\/business-class\/businessfliegen.jsp|fluege\//i.test(window.location.href)){

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
				cdl.error("GTM_Piwik - failed to push ", error);
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
