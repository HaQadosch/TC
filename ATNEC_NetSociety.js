(function gtm_netSocietyDL (jQ, cdl, cdpm, dl)
{
	if (dl && cdpm && cdl)
	{	
		try
		{
				var d = new Date();
				var bv = "";
				cdl.DL_netSociety = {
					accomcode: (cdpm.accomcode || ""),
					bookingdate: (d.getFullYear()+"."+(d.getMonth()+1)+"."+d.getDate() || ""),
					bookingvalue:
						function checkBookingValue ()
						{ 
							if (cdpm.bookingvalue)
							{
								bv = (parseInt(cdpm.bookingvalue));
							}
							else
							{
								bv = "1";
							}
							return bv;
						},
					children: (cdpm.paxchild || ""),
					departureairport: (cdpm.departureairportselected || ""),
					departuredate: ((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') || ""),
					destination: (cdpm.destination || ""),
					duration: parseInt(cdpm.duration || "0"),
					resort: (cdpm.resortsearched || cdpm.accomresort || ""),
					script : {
						status: "not fired",
						url: ""
					}
				}
		}
		catch (error)
		{
			console.log("GTM NetSociety : "+error);
		}
		finally
		{
			dl.push({"event": "netSocietyDL"});
		}
	}
		return cdl && cdl.DL_netSociety;
}(window.jQuery, window.CATTDL, window.CATTDL.CATTParams, window.dataLayer));



(function gtm_netSociety (jQ, cdl, nsdl, dl)
{
	if (jQ && cdl && nsdl && dl)
	{
		try 
		{
			var dataTracked = "destination="+(nsdl.destination || "") 
			+ ";departureairport"+(nsdl.departureairportselected || "")
			+ ";departuredate="+(nsdl.deptdate || "")
			+ ";duration="+(nsdl.duration || "")
			+ ";bookingdate="+(nsdl.bookingdate || "")
			+ ";resort="+(nsdl.resortsearched || nsdl.accomresort || "")
			+ ";children="+(nsdl.paxchild || "")
			+ ";accomcode="+(nsdl.accomcode || "")
			
			var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="NetsocietyPixel">');
            img.attr('src', '//googleads.g.doubleclick.net/pagead/viewthroughconversion/995981158/?value='+nsdl.bookingvalue+'&label=uvvJCMLp6QMQ5u712gM&guid=ON&script=0&data='+escape(dataTracked));
            img.appendTo('body');
            nsdl.script.status = 'fired';	
		}	
		catch (err)
		{
			console.log("GTM_netSociety" + err);
		}
		finally
		{
			dl.push({"event" : "netSociety"});
		}
	}
	
	return jQ && cdl && nsdl && dl;
	
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_netSociety, window.dataLayer))
