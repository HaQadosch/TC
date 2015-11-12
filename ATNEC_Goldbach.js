(function gtm_goldbachDL (cdl, dl)
{
	if (dl && cdl)
	{
		try
		{
			cdl.DL_goldbach = {
				script:
				{
					status: 'not fired',
					script: ""
				}
			}
		}
		catch (error)
		{
			console.log("GTM_goldbachDL : "+error);
		}
		finally
		{
			dl.push({"event" : "goldbachDL"});
		}
	}
	return cdl && cdl.DL_goldbach;
}(window.CATTDL, window.dataLayer));


(function gtm_goldbach(jQ, cdl, gbdl, dl)
{
	if (jQ && cdl && gbdl && dl)
	{
		try
		{
				var script;
			 	var blacklist = ['fruehbucher', 'all-inclusive', 'preisknueller', 'rundreisen', 'luxusurlaub', 'aktivurlaub']  || "";
	            var countryDestination = document.location.href.substring(document.location.href.indexOf('pauschalreisen') + 15) || "";
            	var country = countryDestination.substring(0, countryDestination.indexOf('/')) || "";
	            var destination = countryDestination.substring(countryDestination.indexOf('/') + 1).replace(/\//g, '') || "";
	            var axel = (Math.random() + "") * 10000000000000 || 0;
	            if (blacklist && blacklist.indexOf(country) < 0) 
	            {
	                if (country.trim().length > 0 && destination.trim().length > 0) 
	                {
	                    //Destination (Add marketing pixel) 
	                    try 
	                    {	
	                    	script = '<iframe src="//4569027.fls.doubleclick.net/activityi;src=4569027;type=start;cat=dest;u2=' + country + ';u3=' + destination + ';ord=' + axel + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
	                    	$("body").append(script);
	                    	gbdl.script.status = "fired";
	                    	gbdl.script.script = script;
	                    }
	                    catch (err)
	                    {
	                    	console.log ("gtm_goldbach (destination) : "+err);
	                    }
	                    
	                } else if (country.trim().length > 0) 
	                {
	                    //Country (Add marketing pixel)
	                    try 
	                    {
	                    	script = '<iframe src="//4569027.fls.doubleclick.net/activityi;src=4569027;type=start;cat=country;u2=' + country + ';ord=' + axel + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
	                    	$("body").append(script);
	                    	gbdl.script.status = "fired";
	                    	gbdl.script.script = script;
	                    }
	                    catch (error)
	                    {
	                    	console.log("gtm_goldbach (country) : " + error);
	                    }
	                }
	        	} 
	        	else
	        	{
	        		console.log("Error - GTM_goldbach - Could not add marketing pixel");
	        	}
        }
		catch (err)
		{
			console.log("GTM_goldbach : "+err);
		}
		finally
		{
			 dl.push({'event':'goldbach'}); 
		}
	}	
	return jQ && cdl && gbdl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_goldbach, window.dataLayer)) 