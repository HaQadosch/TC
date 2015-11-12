(function gtm_eSPDL(cdl, dl)
{
	if (dl && cdl)
	{

		var wca_event = '';
        wca_event += '{"PageView":{';
        wca_event += '"Destination":"' + window.CATTParams.Destination + '",';
        wca_event += '"LOB":"' + window.CATTParams.LOB  + '",';
        wca_event += '"PaxAdult":"' + window.CATTParams.PaxAdult + '",';
        wca_event += '"PaxChild":"' + window.CATTParams.PaxChild + '",';
        wca_event += '"BookingValue":"' + window.CATTParams.BookingValue + '",';
        wca_event += '"PageID":"' + window.CATTParams.PageID + '"';
        wca_event += '}}';
		
		try
		{
			cdl.DL_eSP = {
				script: 
				{
					status: 'not fired',
					url: '//tracking.esp-srv.de/rtg/wca/a:5447704a-f668-49fb-a875-3f016def3350/e:5458d8ad-2178-43b3-9ebc-52636def3350/wca_event:' + wca_event + '/'
				}
			}
		}
		catch (error)
		{
			console.log("GTM DL_eSP : "+error); // fail
		}
		finally
		{
			dl.push({"event" : "eSPDL"});
		}
	}
	return cdl && cdl.DL_eSP;
}(window.CATTDL, window.dataLayer));


(function gtm_eSP (jQ, cdl, espdl, dl)
{
	if (jQ && cdl && espdl && dl)
	{	
		try
		{
			jQ.ajaxSetup({cache: true});
        	jQ.getScript(espdl.script.url, function gtm_fireESPScript(data){
                espdl.script.status = 'fired';	//success
        	});
        }
		catch (err)
		{
			console.log("GTM_eSP : "+err); //fail
		}
		finally
		{
			 dl.push({'event':'eSP'}); 
		}
	}
	return jQ && cdl && espdl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_eSP, window.dataLayer));
