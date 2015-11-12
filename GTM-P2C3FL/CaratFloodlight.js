<script id="gtm_CaratFloodlight">
/* Homepage */
(function gtm_CaratFloodlightDL (cdl, dl, cdpm)
{
  'use strict';
	//do stuff
	if (cdl && dl && cdpm)
	{
		try
		{
			var axel = Math.random() + "";
			var a = axel * 10000000000000;
			var u3 = "";

			cdl.DL_floodlight = {
				cat : (function gtm_CaratFloodlightDLCat()
				{
					var w = window.location.href;
					var domain = "thomascook.com/travel-money";
					var pages = ["reserve-and-collect-currency", "telephone-ordering", "money-transfer", "cash-passport", "thomascookmoney.com"];

						//Thomascook.com/Travel-Money
						if (w.match(domain) && !w.match(pages[0])
						&& !w.match(pages[1]) && !w.match(pages[2]))
						{ return 60; u3 = "http://thomascook.com/travel-money"; }

						//Thomascook.com/Reserve-and-collect-currency
						if (w.match(domain) && w.match(pages[0]))
						{ return 61; u3 = "http://thomascook.com/reserve-and-collect-currency"; }

						//Thomascook.com/Telephone-ordering
						if (w.match(domain) && w.match(pages[1]))
						{ return 62; u3 = "http://thomascook.com/telephone-ordering"; }

						//Thomascook.com/Money-transfer
						if (w.match(domain) && w.match(pages[2]))
						{ return 63; u3 = "http://thomascook.com/money-transfer"; }

						//Thomascookmoney.com/cash-passport
						if (!w.match(domain) && w.match(pages[3]))
						{ return 64; u3 = "http://thomascookmoney.com/cash-passport"; }

						//Thomascookmoney.com/
						if (!w.match(domain) && !w.match(pages[3]))
						{ return 65; u3 = "http://thomascookmoney.com/"; }

						cdl.error("gtm_floodlightDLCat - couldn't get cat value : " + error); })(),
					src : "1870474;",
					type : "count205;",
					ord : "1",
					u1 		: window.location && window.location.host || window.location.hostname || 'n/a',
					u2 		: cdpm.lob || 'n/a',
					//u3 		: cdpm.touroperator || cdpm.brand || (/sprite-brand-(\w*)/i.exec($('div[class*=sprite-brand-]').attr('class') || []) || []).pop() || (/brandIcon-(\w*)/i.exec($('span[class*=brandIcon-]').attr('class') || []) || []).pop() || 'n/a',
					u4 		: cdpm.lob || 'n/a',
					u5 		: cdpm.paxtotal || '0',
					u6 		: cdpm.deptdate || 'n/a',
					u7 		: cdpm.retdate || 'n/a',
					u8 		: cdpm.duration || '0',
					u9 		: cdpm.departureairportselected || 'n/a',
					u10 	: cdpm.destinationairportselected || 'n/a',
					u11 	: cdpm.accomname || 'n/a',
					u12 	: cdpm.accomcode || 'n/a',
					u13 	: cdpm.boardbasis || 'n/a',
					u14 	: cdpm.destination || 'n/a',
					qty 	: '1',
					cost 	: cdpm.bookingvalue || '0',
					ord 	: cdpm.bookingref || '1',
					//num 	: (Math.random()*10000000000000).toString()
					num : a,
					script:
					{
						src: "",
						status: 'not fired'
					}
				}
		}
		catch (err)
		{
			cdl.error("gtm_floodlightDL" + err);
		}
		finally
		{
			dl.push({"event": "floodlightDL"});
		}

   return cdl && dl && cdpm;
   }

}(window.CATTDL, window.dataLayer, window.CATTDL.CATTParams));


(function gtm_CaratFloodlight (jQ, cdl, fldl, dl)
{
  'use strict';
	if (jQ && cdl && fldl && dl)
	{
		try
		{
			switch (fldl.cat)
			{
				case 60:
					fldl.u3 = 'http://thomascook.com/travel-money';
				break;
				case 61:
					fldl.u3 = 'http://thomascook.com/reserve-and-collect-currency';
				break;
				case 62:
					fldl.u3 = 'http://thomascook.com/telephone-ordering';
				break;
				case 63:
					fldl.u3 = 'http://thomascook.com/money-transfer';
				break;
				case 64:
					fldl.u3 = 'http://thomascookmoney.com/cash-passport';
				break;
				case 65:
					fldl.u3 = 'http://thomascookmoney.com/';
				break;
			}

			fldl.script.src = '<iframe src="//1870474.fls.doubleclick.net/activityi;src=1870474;type=count205;cat='+fldl.cat+'tra0;u3='+fldl.u3+';ord=1;num=' + fldl.num + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>' || "";

        	try
        	{
	        	$('body').append(fldl.script.src);
	        	fldl.script.status = 'fired';
	        }
	        catch (err)
	        {
	        	cdl.error ("GTM_floodlightScript" + err);
	        }
        }
		catch (error)
		{
			cdl.error("GTM_floodlight : "+error);
		}
		finally
		{
			dl.push({"event":"floodlight"});
		}

	 return jQ && cdl && fldl && dl;
	 }

}(!window.CATTDL?!1:window.CATTDL.jQ, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_floodlight, window.dataLayer));

</script>
